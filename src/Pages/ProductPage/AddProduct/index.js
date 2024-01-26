import React, { useState } from 'react'
import { Box } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from '../styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'

const AddProduct = () => {
    const navigate = useNavigate()
    const [list1, setList1] = useState([
        { title: 'Option 1', value: '1' },
        { title: 'Option 2', value: '2' },
    ])
    const [list2, setList2] = useState([
        { title: 'Choice 1', value: '1' },
        { title: 'Choice 2', value: '2' },
    ])
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)

    const handleOpen1 = () => {
        setOpen1(true)
    }

    const handleOpen2 = () => {
        setOpen2(true)
    }

    const handleClose1 = () => {
        setOpen1(false)
    }

    const handleClose2 = () => {
        setOpen2(false)
    }

    const handleAddOption1 = (title, value) => {
        setList1([...list1, { title, value }])
        handleClose1()
    }

    const handleAddOption2 = (title, value) => {
        setList2([...list2, { title, value }])
        handleClose2()
    }
    return (
        <Box className="grid db-md:grid-rows-1 ">
            <Box sx={Card} className="grid ">
                <Box className="db-md:col-span-2">Product</Box>
                <Textfield
                    placeholder="Name"
                    id="name"
                    type="text"
                    label="Name"
                    className="db-md:col-span-1"
                ></Textfield>
                <Dropdown className="your-custom-class" list={list1} size="xl" label="Select an option" />
                <Button onClick={handleOpen1}>Add Option</Button>
                <Modal key={1} open={open1} appearance="center" handleClose={handleClose1}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            const title = event.target.elements.title.value
                            const value = event.target.elements.value.value
                            handleAddOption1(title, value)
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
                        <button type="submit">Add</button>
                    </form>
                </Modal>
                <Dropdown className="your-custom-class" list={list2} size="xl" label="Select a choice" />
                <Button onClick={handleOpen2}>Add Choice</Button>
                <Modal key={2} open={open2} appearance="center" handleClose={handleClose2}>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            const title = event.target.elements.title.value
                            const value = event.target.elements.value.value
                            handleAddOption2(title, value)
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
                        <button type="submit">Add</button>
                    </form>
                </Modal>
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
