import { NavBar } from "./Components/Navbar";
import { Route } from "react-router-dom";
import { TodoPage } from "./Components/TodoPage";
import { initialValue, TodoContextProvider } from "./Components/Context/TodoContext";
import { About } from "./Components/Content/About";

function App() {
  return (
    <TodoContextProvider value={initialValue} >
      <div>
        <NavBar />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/about/:id" component={About} />
      </div>
    </TodoContextProvider>
  );
}

export default App;
