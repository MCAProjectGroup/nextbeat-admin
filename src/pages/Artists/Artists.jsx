import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableArtists from './TableArtists';
import FormPopup from '../../components/FormPopup/FormPopup';
import { ArtistForm } from '../../Data/Data';

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


const getArtistsData = async(page=1, filter={})=>{
    const res = await Request("get", "/main/Artists-list")
    return res.data; 
}

const Artists = () => {
  const [ArtistList, setArtistList] = useState([]);
  const [ShowForm, setShowForm] = useState({
    status:false,
    data:{}
  })

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
  useLayoutEffect(() => {
    
    // getArtists();
  }, [])
  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
       <FormPopup show={ShowForm.status} formListData={ArtistForm} data = {ShowForm.data} title={"Category"} onClose={()=> setShowForm({...ShowForm, status:false})} />
        <div style={{float:"right", marginBottom:16}}>
            <Button
            title='Add'
            color='primary'
            type='button'
            variant='contained'
            onClick={openForm}
            >Add</Button>
          
        </div>
      <TableArtists dataList={ArtistList} onEdit={openForm} formListData={ArtistForm}/>

    </div>
  );
}

export default Artists