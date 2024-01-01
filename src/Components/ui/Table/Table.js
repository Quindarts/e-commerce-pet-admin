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
            className={className}
            checkboxSelection={hasCheckbox}
            autoHeight
            slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        ></CustomTable>
    )
}

export default Table
