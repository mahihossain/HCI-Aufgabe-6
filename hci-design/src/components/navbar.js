import {Link, useLocation} from "react-router-dom";

const navbarItems = [{
    name: 'home',
    path: '/home',
    icon: ''
},
    {
        name: 'groups',
        path: '/groups',
        icon: ''
    },
    {
        name: 'events',
        path: '/events',
        icon: ''
    },
    {
        name: 'chat',
        path: '/chat',
        icon: ''
    },
    {
        name: 'profile',
        path: '/profile',
        icon: ''
    },
]

export default function BottomNavbar(props) {

    const location = useLocation()

    return(
        <div
        style={{
            height:60,
            width: '100%',
            // backgroundColor: '#eee',
            bottom: 0,
            position:'absolute'
        }}
        >
            <div style={{display:'flex',height:'100%', justifyContent:'space-around',alignItems:'center'}}>
            {
                navbarItems.map((item)=>{
                    return(
                        <Link to={item.path}
                        style={{
                            color: location.pathname === item.path && 'red'
                        }}
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )

}
