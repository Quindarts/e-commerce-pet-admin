import { useState, useRef, useEffect } from 'react'
import Avatar from '../Avatar/Avatar'
import 'tailwindcss/tailwind.css'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'
import { css } from '@emotion/react'

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

const tabStyles = css`
  transition: all 0.3s ease-in-out;

  &.active {
    border-bottom: 2px solid blue;
  }
`;

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
            >Popup Notifications
            </button>
            {isOpenPopUp && (
                <div className={`absolute z-10  w-64 rounded border border-gray-200 bg-white py-2 shadow-lg`}>
                    <div className="border-b border-gray-200 px-4 py-2">
                        <h2 className="font-bold">Notifications</h2>
                    </div>
                    <div className="flex justify-between px-4 py-2">
                        <button
                            onClick={() => setSelectedTab('Messages')}
                            className={`font-medium cursor-pointer ${selectedTab === 'Messages' ? 'active text-blue-500' : 'text-gray-500'}`}
                            css={tabStyles}
                        >
                            Messages
                        </button>
                        <button
                            onClick={() => setSelectedTab('Archived')}
                            className={`font-medium cursor-pointer ${selectedTab === 'Archived' ? 'active text-blue-500' : 'text-gray-500'}`}
                            css={tabStyles}
                        >
                            Archived
                        </button>
                    </div>
                    {avatars.map((avatar, index) => {
                        if (index >= 3) {
                            return null;
                        }

                        return (
                            <div 
                                key={index} 
                                className={`flex items-center px-4 py-2 ${index === 0 ? '' : 'border-t border-gray-200'} cursor-pointer hover:bg-blue-200 ${selectedTab === 'Messages' && index < 2 ? 'bg-blue-200' : 'bg-white'}`}
                            >
                                <div className={`w-2 h-2 rounded-full mr-2 ${selectedTab === 'Messages' && index < 2 ? 'bg-blue-500' : 'bg-gray-400'}`} />
                                <Avatar src={avatar.src} size="sm" />
                                <div className="ml-2">
                                    <p className="text-sm font-medium">{names[index].name}</p>  
                                    <p className="text-sm font-medium text-gray-500">{user.messages}</p> 
                                </div>
                            </div>
                        );
                    })}
                    <div className="px-4 py-2 border-t border-gray-200 text-center">
                        <button
                            onClick={() => handleMenuItem(APP_ROUTER.PRODUCT)}
                            className="text-blue-500 font-medium cursor-pointer"
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
