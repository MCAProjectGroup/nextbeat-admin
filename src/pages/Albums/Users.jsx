import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableUsers from './TableUsers';
import styles from "./Users.module.css"
import {UilAngleRight, UilAngleLeft } from '@iconscout/react-unicons';


const getUsersData = async(offset, filter={})=>{
    const res = await Request("get", "/main/users-list?offset="+offset)
    return res.data; 
}

const Users = () => {
  const [UserList, setUserList] = useState([]);
  const [offset, setOffset] = useState(0)

  const getUsers = async () =>{
    try {
      const res = await getUsersData(offset);
      // console.log();
      setUserList(res.data)
    } catch (error) {
      
    }
  }

  useLayoutEffect(() => {
    
    getUsers();
  }, [])
  return (
    <div style={{  width: '100%', height:"100%" , padding:"4rem"}}>
        
      <TableUsers dataList={UserList} />
      <div className={styles.next}>
        <div><UilAngleLeft color={"red"}  onClick={()=>setOffset(offset>0? offset-5: 0)} /></div>
        <div ><UilAngleRight color={"#00b5ff"} onClick={()=> category_list.length%5===0 && setOffset(offset+5)} /></div>
      </div>
    </div>
  );
}

export default Users