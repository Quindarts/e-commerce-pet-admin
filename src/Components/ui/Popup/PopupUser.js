import { useState, useRef, useEffect } from 'react'
import Avatar from '../Avatar/Avatar'
import 'tailwindcss/tailwind.css'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'

const menuItems = [
    {
        title: 'Set Status',
        link: APP_ROUTER.PRODUCT,
    },
    {
        title: 'Profile & Account',
        link: APP_ROUTER.PRODUCT,
    },
    {
        title: 'Settings',
        link: APP_ROUTER.PRODUCT,
    },
    {
        title: 'Manage Team',
        link: APP_ROUTER.PRODUCT,
    },
    {
        title: 'Sign Out',
        link: APP_ROUTER.PRODUCT,
    },
]
function shortenName(fullName, maxLength = 13) {
    if (fullName.length <= maxLength) {
        return fullName
    }
    var shortN = fullName[0].charAt(0).toUpperCase() + '.'
    fullName.split('').map((w, k) => w === ' ' && k > 1 && (shortN += fullName[k + 1].charAt(0).toUpperCase() + '.'))
    var resultShort = shortN.substring(0, shortN.length - 1)
    return resultShort
}

function useClickOutside(ref, handler) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref, handler])
}

const PopupUser = (props) => {
    const { user, className } = props
    const [isOpenPopUp, setPopupOpen] = useState(false)
    const navigate = useNavigate()
    const popupUser = useRef(null)
    const handleOpen = () => {
        setPopupOpen(true)
    }
    const handleClose = () => {
        setPopupOpen(false)
    }
    const handleMenuItem = (link) => {
        navigate(link)
        handleClose()
    }
    useClickOutside(popupUser, handleClose)

    return (
        <div className={`relative inline-block ${className}`} ref={popupUser}>
            <button
                onClick={handleOpen}
                className="flex items-center rounded-full bg-gray-200 py-2 pl-4 pr-2 text-gray-500 hover:bg-gray-300"
            >
                <span className="mr-2">
                    Hi,{' '}
                    <strong className="font-semibold">
                        {shortenName(user.firstName)} {user.lastName}
                    </strong>
                </span>
                <Avatar src={user.avt} size="sm" badge={true} className="border-none" />
            </button>
            {isOpenPopUp && (
                <div className={`absolute z-10  w-64 rounded border border-gray-200 bg-white py-2 shadow-lg`}>
                    <div className="flex items-center border-b border-gray-200 px-4 pb-4 pt-3">
                        <Avatar src={user.avt} size="md" />
                        <div className="ml-2">
                            <p className="text-sm font-medium">
                                {shortenName(user.firstName)} {user.lastName}
                            </p>
                            <p className="text-sm font-medium text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        {menuItems.map((item, index) => (
                            <div key={index} className={`mb-2 border-b border-gray-200`}>
                                <button
                                    onClick={() => handleMenuItem(item.link)}
                                    className="hup:bg-gray-200 block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-300"
                                >
                                    {item.title}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopupUser
