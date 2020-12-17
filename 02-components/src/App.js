import React from 'react'
import BorderedImageFrame from './BorderImageFrame'
import ImageFrame from './ImageFrame'
import Alert from './Alert'
import SumOfTwo from './SumOfTwo'
import sayGoodBye from './sayGoodBye'

function App() {
    return (
        <React.Fragment>
        {sayGoodBye()};
        <Alert message="Hello world" bgcolor="black"/>;
        <ImageFrame/>;
        <BorderedImageFrame image={require("./among.jpg").default}/>;
         <SumOfTwo num1={3} num2={4}/>;
        </React.Fragment>
       
    );
  
}

export default App;


