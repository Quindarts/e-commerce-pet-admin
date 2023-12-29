import React from 'react'
import { CustomNoRowsOverlay, CustomTable } from './style'

function Table(props) {
    const {
        hasCheckbox,
        hasPanigation,
        onChangeCol,
        onChangeRow,
        pageSize,
        currentPage,
        totalPage,
        className,
        ...rest
    } = props
    return (
        <CustomTable
            {...rest}
            checkboxSelection={hasCheckbox}
            rows={[]}
            autoHeight
            slots={{ noRowsOverlay: CustomNoRowsOverlay }}
            sx={{ '--DataGrid-overlayHeight': '300px' }}
        >
            Table
        </CustomTable>
    )
}

export default Table
