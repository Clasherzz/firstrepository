import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import About from './components/About';
import navigation from './components/navigation';
import contacting from './components/contacting';
import contact from './components/contact';
const App=()=> {
  return(
    <>
        <About />
        <navigation />
        <contacting />
    </>
  );
}

export default App

