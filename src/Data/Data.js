import {
    UilChart,
    UilEstate,
    UilEnvelopeAlt,
    UilShoppingCart,
    UilUser,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilGlobe,
    UilClipboardAlt,
    UilChatBubbleUser,

} from '@iconscout/react-unicons'


export const SidebarArray = [
    {
        icon:UilEstate,
        heading:"Dashboard"
    },
    {
        icon:UilChatBubbleUser,
        heading:"Users"
    },
    {
        icon:UilShoppingCart,
        heading:"Plans"
    },
    {
        icon:UilEnvelopeAlt,
        heading:"Contact"
    },
    {
        icon:UilUser,
        heading:"Profile Setting"
    },
    {
        icon:UilGlobe,
        heading:"Global Setting"
    },
    {
        icon:UilChart,
        heading:"Analytics"
    },
]


export const CardDataArray=[
    {
        title:"New User",
        color:{
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5"
        },
        barVal: 70,
        value:"25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"New User",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title:"Revenue",
        color:{
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow:"0px 10px 20px 0px #FDC0C7"
        },
        barVal: 80,
        value:"14,270",
        png:UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]
    },
    {
        title:"Total Users",
        color:{
            background: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #F9D59B"
        },
        barVal: 60,
        value:"4,270",
        png:UilClipboardAlt,
        series:[
            {
                name:"Total Users",
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ]
    },

]


export const UpdatesData = [
    {
        img:"https://raw.githubusercontent.com/ZainRk/Dashboard-starter/master/src/imgs/img1.png",
        name:"Andrew Thomas",
        noti:"has ordered Apple smart watch 2500mh battery",
        time:"25 second ago"
    },
    {
        img:"https://raw.githubusercontent.com/ZainRk/Dashboard-starter/master/src/imgs/img1.png",
        name:"James Bond",
        noti:"has received Samsung gadget for charging battery",
        time:"30 minutes ago"
    },
    {
        img:"https://raw.githubusercontent.com/ZainRk/Dashboard-starter/master/src/imgs/img1.png",
        name:"Iron Man",
        noti:"has ordered Apple smart watch 2500mh battery",
        time:"2 hours ago"
    },
]