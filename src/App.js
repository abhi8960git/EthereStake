import logo from './logo.svg';
import {Route , Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Proposals from './Components/Proposals';
import Home from './views/Home';
import Proposal from './views/Proposal';
function App() {
  return (
    <div className="App">
     <Header></Header>
    



     <Routes>
      <Route path="/" element = {<Home></Home>} ></Route>
      <Route path="/proposal/:id" element = {<Proposal></Proposal>}></Route>
     </Routes>
    </div>
  );
}

export default App;
