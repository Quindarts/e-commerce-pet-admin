import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card } from '../../ProductPage/styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'
import { Icon } from '@iconify/react'

const AttributeAddPage = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState([
        { title: 'Select attribute value', value: '1' },
        { title: 'Blue', value: '2' },
    ])

    return (
        <Box className="grid w-full grid-cols-8 gap-7 ">
            <Box sx={Card} className="col-span-8 grid grid-cols-4 gap-5">
                <Textfield placeholder="Name" id="name" type="text" label="Name" className=" col-span-4"></Textfield>
                <Dropdown className=" col-span-4" list={value} size="xl" />

                <Textfield
                    placeholder="Stock"
                    id="stock"
                    type="number"
                    label="Stock"
                    className=" col-span-4"
                ></Textfield>
                <Textfield placeholder="Code" id="code" type="text" label="Code" className=" col-span-4"></Textfield>
            </Box>

            <Box className="cols-span-8 flex" gap="2rem">
                <Button onClick={() => navigate(APP_ROUTER.ATTRIBUTE)} className="px-0" size="lg" color="primary">
                    Create New Attribute
                </Button>
                <Button className=" px-0" size="md" color="red">
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}

export default AttributeAddPage
