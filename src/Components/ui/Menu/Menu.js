import * as React from 'react'
import { List, ListItemButton, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { listItemButtonStyles, Card } from './style'

export default function Menu({ menuItems, className }) {
    const [selected, setSelected] = React.useState(menuItems[0].label)

    return (
        <Box sx={{ display: 'flex' }} className={className}>
            <List sx={Card}>
                {menuItems.map((item) => (
                    <ListItemButton
                        key={item.label}
                        selected={selected === item.label}
                        onClick={() => setSelected(item.label)}
                        sx={listItemButtonStyles}
                    >
                        <ListItemIcon className="mr-2 min-w-[16px]">
                            {' '}
                            <Icon width={16} icon={item.icon} />
                        </ListItemIcon>

                        <ListItemText className="font-[500]">{item.label}</ListItemText>
                    </ListItemButton>
                ))}
            </List>
            <Box sx={{ marginLeft: '24px' }}>
                {menuItems.map((item) => {
                    if (selected === item.label) {
                        return <div key={item.label}>{item.details}</div>
                    }
                    return null
                })}
            </Box>
        </Box>
    )
}
