import { NavBar } from "./Components/Navbar";
import { Route } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { TodoPage } from "./Components/TodoPage";
import { initialValue, TodoContextProvider } from "./Components/Context/TodoContext";
import { About } from "./Components/Content/About";
import { TodoContent } from "./Components/TodoContent";
import { LoginPage } from "./Components/LoginPage";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <TodoContextProvider value={initialValue} >
        <div>
          <NavBar />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/" component={TodoPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/todo/:id" component={TodoContent} />
          <Route exact path="/about/:id" component={About} />
        </div>
      </TodoContextProvider>
    </SnackbarProvider>
  );
}

export default App;
