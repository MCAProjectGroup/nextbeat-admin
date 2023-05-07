import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./Table.module.css"
import moment from 'moment/moment';
import {UilEditAlt, UilTrash} from '@iconscout/react-unicons';
import { green } from '@mui/material/colors';
import { Request } from '../../utils/Request';
import axios from 'axios';
function createData(name, trackingID, date, status) {
    return {name, trackingID, date, status };
}

const makeStyles = (status)=>{
    let response;
    switch (status) {
        case "Approved":
            response = {
                background:"rgb(145 254 159 / 47%)",
                color:"green"
            }
            break;
        case "Pending":
            response = {
                background:"#ffadad8f",
                color:"red"
            }
            break;

    
        default:
            response = {
                background:"#59bfff",
                color:"white"
            }
            break;
    }
    return response
}



export default function TableCategories({dataList,onRefresh}) {
    const deleteCategory = async(category_id,callBack) => {
        console.log(category_id)
        // axios request to delete
        let text;
        if (window.confirm("Are you sure you want to delete") === true) {
            text = "You pressed OK!";
           
            const res = await Request("delete", "/main/genres/"+category_id);
            console.log(res.data);
            
            console.log(res);
            callBack()
          } else {
            text = "You canceled!";
          }
        // let confirmed =  confirmat(`Are you sure you want to delete`);
        console.log(text)
        
    }
    return (
        <div className={styles.Table}>
            <h3 style={{marginBottom:"1rem"}}>All Users</h3>
            <TableContainer style={{boxShadow:"0px 13px 20px 0px #80808029", overflow:"scroll", height:600}} component={Paper} >
                <Table sx={{ minWidth: 650,  }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            {/* <TableCell align="left">Active</TableCell> */}
                            <TableCell align="left" width={100}>Live</TableCell>
                            <TableCell align="left" width={100}>temp path</TableCell>
                            <TableCell align="left">Uploaded</TableCell>
                            <TableCell align="left">Action</TableCell>
                            <TableCell align="left">Last Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row"  >
                                    {/* {row.live_image} */}
                                    <img src={row.live_image} width={50} height={50} />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.local_image}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.isUploaded.toString()}
                                    
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <UilTrash color="#ff4d4d" onClick={()=>deleteCategory(row._id,onRefresh)}  />
                                    
                                </TableCell>
                                <TableCell align="left">{moment(row.updatedAt).format("DD/MM/YY hh:mm A")}</TableCell>
                                {/* <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">
                                    <span className={styles.status} style={makeStyles(row.status)}>
                                    {row.plan}
                                    </span>
                                </TableCell>
                                <TableCell className={styles.Details} align="left"><UilEditAlt color={"green"} />&nbsp; &nbsp;<UilTrash color={"red"} /></TableCell>
                                <TableCell className={styles.Details} align="left">details</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
