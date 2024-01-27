import React, { Fragment, useEffect, useState } from 'react'
import TableCategory from '../Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import { CustomListCategory } from './style'
import { apiGetCategoryByParams } from '../../../services/api-category'
import { formatTableCategory } from '../../../Utils/helper'
import Progress from '../../../Components/ui/Progress/Progress'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import Title from '../../../Components/ui/Title/Title'
const list = [
    { title: 'Name', value: 'name' },
    { title: 'Code', value: 'code' },
]
function ListCategoryPage() {
    const [page, setPage] = useState(1)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const [query, setQuery] = useState('')
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    const [valueSearchType, setValueSearchType] = useState('name')
    const [data, setData] = useState([])
    useEffect(() => {
        apiGetCategoryByParams()
            .then((data) => {
                setData([...data.listCategory])
            })
            .catch((err) => console.log(err))
    }, [])
    const rows = formatTableCategory(data)
    const navigate = useNavigate()
    return (
        <Fragment>
            {rows < 1 && <Progress />}
            <CustomListCategory className="flew w-[100%] text-gray-700">
                <Title icon="maki:warehouse">Category Table Manager</Title>
                <Box className="contain my-3 flex flex-wrap">
                    <Box className="contain__left h-[2.5rem]">
                        <SearchBar
                            handleQuery={handleQuery}
                            query={query}
                            className="w-full p-[2px]"
                            placeholder={`Search by ${valueSearchType} `}
                        />
                    </Box>
                    <Box className="contain__right flex h-[2.5rem] flex-wrap justify-end gap-2">
                        <Dropdown
                            className="w-[10rem]"
                            size="sm"
                            list={list}
                            onChange={(e) => setValueSearchType(e.target.value)}
                        />
                        <Button className="w-[6rem]" color="primary">
                            Filter
                        </Button>
                        <Button onClick={() => navigate(APP_ROUTER.CATEGORY_ADD)} className="w-[10rem]" color="red">
                            Add category
                        </Button>
                    </Box>
                </Box>
                <Box className="my-5 w-full">
                    <TableCategory
                        className="w-97"
                        page={page}
                        rows={rows}
                        handleChangePanigation={handleChangePanigation}
                    />
                </Box>
            </CustomListCategory>
        </Fragment>
    )
}

export default ListCategoryPage
