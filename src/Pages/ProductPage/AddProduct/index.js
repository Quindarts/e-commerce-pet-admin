import React from 'react'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from '../styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    return (
        <Box className="grid db-xs:grid-cols-1 db-xs:grid-rows-2 db-md:grid-cols-2 db-md:grid-rows-1 ">
            <Box sx={Card} className="grid db-xs:grid-cols-1 db-md:grid-cols-2">
                <Box className="db-md:col-span-2">Product</Box>
                <Textfield
                    placeholder="Name"
                    id="name"
                    type="text"
                    label="Name"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Brand"
                    id="brand"
                    type="dropdown"
                    label="Brand"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Category"
                    id="id"
                    type="dropdown"
                    label="Category"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Stock"
                    id="stock"
                    type="number"
                    label="Stock"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="SKU Code"
                    id="code"
                    type="text"
                    label="SKU Code"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Price"
                    id="price"
                    type="number"
                    label="Price"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Meta Title"
                    id="meta-title"
                    type="text"
                    label="Meta Title"
                    className="db-md:col-span-2"
                ></Textfield>
                <Textfield
                    placeholder="Meta Tags"
                    id="meta-tags"
                    type="text"
                    label="Meta Tags"
                    className="db-md:col-span-2"
                ></Textfield>
                <Textfield
                    placeholder="Meta Description"
                    id="meta-description"
                    type="text"
                    label="Meta Description"
                    className="db-md:col-span-2"
                ></Textfield>
            </Box>

            <Box className="db-md:col-span-2">
                <InputUpload className="h-1 "></InputUpload>
            </Box>
            <Box>
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size="sm" color="primary" className="">
                    Create New Product
                </Button>
                <Button size="sm" color="grey" variant="outline" className="">
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default AddProduct
