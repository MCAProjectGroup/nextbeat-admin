import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Request } from '../../utils/Request';
import { useLayoutEffect } from 'react';
import TableUsers from './TableUsers';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 11, col1: 'Hello', col2: 'World' },
  { id: 12, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 13, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'id', headerName: 'User ID',  },
  { field: 'name', headerName: 'Name',  },
  { field: 'email', headerName: 'Email', },
];


const getUsersData = async(page=1, filter={})=>{
    const res = await Request("get", "/main/users-list")
    return res.data; 
}

const Users = () => {
  const [UserList, setUserList] = useState([]);
  const getUsers = async () =>{
    try {
      const res = await getUsersData();
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

    </div>
  );
}

export default Users