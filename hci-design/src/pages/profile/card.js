import Box from "@mui/material/Box";
import './profile.css'
import Container from "@mui/material/Container";

export default function ProfileCard({
    icon,
    text
                                    }) {
    return(
        <div
        className={'profile-card'}
        >
            {icon}
            <br/>
            <div className={'bio-title'}>
                {text}
            </div>
        </div>
    )
}