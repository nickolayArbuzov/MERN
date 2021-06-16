import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import s from "./App.module.css";
import {Navbar} from "./ui/components/navbar/Navbar";
import {Registration} from "./ui/components/registration/Registration";

function App() {
  return (
    <BrowserRouter>
        <div className={s.container}>
            <Navbar/>
            <Switch>
                <Route path="/registration" component={Registration}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
