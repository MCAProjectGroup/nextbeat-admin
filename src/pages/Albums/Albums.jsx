import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableAlbums from './TableAlbums';
import styles from "./Albums.module.css"
import {UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumData } from '../../store/album';
import FormPopup from '../../components/FormPopup/FormPopup';
import { AlbumForm } from '../../Data/Data';
import { useCallback } from 'react';
import { setTostingData } from '../../store/common';
import { failed_toast, success_toast } from '../../utils/Common';


const getAlbumsData = async(offset, filter={})=>{
    // const res = await Request("get", "/main/users-list?offset="+offset)
    // return res.data; 
}

const Albums = () => {
  const album_list = useSelector(state => state.album.album_list);
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

  const dispatch = useDispatch();

  const openForm = (data = {}) => {
    setShowForm({
      status: ShowForm,
      data,
    })
  }
  const getAlbums = async () =>{
    try {
      // const res = await getAlbumsData(offset);
      dispatch(getAlbumData())
      // console.log();
      // setUserList(res.data)
    } catch (error) {
      
    }
  }
  const addNew = useCallback(
    async (data) => {
      try {
        
        console.log({data});
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("file", data.file);
        formData.append("type", "public");
        console.log(formData.get("file"));
        const res = await Request("post", "/main/albums/add", formData, true);
        console.log({ res });
        setShowForm({ ...ShowForm, status: false })
        setRefresh(state => state + 1)
        dispatch(setTostingData({
          ...success_toast,
          message:"Album Successfully Added."
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
    getAlbums();
  }, [Refresh])
  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
      <FormPopup show={ShowForm.status} formListData={AlbumForm} onChange={onChangeFormData} data={ShowForm.data} title={"Album"} onSave={() => addNew(FormManage)} onClose={() => setShowForm({ ...ShowForm, status: false })} />
      <div style={{ float: "right", marginBottom: 16 }}>
        <Button
          title='Add'
          color='primary'
          type='button'
          variant='contained'
          onClick={openForm}
        >Add</Button>

      </div>
      <TableAlbums dataList={album_list} />
      <div className={styles.next}>
        <div><UilAngleLeft color={"red"}  onClick={()=>setOffset(offset>0? offset-5: 0)} /></div>
        {/* <div ><UilAngleRight color={"#00b5ff"} onClick={()=> category_list.length%5===0 && setOffset(offset+5)} /></div> */}
      </div>
    </div>
  );
}

export default Albums