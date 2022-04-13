import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import homeScreen from "./screens/homeScreen";
import productDescScreen from "./screens/productDescScreen";

function App() {
  const [user, setUser] = React.useState(null)

  async function login (user = null) {
    setUser(user)
  }
  async function logout(){
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={homeScreen} exact />
        <Route path="/login" render={(props) =>
        <login {...props} login={login} /> 
        }> 
      </Route>
        
        

        <Route path="/product/:id" component={productDescScreen} exact />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
