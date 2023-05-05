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

export default function TableArtists({dataList,formListData=[]}) {
    console.log({formListData});
    return (
        <div className={styles.Table}>
            <h3 style={{marginBottom:"1rem"}}>All Artists</h3>
            <TableContainer style={{boxShadow:"0px 13px 20px 0px #80808029"}} component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            {
                                formListData.map((item, index)=>(
                                    <TableCell align="left">{item.placeholder}</TableCell>

                                ))
                            }
                            {/* <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Plan</TableCell>
                            <TableCell align="left">Action</TableCell>
                            <TableCell align="left"></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList.map((row) => (
                            <TableRow
                                key={row._id}
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
                                <TableCell align="left">{moment(row.updatedAt).format("DD/MM/YY hh:mm A")}</TableCell>
                                <TableCell align="left">
                                    <span className={styles.status} style={makeStyles(row.status)}>
                                    {row.language.join(", ")}
                                    </span>
                                </TableCell>
                                <TableCell className={styles.Details} align="left"><UilEditAlt color={"green"} />&nbsp; &nbsp;<UilTrash color={"red"} /></TableCell>
                                <TableCell className={styles.Details} align="left">details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}