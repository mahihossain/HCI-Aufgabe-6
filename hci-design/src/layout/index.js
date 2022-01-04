export default function MobileLayout (props) {

    return(
        <div
        style={{
            position: 'relative',
            margin: 'auto',
            maxWidth: 415,
            height: '100%',
            backgroundColor:'#fff'
        }}
        >
            {props.children}
        </div>
    )


}