import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column" style={{height:'100vh'}} >
      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded' style={{backgroundColor:'black'}}>
        <h1 style={{color:""}}>Counter Application</h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;