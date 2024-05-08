import React, { useState } from 'react'
import Table from '../../../../../../../Components/ui/Table/Table'
import { COLOR } from '../../../../../../../Utils/Constants'

function TableInvoice() {
    const rows = [
        { id: '1', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
        { id: '2', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
        { id: '3', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
    ]
    const columns = [
        {
            field: 'name',
            headerName: 'Product',
            flex: 0.7,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 0.5,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            flex: 0.5,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'total',
            headerName: 'Total',
            flex: 0.5,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
    ]

    const [page, setPage] = useState(1)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    return (
        <Table
            hasCheckbox
            hasPanigation
            sx={{ width: '100%' }}
            columns={columns}
            rows={rows}
            totalPage={3}
            pageSize={3}
            currentPage={page}
            handleChangePanigation={handleChangePanigation}
        />
    )
}

export default TableInvoice
