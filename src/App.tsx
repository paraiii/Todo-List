import { NavBar } from "./Components/Navbar";
import { Route } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { TodoPage } from "./Components/TodoPage";
import { initialValue, TodoContextProvider } from "./Components/Context/TodoContext";
import { TodoContent } from "./Components/TodoContent";
import {LoginPage } from "./Components/LoginPage";
import { RegisterPage } from "./Components/RegisterPage";
import { Form } from "./Components/Form";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <TodoContextProvider value={initialValue} >
        <div>
          <NavBar />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/" component={TodoPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/todo/:id" component={TodoContent} />
          <Route exact path="/form" component={Form} />
        </div>
      </TodoContextProvider>
    </SnackbarProvider>
  );
}

export default App;
