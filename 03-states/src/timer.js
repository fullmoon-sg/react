import React from 'react'

export default class timer extends React.Component{
    state = {
        timeLeft : 10
    }
componentDidMount(){

}

componentDidUpdate(){
        let timeout = 1000;
        setTimeout(() => {
            this.setState({
                timeLeft: this.state.timeLeft -1
            })
        });
    }
render(){ 
        return 
            <div>{this.state.timeLeft}</div>;
        )
    }
     
}