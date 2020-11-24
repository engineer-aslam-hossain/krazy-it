import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ImagePreview from './components/ImagePreview/ImagePreview';
import TShirt from './components/T-Shirt/T-Shirt';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/preview'>
          <ImagePreview />
        </Route>
        <Route path='/t-shirt'>
          <TShirt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
