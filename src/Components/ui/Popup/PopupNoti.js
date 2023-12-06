import { useState, useRef, useEffect } from 'react'
import Avatar from '../Avatar/Avatar'
import 'tailwindcss/tailwind.css'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'

function useClickOutside(ref, handler) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, handler]);
}

const PopupNoti = (props) => {
    const { avatars, names, user, className } = props;  
    const [isOpenPopUp, setPopupOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Messages');
    const navigate = useNavigate();
    const popupNoti = useRef(null)

    const handleOpen = () => {
        setPopupOpen(true);
    };

    const handleClose = () => {
        setPopupOpen(false);
    };

    const handleMenuItem = (link) => {
        navigate(link);
        handleClose();
    };
   
    useClickOutside(popupNoti, handleClose);

    return (
        <div className={`relative inline-block ${className}`} ref={popupNoti}>
            <button
                onClick={handleOpen}
                className="flex items-center rounded-full bg-gray-200 py-2 pl-4 pr-2 text-gray-500 hover:bg-gray-300"
            >
                <span className="mr-2">
                    Hi,{' '}
                    <strong className="font-semibold">
                        {user.firstName} {user.lastName}
                    </strong>
                </span>
                <Avatar src={avatars[0].src} size="sm" badge={true} className="border-none" />  {/* Use avatars here */}
            </button>
            {isOpenPopUp && (
                <div className={`absolute z-10  w-64 rounded border border-gray-200 bg-white py-2 shadow-lg`}>
                    <div className="flex items-center border-b border-gray-200 px-4 pb-4 pt-3">
                        <h2 className="text-lg font-bold">Notifications</h2>
                    </div>
                    <div className="flex justify-between px-4 py-2">
                        <button
                            onClick={() => setSelectedTab('Messages')}
                            className={`font-medium ${selectedTab === 'Messages' ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            Messages
                        </button>
                        <button
                            onClick={() => setSelectedTab('Archived')}
                            className={`font-medium ${selectedTab === 'Archived' ? 'text-blue-500' : 'text-gray-500'}`}
                        >
                            Archived
                        </button>
                    </div>
                    {avatars.map((avatar, index) => (
                        <div key={index} className={`flex items-center px-4 py-2 ${avatar.read ? 'bg-gray-200' : 'bg-blue-200'}`}>
                            <div className={`w-2 h-2 rounded-full mr-2 ${avatar.read ? 'bg-gray-500' : 'bg-blue-500'}`} />
                            <Avatar src={avatar.src} size="sm" />
                            <div className="ml-2">
                                <p className="text-sm font-medium">{names[index].name}</p>  
                                <p className="text-sm font-medium text-gray-500">{user.messages}</p> 
                            </div>
                        </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-200">
                        <button
                            onClick={() => handleMenuItem(APP_ROUTER.PRODUCT)}
                            className="text-blue-500 font-medium"
                        >
                            View all Notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupNoti;
