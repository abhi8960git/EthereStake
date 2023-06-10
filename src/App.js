import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Proposals from './Components/Proposals';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <Proposals></Proposals>
    </div>
  );
}

export default App;
