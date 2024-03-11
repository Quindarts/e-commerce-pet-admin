import React, { Fragment, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import Avatar from '../../../Components/ui/Avatar/Avatar'
import EditRole from '../Modal/EditRole'
import Delete from '../Modal/Delete'
import EditUser from '../Modal/EditUser'
import Modal from '../../../Components/ui/Modal/Modal'
import Active from '../Modal/Active'

function TableUserManager(props) {
    const { handleChangePanigation, currentPage = 1, className = '', rows, totalPage, hasPanigation } = props
    const [openEditRole, setOpenEditRole] = useState({ isOpen: false, user_id: '' })
    const [openEditUser, setOpenEditUser] = useState({ isOpen: false, user_id: '' })
    const [openDelete, setOpenDelete] = useState({ isOpen: false, user_id: '' })
    const [openActive, setOpenActive] = useState({ isOpen: false, user_id: '' })

    const handleOpenEditUserModal = (id) => {
        setOpenEditUser({ isOpen: true, user_id: id })
    }
    const handleCloseEditUserModal = () => {
        setOpenEditUser({ ...openEditUser, isOpen: false })
    }
    const handleOpenEditRoleModal = (id) => {
        setOpenEditRole({ isOpen: true, user_id: id })
    }
    const handleCloseEditRoleModal = () => {
        setOpenEditRole({ ...openEditRole, isOpen: false })
    }
    const handleOpenDeleteModal = (id) => {
        setOpenDelete({ isOpen: true, user_id: id })
    }
    const handleCloseDeleteModal = () => {
        setOpenDelete({ ...openDelete, isOpen: false })
    }
    const handleOpenActiveModal = (id) => {
        setOpenActive({ isOpen: true, user_id: id })
    }
    const handleCloseActiveModal = () => {
        setOpenActive({ ...openActive, isOpen: false })
    }
    const columns = [
        {
            field: 'details',
            headerName: 'User detail',
            flex: 1.3,
            renderCell: (params) => (
                <Box className="flex gap-2">
                    <Box>
                        <Avatar
                            size="md"
                            src="https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo="
                        />
                    </Box>
                    <Box>
                        <Typography className="text-sm font-[700] text-slate-600">
                            {params.row.first_name} {params.row.last_name}
                        </Typography>
                        <button className="rounded-xl text-sm font-[500] text-orange-400">{params.row.role}</button>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1.3,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box className=" text-[14px] font-[500] text-slate-500">{params.row.email}</Box>,
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box className="text-sm font-[500] text-slate-500">{params.formattedValue}</Box>,
        },

        {
            field: 'dateOfBirth',
            headerName: 'Date',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },

        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Button
                    onClick={() => handleOpenActiveModal(params.id)}
                    className={`cursor-pointer rounded-[20px] ${
                        params.row.isActive
                            ? 'bg-emerald-100 px-3 py-1 text-green-600'
                            : 'bg-red-100 px-3 py-1 text-red-600'
                    }`}
                >
                    {params.row.isActive ? 'active' : 'unactive'}
                </Button>
            ),
        },
        {
            field: 'action',
            headerName: 'Action',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button
                        onClick={() => handleOpenEditRoleModal(params.id)}
                        size="md"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon="bytesize:user" className="text-purple-500" />
                    </Button>
                    <Button
                        onClick={() => handleOpenEditUserModal(params.id)}
                        size="md"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon={APP_ICON.i_pen} className="text-sky-500" />
                    </Button>
                    <Button
                        onClick={() => handleOpenDeleteModal(params.id)}
                        size="md"
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
                    className={`${className}`}
                    page={currentPage}
                    totalPage={totalPage}
                    rows={rows}
                    handleChangePanigation={handleChangePanigation}
                    hasPanigation
                    pageSize={6}
                    columns={columns}
                />
            </Box>

            <Modal open={openEditRole.isOpen} onClose={handleCloseEditRoleModal}>
                <EditRole handleCloseEditRoleModal={handleCloseEditRoleModal} id={openEditRole.user_id} />
            </Modal>
            <Modal open={openDelete.isOpen} onClose={handleCloseDeleteModal}>
                <Delete handleCloseDeleteModal={handleCloseDeleteModal} id={openDelete.user_id} />
            </Modal>
            <Modal open={openEditUser.isOpen} onClose={handleCloseEditUserModal}>
                <EditUser handleCloseEditUserModal={handleCloseEditUserModal} id={openEditUser.user_id} />
            </Modal>
            <Modal open={openActive.isOpen} onClose={handleCloseActiveModal}>
                <Active handleCloseActiveModal={handleCloseActiveModal} id={openActive.user_id} />
            </Modal>
        </Fragment>
    )
}

export default TableUserManager