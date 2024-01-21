import { Icon } from '@iconify/react'
import AvatarGroup from '../Components/ui/Avatar/AvatarGroup.js'
import Button from '../Components/ui/Button/Button.js'
import { APP_ICON, APP_ROUTER } from '../Utils/Constants.js'
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
import Avatar from '../Components/ui/Avatar/Avatar.js'
import { useSnackbar } from 'notistack'
import { Box, Typography, Zoom } from '@mui/material'
import Table from '../Components/ui/Table/Table.js'
import { Link } from 'react-router-dom'
import { BadgeWrapper } from '../Components/ui/Badge/Badge.js'

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
const dataTable = [
    {
        name: 'Nike Air Max 270',
        category: 'Shoe',
        stock: 'SKU',
        Price: '2000',
        Rate: '2000',
    },
]
const dataPie = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
]

const size = {
    width: 400,
    height: 200,
}
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
    const [optionModal, setOpTionModal] = useState('center')
    const listDrop = [
        { title: 'quang', value: 10 },
        { title: 'long', value: 20 },
        { title: 'phuc', value: 30 },
    ]
    const { enqueueSnackbar } = useSnackbar()

    const [open, setOpen] = useState(false)
    const handleOpen = (option) => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    function showTopRightSuccessSnackbar() {
        enqueueSnackbar('Success!', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'right' } })
    }

    function showBottomRightErrorSnackbar() {
        enqueueSnackbar('An error occurred', {
            variant: 'error',
            TransitionComponent: Zoom,
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        })
    }
    function showBottomLeftWarningSnackbar() {
        enqueueSnackbar('Warning', { variant: 'warning', anchorOrigin: { vertical: 'bottom', horizontal: 'left' } })
    }
    function showTopLeftInfoSnackbar() {
        enqueueSnackbar('Information', { variant: 'info', anchorOrigin: { vertical: 'top', horizontal: 'left' } })
    }
    function showBottomRightCustomSnackbar() {
        enqueueSnackbar('Custom Variant', {
            variant: 'customVariant',
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        })
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
    const [filteredRows, setFilteredRows] = useState(rows)
    return (
        <Box className="component_page">
            ComponentPage
            <Typography>Viết các Components chung tại đây</Typography>
            <Typography className="my-3 font-[800]">Avatar</Typography>
            <Box className="flex gap-5">
                <Box>
                    <Typography className="mt-3 font-bold">Avatar sm</Typography>
                    <AvatarGroup avatars={avatars} maxVisible={2} className="mt-3" size="sm" />
                </Box>
                <Box>
                    <Typography className="mt-3 font-bold">Avatar md</Typography>
                    <AvatarGroup avatars={avatars} maxVisible={3} className="mt-3" size="md" upload badge={true} />
                </Box>
                <Box>
                    <Typography className="mt-3 font-bold">Avatar lg</Typography>
                    <AvatarGroup avatars={avatars} maxVisible={4} className="mt-3" size="lg" upload />
                </Box>
            </Box>
            <Typography className="my-3 font-[800]">Button</Typography>
            <Box>
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
                <Typography className="my-3 font-[800]">Button icon</Typography>
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
            </Box>
            <Typography className="my-3 font-[800]">Status Bar</Typography>
            <Box>
                <StatusBar
                    variant="blue"
                    handleCompleteClick={handleCompleteClick}
                    handleResetClick={handleResetClick}
                    status={status}
                ></StatusBar>
                <Box> {status} %</Box>
            </Box>
            <Button onClick={handleCompleteClick}>Complete</Button>
            <Button onClick={handleResetClick}>Rest</Button>
            <Typography className="mt-3 font-bold">PopupUser</Typography>
            <Box>
                <PopupUser user={user} />
            </Box>
            <Typography className="mt-3 font-bold">PopupServ</Typography>
            <Box>
                <PopupServ avatars={avatars} names={names} />
            </Box>
            <Typography className="mt-3 font-bold">Accordin</Typography>
            <Typography className="mt-3 font-bold">Toast</Typography>
            <Box className="flex flex-wrap gap-3">
                <Button onClick={showTopRightSuccessSnackbar}>Default Top Right </Button>
                <Button onClick={showBottomRightErrorSnackbar}>Custom Icon Bottom Right </Button>
                <Button onClick={showBottomLeftWarningSnackbar}>Override Bottom Left </Button>
                <Button onClick={showTopLeftInfoSnackbar}>Overdrive Top Left </Button>
                <Button onClick={showBottomRightCustomSnackbar}>Custom Appear</Button>
            </Box>
            <Typography className="mt-3 font-bold">Modal</Typography>
            <Box className="flex flex-wrap gap-3">
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
            </Box>
            <Typography className="mt-3 font-bold">Select language</Typography>
            <Typography>{t('content.text')}</Typography>
            <Box>
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
                    rows={filteredRows}
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
            </Box>
            <Typography className="mt-3 font-bold">Texfield</Typography>
            <Box>
                <Box className="flex w-full gap-[2rem]">
                    <Textfield className="my-3 w-1/2" label="Username" type="text" />
                    <Textfield className="my-3 w-1/2" label="Password" type="password" />
                </Box>
            </Box>
            <Typography className="mt-3 font-bold">Dropdown</Typography>
            <Box>
                <Dropdown list={listDrop} label="labelDropdown" onChange={(e) => setValueDrop(e.target.value)} />
                <Typography>value:{valueDrop} </Typography>
            </Box>
            <Modal key={1} open={open} appearance={optionModal} handleClose={handleClose}></Modal>
        </Box>
    )
}

export default ComponentPage
