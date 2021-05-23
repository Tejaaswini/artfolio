import './App.css';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import Display from './components/Display';
import Misc from './components/Misc'
import Scenes from './components/Scenes'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Display} />
        <Route exact path="/artfolio/miscellaneous" component={Misc} />
        <Route exact path="/artfolio/scenarios" component={Scenes} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
