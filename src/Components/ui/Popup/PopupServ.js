import { useState, useRef, useEffect } from 'react'
import 'tailwindcss/tailwind.css'

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

const PopupServ = (props) => {
    const {className } = props;  
    const [isOpenPopup, setPopupOpen] = useState(false);
    const popupRef = useRef(null)

    const handleOpen = () => {
        setPopupOpen(true);
    };

    const handleClose = () => {
        setPopupOpen(false);
    };
   
    useClickOutside(popupRef, handleClose);

    return (
        <div className={`relative inline-block ${className}`} ref={popupRef}>
            <button
                onClick={handleOpen}
                className="flex items-center rounded-full bg-gray-200 py-2 pl-4 pr-2 text-gray-500 hover:bg-gray-300"
            >
               Open Popup
            </button>
            {isOpenPopup && (
                <div className={`absolute z-50 pt-4 pb-1 rounded shadow-lg w-96 bg-white`}>
                    <h2 className="text-lg font-bold border-b border-gray-200 pb-4 px-5">Web apps & services</h2>
                    <div className="flex flex-col space-y-3">
                        {['Slack', 'Github', 'Stack Overflow'].map((service, index) => (
                            <div key={index} className="flex items-center p-2 hover:bg-blue-200 cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-gray-200 mr-5"></div>
                                <div>
                                    <h3 className="font-semibold">{service}</h3>
                                    <p className="text-sm text-gray-500">Email collaboration software</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupServ;
