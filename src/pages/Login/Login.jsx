import { Box, Container, InputAdornment, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { LoadingButton } from '@mui/lab';
import { Request } from '../../utils/Request';
const LoginFormList = [
    {
        placeholder:"Email",
        Icon: EmailIcon,
        type:"text",
        name:"email"

    },
    {
        placeholder:"Password",
        Icon: KeyIcon,
        type:"password",
        name:"password"

    }
]

const LoginAdmin = async(email, password)=>{
    const res = await Request("post", "/login",{
        email,
        password
    });
    console.log(res.data);
    return res.data.data.token
}

const Login = (props) => {
    const [LoginForm, setLoginForm] = useState({
        email:"",
        password:""
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
                            onChange={e=> {
                                LoginForm[Item.name] = e.target.value;
                                setLoginForm({
                                    ...LoginForm
                                })
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
                        onClick={async()=>{
                           const token = await LoginAdmin(LoginForm.email, LoginForm.password);
                           localStorage.setItem("@token", token)
                           props.setToken(token)
                        }}
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