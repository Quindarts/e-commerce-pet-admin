import { useState, useRef, useEffect } from 'react'
import Avatar from '../Avatar/Avatar'
import 'tailwindcss/tailwind.css'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'
import { css } from '@emotion/react'

export const usePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useClickOutside(ref, () => setIsOpen(false));

    return { isOpen, ref, setIsOpen };
}

const useClickOutside = (ref, handler) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, handler])
}
const tabStyles = css`
    transition: all 0.3s ease-in-out;

    &.active {
        border-bottom: 2px solid blue;
    }
`

const PopupNoti = (props) => {
    const { avatars, names, user, className, position = 'bottom-right', isOpenPopUp, setIsOpen } = props
    const [selectedTab, setSelectedTab] = useState('Messages')
    const navigate = useNavigate()
    const popupNoti = useRef(null)

    const handleClosePopupNoti = () => {
        setIsOpen(false)
    }

    const handleMenuItem = (link) => {
        navigate(link)
        handleClosePopupNoti()
    }

    useClickOutside(popupNoti, handleClosePopupNoti)
    const positionClasses = {
        'top-left': 'bottom-full right-full',
        'top-right': 'bottom-full left-full',
        'bottom-left': 'top-full right-full',
        'bottom-right': 'top-full left-full',
        'middle-left': 'top-1/2 right-full transform translate-y-[-50%]',
        'middle-right': 'top-1/2 left-full transform translate-y-[-50%]',
    }

    return (
        <div className={`relative inline-block ${className}`} ref={popupNoti}>
            {isOpenPopUp && (
                <div
                    className={`absolute z-10 h-auto w-96 rounded border border-gray-200 bg-white py-2 shadow-lg ${positionClasses[position]}`}
                >
                    <div className="border-b border-gray-200 px-8 py-4">
                        <h2 className="font-bold">Notifications</h2>
                    </div>
                    <div className="flex justify-between py-3">
                        <button
                            onClick={() => setSelectedTab('Messages')}
                            className={`m-auto cursor-pointer font-medium ${
                                selectedTab === 'Messages' ? 'active text-blue-500' : 'text-gray-500'
                            }`}
                            css={tabStyles}
                        >
                            Messages (2)
                        </button>
                        <button
                            onClick={() => setSelectedTab('Archived')}
                            className={`m-auto cursor-pointer font-medium ${
                                selectedTab === 'Archived' ? 'active text-blue-500' : 'text-gray-500'
                            }`}
                            css={tabStyles}
                        >
                            Archived
                        </button>
                    </div>
                    {avatars.map((avatar, index) => {
                        if (index >= 3) {
                            return null
                        }

                        return (
                            <div
                                key={index}
                                className={`flex items-center px-4 py-2 ${
                                    index === 0 ? '' : 'border-t border-gray-300'
                                } cursor-pointer hover:bg-blue-100 ${
                                    selectedTab === 'Messages' && index < 2 ? 'bg-blue-100' : 'bg-white'
                                }`}
                            >
                                <div
                                    className={`mr-2 h-2 w-2 rounded-full ${
                                        selectedTab === 'Messages' && index < 2 ? 'bg-blue-500' : 'bg-gray-400'
                                    }`}
                                />
                                <Avatar src={avatar.src} size="md" />
                                <div className="ml-2 h-20">
                                    <p className="text-sm font-bold">{names[index].name}</p>
                                    <p className="text-sm font-medium text-gray-500">{names[index].message}</p>
                                </div>
                            </div>
                        )
                    })}
                    <div className="border-t border-gray-200 px-4 py-2 text-center">
                        <button
                            onClick={() => handleMenuItem(APP_ROUTER.PRODUCT)}
                            className="cursor-pointer text-sm font-medium text-blue-500"
                        >
                            View all Notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopupNoti
