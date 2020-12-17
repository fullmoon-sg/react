import React from 'react'

export default class NumberBox extends React.Component{
    state = { 
        number: this.props.startingNumber
    }


    render() {
        return(
            <React.Fragment>
            <div>
                <h1>{this.state.number}</h1> 
            <button onClick={this.increment}>Add 1 </button>
            </div> 
            </React.Fragment>
        )
 
      }

increment = () => {
    this.setState({ 
        number: this.state.number +1
      })
    }

}