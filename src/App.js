// import './App.css';
// import TodoPage from './component/TodoPage';

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import ContentPage from './component/Content/ContentPage';
// import About from './component/Content/About';
// import { TodoContext } from './component/Hooks/TodoContext';
import { NavBar } from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TodoPage } from "./Components/TodoPage";
import { TodoContextProvider } from "./Components/Context/TodoContext";

function App() {
  return (
    // <TodoContext>
    //   <div className="todo-app">
    //     <NavBar />
    //     <Route exact path="/todo" component={TodoPage} />
    //     {/* <Route exact path="/about" component={About} /> */}
    //     <Route exact path="/" component={TodoPage} />
    //     {/* <Route path="/Todo/:todoId" component={ContentPage} /> */}
    //   </div>
    // </TodoContext>
    <TodoContextProvider >
      <div>
        <NavBar />
        <Route exact path="/todo" component={TodoPage} />

      </div>
    </TodoContextProvider>
  );
}

export default App;
