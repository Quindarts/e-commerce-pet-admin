import { Box } from '@mui/material'
import React, { useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { useNavigate } from 'react-router-dom'
import TableUserManager from '../Table'
import Title from '../../../Components/ui/Title/Title'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { CustomListUser } from './style'

const SEARCH_ENUM_USER = {
    NAME: 'name',
    CODE: 'code',
    EMAIL: 'email',
    PHONE: 'phone number',
}
const list = [
    { title: 'Name', value: SEARCH_ENUM_USER.NAME },
    { title: 'Code', value: SEARCH_ENUM_USER.CODE },
    { title: 'Email', value: SEARCH_ENUM_USER.EMAIL },
    { title: 'Phone', value: SEARCH_ENUM_USER.PHONE },
]
function ListUserPage() {
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeRender, setTypeRender] = useState('')
    const [typeSearch, setTypeSearch] = useState('')
    const navigate = useNavigate()
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const handleQuery = (event) => {
        setKeywords(event.target.value)
    }
    const rows = [
        {
            id: 1,
            userName: 'ownerPet123',
            password: 'U2FsdGVkX18+Os3sN3O6JnLByZY81zBCUVIcJgJOCYU=',
            email: 'quag82thcspb@gmail.com',
            first_name: 'Le',
            last_name: 'Minh Quang',
            phoneNumber: '0364835692',
            dateOfBirth: '19/02/2003',
            address: 'Go Vap, HCM',
            rewardPoints: 0,
            role: 'owner',
            isActive: true,
            __v: 0,
        },
    ]
    return (
        <CustomListUser className="flew w-full flex-wrap">
            <Title icon="simple-line-icons:user">User Table Manager</Title>
            <Box className="contain my-3 flex flex-wrap">
                <Box className="contain__left flex h-[2.5rem] justify-between">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={keywords}
                        className=" p-[2px] lowercase"
                        placeholder={`Search by ${typeSearch} `}
                    />
                </Box>
                <Box className="contain__right flex h-[2.5rem] flex-wrap justify-end gap-2">
                    <Dropdown
                        className="w-[8rem]"
                        size="sm"
                        list={list}
                        onChange={(e) => setTypeSearch(e.target.value)}
                    />
                    <Button color="primary">
                        Filter
                        <Icon className="mx-1" width={20} icon="fluent-mdl2:filter-descending" />
                    </Button>
                    <Button color="yellow">
                        Clear
                        <Icon className="mx-1" width={20} icon="ant-design:clear-outlined" />
                    </Button>
                    <Button onClick={() => navigate(APP_ROUTER.USER_ADD)} color="red">
                        Add
                        <Icon className="mx-[2px]" width={20} icon={APP_ICON.i_plus} />
                    </Button>
                    <Button color="green" disabled>
                        Export
                        <Icon className="mx-1" width={20} icon="ph:export" />
                    </Button>
                </Box>
            </Box>
            <Box className="my-5 w-full">
                <TableUserManager rows={rows} page={page} handleChangePanigation={handleChangePanigation} />
            </Box>
        </CustomListUser>
    )
}

export default ListUserPage
