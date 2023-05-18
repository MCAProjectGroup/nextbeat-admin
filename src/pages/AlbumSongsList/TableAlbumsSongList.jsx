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
import { success_toast } from '../../utils/Common';
import { setTostingData } from '../../store/common';
import { useDispatch } from 'react-redux';
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

export default function TableAlbumsSongList({dataList={}, Refresh=()=>{}}) {
    // console.log({dataList})
    const dispatch = useDispatch()
    const deleteCategory = async(song_id) => {
        console.log(song_id)
        // axios request to delete
        let text;
        if (window.confirm("Are you sure you want to delete") === true) {
            text = "You pressed OK!";
        //    console.log({song_id});
            const res = await Request("delete", "/main/albums/"+dataList._id+"/"+song_id);
            console.log(res.data);
            
            console.log(res);
            dispatch(setTostingData({
                ...success_toast,
                message:"Song Removed from Album Successfully."
              }))
            Refresh()
          } else {
            text = "You canceled!";
          }
        // let confirmed =  confirmat(`Are you sure you want to delete`);
        console.log(text)
        
    }
    if(!dataList?.songs_details ){
        return null;
    }
    return (
        <div className={styles.Table}>
            <h3 style={{marginBottom:"1rem"}}>All AlbumsSongList</h3>

            <TableContainer style={{boxShadow:"0px 13px 20px 0px #80808029"}} component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Songs</TableCell>
                            {/* <TableCell align="left">Plan</TableCell> */}
                            {/* <TableCell align="left">Action</TableCell> */}
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList.songs_details.map((row, index) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {dataList.songs[index]}
                                </TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell component="th" scope="row"  >
                                    {/* {row.live_image} */}
                                    <img src={row.live_image} width={50} height={50} />
                                </TableCell>
                                {/* <TableCell align="left">{row.songs.length}</TableCell> */}
                                {/* <TableCell align="left">
                                    <span className={styles.status} style={makeStyles(row.status)}>
                                    {row.plan}
                                    </span>
                                </TableCell> */}
                                <TableCell className={styles.Details} align="left"><UilTrash color={"red"} onClick={()=>{deleteCategory(dataList.songs[index])}} /></TableCell>
                                {/* <TableCell className={styles.Details} align="left">Add Song</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
