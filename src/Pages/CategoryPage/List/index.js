import React, { useState } from 'react'
import TableCategory from '../Table'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import SearchBar from '../../../Components/ui/Search/SearchBar'

const rows = []
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
        <Box className="w-full">
            <Box className="my-3 flex w-full flex-wrap items-center justify-between">
                <Box className="md:w-[50%] md:my-0 my-2 w-[100%]">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={query}
                        className="w-full p-1"
                        placeholder={`Search by ${valueSearchType} `}
                    />
                </Box>
                <Box className=" flex h-[2.5rem] flex-wrap justify-end gap-2">
                    <Dropdown
                        className="w-[13rem]"
                        size="sm"
                        list={list}
                        onChange={(e) => setValueSearchType(e.target.value)}
                    />
                    <Button className="w-[8rem]" color="primary">
                        Filter
                    </Button>
                    <Button className="w-[13rem]" color="red">
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
        </Box>
    )
}

export default ListCategoryPage
