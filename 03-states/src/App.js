import timer from './timer'
import NumberBox from './NumberBox'
import Nbox from './Nbox'

function App() {
  return (
      <div className="App">
          <NumberBox startingNumber= {42}/>
          <Nbox startingCount = {0}/>
          <timer />
      </div>
    
  );
}

export default App;
