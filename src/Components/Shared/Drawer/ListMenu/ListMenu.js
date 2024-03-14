import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { APP_ICON, APP_ROUTER } from '../../../../Utils/Constants'
import { CustomListMenu } from './style'
import { useNavigate } from 'react-router-dom'
function ListMenu(props) {
    const { openNav, isHovered } = props
    const [openProduct, setOpenProduct] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)
    const [openUser, setOpenUser] = useState(false)
    const navigate = useNavigate()
    const checkDetailTitle = isHovered === true || openNav === true
    return (
        <CustomListMenu component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={() => navigate(APP_ROUTER.HOME)}>
                <ListItemIcon>
                    <Icon width={20} icon={APP_ICON.i_company} />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Dashboard" />}
            </ListItemButton>
            {/** Product  */}

            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.PRODUCT)
                    setOpenProduct(!openProduct)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon={APP_ICON.product} />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager Product" />}
                {checkDetailTitle && (
                    <div>{openProduct ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openProduct} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton 
                        onClick={() => {
                            navigate(APP_ROUTER.ADD_PRODUCT)
                            setOpenCategory(!openProduct)
                        }}
                        sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:box-add" />
                            </ListItemIcon>
                            {checkDetailTitle && <ListItemText primary="Add product" />}
                        </ListItemButton>
                        <ListItemButton
                        onClick={() => {
                            navigate(APP_ROUTER.PRODUCT_LIST)
                            setOpenCategory(!openProduct)
                        }}
                        sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Icon width={20} icon="quill:inbox-list" />
                            </ListItemIcon>
                            <ListItemText primary="List product" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
            {/** Category */}
            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.CATEGORY_LIST)
                    setOpenCategory(!openCategory)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon="maki:warehouse" />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager Category" />}
                {checkDetailTitle && (
                    <div>{openCategory ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.CATEGORY_ADD)
                                setOpenCategory(!openCategory)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:box-add" />
                            </ListItemIcon>
                            {checkDetailTitle && <ListItemText primary="Add category" />}
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.CATEGORY_LIST)
                                setOpenCategory(!openCategory)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="quill:inbox-list" />
                            </ListItemIcon>
                            <ListItemText primary="List category" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}

            {/** Order  */}

            <ListItemButton
                onClick={() => {
                    navigate(APP_ROUTER.ORDER)
                    setOpenOrder(!openOrder)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon="material-symbols-light:order-approve-outline" />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager Order" />}
                {checkDetailTitle && (
                    <div>{openOrder ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse id="order_item" in={openOrder} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Icon width={20} icon="system-uicons:create" />
                            </ListItemIcon>
                            <ListItemText primary="Add Order" />
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Icon icon="clarity:list-line" width={20} />
                            </ListItemIcon>
                            <ListItemText primary="List Order" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
            {/** User */}
            <ListItemButton
                onClick={() => {
                    setOpenUser(!openUser)
                }}
            >
                <ListItemIcon>
                    <Icon width={20} icon="clarity:user-line" />
                </ListItemIcon>
                {checkDetailTitle && <ListItemText primary="Manager User" />}
                {checkDetailTitle && (
                    <div> {openUser ? <ExpandMore /> : <Icon icon="mingcute:right-line" width={23} />}</div>
                )}
            </ListItemButton>

            {checkDetailTitle && (
                <Collapse in={openUser} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.USER_ADD)
                                setOpenCategory(!openUser)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="streamline:user-add-plus" />
                            </ListItemIcon>
                            <ListItemText primary="Add User" />
                        </ListItemButton>
                    </List>

                    <List component="div" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate(APP_ROUTER.USER_LIST)
                                setOpenCategory(!openUser)
                            }}
                            sx={{ pl: 4 }}
                        >
                            <ListItemIcon>
                                <Icon width={20} icon="ph:user-list" />
                            </ListItemIcon>
                            <ListItemText primary="List User" />
                        </ListItemButton>
                    </List>
                </Collapse>
            )}
        </CustomListMenu>
    )
}

export default ListMenu
