import React from 'react'

export default class ImageSwitcher extends React.Component{

    state = { 
        image1 : require('./among.jpg').default,
        image2 : require('/download.png').default,
        currentImage : 1
    }

    render() {
       if (this.state.currentImage ===1){
          return( <img src={this.state.image1}/>
           )
       } else if (this.state.currentImage ==2){
           return (<img src={this.state.image1}/>)
       }
    }

    

}