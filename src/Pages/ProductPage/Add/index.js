import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
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
import Title from '../../../Components/ui/Title/Title.js'

const ICON_PRODVIDER_RANDOM = [
    "fluent-emoji-flat--man-pouting-light",
    "noto--man-superhero",
    "fluent-emoji--man-standing",
    "fluent-emoji--man-mechanic-light",
    "fluent-emoji--man-elf-dark",
    "fluent-emoji-flat--man-merpeople-light",
    "fluent-emoji--man-juggling",
    "fluent-emoji--old-man-medium-light",
    "openmoji--man-technologist",
    "fluent-emoji-flat--man-bald-medium",
    "streamline-emojis--man-dancing-1"
]
const AddProductPage = () => {
    const navigate = useNavigate()
    const [brand, setBrand] = useState([
        { title: 'Brand 1', value: '1' },
        { title: 'Brand 2', value: '2' },
    ])

    const [category, setCategory] = useState([
        { title: 'Category 1', value: '1' },
        { title: 'Category 2', value: '2' },
    ])

    const [attributeList, setAttributeList] = useState([
        { title: 'Select Attribute', value: 'placeholder' },
        { title: 'Create new Attribute', value: 'create_new_attribute' },
    ])
    const [providerList, setProviderList] = useState([
        { title: 'Select Provider', value: 'placeholder' },
        { title: 'Create new Provider', value: 'create_new_provider' },
    ])
    const [providers, setProviders] = useState([{ name: '', address: '', phoneNumber: '', email: '' }])

    const addProvider = () => {
        setProviders([...providers, { name: '', value: '' }])
    }
    const [newProviderName, setNewProviderName] = useState('')

    const handleProviderChange = (event, index) => {
        const selectedValue = event.target.value
        if (selectedValue === 'placeholder') {
            const newProviders = [...providers]
            newProviders[index].name = ''
            newProviders[index].value = ''
            setProviders(newProviders)
        } else if (selectedValue === 'create_new_provider') {
            setProviderModalOpen(true)
        } else {
            const selectedProvider = providerList.find((attr) => attr.value === selectedValue)
            if (selectedProvider) {
                const newProviders = [...providers]
                newProviders[index].name = selectedProvider.title
                newProviders[index].value = selectedProvider.value
                setProviders(newProviders)
            }
        }
    }
    const handleProviderValueChange = (event, index, field) => {
        const newProviders = [...providers]
        newProviders[index][field] = event.target.value
        setProviders(newProviders)
    }

    const handleNewProviderNameChange = (event) => {
        setNewProviderName(event.target.value)
    }

    const removeProvider = (index) => {
        setProviders(providers.filter((_, i) => i !== index))
    }

    const cancelNewProvider = () => {
        setProviderModalOpen(false)
    }
    const saveNewProvider = () => {
        setProviderList([...providerList, { title: newProviderName, value: newProviderName }])
        setProviderModalOpen(false)
    }

    const [attributes, setAttributes] = useState([])
    const addAttribute = () => {
        setAttributes([...attributes, { name: '', value: '' }])
    }
    const [attributeModalOpen, setAttributeModalOpen] = useState(false)
    const [providerModalOpen, setProviderModalOpen] = useState(false)

    const [newAttributeName, setNewAttributeName] = useState('')
    const handleAttributeChange = (event, index) => {
        const selectedValue = event.target.value
        if (selectedValue === 'placeholder') {
            const newAttributes = [...attributes]
            newAttributes[index].name = ''
            newAttributes[index].value = ''
            setAttributes(newAttributes)
        } else if (selectedValue === 'create_new_attribute') {
            setAttributeModalOpen(true)
        } else {
            const selectedAttribute = attributeList.find((attr) => attr.value === selectedValue)
            if (selectedAttribute) {
                const newAttributes = [...attributes]
                newAttributes[index].name = selectedAttribute.title
                newAttributes[index].value = selectedAttribute.value
                setAttributes(newAttributes)
            }
        }
    }

    const handleAttributeValueChange = (event, index) => {
        const newAttributes = [...attributes]
        newAttributes[index].value = event.target.value
        setAttributes(newAttributes)
    }

    const handleNewAttributeNameChange = (event) => {
        setNewAttributeName(event.target.value)
    }

    const removeAttribute = (index) => {
        setAttributes(attributes.filter((_, i) => i !== index))
    }

    const cancelNewAttribute = () => {
        setAttributeModalOpen(false)
    }
    const handleModalClose = () => {
        setProviderModalOpen(false)
    }
    const saveNewAttribute = () => {
        setAttributeList([...attributeList, { title: newAttributeName, value: newAttributeName }])
        setAttributeModalOpen(false)
    }

    return (
        <Box className="mb-7">
        <Typography className='text-xl font-bold text-sky-700 flex items-center gap-4'>
        <Box className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-[#fdebe5]">
                <Icon className="text-[#2499ef]" width={30} icon={"emojione-v1:card-file-box"} />
            </Box>
        Adding New product</Typography>

            <Box className='flex items-start gap-7 my-7 '>
            <Box sx={Card}>
        <Title icon={"noto-v1:information"} className='mb-5'>Basic infomation</Title>

            <Box  className="flex flex-wrap gap-5 items-center">
            <Textfield placeholder="Name" id="name" type="text" label="Name" className="w-1/2-gap-5"/>
             <Box className='flex w-1/2-gap-5 gap-5'> 
                <Dropdown  list={brand} size="xl" />
                <Dropdown  list={category} size="xl" />
             </Box>
        
         <Box className='flex w-full gap-5'> 
            <Textfield
                placeholder="Bought Price"
                id="bought"
                label="Bought Price"
                className="w-1/2-gap-5"
            />
            <Textfield
                placeholder="Sell Price"
                id="sell"
                label="Sell Price"
                className=" w-1/2-gap-5"
            />
            </Box>
            <Dropdown  list={attributeList} />
            <Textfield
            placeholder="Some tags"
            id=""
            className="w-full"
            label="Tags"
        />
        </Box>
        </Box> 
            <Box sx={Card} >
        <Title icon={"fxemoji:deliverytruck"} className='mb-5'>Details </Title>
            <Box className="flex gap-5 w-full flex-wrap">
            <Textfield 
                className='w-full'
                placeholder="Stock"
                id="stock"
                type="number"
                label="Stock"
          />
            <Box className='w-full flex flex-wrap gap-5'>
            <Textfield
            placeholder="... cm"
            id="Width"
            type="number"
            label="Width"
            className='w-1/2-gap-5'
        />
            <Textfield
                placeholder="... cm"
                id="Height"
                type="number"
                label="Height"
                className='w-1/2-gap-5'
            />
            </Box>
                <Box className='flex flex-wrap gap-5 w-full'>
                <Textfield
                placeholder="... cm"
                id="Length"
                type="number"
                label="Length"
                className='w-1/2-gap-5'
            />
            <Textfield
                placeholder="... gram"
                id="Weight"
                type="number"
                label="Weight"
                className='w-1/2-gap-5'
          />
          </Box>
            <Textfield
                placeholder="Description"
                id="description"
                type="text"
                label="Description"
                className=" w-full"
          />
          </Box>
        </Box>
            </Box>
            <Box className="my-7">
                <InputUpload className=" h-1 "/>
            </Box>
            <Box className="my-7">
                <Accordion>
                    <AccordionSummary
                        className="text-md py-2 px-7 font-semibold"
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
        <Title icon={"logos:meilisearch"} >Search engine optimize </Title>
                    </AccordionSummary>
                    <AccordionDetails className='px-7'>
                        <Textfield className="mb-4" label="Url key" />
                        <Textfield className="mb-4" label="Meta" /> 
                        <Textfield className="mb-4" label="Enter value here"></Textfield>
                        <Textfield className="mb-4" label="Enter value here" />
                    </AccordionDetails>
                </Accordion>{' '}
            </Box>
            <Box className="my-7">
                <Accordion>
                    <AccordionSummary
                        className="text-md px-7 py-2 font-semibold"
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                    <Title icon="fluent-emoji:man-beard">Provider</Title>

                    </AccordionSummary>
                    <AccordionDetails className='px-7 '>
                    <Box className='flex gap-5 flex-wrap'>
                        {providers.map((provider, index) => (
                            <Box className='bg-slate-50 p-7 rounded-lg my-5 w-1/3-gap-5' key={index}>
                            <Title className='mb-5' icon={`fluent-emoji:man-beard`}>Provider info {index +1}</Title>
                            <Textfield
                            className="mb-4"
                            label="name"
                            type="text"
                            value={provider.name}
                            onChange={(event) => handleProviderValueChange(event, index)}
                            />
                                <Textfield
                                    className="mb-4"
                                    label="Address"
                                    type="text"
                                    value={provider.address}
                                    onChange={(event) => handleProviderValueChange(event, index)}
                                />
                                <Textfield
                                    className="mb-4"
                                    label="Phone number"
                                    type="number"
                                    value={provider.phoneNumber}
                                    onChange={(event) => handleProviderValueChange(event, index)}
                                />
                                <Textfield
                                    className="mb-4"
                                    label="Provider email"
                                    type="text"
                                    value={provider.email}
                                    onChange={(event) => handleProviderValueChange(event, index)}
                                />
                                <Button className="" color="red" onClick={() => removeProvider(index)}>
                                    Remove
                                </Button>
                            </Box>
                        ))}</Box>
                        <Button color="primary" onClick={addProvider}>
                            Add new Provider
                        </Button>
                        <Modal open={providerModalOpen} onClose={() => setProviderModalOpen(false)}>
                            <h2>Add Provider</h2>
                            <Textfield
                                label="Provider name"
                                value={newProviderName}
                                onChange={handleNewProviderNameChange}
                            />
                            <Button onClick={saveNewProvider}>Save</Button>
                            <Button onClick={cancelNewProvider}>Cancel</Button>
                        </Modal>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className="gap-7 flex" gap="2rem">
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size='sm'  color="green">
                <Icon className="mx-[2px]" width={25} icon={APP_ICON.i_plus} />              
                Create Product
                </Button>
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size='sm'  color="yellow">
                <Icon className="mx-1" width={25} icon="ant-design:clear-outlined" />
                Clear form
                </Button>
            </Box>
        </Box>
    )
}

export default AddProductPage
