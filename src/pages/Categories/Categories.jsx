import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, ButtonGroup, Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableCategories from './TableCategories';
import FormPopup from '../../components/FormPopup/FormPopup';
import {CategoriesForm} from '../../Data/Data'
import { useCallback } from 'react';
import { getCategoryData } from '../../store/category';
import { useDispatch, useSelector } from 'react-redux';
// import Request from '../../utils/Request';
import styles from "./Categories.module.css"
import {UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons';
import { success_toast } from '../../utils/Common';
import { setTostingData } from '../../store/common';



// const getCategoriesData = async(page=1, filter={})=>{
//     const res = await Request("get", "/main/Categories-list")
//     return res.data; 
// }

const Categories = () => {
  const [offset, setOffset] = useState(0)

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
  const getCategories = async () =>{
    // try {
    //   // const res = await getCategoriesData();
    //   const res = await Request("get", "/main/genres");

    //   console.log(res.data);
    //   setCategoryList(res.data.data)
    // } catch (error) {
      
    // }
    dispatch(getCategoryData({offset}))

  }

  useLayoutEffect(() => {
    
    getCategories();
  }, [Refresh, offset])

  const addNew = useCallback(
   async (data) => {
    console.log(data);
     const formData = new FormData();
     formData.append("name", data.name);
     formData.append("file", data.file);
     console.log(formData.get("file"));
      const res = await Request("post", "/main/genres/add",formData, true);
      console.log({res});
      setShowForm({...ShowForm, status:false})
      setRefresh(state=> state+1)
      dispatch(setTostingData({
        ...success_toast,
        message:"Category Added Successfully."
      }))
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
       <FormPopup show={ShowForm.status} formListData={CategoriesForm} onChange={onChangeFormData} data = {ShowForm.data} title={"Category"} onSave={()=> addNew(FormManage)} onClose={()=> setShowForm({...ShowForm, status:false})} />
        <div style={{float:"right", marginBottom:16}}>
            <Button
            title='Add'
            color='primary'
            type='button'
            variant='contained'
            onClick={openForm}
            >Add</Button>
          
        </div>
      <TableCategories dataList={category_list} onEdit={openForm} onRefresh={setRefresh} />
      <div className={styles.next}>
        <div><UilAngleLeft color={"red"}  onClick={()=>setOffset(offset>0? offset-5: 0)} /></div>
        <div ><UilAngleRight color={"#00b5ff"} onClick={()=> category_list.length%5===0 && setOffset(offset+5)} /></div>
      </div>
    </div>
  ); 
}

export default Categories