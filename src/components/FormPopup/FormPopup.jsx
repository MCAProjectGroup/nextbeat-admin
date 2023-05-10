// import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
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
    maxHeight: 800,
    padding: 4,
};

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
                    <Typography sx={{ textAlign: "center" }} component={"h2"} variant={"h3"}>
                        {props.title}
                    </Typography>

                </div>
                {/* <div className="box" style={{ marginBottom: 16 }}>
                    <TextField id="filled-basic" label="Filled"
                        fullWidth
                        variant="outlined" />

                </div> */}
                {
                    props.formListData.map((item, index) => (
                        <CInput {...props} item={item} index={index} key={index+"adsdasd"} />
                       
                    ))
                }

                {
                    props.Extra && <props.Extra />
                }

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
                <div className="box" style={{ marginBottom: 16, float: "right", display: "flex" }}>
                    <Button onClick={() => props.onClose && props.onClose()} variant='contained' color='error' style={{ marginRight: 16 }}>Cancel</Button>
                    <Button onClick={() => props.onSave && props.onSave()} variant='contained'>Save</Button>

                </div>

            </Box>
        </Modal>
    )
}

export default FormPopup

const CInput = (props)=>{
    const {item, index} = props;
    const [ImageFile, setImageFile] = useState(null)
    console.log(ImageFile)
    return (
        <div key={index + "adsdsadsa"} className="box" style={{ marginBottom: 16 }}>

        {
            item.type === "file" && (
                <label htmlFor="upload-photo">
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        
                        type="file"
                        onChange={(e)=> {
                            props.onChange(item.fieldName, e.target.files[0]);
                            setImageFile(e.target.files[0])
                        }}
                    />

                    <Button color="secondary" variant="contained" component="span">
                        {ImageFile?ImageFile.name :"Upload " +item.placeholder}
                    </Button>
                </label>
            )
        }

        {item.type !== "file" && (
            <TextField label={item.type !== "file" && item.placeholder || ""}
                fullWidth
                multiline={item.multiline || false}
                onChange={e => props.onChange(item.fieldName, item.type === "file" ? e.target.files[0] : e.target.value)}
                type={item.type}
                variant="outlined" />
            )
        }


    </div>
    )
}

// const styles = StyleSheet.create({})