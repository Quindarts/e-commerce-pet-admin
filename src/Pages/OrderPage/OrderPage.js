import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Button from '../../Components/ui/Button/Button.js'
import OrderPageTable from './Table/index.js'
import OrderDetails from './Modal/OrderDetails.js'
import SearchBar from '../../Components/ui/Search/SearchBar.js'
import { APP_ROUTER } from '../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../Components/ui/Dropdown/Dropdown.js'
import { APP_ICON } from '../../Utils/Constants.js'
import { Icon } from '@iconify/react'
import Title from '../../Components/ui/Title/Title.js'
export const SEARCH_ENUM = {
    NAME: 'name',
    CODE: 'code',
}
const RENDER_LIST_CATEGORY_ENUM = {
    ALL: 'all',
    FILTER: 'filter',
    SEARCH: 'search',
}

const OrderPage = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    const [typeRender, setTypeRender] = useState(RENDER_LIST_CATEGORY_ENUM.ALL)
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeSearch, setTypeSearch] = useState(SEARCH_ENUM.NAME)
    const [productsUpdated, setProductsUpdated] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const list = [
        { title: 'Name', value: SEARCH_ENUM.NAME },
        { title: 'Code', value: SEARCH_ENUM.CODE },
    ]
    const hanldeClearChoiceSearchQuery = () => {
        setKeywords('')
        setTypeRender(RENDER_LIST_CATEGORY_ENUM.ALL)
        setTypeSearch(SEARCH_ENUM.NAME)
        setPage(1)
    }

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://e-commerce-pet-server-quindarts.vercel.app/products?offset=4&limit=4')
            const json = await response.json()

            setProducts(json.list.map((product) => ({ ...product, id: product._id })))
        } catch (error) {
            console.error('Failed to fetch products:', error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [productsUpdated])

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
            <Title icon="material-symbols-light:order-approve-outline">Order Table Manager</Title>
            <Box className="contain my-3 flex flex-wrap justify-between gap-4">
                <Box className="contain__left h-[2.5rem] ">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={keywords}
                        className=" p-[2px] lowercase"
                        placeholder={`Find ${typeSearch} `}
                    />
                </Box>
                <Box className="contain__right  flex h-[2.5rem] flex-wrap justify-end gap-2">
                    <Dropdown
                        className="w-[6rem]"
                        size="sm"
                        list={list}
                        onChange={(e) => setTypeSearch(e.target.value)}
                    />
                    <Button color="primary">
                        Filter
                        <Icon className="mx-1" width={20} icon="fluent-mdl2:filter-descending" />
                    </Button>
                    <Button color="yellow" onClick={hanldeClearChoiceSearchQuery}>
                        Clear
                        <Icon className="mx-1" width={20} icon="ant-design:clear-outlined" />
                    </Button>
                    <Button onClick={() => navigate(APP_ROUTER.CATEGORY_ADD)} color="red">
                        Add
                        <Icon className="mx-[2px]" width={20} icon={APP_ICON.i_plus} />
                    </Button>
                    <Button color="green" disabled>
                        Export
                        <Icon className="mx-1" width={20} icon="ph:export" />
                    </Button>
                </Box>
            </Box>

            <OrderPageTable page={page} products={products} handleChangePanigation={handleChangePanigation} />
            <OrderDetails />
        </Box>
    )
}

export default OrderPage
