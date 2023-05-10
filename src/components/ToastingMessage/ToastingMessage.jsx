import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeTostingData } from '../../store/common';
import { useEffect } from 'react';

function ToastingMessage(props) {
    // const [open, setOpen] = React.useState(false);
    const {toast_message, toast_type, toast_open} = useSelector(state=> state.common)
    const dispatch = useDispatch();
    // const handleClick = () => {
    // //   setOpen(true);
    // dispatch(closeTostingData());
    // };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
    //   setOpen(false);
    dispatch(closeTostingData());

    };

    useEffect(() => {
      
        let t = setTimeout(() => {
            dispatch(closeTostingData());
            
        }, 10000);
        return ()=> clearTimeout(t)
    }, [toast_open])
    
  
  return (
    <Snackbar open={toast_open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} color={toast_type} variant='filled' severity={toast_type} translate="yes" sx={{ width: '100%', }}>
            {toast_message}!
        </Alert>
    </Snackbar>
  )
}

export default ToastingMessage