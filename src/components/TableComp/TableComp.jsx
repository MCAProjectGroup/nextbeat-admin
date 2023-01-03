import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TableComp.css"
function createData(name, trackingID, date, status) {
    return {name, trackingID, date, status };
}

const rows = [
    createData("Laanta Chiken Fri", 18908424, "2 March 2022", "Approved"),
    createData("Big Baza Bang", 18908424, "2 March 2022", "Pending"),
    createData("Mouth Freasher", 18908424, "2 March 2022", "Approved"),
    createData("Cupcake", 18908441, "2 March 2022", "Delivered"),
];

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

export default function TableComp() {
    return (
        <div className="Table">
            <h3 style={{marginBottom:"1.5rem"}}>Recent Users</h3>
            <TableContainer style={{boxShadow:"0px 13px 20px 0px #80808029"}} component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Plan</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingID}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyles(row.status)}>
                                    {row.status}
                                    </span>
                                </TableCell>
                                <TableCell className='Details' align="left">details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
