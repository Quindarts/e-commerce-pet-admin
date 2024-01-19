import React from 'react'
import { CustomNoRowsOverlay, CustomTable } from './style'
import { Box, Pagination, Typography } from '@mui/material'

function Table(props) {
    const {
        hasCheckbox,
        hasPanigation,
        onChangeCol,
        onChangeRow,
        pageSize,
        currentPage = 1,
        totalPage,
        className,
        height,
        label,
        handleChangePanigation,
        ...rest
    } = props
    return (
        <Box className="w-full">
            {label && <Typography className="font-bold text-[1rem] text-[#464f6c]">{label}</Typography>}
            <CustomTable
                {...rest}
                rowHeight={80}
                className={`${className} border-none`}
                checkboxSelection={hasCheckbox}
                autoHeight
                // sx={{ height: 80 * (pageSize + 2) }}
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                hideFooter
            />

            <Box className="mt-4 flex w-full items-center justify-end">
                {hasPanigation && (
                    <Pagination
                        count={totalPage}
                        shape="rounded"
                        page={currentPage}
                        onChange={handleChangePanigation}
                    />
                )}
            </Box>
        </Box>
    )
}

export default Table
