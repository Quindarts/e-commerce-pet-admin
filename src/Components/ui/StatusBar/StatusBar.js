import { theme } from '../../../Theme/theme'
import { StatusBarStyle } from './style.js'

const StatusBar = (props) => {
    const { status, className, variant = 'green', style = 'row', ...rest } = props
    const getColor = () => {
        if (status < 40) {
            return theme.color.red
        } else if (status < 70) {
            return theme.color.yellow
        } else {
            if (variant === 'green') return theme.color.green
            if (variant === 'blue') return theme.color.blue
        }
    }

    const sx = {
        width: `${status}%`,
        backgroundColor: getColor(),
    }

    return (
        <StatusBarStyle {...rest} className={`status-bar ${className} status-bar-${variant} `}>
            <div
                style={sx}
                className={`status-bar-fill rounded-2 h-full rounded-[0.7rem] transition-[width] duration-500 ease-in-out  `}
            ></div>
        </StatusBarStyle>
    )
}

export default StatusBar
