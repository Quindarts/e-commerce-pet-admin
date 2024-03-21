import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Button from '../../Components/ui/Button/Button.js'
import OrderPageTable from './Table/index.js'
import EditModal from './Modal/OrderDetails.js'
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
    const [openOrder, setOpenOrder] = useState({ isOpen: false, order_id_id: '' })

    const [typeRender, setTypeRender] = useState(RENDER_LIST_CATEGORY_ENUM.ALL)
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeSearch, setTypeSearch] = useState(SEARCH_ENUM.NAME)

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isActiveModalOpen, setIsActiveModalOpen] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [productsUpdated, setProductsUpdated] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(null)
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
    const handleOpenEditModal = async (id) => {
        const product = products.find((product) => product._id === id)
        if (!product) {
            console.error('Failed to find product with id:', id)
            return
        }

        try {
            const response = await fetch(
                `https://e-commerce-pet-server-quindarts.vercel.app/categorys/${product.categoryId}`,
            )
            const categoryData = await response.json()
            product.category = categoryData
            console.log(product.category)
        } catch (error) {
            console.error('Failed to fetch category:', error)
        }

        setCurrentProduct(product)
        setProductsUpdated(product)
        setIsEditModalOpen(true)
    }

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false)
    }
    const handleOpenActiveModal = (product) => {
        setCurrentProduct(product)
        setIsActiveModalOpen(true)
    }
    const handleCloseActiveModal = () => {
        setIsActiveModalOpen(false)
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

    const updateProduct = async (id, updatedProduct) => {
        try {
            const response = await fetch(`https://e-commerce-pet-server-quindarts.vercel.app/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            })

            const data = await response.json()

            if (data.success) {
                console.log('Update Product success.')
                setProductsUpdated(true)
                const productIndex = products.findIndex((product) => product._id === id)

                const updatedProducts = [
                    ...products.slice(0, productIndex),
                    updatedProduct,
                    ...products.slice(productIndex + 1),
                ]

                setProducts(updatedProducts)
                handleCloseEditModal()
            } else {
                console.error('Failed to update product:', data.message)
            }
        } catch (error) {
            console.error('Failed to update product:', error)
        }
    }

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
            {/* <Box className="mb-5 flex w-full flex-wrap justify-between "> */}

            {/* </Box> */}
            <OrderPageTable
                page={page}
                products={products}
                handleOpenEditModal={handleOpenEditModal}
                handleChangePanigation={handleChangePanigation}
            />
            <EditModal
                isEditModalOpen={isEditModalOpen}
                handleCloseEditModal={handleCloseEditModal}
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
                currentCategory={currentCategory}
                updateProduct={updateProduct}
                openOrder={openOrder}
            />
        </Box>
    )
}

export default OrderPage
