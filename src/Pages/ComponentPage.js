import { Icon } from '@iconify/react'
import AvatarGroup from '../Components/ui/Avatar/AvatarGroup.js'
import Button from '../Components/ui/Button/Button.js'
import { APP_ICON } from '../Utils/Constants.js'
import Textfield from '../Components/ui/Textfield/Textfield.js'
import PopupUser from '../Components/ui/Popup/PopupUser.js'
import StatusBar from '../Components/ui/StatusBar/StatusBar.js'
import { useState } from 'react'
import Dropdown from '../Components/ui/Dropdown/Dropdown.js'
import Modal from '../Components/ui/Modal/Modal.js'
import InputUpload from '../Components/ui/InputUpload/InputUpload.js'
import PopupServ from '../Components/ui/Popup/PopupServ.js'
import { useTranslation } from 'react-i18next'
import i18n from '../translation/i18n.js'
import PopupLang from '../Components/ui/Popup/PopupLang.js'

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
    },
    {
        name: 'Bill',
    },
    {
        name: 'Ben',
    },
    { name: '' },
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
const listLanguage = [
    { title: 'Vietnamese', value: 'vi' },
    { title: 'English', value: 'en' },
]

function ComponentPage() {
    const demo = 50
    const [status, setStatus] = useState(demo)
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

    const [open, setOpen] = useState(false)
    const [optionModal, setOpTionModal] = useState('center')

    const handleOpen = (option) => {
        setOpen(true)
        setOpTionModal(option)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleChangeLanguage = (value) => {
        i18n.changeLanguage(value)
    }
    const { t } = useTranslation()

    const [page, setPage] = useState(1)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const rows = [
        {
            id: '1',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '2',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: ' Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '3',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
        },
        {
            id: '4',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: ' Dog ',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 70000,
            brand: 'Jolly',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
        {
            id: '5',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: ' Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 60000,
            brand: 'Jolly Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
        {
            id: '6',
            date: 'Jan 10, 2024',
            code: 'HLNBCKHJ',
            detail: {
                name: 'Beef Dog Food',
                img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
                desc: 'Amazon lins',
            },
            price: 50000,
            brand: ' Pet',
            category: 'Food',
            status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
        },
    ]
    const columns = [
        {
            field: 'detail',
            headerName: 'Product',
            flex: 2,
            renderCell: (params) => (
                <Box className="flex gap-3">
                    <img className="h-[50px] w-[50px]" src={params.formattedValue.img} alt="" />
                    <Box>
                        <Typography className="text-[14px] font-bold text-gray-600">
                            {params.formattedValue.name}
                        </Typography>
                        <Typography variant="h10" className="font-500 text-gray-[#5f748d]">
                            {params.formattedValue.desc}
                        </Typography>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,

            renderCell: (params) => (
                <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
            ),
        },
        {
            field: 'brand',
            headerName: 'Brand',
            flex: 1,
        },

        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',

            flex: 1,
            renderCell: (params) => <Box className="font-500 px-7 py-1">{params.row.status}</Box>,
        },
    ]

    const data = [
        {
            Product: 'Light Airpod',
            Producer: 'Apple',
            ID: 'PD0001',
            Category: 'Air Pod',
            Cost: '$432',
            Extra: 'Yes',
            Priority: 'High',
            Edit: 'Edit',
        },
        {
            Product: 'Air Pod 2',
            Producer: 'Apple',
            ID: 'PD0002',
            Category: 'Air Pod',
            Cost: '$432',
            Extra: 'No',
            Priority: 'Medium',
            Edit: 'Edit',
        },
        {
            Product: 'Nike Shoe',
            Producer: 'Nike',
            ID: 'PD0003',
            Category: 'Shoe',
            Cost: '$123',
            Extra: 'No',
            Priority: 'Low',
            Edit: 'Edit',
        },
        {
            Product: 'Light Airpod',
            Producer: 'Apple',
            ID: 'PD0004',
            Category: 'Air Pod',
            Cost: '$432',
            Extra: 'Yes',
            Priority: 'High',
            Edit: 'Edit',
        },
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
            <h1 className="mt-3 font-bold">PopupServ</h1>
            <div>
                <PopupServ avatars={avatars} names={names} />
            </div>
            <h1 className="mt-3 font-bold">Accordin</h1>
            <h1 className="mt-3 font-bold">Snackbar</h1>
            <h1 className="mt-3 font-bold">Modal</h1>
            <div className="flex flex-wrap gap-3">
                <Button variant="contained" onClick={() => handleOpen('bottom_left')}>
                    Modal bottom left
                </Button>
                <Button variant="contained" onClick={() => handleOpen('top')}>
                    Modal top
                </Button>
                <Button variant="contained" onClick={() => handleOpen('top_right')}>
                    Modal top_right
                </Button>
                <Button variant="contained" onClick={() => handleOpen('left')}>
                    Modal left
                </Button>
                <Button variant="contained" onClick={() => handleOpen('right')}>
                    Modal right
                </Button>
                <Button variant="contained" onClick={() => handleOpen('bottom_right')}>
                    Modal bottom_right
                </Button>
                <Button variant="contained" onClick={() => handleOpen('bottom')}>
                    Modal bottom
                </Button>
                <Button variant="contained" onClick={() => handleOpen('top_left')}>
                    Modal top_left
                </Button>
                <Button variant="contained" onClick={() => handleOpen('center')}>
                    Modal center
                </Button>
            </div>
            <h1 className="mt-3 font-bold">Select language</h1>
            <h1>{t('content.text')}</h1>
            <div>
                <PopupLang list={listLanguage} handleChangeLanguage={handleChangeLanguage} />
            </Box>
            <Typography className="mt-3 font-bold">Badge</Typography>
            <Box>
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    size="sm"
                    badge={{ status: 'online', color: 'green', position: 'top-left', animation: 'blink-badge' }}
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    size="md"
                    badge={{ status: 'offline', position: 'top-right' }}
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    size="lg"
                    badge={{ status: 'private', position: 'bottom-right' }}
                />
            </Box>
            <Box className="my-3">
                Trang hiện tại: {page}
                <Table
                    hasCheckbox
                    hasPanigation
                    label="Popular Products"
                    className=" w-full"
                    columns={columns}
                    rows={rows}
                    totalPage={3}
                    pageSize={3}
                    currentPage={page}
                    handleChangePanigation={handleChangePanigation}
                />
            </Box>
            <Box>
                <Link to={APP_ROUTER.LOGIN}>
                    <button>Go to Login Page</button>
                </Link>
            </Box>
            <Typography className="mt-3 font-bold">U pload image</Typography>
            <Box>
                <InputUpload listUpload={warehouseItem} />
            </div>
            <h1 className="mt-3 font-bold">Dropdown</h1>
            <div>
                <Dropdown list={listDrop} label="labelDropdown" onChange={(e) => setValueDrop(e.target.value)} />
                <h1>value:{valueDrop} </h1>
            </div>
            <h1 className="mt-3 font-bold">Texfield</h1>
            <div>
                <div className="flex w-full gap-[2rem]">
                    <Textfield className="my-3 w-1/2" label="Username" type="text" />
                    <Textfield className="my-3 w-1/2" label="Password" type="password" />
                </div>
            </div>
            <Modal size="edit" appearance="center" open={open} handleClose={handleClose}></Modal>
        </div>
    )
}

export default ComponentPage
