import * as React from 'react';
// import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Autocomplete, Button,  TextField } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableSongs from './TableSongs';
import FormPopup from '../../components/FormPopup/FormPopup';
import { SongsForm } from '../../Data/Data'
import { useCallback } from 'react';
import { getCategoryData } from '../../store/category';
import { useDispatch, useSelector } from 'react-redux';
import { getSongData } from '../../store/song';
import { getArtistData } from '../../store/artist';
// import Request from '../../utils/Request';
import styles from "./Songs.module.css"
import {UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons';


// const getCategoriesData = async(page=1, filter={})=>{
//     const res = await Request("get", "/main/Categories-list")
//     return res.data; 
// }

const Songs = () => {
  const [ShowForm, setShowForm] = useState({
    status: false,
    data: {}
  });
  const [offset, setOffset] = useState(0)

  const [FormManage, setFormManage] = useState({
   
  })
  const [Refresh, setRefresh] = useState(0)

  const openForm = (data = {}) => {
    setShowForm({
      status: ShowForm,
      data,
    })
  }
  const category_list = useSelector(state => state.category.category_list)
  const artist_list = useSelector(state => state.artist.artist_list)
  const song_list = useSelector(state => state.song.song_list)
  const dispatch = useDispatch()
  const getSongs = async () => {
    dispatch(getCategoryData())
    dispatch(getArtistData())
    dispatch(getSongData({offset}))
    // try {
    //   // const res = await getSongsData();
    //   const res = await Request("get", "/main/genres");

    //   console.log(res.data);
    //   setCategoryList(res.data.data)
    // } catch (error) {

    // }
    // dispatch(getCategoryData())

  }


  useLayoutEffect(() => {
    getSongs();
  }, [Refresh, offset])

  const addNew = useCallback(
    async (data) => {
      console.log({data});
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("language", data.language);
      formData.append("short_description", data.short_description);
      formData.append("duration", data.duration);
      // formData.append("keywords", data.keywords);
      formData.append("imagefile", data.imagefile);
      formData.append("audiofile", data.audiofile);

      // data.artist.split(",").map((artist) =>{
      //   if(artist._id)
        formData.append("artist[]", data.artist._id);
      // })
      // data.genre.split(",").map((genre) =>{
        // if(genre._id)
        formData.append("genre[]", data.genre._id);
      // })
      data.keywords.split(",").map((keyword="") =>{
        if(keyword.trim() !== "")
        formData.append("keywords[]", keyword)
      });
      console.log({formData:"adsasd"});
      const res = await Request("post", "/main/songs/add", formData, true);
      console.log({ res });
      setShowForm({ ...ShowForm, status: false })
      setRefresh(state => state + 1)
    },
    [],
  );
  const onChangeFormData = useCallback(
    async (key, data) => {
      //  const res = await Request("post", "/main/genres/add",data);
      //  console.log(res.data);
      setFormManage({
        ...FormManage,
        [key]: data
      });
    },
    [FormManage],
  )

  const AutoCompleteHandler = (key, value)=>{

  }

  const ExtraOption = () => {
    return (
      <div>
        <div key={"fdssadsdsadsa"} className="box" style={{ marginBottom: 16 }}>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={artist_list}
            // sx={{ width: 300 }}
            value={FormManage.artist}

            getOptionLabel={(option) => option.name}
            onChange={(event, value) => onChangeFormData("artist",value)}
            
            fullWidth
            renderInput={(params) => <TextField {...params} label="Artist" onChange={(e)=>AutoCompleteHandler("category",e.target.value )}  />}
          />
        </div>
        <div key={"fdssadsdsdasdasadsa"} className="box" style={{ marginBottom: 16 }}>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={category_list}
            // sx={{ width: 300 }}
            fullWidth
            value={FormManage.genre}
            onChange={(event, value) => onChangeFormData("genre",value)}
            // onSelect={(e) => {console.log("onSelect",e)}}
            // renderOption={(props, option) => {
            //   return (
            //       <li {...props} >
            //         {option.name}
            //       </li>
            //      )
            //    }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Category"  onChange={(e)=>AutoCompleteHandler("category",e.target.value )}    />}
          />
        </div>
      </div>
    )
  }



  return (
    <div style={{ width: '100%', height: "100%", padding: "4rem" }}>
      <FormPopup Extra={ExtraOption} show={ShowForm.status} formListData={SongsForm} onChange={onChangeFormData} data={ShowForm.data} title={"Category"} onSave={() => addNew(FormManage)} onClose={() => setShowForm({ ...ShowForm, status: false })} />
      <div style={{ float: "right", marginBottom: 16 }}>
        <Button
          title='Add'
          color='primary'
          type='button'
          variant='contained'
          onClick={openForm}
        >Add</Button>

      </div>
      <TableSongs dataList={song_list} onEdit={openForm} onRefresh={setRefresh} />
      <div className={styles.next}>
        <div><UilAngleLeft color={"red"}  onClick={()=>setOffset(offset>0? offset-5: 0)} /></div>
        <div ><UilAngleRight color={"#00b5ff"} onClick={()=> song_list.length%5===0 && setOffset(offset+5)} /></div>
      </div>
    </div>
  );
}

export default Songs