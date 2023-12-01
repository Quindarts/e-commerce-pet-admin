import { useState } from 'react'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import { CustomAvatar } from './style.js'
import useUploadImage from '../../../hook/uploadImage'

const Avatar = (props) => {
    const { src = '', size = 'sm', className = '', upload, badge } = props
    const [imageSrc, setimageSrc] = useState(src)
    const { handleImageUpload } = useUploadImage()

    return (
        <CustomAvatar className={` avt-${size} relative  ${className}  `}>
            {imageSrc ? (
                <img
                    className={`h-full w-full rounded-full border-[3px] border-white object-cover`}
                    src={imageSrc}
                    alt="Avatar"
                />
            ) : (
                <Icon
                    icon={APP_ICON.i_avatar}
                    className={`h-full w-full  rounded-full border-[3px] border-white bg-slate-400 object-cover p-1 text-gray-200`}
                />
            )}

            {badge && (
                <span className="animate-border-animation absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
            )}

            {upload && (
                <label className="absolute bottom-0 right-0">
                    <Icon
                        icon={APP_ICON.i_camera}
                        className="h-4 w-4 cursor-pointer text-gray-500 transition duration-300 hover:text-gray-700"
                    />
                    <input type="file" className="hidden" onChange={(event) => handleImageUpload(event, setimageSrc)} />
                </label>
            )}
        </CustomAvatar>
    )
}

export default Avatar
