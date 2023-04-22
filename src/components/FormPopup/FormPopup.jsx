// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // overflow:"scroll",
    overflowY: "scroll", 
    height:800,
    padding: 4,
};
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]
const FormPopup = (props) => {
    return (
        <Modal
            open={props.show}
            onClose={() => console.log("handleClose")}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <div className="box" style={{ marginBottom: 16 }}>
                    <Typography sx={{textAlign:"center"}} component={"h2"} variant={"h3"}>
                        {props.title}
                    </Typography>

                </div>
                {/* <div className="box" style={{ marginBottom: 16 }}>
                    <TextField id="filled-basic" label="Filled"
                        fullWidth
                        variant="outlined" />

                </div> */}
                {
                    props.formListData.map((item, index)=>(
                        <div key={index+"adsdsadsa"} className="box" style={{ marginBottom: 16 }}>
                        <TextField label={item.type!=="file"&&item.placeholder || ""}
                            fullWidth
                            onChange={e => props.onChange(item.fieldName,item.type==="file"?e.target.files[0]: e.target.value)}
                             type={item.type}
                            variant="outlined" />
    
                    </div>
                    ))
                }
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    // sx={{ width: 300 }}
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
                {/* <div className="box" style={{ marginBottom: 16 }}>
                    <TextField id="filled-basic" label="Filled"
                        fullWidth
                        variant="outlined" />

                </div>
                <div className="box" style={{ marginBottom: 16 }}>
                    <TextField id="filled-basic" label="Filled"
                        fullWidth
                        variant="outlined" />

                </div> */}
                <div className="box" style={{ marginBottom: 16, float:"right", display:"flex" }}>
                    <Button onClick={()=> props.onClose && props.onClose()} variant='contained' color='error' style={{marginRight:16}}>Cancel</Button>
                    <Button onClick={()=> props.onSave && props.onSave()} variant='contained'>Save</Button>

                </div>
                
            </Box>
        </Modal>
    )
}

export default FormPopup

// const styles = StyleSheet.create({})