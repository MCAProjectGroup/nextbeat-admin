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
                        <div key={index + "adsdsadsa"} className="box" style={{ marginBottom: 16 }}>

                            <TextField label={item.type !== "file" && item.placeholder || ""}
                                fullWidth
                                multiline={item.multiline || false}
                                onChange={e => props.onChange(item.fieldName, item.type === "file" ? e.target.files[0] : e.target.value)}
                                type={item.type}
                                variant="outlined" />

                        </div>
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

// const styles = StyleSheet.create({})