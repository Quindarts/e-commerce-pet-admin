import React, { useState } from 'react'
import TableCategory from '../Table'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import { CustomListCategory } from './style'

const rows = [
    {
        id: 1,
        name: 'dogs fresh & frozen food',
        code: 'DEFDK7',
        total: '1000',
        description: 'This ',
        status: 'active',
    },
]
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

    return (
        <CustomListCategory className="flew w-[100%] ">
            <Box className="contain my-3 flex flex-wrap">
                <Box className="contain__left h-[2.5rem]">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={query}
                        className=" w-full p-[2px]"
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
                    <Button className="w-[10rem]" color="red">
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
            </Box>{' '}
        </CustomListCategory>
    )
}

export default ListCategoryPage
