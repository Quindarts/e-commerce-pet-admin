import React, { useState } from 'react'
import './styles.css'
import { APP_ICON, COLOR, NavItem } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/img/logo.svg'

function Navbar() {
    let location = useLocation()
    const [openNav, setOpenNav] = useState(true)
    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }
    return (
        <div className={`bg-dark1 navbar font-bold text-[${COLOR.gray_dark}] ${openNav ? 'open_nav' : 'close_nav'}`}>
            <div className={`my-[1rem] flex items-center justify-between  ${openNav && 'mx-[2rem]'}`}>
                {openNav && (
                    <div className="flex w-[5rem] gap-2 text-[1.6rem] font-[800]">
                        <img src={logo} width={20} alt="" />
                        UKO
                    </div>
                )}
                <button className={`flex justify-end ${!openNav && 'w-full  justify-center'}`} onClick={handleOpenNav}>
                    {' '}
                    <Icon width={20} icon={APP_ICON.list} />
                </button>
            </div>
            <ul>
                {NavItem.map((item, key) => (
                    <button className="d-block w-full">
                        <Link key={key} to={item.link}>
                            <li
                                className={`w-[calc(100% - 2rem)] mx-[1rem] flex h-[2.75rem] cursor-pointer items-center gap-2 rounded-lg hover:bg-slate-100 ${
                                    !openNav ? 'justify-center' : 'px-[1rem] py-[0.5rem]'
                                }  ${location.pathname === item.link && 'bg-slate-100'}  `}
                            >
                                <Icon color="#5f748d" icon={item.icon} />
                                {openNav && item.title}
                            </li>
                        </Link>
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
