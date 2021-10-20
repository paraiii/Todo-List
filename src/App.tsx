import { NavBar } from "./Components/Navbar";
import { Route } from "react-router-dom";
import { TodoPage } from "./Components/TodoPage";
import { initialValue, TodoContextProvider } from "./Components/Context/TodoContext";

function App() {
  return (
    <TodoContextProvider value={initialValue} >
      <div>
        <NavBar />
        <Route exact path="/" component={TodoPage} />
        <Route exact path="/todo" component={TodoPage} />
      </div>
    </TodoContextProvider>
  );
}

export default App;
