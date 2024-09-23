import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./App.css"
import React from "react"
import { Outlet } from "react-router-dom";

import Logo from "../components/template/Logo"
import Nav from "../components/template/Nav"
import Footer from "../components/template/Footer"

function App() {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;
