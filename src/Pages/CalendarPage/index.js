// import * as React from 'react'
// import Typography from '@mui/material/Typography'
// import Stack from '@mui/material/Stack'
// import IconButton from '@mui/material/IconButton'
// import ChevronLeft from '@mui/icons-material/ChevronLeft'
// import ChevronRight from '@mui/icons-material/ChevronRight'
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
// import Button from '../../Components/ui/Button/Button'
// import { CustomCalendarHeaderRoot } from './style'

// function CustomCalendarHeader(props) {
//     const { currentMonth, onMonthChange } = props
//     const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left')
//     const selectPreviousMonth = () => onMonthChange(currentMonth.subtract(1, 'month'), 'right')
//     return (
//         <CustomCalendarHeaderRoot>
//             <Stack spacing={1} direction="row">
//                 <Typography variant="body2">{currentMonth.format('MMMM YYYY')}</Typography>
//                 <IconButton onClick={selectPreviousMonth}>
//                     <ChevronLeft />
//                 </IconButton>
//                 <IconButton onClick={selectNextMonth}>
//                     <ChevronRight />
//                 </IconButton>
//             </Stack>
//             <Stack spacing={1} direction="row">
//                 <Button>+ Add Event</Button>
//             </Stack>
//         </CustomCalendarHeaderRoot>
//     )
// }

// export default function CalendarPage() {
//     return (
//         <DateCalendar
//             showDaysOutsideCurrentMonth
//             fixedWeekNumber={6}
//             slots={{
//                 calendarHeader: CustomCalendarHeader,
//             }}
//             slotProps={{

//             }}
//         />
//     )
// }
import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Calendar(props) {
    const { 
        className, 
        ...rest 
    } = props;

    return (
        <DateCalendar 
            className={className}
            {...rest}
        />
    );
}

export default Calendar;
