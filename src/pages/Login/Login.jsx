import { Box, Container, InputAdornment, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { LoadingButton } from '@mui/lab';
const LoginFormList = [
    {
        placeholder:"Email",
        Icon: EmailIcon,
        type:"text"

    },
    {
        placeholder:"Password",
        Icon: KeyIcon,
        type:"password"
    }
]

const Login = () => {
    const [LoginForm, setLoginForm] = useState({
        email:"",
        pass:""
    });
    
    // return (
    //     <div>
    //         fdsdasd
    //     </div>
    // )
    return (

        <Container sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Paper sx={{
                background: "rgba(0,0,0, 0.1)",
                padding:"5rem"
                // background: "linear-gradient(255, 2552)"
            }}>
                <Box>
                    <h2 style={{textAlign:"center", color:"#bd3fb6"}}>Musify</h2>
                </Box>
            <Box sx={{
                width: "90%",
                maxWidth: 500
            }}>
                {
                   LoginFormList.map((Item, index)=>(
                        <TextField InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Item.Icon />
                                </InputAdornment>
                                ),
                            }}   
                            type={Item.type}
                            fullWidth
                            sx={{
                                margin:"1rem"
                            }}
                            id="outlined-basic" 
                            label={Item.placeholder} variant="outlined" />
                    ))
                }

                <Box sx={{
                    width:"100%",
                    margin:"1rem"
                }}>
                    <LoadingButton
                        fullWidth
                        
                        size="large"
                        color="secondary"
                        // onClick={handleClick}
                        loading={false}
                        loadingPosition="start"
                        // startIcon={<SaveIcon />}
                        variant="contained"
                        >
                        Login
                    </LoadingButton>
                </Box>
                
                    
            </Box> 
                    </Paper>
        </Container>
    )
}

export default Login