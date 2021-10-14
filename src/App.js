import './App.css';
import TodoPage from './components/TodoPage';

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ContentPage from './components/Content/ContentPage';
import About from './components/Content/About';

function App() {
  return (
    <div className="todo-app">
      <NavBar />
      <Route exact path="/todo" component={TodoPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={TodoPage} />
      <Route path="/Todo/:todoId" component={ContentPage} />
    </div>
  );
}

export default App;
