import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import EditModal from '../Modal/EditModal.js'
import ActiveModal from '../Modal/ActiveModal.js'
import SearchBar from '../../../Components/ui/Search/SearchBar.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import TableProductList from '../Table/index.js'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import { Icon } from '@iconify/react'
import { CustomListProduct } from './style.js'
import Title from '../../../Components/ui/Title/Title.js'

export const SEARCH_ENUM = {
    NAME: 'name',
    CODE: 'code',
    
}

const RENDER_LIST_PRODUCT_ENUM = {
    ALL: 'all',
    FILTER: 'filter',
    SEARCH: 'search',
}
export const FILTER_ENUM = {
    HIGH_PRICE: 'high_price',
    LOW_PRICE : 'low_price',
    NAME_A_Z : 'a_z',
    NAME_Z_A : 'z_a',
    BEST_RATING : 'best_rating',
    LOWER_RATING :'lower_rating',
    MOST_AVAIABLE:'most_avaiable'
}
const listSearch = [
    { title: 'Name', value: SEARCH_ENUM.NAME },
    { title: 'Code', value: SEARCH_ENUM.CODE },
]
const listFilter = [
    { title: 'Name A-Z', value: FILTER_ENUM.NAME_A_Z },
    { title: 'Name Z-A', value: FILTER_ENUM.NAME_Z_A },
    { title: 'High Price', value: FILTER_ENUM.HIGH_PRICE },
    { title: 'Lower Price', value: FILTER_ENUM.LOW_PRICE },
    {
        title: 'Best Rating', value :FILTER_ENUM.BEST_RATING
    },
    {
        title: 'Lower Rating', value :FILTER_ENUM.LOWER_RATING
    },
    {
        title: 'Most Avaiable', value :FILTER_ENUM.MOST_AVAIABLE
    },

]
const ListProductPage = () => {
    const navigate = useNavigate()
    const [typeRender, setTypeRender] = useState(RENDER_LIST_PRODUCT_ENUM.ALL);
    const [typeSearch, setTypeSeach] = useState(SEARCH_ENUM[0])
    const [typeFilter, setTypeFilter] = useState(FILTER_ENUM[0])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState()

    const [keyWords, setKeyWords] = useState('')
    const [products, setProducts] = useState([])
    // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    // const [isActiveModalOpen, setIsActiveModalOpen] = useState(false)
    // const [currentProduct, setCurrentProduct] = useState(null)
    useEffect(()=>{
        
    },[keyWords])
    const [productsUpdated, setProductsUpdated] = useState(false)
    const fetchProducts = async () => {
        try {
            const response = await fetch(
                'https://e-commerce-pet-server-quindarts.vercel.app/products?offset=1&limit=6',
            )
            const json = await response.json()

            setProducts(json.list.map((product) => ({ ...product, id: product._id })))
        } catch (error) {
            console.error('Failed to fetch products:', error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [productsUpdated])
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <CustomListProduct>
        <Title icon={APP_ICON.i_bell}>Product Table Manager</Title>
        <Box className="contain mb-5 flex flex-wrap items-end">
        <Box className="contain__left flex">
            <SearchBar
                className="h-[47px] p-[2px] lowercase"
                placeholder="Search product by"
            />
        </Box>
    
        <Box className="contain__right flex flex-wrap justify-end items-end gap-2">
        <Dropdown
        label="Search type"
        className="w-[10rem]"
        size="sm"
        list={listSearch}
    />
    <Dropdown
    label="Filter by"
    className="w-[10rem]"
    size="sm"
    list={listFilter}
/>
            <Button className=" h-[47px]" color="primary">
                Filter
                <Icon className="mx-1" width={20} icon="fluent-mdl2:filter-descending" />
            </Button>
            <Button className=" h-[47px]" color="yellow">
                Clear
                <Icon className="mx-1" width={20} icon="ant-design:clear-outlined" />
            </Button>
            <Button className=" h-[47px]" onClick={() => navigate(APP_ROUTER.ADD_PRODUCT)} color="red">
                Add
                <Icon className="mx-[2px]" width={20} icon={APP_ICON.i_plus} />
            </Button>
            <Button className=" h-[47px]" color="green" disabled>
                Export
                <Icon className="mx-1" width={20} icon="ph:export" />
            </Button>
        </Box>
    </Box>
    <Box className="my-5 w-full">
            <TableProductList products={products}  />
          </Box>
        </CustomListProduct>
    )
}

export default ListProductPage
