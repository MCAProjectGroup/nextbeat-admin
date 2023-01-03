import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 11, col1: 'Hello', col2: 'World' },
  { id: 12, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 13, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'id', headerName: 'Column 2', width: 150 },
];

export default function Users() {
  return (
    <div style={{  width: '100%', height:"100%" }}>
        
      <DataGrid rows={rows} style={{height:"100%"}} columns={columns} components={{ Toolbar: GridToolbar }}  autoHeight  onPageChange={(a,b)=>console.log(a,b)} paginationMode="server" pagination loading={false}  />
    </div>
  );
}
