import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import './style.css'
function MainLayout() {

    return (
        <div className="main_layout flex">
            {/* {alert(window.localStorage.getItem('user'))} */}

            <Navbar />
            <div className="main_outlet">
                <header>header</header>
                <main>
                    <Outlet />
                </main>
                <footer>footer</footer>
            </div>
        </div>
    )
    
}

export default MainLayout
