import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from '../styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'
import { Icon } from '@iconify/react'

const AddProduct = () => {
    const navigate = useNavigate()
    const [brand, setBrand] = useState([
        { title: 'Brand 1', value: '1' },
        { title: 'Brand 2', value: '2' },
    ])
    const size = [
        { title: 'sm', value: '1' },
        { title: 'lg', value: '2' },
        { title: 'lg', value: '3' },
    ]
    const [category, setCategory] = useState([
        { title: 'Category 1', value: '1' },
        { title: 'Category 2', value: '2' },
    ])

    const [openBrand, setOpenBrand] = useState(false)
    const [openCategory, setOpenCategory] = useState(false)

    const handleOpenBrand = () => {
        setOpenBrand(true)
    }

    const handleOpenCategory = () => {
        setOpenCategory(true)
    }

    const handleCloseBrand = () => {
        setOpenBrand(false)
    }

    const handleCloseCategory = () => {
        setOpenCategory(false)
    }

    const handleAddBrand = (title, value) => {
        setBrand([...brand, { title, value }])
        handleCloseBrand()
    }

    const handleAddCategory = (title, value) => {
        setCategory([...category, { title, value }])
        handleCloseCategory()
    }
    return (
        <Box className=" grid w-full grid-cols-8 ">
            <Box sx={Card} className=" col-span-4 grid grid-cols-4">
                <Textfield placeholder="Name" id="name" type="text" label="Name" className=" col-span-4"></Textfield>
                <Dropdown className=" col-span-4" list={brand} size="xl" />
                

                <Modal key={1} open={openBrand} appearance="center" handleClose={handleCloseBrand}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            const title = event.target.elements.title.value
                            const value = event.target.elements.value.value
                            handleAddBrand(title, value)
                        }}
                    >
                        <label>
                            Title:
                            <input type="text" name="title" required />
                        </label>
                        <label>
                            Value:
                            <input type="text" name="value" required />
                        </label>
                        <Button type="submit">Add</Button>
                    </form>
                </Modal>

                <Dropdown className="col-span-4" list={category} size="xl" />
              
                <Modal key={2} open={openCategory} appearance="center" handleClose={handleCloseCategory}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            const title = event.target.elements.title.value
                            const value = event.target.elements.value.value
                            handleAddCategory(title, value)
                        }}
                    >
                        <label>
                            Title:
                            <input type="text" name="title" required />
                        </label>
                        <label>
                            Value:
                            <input type="text" name="value" required />
                        </label>
                        <Button type="submit">Add</Button>
                    </form>
                </Modal>
            </Box>
            <Box sx={Card} className="col-span-4 grid grid-cols-4">
                <Textfield
                    placeholder="Stock"
                    id="stock"
                    type="number"
                    label="Stock"
                    className=" col-span-2"
                ></Textfield>
                 <Textfield
                    placeholder="Bought Price"
                    id="bought"
                    type="number"
                    label="Bought Price"
                    className=" col-span-2"
                ></Textfield>
                <Textfield
                    placeholder="Sell Price"
                    id="sell"
                    type="number"
                    label="Sell Price"
                    className=" col-span-2"
                ></Textfield>
               
                <Dropdown className="col-span-2" list={size} size="xl" />
                <Box className=" col-span-2">
                    <Textfield
                        placeholder="... gram"
                        id="Weight"
                        type="number"
                        label="Weight"
                        className=" col-span-2"
                    ></Textfield>
                </Box>
                <Textfield
                    placeholder="Description"
                    id="description"
                    type="text"
                    label="Description"
                    className=" col-span-4 "
                ></Textfield>
            </Box>
            <Box className="col-span-8">
                <InputUpload className=" h-1 "></InputUpload>
            </Box>
            <Box>
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size="sm" color="primary" className=" ">
                    Create New Product
                </Button>
                <Button size="sm" color="grey" variant="outline" className=" ">
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default AddProduct
