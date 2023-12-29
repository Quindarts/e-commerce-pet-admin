import { Icon } from '@iconify/react'
import AvatarGroup from '../Components/ui/Avatar/AvatarGroup.js'
import Button from '../Components/ui/Button/Button.js'
import { APP_ICON } from '../Utils/Constants.js'
import Textfield from '../Components/ui/Textfield/Textfield.js'
import PopupUser from '../Components/ui/Popup/PopupUser.js'
import StatusBar from '../Components/ui/StatusBar/StatusBar.js'
import { useState } from 'react'
import Dropdown from '../Components/ui/Dropdown/Dropdown.js'
import Snackbar from '../Components/ui/Toast/Snackbar.js'
import { SnackbarProvider } from 'notistack'
import InputUpload from '../Components/ui/InputUpload/InputUpload.js'
import PopupNoti from '../Components/ui/Popup/PopupNoti.js'
import { usePopup } from '../Components/ui/Popup/PopupNoti.js'
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
const names = [
    {
        name: 'Bob',
        message: 'Changed an issue from this project',
    },
    {
        name: 'Bill',
        message: 'Nice Work! You really nailed it. Keep it Up Man',
    },
    {
        name: 'Ben',
        message: 'Nice Work! You really nailed it. Keep it Up Man',
    },
    { name: 'Bin' },
    { name: 'Ban' },
]
const warehouseItem = [
    'https://product.hstatic.net/200000312481/product/olc31003_b15f9f049c014a9d9c709cf0aa6ab353_master.jpg',
    'https://product.hstatic.net/200000312481/product/olc31002_1_c01afc3a5c614cb2880b3740179ed447_master.jpg',
    'https://product.hstatic.net/200000312481/product/aho2002_1_4c1c4e1db1ed4450b31da91840bf92d7_master.jpg',
]
const user = {
    firstName: 'Than Nguyen Thanh',
    lastName: 'Thien',
    avt: 'https://img.freepik.com/premium-vector/avatar-icon-smiley-face-man_1692-130.jpg',
    email: 'tntt@gmail.com',
}
function ComponentPage() {
    const demo = 50
    const [status, setStatus] = useState(demo)
    const popup = usePopup()

    const handlePopupNotiOpen = () => {
        popup.setIsOpen(true)
    }

    const handleCompleteClick = () => {
        if (status < 100) {
            setStatus(status + 10)
        }
    }
    const handleResetClick = () => {
        setStatus(0)
    }
    const [valueDrop, setValueDrop] = useState('')
    const listDrop = [
        { title: 'quang', value: 10 },
        { title: 'long', value: 20 },
        { title: 'phuc', value: 30 },
    ]

    return (
        <div className="component_page">
            ComponentPage
            <p>Viết các Components chung tại đây</p>
            <h1 className="my-3 font-[800]">Avatar</h1>
            <div className="flex gap-5">
                <div>
                    <h1 className="mt-3 font-bold">Avatar sm</h1>
                    <AvatarGroup avatars={avatars} maxVisible={2} className="mt-3" size="sm" />
                </div>
                <div>
                    <h1 className="mt-3 font-bold">Avatar md</h1>
                    <AvatarGroup avatars={avatars} maxVisible={3} className="mt-3" size="md" upload badge={true} />
                </div>
                <div>
                    <h1 className="mt-3 font-bold">Avatar lg</h1>
                    <AvatarGroup avatars={avatars} maxVisible={4} className="mt-3" size="lg" upload />
                </div>
            </div>
            <h1 className="my-3 font-[800]">Button</h1>
            <div>
                <Button className="m-1" size="lg" color="primary">
                    btn-primary-lg
                </Button>
                <Button className="m-1" size="md" color="primary">
                    btn-primary-md
                </Button>
                <Button className="m-1" size="sm" variant="outline" color="primary">
                    btn-outline-primary
                </Button>
                <Button className="m-1 font-bold" color="red" size="sm">
                    btn-red
                </Button>
                <Button disableRipple className="m-1" color="red" variant="outline" size="sm">
                    btn-outline-red
                </Button>
                <Button className="m-1" size="sm">
                    btn-basic-sm
                </Button>
                <Button className="m-1" color="grey" size="sm">
                    btn-grey
                </Button>
                <Button className="m-1 p-0 font-bold" color="grey" variant="outline" size="sm">
                    btn-outline-grey
                </Button>
                <Button className="m-1 p-1 text-xs" variant="none" color="priamry">
                    btn-none
                    <Icon className="ml-1 " icon={APP_ICON.i_pen} />
                </Button>
                <h1 className="my-3 font-[800]">Button icon</h1>
                <Button className="m-1" size="lg" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <Button className="m-1" size="md" variant="outline" color="grey" icon>
                    <Icon icon={APP_ICON.i_cake} />
                </Button>
                <Button className="m-1" color="grey" icon>
                    <Icon icon={APP_ICON.i_ecommerce} />
                </Button>
                <Button className="m-1" color="primary" icon>
                    <Icon icon={APP_ICON.i_arrow_down_box_1} />
                </Button>
                <Button className="m-1" color="grey" icon variant="outline">
                    <Icon icon={APP_ICON.i_invoice} />
                </Button>
            </div>
            <h1 className="my-3 font-[800]">Status Bar</h1>
            <div>
                <StatusBar
                    className="bg-orange-100"
                    variant="blue"
                    handleCompleteClick={handleCompleteClick}
                    handleResetClick={handleResetClick}
                    status={status}
                ></StatusBar>
                <div> {status} %</div>
            </div>
            <Button onClick={handleCompleteClick}>Complete</Button>
            <Button onClick={handleResetClick}>Rest</Button>
            <h1 className="mt-3 font-bold">PopupUser</h1>
            <div>
                <PopupUser user={user} />
            </div>
            <h1 className="mt-3 font-bold">PopupNoti</h1>
            <div>
                <Button onClick={handlePopupNotiOpen} className="m-1" size="lg" color="grey" icon>
                    <Icon icon={APP_ICON.i_pen} />
                </Button>
                <PopupNoti
                    isOpenPopUp={popup.isOpen}
                    {...popup}
                    avatars={avatars}
                    names={names}
                    user={user}
                    position="bottom-right"
                />
            </div>
            <h1 className="mt-3 font-bold">Accordin</h1>
            <h1 className="mt-3 font-bold">Toast</h1>
            <div>
                <SnackbarProvider maxSnack={3}>
                    <Snackbar message="This is a success message!" variant="success" styleName="success" />
                    <Snackbar message="This is an error message!" variant="error" styleName="error" />
                    <Snackbar message="This is a warning message!" variant="warning" styleName="warning" />
                    <Snackbar message="This is an info message!" variant="info" styleName="info" />
                </SnackbarProvider>
            </div>
            <h1 className="mt-3 font-bold">Modal</h1>
            <h1 className="mt-3 font-bold">Upload image</h1>
            <div>
                <InputUpload listUpload={warehouseItem} />
            </div>
            <h1 className="mt-3 font-bold">Dropdown</h1>
            <div>
                <div>
                    <Dropdown list={listDrop} label="labelDropdown" onChange={(e) => setValueDrop(e.target.value)} />
                </div>
                <h1>value:{valueDrop} </h1>
            </div>
            <h1 className="mt-3 font-bold">Texfield</h1>
            <div>
                <div className="flex w-full gap-[2rem]">
                    <Textfield className="my-3 w-1/2" label="Username" type="text" />
                    <Textfield className="my-3 w-1/2" label="Password" type="password" />
                </div>
            </div>
        </div>
    )
}

export default ComponentPage
