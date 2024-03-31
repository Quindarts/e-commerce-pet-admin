import * as React from 'react'
import { styled } from '@mui/material/styles'
import { COLOR } from '../../../Utils/Constants'
import { PickersLayout, DesktopDatePicker } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
function Calendar(props) {
    const { className, ...rest } = props

    const StyledPickersLayout = styled(PickersLayout)({
        '.MuiDateCalendar-root': {
            color: COLOR.light_blue,
            borderRadius: '40px',
            borderColor: COLOR.light_blue,
            backgroundColor: COLOR.white,
        },
        '.MuiPickersCalendarHeader-root': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiPickersCalendarHeader-label': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiPickersCalendarHeader-labelContainer': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiPickersCalendarHeader-switchViewButton': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            borderColor: '#2196f3',
            backgroundColor: COLOR.white,
        },
        '.MuiPickersCalendarHeader-switchViewIcon': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiDayCalendar-root': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiDayCalendar-weekDayLabel': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiDayCalendar-weekContainer': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiDayCalendar-weekNumberLabel': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiDayCalendar-weekNumber': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiSvgIcon-root': {
            color: COLOR.light_blue,
        },
        '.MuiPickersDay-root': {
            color: COLOR.light_blue,
        },
        '.MuiPickersDay-today': {
            color: COLOR.white,
            borderRadius: '20px',
            border: '0px solid',
            backgroundColor: COLOR.blue,
        },

        '.MuiPickersMonth-root': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.MuiPickersMonth-monthButton': {
            color: COLOR.light_blue,
            borderRadius: '20px',
            backgroundColor: COLOR.white,
        },
        '.Mui-selected MuiPickersDay-dayWithMargin': {
            color: COLOR.white,
            borderRadius: '20px',
            backgroundColor: COLOR.light_blue,
        },
    })
    return (
        <DesktopDatePicker
            slots={{
                layout: StyledPickersLayout,
            }}
        />
    )
}

export default Calendar
