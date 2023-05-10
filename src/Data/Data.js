import {
    UilChart,
    UilEstate,
    UilUserSquare,
    UilShoppingCart,
    UilMusic,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilGlobe,
    UilClipboardAlt,
    UilChatBubbleUser,
    UilObjectGroup

} from '@iconscout/react-unicons'


export const SidebarArray = [
    {
        icon:UilEstate,
        heading:"Dashboard",
        path:"/admin"
    },
    {
        icon:UilChatBubbleUser,
        heading:"Users",
        path:"/admin/users"

    },
    {
        icon:UilShoppingCart,
        heading:"Categories",
        path:"/admin/categories"

    },
    {
        icon:UilUserSquare,
        heading:"Artists",
        path:"/admin/artists"
        
    },
    {
        icon:UilUserSquare,
        heading:"Artists",
        path:"/admin/artists"
        
    },
    {
        icon:UilObjectGroup,
        heading:"Albums",
        path:"/admin/albums"
        
    },
    {
        icon:UilMusic,
        heading:"Songs",
        path:"/admin/songs"

    },
    {
        icon:UilGlobe,
        heading:"Global Setting",
        path:"/admin/setting/global"


    },
    {
        icon:UilChart,
        heading:"Analytics",
        path:"/setting/analytics"

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

export const CategoriesForm = [
    {
        name:"Name",
        fieldName:"name",
        placeholder:"Name",
        type:"text"
    },
    {
        name:"Image",
        fieldName:"file",
        placeholder:"Category Banner",
        type:"file"
    },

]
export const SongsForm = [
    
    {
        name:"title",
        fieldName:"title",
        placeholder:"Title",
        type:"text"
    },
    {
        name:"description",
        fieldName:"description",
        placeholder:"Description",
        type:"text",
        multiline:true,
    },
    {
        name:"duration",
        fieldName:"duration",
        placeholder:"duration in seconds",
        type:"text",
        // multiline:true,
    },
    {
        name:"language",
        fieldName:"language",
        placeholder:"Language",
        type:"text"
    },
    {
        name:"short_description",
        fieldName:"short_description",
        placeholder:"Short Description",
        type:"text"
    },
    {
        name:"keywords",
        fieldName:"keywords",
        placeholder:"Keywords",
        type:"text"
    },
    {
        name:"imagefile",
        fieldName:"imagefile",
        placeholder:"Song Banner",
        type:"file"
    },
    {
        name:"audiofile",
        fieldName:"audiofile",
        placeholder:"Song File",
        type:"file"
    },


// data.append('album', '');
// data.append('artist', '643bea544db68a15556b5de8');
// data.append('genre', '643be6be9c9f096b664d5b05');
// data.append('language', 'Hindi');


]

export const ArtistForm = [
    
    {
        name:"name",
        fieldName:"name",
        placeholder:"Name",
        type:"text"
    },
    {
        name:"Image",
        fieldName:"file",
        placeholder:"Artist Banner",
        type:"file"
    },
    {
        name:"gender",
        fieldName:"gender",
        placeholder:"Gender",
        type:"text"
    },
    {
        name:"language",
        fieldName:"language",
        placeholder:"Language",
        type:"text"
    }
]

export const AlbumForm = [
    {
        name:"name",
        fieldName:"name",
        placeholder:"Name",
        type:"text"
    },
    {
        name:"Image",
        fieldName:"file",
        placeholder:"Artist Banner",
        type:"file"
    },
    
]