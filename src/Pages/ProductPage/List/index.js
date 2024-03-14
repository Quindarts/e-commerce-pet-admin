import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import EditModal from '../Modal/EditModal.js'
import ActiveModal from '../Modal/ActiveModal.js'
import SearchBar from '../../../Components/ui/Search/SearchBar.js'
import { APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import TableProductList from '../Table/index.js'

const ListProductPage = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isActiveModalOpen, setIsActiveModalOpen] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null)
    const [productsUpdated, setProductsUpdated] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(null)

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
            const response = await fetch(
                'https://e-commerce-pet-server-quindarts.vercel.app/products?offset=1&limit=6',
            )
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
            <Box className="mb-5 flex w-full flex-wrap justify-between ">
                <SearchBar
                    placeholder="Search..."
                    className="your-custom-class"
                    handleQuery={handleQuery}
                    query={query}
                />
                <Button
                    onClick={() => navigate(APP_ROUTER.ADD_PRODUCT)}
                    size="sm"
                    color="primary"
                    className="mt-1 px-7 py-2 font-semibold db-xs:mb-0 db-xs:w-full db-md:mb-4 db-md:w-auto"
                >
                    Add Products
                </Button>
            </Box>
            <TableProductList products={products} handleOpenEditModal={handleOpenEditModal} />
            <EditModal
                isEditModalOpen={isEditModalOpen}
                handleCloseEditModal={handleCloseEditModal}
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
                currentCategory={currentCategory}
                updateProduct={updateProduct}
            />
            <ActiveModal isActiveModalOpen={isActiveModalOpen} handleCloseActiveModal={handleCloseActiveModal} />
        </Box>
    )
}

export default ListProductPage
