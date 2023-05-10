import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Autocomplete, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableAlbumsSongList from './TableAlbumsSongList';
import styles from "./AlbumsSongList.module.css"
import {UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumData, getAlbumSongData } from '../../store/album';
import FormPopup from '../../components/FormPopup/FormPopup';
import { AlbumForm } from '../../Data/Data';
import { useCallback } from 'react';
import { setTostingData } from '../../store/common';
import { failed_toast, success_toast } from '../../utils/Common';
import { useParams } from 'react-router-dom';


const getAlbumsSongListData = async(offset, filter={})=>{
    // const res = await Request("get", "/main/users-list?offset="+offset)
    // return res.data; 
}

const AlbumsSongList = () => {
  const song_list = useSelector(state => state.album.song_list);
  const [Songs, setSongs] = useState([])
  const params = useParams();
  const [offset, setOffset] = useState(0)

  const [ShowForm, setShowForm] = useState({
    status:false,
    data:{}
  });
  const [FormManage, setFormManage] = useState({
    song:null
  })
  const [Refresh, setRefresh] = useState(0)

  const dispatch = useDispatch();

  const openForm = (data = {}) => {
    setShowForm({
      status: ShowForm,
      data,
    })
  }
  const getAlbumsSongList = async () =>{
    try {
      // const res = await getAlbumsSongListData(offset);
      dispatch(getAlbumSongData(params.id))
      const res = await Request("get", "main/songs?offset=0&limit=10000");
      setSongs(res.data.data)
      // console.log();
      // setUserList(res.data)
    } catch (error) {
      
    }
  }
  const addNew = useCallback(
    async (data) => {
      try {
        
        console.log({data});
        // const formData = new FormData();
        // formData.append("name", data.name);
        // formData.append("file", data.file);
        // formData.append("type", "public");
        // console.log(formData.get("file"));
        const res = await Request("put", "/main/albums/"+params.id+"/add", {
          song_id:data.song._id
        });
        console.log({ res });
        setShowForm({ ...ShowForm, status: false })
        setRefresh(state => state + 1)
        dispatch(setTostingData({
          ...success_toast,
          message:"Song Added Successfully In Album."
        }))
      } catch (error) {
        console.log(error);
        dispatch(setTostingData({
          ...failed_toast,
          message:error.response.data.message
        }))
      }
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
  useLayoutEffect(() => {
    setFormManage({
      name:"",
      file:null
    })
    getAlbumsSongList();
  }, [Refresh])
  console.log({song_list});
  const AutoCompleteHandler = (key, value)=>{

  }
  const ExtraOption = () => {
    return (
      <div>
        <div key={"fdssadsdsadsa"} className="box" style={{ marginBottom: 16 }}>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Songs}
            // sx={{ width: 300 }}
            value={FormManage.song}
            ListboxProps={{style:{background:"red", maxHeight:90}}}
            getOptionLabel={(option) => option.title}
            onChange={(event, value) => onChangeFormData("song",value)}
            
            fullWidth
            renderInput={(params) => <TextField {...params} label="Song Select" onChange={(e)=>AutoCompleteHandler("category",e.target.value )}  />}
          />
        </div>
      </div>
    )
  }

  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
      <FormPopup show={ShowForm.status} formListData={[]}  Extra={ExtraOption} onChange={onChangeFormData} data={ShowForm.data} title={"Album"} onSave={() => addNew(FormManage)} onClose={() => setShowForm({ ...ShowForm, status: false })} />
      <div style={{ float: "right", marginBottom: 16 }}>
        <Button
          title='Add'
          color='primary'
          type='button'
          variant='contained'
          onClick={openForm}
        >Add</Button>

      </div>
      <TableAlbumsSongList dataList={song_list}  Refresh={()=> setRefresh(Refresh+1)}/>
      <div className={styles.next}>
        <div><UilAngleLeft color={"red"}  onClick={()=>setOffset(offset>0? offset-5: 0)} /></div>
        {/* <div ><UilAngleRight color={"#00b5ff"} onClick={()=> category_list.length%5===0 && setOffset(offset+5)} /></div> */}
      </div>
    </div>
  );
}

export default AlbumsSongList