import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, ButtonGroup, Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableSongs from './TableSongs';
import FormPopup from '../../components/FormPopup/FormPopup';
import {SongsForm} from '../../Data/Data'
import { useCallback } from 'react';
import { getCategoryData } from '../../store/category';
import { useDispatch, useSelector } from 'react-redux';
// import Request from '../../utils/Request';
const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 11, col1: 'Hello', col2: 'World' },
  { id: 12, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 13, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'id', headerName: 'Category ID',  },
  { field: 'name', headerName: 'Name',  },
  { field: 'active', headerName: 'Active', },
  { field: 'file', headerName: 'Active', },
];


// const getCategoriesData = async(page=1, filter={})=>{
//     const res = await Request("get", "/main/Categories-list")
//     return res.data; 
// }

const Songs = () => {
  const [ShowForm, setShowForm] = useState({
    status:false,
    data:{}
  });
  const [FormManage, setFormManage] = useState({
    name:"",
    file:null
  })
  const [Refresh, setRefresh] = useState(0)

  const openForm = (data={})=>{
    setShowForm({
      status:ShowForm,
      data,
    })
  }
  const category_list = useSelector(state => state.category.category_list)
  const dispatch = useDispatch()
  const getSongs = async () =>{
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
  }, [Refresh])

  const addNew = useCallback(
   async (data) => {
    console.log(data);
     const formData = new FormData();
     formData.append("name", "testing");
     formData.append("file", data.file);
     console.log(formData.get("file"));
      const res = await Request("post", "/main/genres/add",formData, true);
      console.log({res});
      setShowForm({...ShowForm, status:false})
      setRefresh(state=> state+1)
    },
    [],
  );
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
  

  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
       <FormPopup show={ShowForm.status} formListData={SongsForm} onChange={onChangeFormData} data = {ShowForm.data} title={"Category"} onSave={()=> addNew(FormManage)} onClose={()=> setShowForm({...ShowForm, status:false})} />
        <div style={{float:"right", marginBottom:16}}>
            <Button
            title='Add'
            color='primary'
            type='button'
            variant='contained'
            onClick={openForm}
            >Add</Button>
          
        </div>
      <TableSongs dataList={category_list} onEdit={openForm} onRefresh={setRefresh} />

    </div>
  ); 
}

export default Songs