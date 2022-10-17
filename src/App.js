
import './App.css';
import Child from './components/Child';
import microsoft from './microsoft.jpg'

function App() {

  const user={
    username:"chedi",
    email:"chedi@gmail.com"
  }
  const names=['salma','arij','ibrahim']

const isAdult=false

const handleAlert=(name)=>{
  alert(`hello from ${name}`)
}

  return (
    <div className="App">
 <Child name="mariem"   user={user} names={names} isAdult={isAdult} handleAlert={handleAlert} >
  <h1>children props</h1>
  <img src={microsoft} alt='..' width="500px" height="500px" />
  </Child>
    </div>
  );
}

export default App;
