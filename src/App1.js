
import './App.css';
import {useState, useEffect} from 'react';

const Person = (props) => {
  return (
    <div className='container'>
      <h3>Level: {props.level}</h3>
      <p>Age: {props.age}</p>
      <p>Marital Status: {props.status}</p>
      <h1> Name: {props.name}</h1>
    </div>
  )
}

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100)
  }, [])
  
  return (
    <>
      <button onClick={() => {setCounter((next) => next+1 )}}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter( (prev) => prev - 1)}} >-</button><br />
      <button onClick={() => setCounter(100)} >return</button>
    </>
  )
  
}


const App = () => {  
  const name = "Chibundu";
  return (
  <>
    <div className='App'>
     <CounterButton/>
          
      <Person name="Gifty Love" level='Graduate' age={26} status='Married'/>
      <Person name={"Chibundu"} level={"Graduate"} age={32} status={"Maried"} />
      <Person name={"Akuoma"} level={"Nursery"} age={2} status={"Baby"} />
    </div>

    <div className="App">
      <h1>Hello {name}, </h1>
      {name ? (<>{name} is a good name</>) : (<h2>You have not given your name</h2>)}      
    </div>
    </>
  );
  
}

export default App;
