import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import { useState } from 'react'
import { TextFieldCustomMUI } from './style'

function Textfield(props) {
    const {
        className,
        type = 'text',
        label,
        variant = 'container',
        helperText,
        error,
        icon,
        size = 'xl',
        ...rest
    } = props

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    return (
        <div className={`${className} relative `}>
            <TextFieldCustomMUI
                label={label}
                helperText={helperText}
                type={showPassword ? 'text' : type}
                className={`textfield w-full textfield-${variant} text-${type} textfield-${size}`}
                error={error}
                {...rest}
            />
            {type === 'password' && (
                <IconButton
                    className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <Icon icon={APP_ICON.i_eye_open} /> : <Icon icon={APP_ICON.i_eye_off} />}
                </IconButton>
            )}
            {icon && (
                <IconButton
                    className={`absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-gray-400`}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    <Icon icon={icon} />
                </IconButton>
            )}
        </div>
    )
}

export default Textfield
