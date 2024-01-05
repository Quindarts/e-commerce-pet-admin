import './styles.css'
import { APP_ICON, COLOR, NavItem } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/img/logo.svg'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function Navbar(props) {
    const { openNav, handleOpenNav } = props
    let location = useLocation()

    return (
        <Box className={`navbar bg-white font-bold text-[${COLOR.gray_dark}] ${openNav ? 'open_nav' : 'close_nav'}`}>
            <Box className={`my-[1rem] flex items-center justify-between  ${openNav && 'mx-[2rem]'}`}>
                {openNav && (
                    <Box className="flex w-[5rem] gap-2 text-[1.6rem] font-[800]">
                        <img src={logo} width={20} alt="" />
                        <Typography
                            className="font-[700] leading-normal drop-shadow-md"
                            sx={{ color: 'rgb(18, 31, 67)' }}
                            variant="h6"
                        >
                            UKO{' '}
                        </Typography>
                    </Box>
                )}
                <button className={`flex justify-end ${!openNav && 'w-full  justify-center'}`} onClick={handleOpenNav}>
                    {' '}
                    <Icon width={20} icon={APP_ICON.list} />
                </button>
            </Box>
            <ul>
                {NavItem.map((item, key) => (
                    <button className="d-block w-full">
                        <Link key={key} to={item.link} className="font-500">
                            <li
                                className={`w-[calc(100% - 2rem)] font-500 mx-[1rem] flex h-[2.75rem] cursor-pointer items-center gap-2 rounded-lg text-[#5f748d] hover:bg-slate-100 ${
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
        </Box>
    )
}

export default Navbar
