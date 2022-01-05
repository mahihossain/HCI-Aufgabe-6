export default function MobileLayout (props) {

    return(
        <div
        style={{
            position: 'relative',
            margin: 'auto',
            maxWidth: 400,
            height: '100%',
            backgroundColor:'#fff'
        }}
        >
            {props.children}
        </div>
    )


}