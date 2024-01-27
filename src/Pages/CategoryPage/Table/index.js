import React, { Fragment, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import { APP_ICON } from '../../../Utils/Constants'
import Button from '../../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'
import Modal from '../../../Components/ui/Modal/Modal'
import ModalEdit from '../Modal/ModalEdit'
import ModalDelete from '../Modal/ModalDelete'

function TableCategory(props) {
    const { handleChangePanigation, page, rows } = props
    const [openCategory, setOpenCategory] = useState({ isOpen: false, category_id: '' })
    const [openDelete, setOpenDelete] = useState({ isOpen: false, delete_id: '' })

    const handleOpenEditModal = (id) => {
        setOpenCategory({ isOpen: true, category_id: id })
    }
    const handleCloseEditModal = () => {
        setOpenCategory({ ...openCategory, isOpen: false })
    }
    const handleOpenDeleteModal = (id) => {
        setOpenDelete({ isOpen: true, delete_id: id })
    }
    const handleCloseDeleteModal = () => {
        setOpenDelete({ ...openDelete, isOpen: false })
    }

    const columns = [
        {
            field: 'name',
            headerName: 'Category name',
            flex: 2,
        },
        {
            field: 'code',
            headerName: 'Code',
            flex: 1,

            renderCell: (params) => (
                <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
            ),
        },
        {
            field: 'total',
            headerName: 'Total',
            flex: 1,
        },

        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button
                        onClick={() => {
                            console.log(params.id)
                            handleOpenEditModal(params.id)
                        }}
                        size="lg"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon={APP_ICON.i_pen} className="text-sky-500" />
                    </Button>
                    <Button
                        onClick={() => handleOpenDeleteModal(params.id)}
                        size="lg"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon="mdi:bin-outline" className="text-red-400" />
                    </Button>
                </Box>
            ),
        },
    ]
    return (
        <Fragment>
            <Box>
                <Table
                    hasCheckbox
                    hasPanigation
                    // label="Category table"
                    className=" w-full"
                    columns={columns}
                    rows={rows}
                    totalPage={3}
                    pageSize={6}
                    currentPage={page}
                    handleChangePanigation={handleChangePanigation}
                />
            </Box>
            <Modal open={openCategory.isOpen} appearance="center" handleClose={handleCloseEditModal}>
                <ModalEdit sx={{ width: '100%' }} category_id={openCategory.category_id} />
            </Modal>
            <Modal open={openDelete.isOpen} appearance="center" handleClose={handleCloseDeleteModal}>
                <ModalDelete />
            </Modal>
        </Fragment>
    )
}

export default TableCategory
