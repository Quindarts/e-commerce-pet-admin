import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import { Card} from '../styles.js'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import Modal from '../../../Components/ui/Modal/Modal.js'
import { Icon } from '@iconify/react'
import Title from '../../../Components/ui/Title/Title.js'
import { COLOR } from '../../../Utils/Constants.js'
const ICON_PRODVIDER_RANDOM = [
    'fluent-emoji-flat--man-pouting-light',
    'noto--man-superhero',
    'fluent-emoji--man-standing',
    'fluent-emoji--man-mechanic-light',
    'fluent-emoji--man-elf-dark',
    'fluent-emoji-flat--man-merpeople-light',
    'fluent-emoji--man-juggling',
    'fluent-emoji--old-man-medium-light',
    'openmoji--man-technologist',
    'fluent-emoji-flat--man-bald-medium',
    'streamline-emojis--man-dancing-1',
]
const Edit = () => {
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
        <div style={{ margin: '1.75rem 1.75rem 1.75rem 1.75rem' }}>
            <Typography
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: COLOR.black,
                }}
            >
                Edit product
            </Typography>

            <div
                style={{
                    marginTop: '1.75rem',
                    marginBottom: '1.75rem',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '1.75rem',
                }}
            >
                <div style={Card}>
                    <Title
                        icon={'noto-v1:information'}
                        style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}
                    >
                        Basic infomation
                    </Title>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
                        <div style={{ width: 'calc(50% - 1.25rem)' }}>
                            <Textfield placeholder="Name" id="name" type="text" label="Name" />
                        </div>
                        <div style={{ display: 'flex', width: 'calc(50% - 1.25rem)', gap: '1.25rem' }}>
                            <Dropdown list={brand} size="xl" />
                            <Dropdown list={category} size="xl" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', gap: '1.25rem' }}>
                            <div style={{ width: 'calc(50% - 1.25rem)' }}>
                                {' '}
                                <Textfield placeholder="Bought Price" id="bought" label="Bought Price" />
                            </div>
                            <div style={{ width: 'calc(50%)' }}>
                                <Textfield placeholder="Sell Price" id="sell" label="Sell Price" />
                            </div>
                        </div>
                        <Dropdown list={attributeList} />
                        <div style={{ width: '100%' }}>
                            <Textfield placeholder="Some tags" id="" label="Tags" />
                        </div>{' '}
                    </div>
                </div>
                <div style={Card}>
                    <Title icon={'fxemoji:deliverytruck'} style={{gap: '1rem', display: 'flex', marginBottom: '1.25rem' }}>
                        Details{' '}
                    </Title>
                    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '1.25rem' }}>
                        <div style={{ width: '100%' }}>
                            <Textfield className="w-full" placeholder="Stock" id="stock" type="number" label="Stock" />
                        </div>
                        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '1.25rem' }}>
                            <div style={{ width: 'calc(50% - 1.25rem)' }}>
                                <Textfield placeholder="... cm" id="Width" type="number" label="Width" />
                            </div>
                            <div style={{ width: 'calc(50% )' }}>
                                <Textfield placeholder="... cm" id="Height" type="number" label="Height" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '1.25rem' }}>
                            <div style={{ width: 'calc(50% - 1.25rem)' }}>
                                <Textfield placeholder="... cm" id="Length" type="number" label="Length" />{' '}
                            </div>
                            <div style={{ width: 'calc(50% ' }}>
                                <Textfield placeholder="... gram" id="Weight" type="number" label="Weight" />{' '}
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <Textfield placeholder="Description" id="description" type="text" label="Description" />{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div style={Card}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <InputUpload style={{ height: '0.25rem', width: '100%' }} />
                </div>{' '}
            </div>
            <div style={{ marginTop: '1.75rem', marginBottom: '1.75rem' }}>
                <Accordion>
                    <AccordionSummary
                        style={{
                            fontSize: '1rem',
                            paddingLeft: '1.75rem',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            fontWeight: 'semibold',
                        }}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Title style={{ display: 'flex', gap: '1rem'}} icon={'logos:meilisearch'}>
                            Search engine optimize{' '}
                        </Title>
                    </AccordionSummary>
                    <AccordionDetails style={{ paddingLeft: '1.75rem' }}>
                        <Textfield style={{ marginBottom: '1rem' }} label="Url key" />
                        <Textfield style={{ marginBottom: '1rem' }} label="Meta" />
                        <Textfield style={{ marginBottom: '1rem' }} label="Enter value here"></Textfield>
                        <Textfield style={{ marginBottom: '1rem' }} label="Enter value here" />
                    </AccordionDetails>
                </Accordion>{' '}
            </div>
            <div style={{ marginTop: '1.75rem', marginBottom: '1.75rem' }}>
                <Accordion>
                    <AccordionSummary
                        style={{
                            fontSize: '1rem',
                            paddingLeft: '1.75rem',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            fontWeight: 'semibold',
                        }}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Title style={{ display: 'flex',gap: '1rem', }} icon="fluent-emoji:man-beard">
                            Provider
                        </Title>
                    </AccordionSummary>
                    <AccordionDetails style={{ paddingLeft: '1.75rem' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                            {providers.map((provider, index) => (
                                <div
                                    style={{
                                        marginTop: '1.25rem',
                                        width: 'calc(33.3333% - 1.25rem)',
                                        borderRadius: '0.375rem',
                                        backgroundColor: '#edf2f7',
                                        padding: '1.75rem',
                                    }}
                                    key={index}
                                >
                                    <Title style={{ marginBottom: '1.25rem',gap: '1rem' }} icon={`fluent-emoji:man-beard`}>
                                        Provider info {index + 1}
                                    </Title>
                                    <Textfield
                                        style={{ marginBottom: '1rem' }}
                                        label="name"
                                        type="text"
                                        value={provider.name}
                                        onChange={(event) => handleProviderValueChange(event, index)}
                                    />
                                    <Textfield
                                        style={{ marginBottom: '1rem' }}
                                        label="Address"
                                        type="text"
                                        value={provider.address}
                                        onChange={(event) => handleProviderValueChange(event, index)}
                                    />
                                    <Textfield
                                        style={{ marginBottom: '1rem' }}
                                        label="Phone number"
                                        type="number"
                                        value={provider.phoneNumber}
                                        onChange={(event) => handleProviderValueChange(event, index)}
                                    />
                                    <Textfield
                                        style={{ marginBottom: '1rem' }}
                                        label="Provider email"
                                        type="text"
                                        value={provider.email}
                                        onChange={(event) => handleProviderValueChange(event, index)}
                                    />
                                    <Button style={{ color: 'red' }} onClick={() => removeProvider(index)}>
                                        Remove
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <Button style={{ color: 'primary' }} onClick={addProvider}>
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
            </div>
            <div style={{ display: 'flex', gap: '1.75rem' }}>
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size="sm" color="green">
                    <Icon className="mx-[2px]" width={22} icon={APP_ICON.i_plus} />
                    Create Product
                </Button>
                <Button onClick={() => navigate(APP_ROUTER.PRODUCT)} size="sm" color="yellow">
                    <Icon className="mx-1" width={22} icon="ant-design:clear-outlined" />
                    Clear form
                </Button>
            </div>
        </div>
    )
}

export default Edit