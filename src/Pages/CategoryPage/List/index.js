import React, { Fragment, useEffect, useState } from 'react'
import TableCategory from '../Table'
import { Box, CircularProgress, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import { CustomListCategory } from './style'
import { formatTableCategory } from '../../../Utils/helper'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'
import Title from '../../../Components/ui/Title/Title'
import useCategory from '../../../hook/api/category'


const SEARCH_ENUM = {
    NAME: 'NAME',
    CODE: 'CODE',
}
const list = [
    { title: 'Name', value: SEARCH_ENUM.NAME },
    { title: 'Code', value: SEARCH_ENUM.CODE },
]
function ListCategoryPage(props) {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [valueSearchType, setValueSearchType] = useState(SEARCH_ENUM.NAME)
    const { category, isFetch, handleGetAllCategoryByParams } = useCategory()

    const navigate = useNavigate()

    useEffect(() => {
        handleGetAllCategoryByParams(6, page)
    }, [page])

    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        <Fragment>
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
                    {isFetch ? (
                        <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <TableCategory
                            className="w-97"
                            page={page}
                            rows={formatTableCategory(category.listByParams)}
                            handleChangePanigation={handleChangePanigation}
                        />
                    )}
                </Box>
            </CustomListCategory>
        </Fragment>
    )
}

export default ListCategoryPage
