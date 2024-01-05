// Badge.js
import { BadgeWrapper } from './style.js'

const Badge = ({ size = 'sm', status = 'online', color, position = 'bottom-right' }) => {
    let animation, badgeColor, badgeSize

    switch (status) {
        case 'online':
            animation = 'blink 1s infinite'
            badgeColor = color
            break
        case 'offline':
            animation = 'none'
            badgeColor = 'gray'
            break
        case 'private':
            animation = 'none'
            badgeColor = 'red'
            break
        default:
            animation = 'blink 1s infinite'
            badgeColor = color
    }

    switch (size) {
        case 'sm':
            badgeSize = '0.7rem'
            break
        case 'md':
            badgeSize = '0.9rem'
            break
        case 'lg':
            badgeSize = '1.1rem'
            break
        default:
            badgeSize = '0.9rem'
    }
    console.log(animation)

    return <BadgeWrapper size={badgeSize} color={badgeColor} animation={animation} position={position} />
}

export default Badge
