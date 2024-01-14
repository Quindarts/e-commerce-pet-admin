import React from 'react'
import PopupServ from '../Popup/PopupServ'
import PopupUser from '../Popup/PopupUser'
import Button from '../Button/Button'
import { Icon } from '@iconify/react'
import { APP_ICON } from '../../../Utils/Constants'
import { StyledBox } from './styles'

const BaseHeader = ({ className, children }) => {
    return <nav className={className}>{children}</nav>
}

const withPageSpecificProps = () => {
    const avatars = [
        {
            src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        },
        {
            src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        },
        {
            src: 'https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo=',
        },
        { src: '' },
    ]
    const names = [{ name: 'Bob' }, { name: 'Bill' }, { name: 'Ben' }, { name: '' }]
    const user = {
        firstName: 'Than Nguyen Thanh',
        lastName: 'Thien',
        avt: 'https://img.freepik.com/premium-vector/avatar-icon-smiley-face-man_1692-130.jpg',
        email: 'tntt@gmail.com',
    }
    return () => (
        <StyledBox className="flex justify-end gap-1 pr-9 pt-4">
            <div>
                <Button className="m-1 bottom-[2px]" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_bell} />
                </Button>
            </div>
            <PopupServ avatars={avatars} names={names} />
            <PopupUser className="items-end" user={user} />
        </StyledBox>
    )
}
const AdiminHeader = withPageSpecificProps(BaseHeader)

export default AdiminHeader