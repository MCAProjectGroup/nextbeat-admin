import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import Logo from "../../images/logo.png"
import {motion} from "framer-motion"
import { UilSignOutAlt,UilBars } from '@iconscout/react-unicons'
import { SidebarArray } from '../../Data/Data'
import { useNavigate } from 'react-router-dom'



const Sidebar = () => {
    const [ActiveMenu, setActiveMenu] = useState(0)
    const [expended, setExpended] = useState(true)
    // const navigation = useN
    const navigate = useNavigate()
    const sideBarVariants = {
        true:{
            lef:"0"
        },
        false:{
            left:"-60%"
        }
    }
    useEffect(() => {
    //   console.log(window.location.pathname);
    //   let path = window.location.pathname.split("/")
       SidebarArray.map((item, index)=>{
        // path:window.location.pathname
        if(item.path === window.location.pathname){
            console.log(item);
            setActiveMenu(index)
        }
    })
      return () => {
      }
    }, [window.location.pathname])
    
    return (
        <>
            
            <div className="bars" onClick={()=>{
                setExpended(!expended)
            }}  style={expended?{left:"50%"}:{left:'5%'}}>
                <UilBars />
                
            </div>
            <motion.div 
            className='Sidebar'
            variants={sideBarVariants}
            animate={window.innerWidth<=768?`${expended}`:""}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span>
                        Sh<span>o</span>ps
                    </span>
                </div>

                {/* menu */}
                <div className="menu">
                    {SidebarArray.map((item, index) => (
                        <div onClick={()=>(setActiveMenu(index), navigate(item.path)) } className={ActiveMenu===index?"menuItem active":"menuItem"} key={index + item.heading}>
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    ))}
                    
                    <div className="menuItem" style={{marginTop:"2rem"}}>
                        <UilSignOutAlt />
                        <span>{"Log Out"}</span>

                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar