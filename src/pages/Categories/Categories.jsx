import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, ButtonGroup, Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableCategories from './TableCategories';
import FormPopup from '../../components/FormPopup/FormPopup';
import {CategoriesForm} from '../../Data/Data'

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
];


// const getCategoriesData = async(page=1, filter={})=>{
//     const res = await Request("get", "/main/Categories-list")
//     return res.data; 
// }

const Categories = () => {
  const [CategoryList, setCategoryList] = useState([]);
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
  const getCategories = async () =>{
    // try {
    //   const res = await getCategoriesData();
    //   // console.log();
    //   setCategoryList(res.data)
    // } catch (error) {
      
    // }
  }

  useLayoutEffect(() => {
    
    getCategories();
  }, [])
  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
       <FormPopup show={ShowForm.status} formListData={CategoriesForm} data = {ShowForm.data} title={"Category"} onClose={()=> setShowForm({...ShowForm, status:false})} />
        <div style={{float:"right", marginBottom:16}}>
            <Button
            title='Add'
            color='primary'
            type='button'
            variant='contained'
            onClick={openForm}
            >Add</Button>
          
        </div>
      <TableCategories dataList={CategoryList} onEdit={openForm}/>

    </div>
  ); 
}

export default Categories