import react from 'react'

export default function Alert(props){
    return(
        <div className="alert" style = {{
            'backgroundColor': props.bgcolor,
            'color': 'red',
            'padding':'10px',
            'margin':'10px'
        }}>
            <span className="message">{props.message}</span>
             </div>
    )
}
