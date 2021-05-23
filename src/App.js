import './App.css';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import Display from './components/Display';
import Misc from './components/Misc'
import Scenes from './components/Scenes'
import Mandalas from './components/Mandalas'
import Portraits from './components/Portraits'
import Characters from './components/Characters'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="landing-bg">
      <Header />
      <Switch>
        <Route exact path="/" component={Display} />
        <Route exact path="/artfolio/miscellaneous" component={Misc} />
        <Route exact path="/artfolio/scenarios" component={Scenes} />
        <Route exact path="/artfolio/mandalas" component={Mandalas} />
        <Route exact path="/artfolio/portraits" component={Portraits} />
        <Route exact path="/artfolio/characters" component={Characters} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
