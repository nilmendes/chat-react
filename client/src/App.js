import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Join from './components/Join';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
