import * as React from 'react'
import clsx from 'clsx'
import useStyles from './style'
import { InputLabel, Box, MenuItem, Select } from '@mui/material'

const getOptionColorClasses = ({ selected, highlighted, disabled }) => {
    let classes = ''
    if (disabled) {
        classes += 'text-slate-400 dark:text-slate-700'
    } else {
        if (selected) {
            classes += ' bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-purple-50'
        } else if (highlighted) {
            classes += ' bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300'
        }
        classes += ' hover:dark:bg-slate-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900'
    }
    return classes
}

function Dropdown(props) {
    const { className = '', list, label, ...rest } = props
    const { classes } = useStyles({})
    return (
        <Box className={clsx(classes['root'], className)}>
            <InputLabel className={clsx(classes['label'])} shrink>
                {label}
            </InputLabel>
            <Select {...rest} className={clsx(classes['dropdown'])} defaultValue={list[0].value}>
                {list.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.title}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}

export default Dropdown
