import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import ServicesList from "./components/services-list";
import SingleService from "./components/single-service";
import Login from "./components/login";
import Header from "./components/navbar"
import Layout from "./components/layout"



function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    // default user to null
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    

      <Routes>
        <Route path = "/" element = {<Layout user = {user} logout = {logout}/>}> 
        <Route path= "services-list" element={<ServicesList/>}/>
        <Route
          path="review"
          element={ <AddReview  user={user} />}
        ></Route>
        <Route
<<<<<<< HEAD
          path="/Service/:id/"
          render={(props) => <ServicesList {...props} user={user} />}
=======
          path="Service/:id/"
          element={<SingleService user={user} />}
>>>>>>> 00938670d56c6e9039c51bae99715a8a6ad807bd
        ></Route>
        <Route
          path="login"
          element={ <Login login= {login} />}
        ></Route>
        </Route>
        </Routes>
      
   
  );
}

export default App;
