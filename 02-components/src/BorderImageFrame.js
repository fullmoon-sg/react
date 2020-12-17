import React from 'react'

export default function BorderedImageFrame(props){
    return (
    <img style={{border : "red solid 4px"}} src={props.image}/>);
}
