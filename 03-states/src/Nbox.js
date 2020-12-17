import React from 'react'

export default class Nbox extends React.Component{

        state= {
            count: this.props.startingCount
        }

    render() {
         let counterStyle = {
                    'border': '4px solid black',
                    'fontSize': '32px',
                    'width' : '60px',
                    'height': '60px',
                    'text-align': "center"
                }
        return(
            <React.Fragment>
               
                <div>
                    <h1 style={counterStyle}>{this.state.count}</h1>
                </div>
                <button onClick={this.increment}>Add</button>
                <button onClick={this.decrement}>Subtract</button>
            </React.Fragment>
             )
            }
        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        decrement = () => {
            this.setState({
                count : this.state.count - 1
            })
        }
}