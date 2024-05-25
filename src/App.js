import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  return (
  <>
    <Navbar title="Text Analyzer" home="Home" about="About Us"/>
    <div className='container   my-3' >
    <TextForm heading="Enter text to analyze"/>
    {/*<About/>*/}
    </div>
</>
  );
}

export default App;
