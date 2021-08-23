import './App.css'
import { Login } from './components/login'
import { Register } from './components/register'
import { TabBar } from './components/tabBar'

import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Home } from './components/home'
import { Dashboard } from './components/dashboard'

function App() {


    useEffect(()=>{
        
        
    },[])
    return (
        <BrowserRouter>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/dashboard">
            <Dashboard/>
        </Route>
        
        <Route path="/auth">
        <div className="container ">
            <div className="row d-felx justify-content-center">
            <div className="col col-sm-9 col-md-4 mt-6 bg-light rounded p-5 shadow">
            <TabBar/>
            <div className="tab-content  mt-6" id="myTabContent">    
                <Login />
                <Register/>          
            </div>
            </div>
        </div>
        </div>
        </Route>
        </BrowserRouter>
    )
}

export default App
