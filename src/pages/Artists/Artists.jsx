import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableArtists from './TableArtists';
import FormPopup from '../../components/FormPopup/FormPopup';
import { ArtistForm } from '../../Data/Data';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistData } from '../../store/artist';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 11, col1: 'Hello', col2: 'World' },
  { id: 12, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 13, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'id', headerName: 'Artist ID',  },
  { field: 'name', headerName: 'Name',  },
  { field: 'email', headerName: 'Email', },
];


// const getArtistsData = async(page=1, filter={})=>{
//     const res = await Request("get", "/main/Artists-list")
//     return res.data; 
// }

const Artists = () => {
  const [ArtistList, setArtistList] = useState([]);
  const [ShowForm, setShowForm] = useState({
    status:false,
    data:{}
  })
  const [Refresh, setRefresh] = useState(0);
  const [FormManage, setFormManage] = useState({
    name:"",
    file:null,
    gender:"Male",
    language:"Hindi"
  });
  const artist_list = useSelector(state=> state.artist.artist_list)
  const dispatch = useDispatch();
  const getArtist= async () =>{
    // try {
    //   // const res = await getCategoriesData();
    //   const res = await Request("get", "main/artists");

    //   console.log(res.data);
    //   setArtistList(res.data.data)
    // } catch (error) {
      
    // }
    
    dispatch(getArtistData())
  }
  // console.log({FormManage});

  const addNew = useCallback(
    async (data) => {
     console.log(data);
      const formData = new FormData();
      formData.append("gender",data.gender);
      formData.append("language", [data.language]);
      formData.append("name", data.name);
      formData.append("file", data.file);
      console.log(formData.get("file"));
       const res = await Request("post", "/main/artists/add",formData, true);
       console.log({res});
       setShowForm({...ShowForm, status:false})
       setRefresh(state=> state+1)
     },
     [],
   );
  const openForm = (data={})=>{
    setShowForm({
      status:ShowForm,
      data,
    })
  }
  // const getArtists = async () =>{
  //   try {
  //     const res = await getArtistsData();
  //     // console.log();
  //     setArtistList(res.data)
  //   } catch (error) {
      
  //   }
  // }
  // Artist
  const onChangeFormData = useCallback(
    async (key,data) => {
      //  const res = await Request("post", "/main/genres/add",data);
      //  console.log(res.data);
      setFormManage({
      ...FormManage,
        [key]:data
      });
     },
     [FormManage],
   )
  
  useLayoutEffect(() => {
    
    getArtist();
  }, [Refresh])
  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
       <FormPopup show={ShowForm.status} formListData={ArtistForm} onChange={onChangeFormData} data = {ShowForm.data} title={"Artist"} onSave={()=> addNew(FormManage)} onClose={()=> setShowForm({...ShowForm, status:false})} />
        <div style={{float:"right", marginBottom:16}}>
            <Button
            title='Add'
            color='primary'
            type='button'
            variant='contained'
            onClick={openForm}
            >Add</Button>
          
        </div>
      <TableArtists dataList={artist_list} onEdit={openForm} formListData={ArtistForm} Refresh={()=>setRefresh(Refresh+1)}/>

    </div>
  );
}

export default Artists