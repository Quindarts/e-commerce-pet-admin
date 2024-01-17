import React from 'react'
import PopupUser from '../../ui/Popup/PopupUser'

function Header(props) {
    const { className } = props
    const user = {
        firstName: 'Than Nguyen Thanh',
        lastName: 'Thien',
        avt: 'https://img.freepik.com/premium-vector/avatar-icon-smiley-face-man_1692-130.jpg',
        email: 'tntt@gmail.com',
    }
    return (
        <header className={`flex justify-end px-[3rem] ${className}`}>
            <PopupUser className="items-end" user={user} />
        </header>
    )
}

export default Header
