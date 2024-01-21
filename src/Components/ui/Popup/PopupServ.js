import { Icon } from '@iconify/react'

import { useState, useRef, useEffect } from 'react'
import Button from '../Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import clsx from 'clsx'
import { Box } from '@mui/material'

const PopupServ = (props) => {
    const { className } = props
    const [isOpenPopup, setPopupOpen] = useState(false)
    const popupRef = useRef(null)
    const classes = clsx(
        { 'animate-showOn-popup ': !isOpenPopup },
        'block right-[-480%] absolute z-50 w-96 rounded bg-white pb-1 pt-4 align-top shadow-lg animate-showDown-popup ',
    )

    const handleOpen = () => {
        setPopupOpen(true)
    }

    const handleClose = () => {
        setPopupOpen(false)
    }

    const useClickOutside = (ref, handler) => {
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

    useClickOutside(popupRef, handleClose)
    return (
        <Box className={` relative inline-block ${className}`} ref={popupRef}>
            <Button
                color="grey"
                icon
                size="lg"
                variant="outline"
                onClick={handleOpen}
                className="flex items-center rounded-full"
            >
                <Icon icon={APP_ICON.i_menu} onClick={handleOpen} />
            </Button>

            <Box className={classes}>
                <h2 className="border-b border-gray-200 px-5 pb-4 text-lg font-bold">Web apps & services</h2>
                <Box className="flex h-auto flex-col space-y-3">
                    {['Slack', 'Github', 'Stack Overflow'].map((service, index) => (
                        <Box key={index} className="flex cursor-pointer items-center p-2 hover:bg-blue-200">
                            <Box className="mr-5 h-8 w-8 rounded-full bg-gray-200"></Box>
                            <Box>
                                <h3 className="font-semibold">{service}</h3>
                                <p className="text-sm text-gray-500">Email collaboration software</p>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default PopupServ
