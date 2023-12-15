import { Icon } from '@iconify/react'

import { useState, useRef, useEffect } from 'react'
import Button from '../Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import clsx from 'clsx'

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

const PopupServ = (props) => {
    const { className } = props
    const [isOpenPopup, setPopupOpen] = useState(false)
    const popupRef = useRef(null)
    const classes = clsx(
        { 'animate-showOn-popup ': !isOpenPopup },
        'block absolute z-50 w-96 rounded bg-white pb-1 pt-4 align-top shadow-lg animate-showDown-popup ',
    )
    const handleOpen = () => {
        setPopupOpen(true)
    }

    const handleClose = () => {
        setPopupOpen(false)
    }

    useClickOutside(popupRef, handleClose)

    return (
        <div className={` relative inline-block ${className}`} ref={popupRef}>
            <Button
                color="grey"
                icon
                size="lg"
                variant="container"
                onClick={handleOpen}
                className="flex items-center rounded-full"
            >
                <Icon icon={APP_ICON.i_menu} onClick={handleOpen} />
            </Button>

            <div className={classes}>
                <h2 className="border-b border-gray-200 px-5 pb-4 text-lg font-bold">Web apps & services</h2>
                <div className="flex h-auto flex-col space-y-3">
                    {['Slack', 'Github', 'Stack Overflow'].map((service, index) => (
                        <div key={index} className="flex cursor-pointer items-center p-2 hover:bg-blue-200">
                            <div className="mr-5 h-8 w-8 rounded-full bg-gray-200"></div>
                            <div>
                                <h3 className="font-semibold">{service}</h3>
                                <p className="text-sm text-gray-500">Email collaboration software</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopupServ
