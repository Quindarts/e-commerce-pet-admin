import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../../Components/ui/Button/Button'
import { ProductPageTable } from './ProductPageComponents/ProductsPageTable'
import { Card } from './styles'
import SearchBar from '../../Components/ui/Search/SearchBar'
import Textfield from '../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../Components/ui/InputUpload/InputUpload.js'

const ProductPage = () => {
    const [query, setQuery] = useState('')
    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    return (
        // <Box className="border-box max-h-maxo mx-auto h-full w-full max-w-7xl justify-center">
        //     <Box className="mb-5 flex w-full flex-wrap justify-between ">
        //         <SearchBar className="mb-4" handleQuery={handleQuery} placeholder="Find Products" />

        //         <Button
        //             size="sm"
        //             color="primary"
        //             className="px-7 py-1 font-semibold db-xs:mb-0 db-xs:w-full db-md:mb-4 db-md:w-auto"
        //         >
        //             Add Products +
        //         </Button>
        //     </Box>
        //     <Box></Box>
        //     <ProductPageTable></ProductPageTable>
        // </Box>
        <Box className="grid db-xs:grid-cols-1 db-xs:grid-rows-2 db-md:grid-cols-2 db-md:grid-rows-1 ">
            <Box sx={Card} className="grid db-xs:grid-cols-1 db-md:grid-cols-2">
                <Box className="db-md:col-span-2">Main Parameters</Box>
                <Textfield
                    placeholder="Manufacturer"
                    id="manufacturer"
                    type="text"
                    label="Manufacturer"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Model"
                    id="model"
                    type="text"
                    label="Model"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="ID Number"
                    id="id"
                    type="text"
                    label="ID Number"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Priority"
                    id="priority"
                    type="text"
                    label="Priority"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Name"
                    id="name"
                    type="text"
                    label="Name"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Model"
                    id="model"
                    type="text"
                    label="Model"
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

            <Box sx={Card} className="grid db-xs:grid-cols-1 db-md:grid-cols-2">
                <Box className="db-md:col-span-2">Prices and Warehouses</Box>
                <Textfield
                    placeholder="Cost"
                    id="cost"
                    type="text"
                    label="Cost"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Extra"
                    id="extra"
                    type="text"
                    label="Extra"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Price"
                    id="price"
                    type="text"
                    label="Price"
                    className="db-md:col-span-1"
                ></Textfield>
                <Textfield
                    placeholder="Availability"
                    id="Availability"
                    type="text"
                    label="Availability"
                    className="db-md:col-span-1"
                ></Textfield>
            </Box>
            <Box className="db-md:col-span-2">
                <InputUpload className="h-1 "></InputUpload>
            </Box>
            <Box>
                <Button size="sm" color="primary" className="">
                    Create New Product
                </Button>
                <Button size="sm" color="grey" variant="outline" className="">
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default ProductPage
