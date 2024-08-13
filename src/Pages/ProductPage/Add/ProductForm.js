import { Box, CircularProgress, Icon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form, Formik, useFormikContext } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import * as yup from 'yup'
import client from '../../../services/api-context'
import { enqueueSnackbar } from 'notistack'
import Title from '../../../Components/ui/Title/Title'
import { Card } from '../styles'
import { Fragment } from 'react'
import TagsInput from '../../../Components/ui/TagsInput/TagsInput'
import Autocomplete from '../../../Components/ui/Autocomplete/Autocomplete'
import InputUpload from '../../../Components/ui/InputUpload/InputUpload'
// import ImageUpload from '../../../Components/ui/InputUpload/InputUpload'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import axios from 'axios'

const initialValues = {
    name: '',
    images: [
        {
            url: '',
        },
    ],
    attribute_product: [],
    brand: '',
    price: '',
    available: '',
    description: '',
    tags: [],
    dimensions: {
        length: '',
        width: '',
        weight: '',
        height: '',
    },
    category: '',
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    tags: yup.array().of(yup.string()).required('At least one tag is required'),
    attribute_product: yup.array().of(yup.string()).required('At least one attribute is required'),
    brand: yup.string().required('Required'),
    price: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    available: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    description: yup.string().required('Required'),
    dimensions: yup
        .object()
        .shape({
            length: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
            width: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
            weight: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
            height: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        })
        .required('Dimensions are required'),
    category: yup.string().required('Required'),
})

const axiosUpload = axios.create()

const createProduct = async () => {
    axiosUpload.post()
}

export const ProductForm = (props) => {
    const [categories, setCategories] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const [loading, setLoading] = useState(false)
    const [attributes, setAttributes] = useState([])
    const [selectedAttributeIds, setSelectedAttributeIds] = useState([])
    const [tags, setTags] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState('')
    const [images, setImages] = useState([])

    const handleSelectAttribute = (event, newValue) => {
        const ids = newValue.map((option) => option._id)
        setSelectedAttributeIds(ids)
        console.log('Selected Attribute IDs:', ids)
    }
    const handleTagsUpdate = (updatedTags) => {
        const tag = updatedTags.map((option) => option)
        setTags(tag)
        console.log('Selected tag:', tag)
        console.log('Tags:', tags)
    }
    const handleTakeImages = (images) => {
        setImages(images)
    }


    const fetchAttributes = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                'https://e-commerce-pet-server-quindarts.vercel.app/attributeProducts?limit=100&offset=1',
            )
            const json = await response.json()
            setAttributes(json.list.map((attribute) => ({ ...attribute, id: attribute._id })))
        } catch (error) {
            console.error('Failed to fetch attributes:', error)
        } finally {
            setLoading(false)
        }
    }
    const handleGetCategoryByParams = () => {
        setLoading(true)
        client
            .get(`/categorys?limit=60&offset=1`)
            .then((response) => {
                return response.listCategory
            })
            .then((categories) => {
                setCategories(categories)

                setCategoriesList(
                    categories.map((item) => ({
                        title: item.name,
                        value: item._id,
                    })),
                )
            })
            .catch((error) => {
                console.error('Failed to fetch category:', error)
                enqueueSnackbar('Fail to update', {
                    variant: 'error',
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchAttributes()
        handleGetCategoryByParams()
    }, [])
    useEffect(() => {
        if (categories.length > 0) {
            setCategoriesList(
                categories.map((item) => ({
                    title: item.name,
                    value: item._id,
                })),
            )
        }
    }, [categories])

    const handleAddProduct = async (values) => {
        const formattedValues = {
            name: values.name,
            images: [
                {
                    url: images[0],
                },
            ],
            attribute_product: selectedAttributeIds,
            brand: values.brand,
            price: values.price,
            avaiable: values.available,
            description: values.description,
            tags: tags,
            dimensions: {
                length: values.length,
                width: values.width,
                weight: values.weight,
                height: values.height,
            },
            category: selectedCategoryId,
        }
        client
            .post(`/products`, formattedValues)
            .then((response) => {
                console.log(response)
                enqueueSnackbar('Product added successfully', { variant: 'success' })
            })
            .catch((error) => {
                console.error('Failed to add product:', error)
                enqueueSnackbar('Fail to add product', { variant: 'error' })
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Fragment>
            {!loading ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleAddProduct(values)}
                >
                    {({ handleBlur, handleChange, values, errors, touched }) => (
                        <Form className=" grid grid-cols-4 items-start gap-7">
                            <Box sx={Card} className="col-span-2 grid grid-cols-8 gap-5">
                                <Box className=" col-span-8">
                                    <Title icon={'noto-v1:information'} className="mb-5">
                                        Basic infomation
                                    </Title>
                                </Box>
                                <Textfield
                                    placeholder="Name"
                                    id="name"
                                    type="text"
                                    label="Name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    helperText={touched.name && errors.name ? errors.name : ''}
                                    error={touched.name && errors.name ? true : false}
                                    className="col-span-4"
                                />
                                <Textfield
                                    placeholder="Brand"
                                    id="brand"
                                    type="text"
                                    label="Brand"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.brand}
                                    helperText={touched.brand && errors.brand ? errors.brand : ''}
                                    error={touched.brand && errors.brand ? true : false}
                                    className="col-span-4"
                                />
                                <TagsInput
                                    className="col-span-4"
                                    id="tags"
                                    value={values.tags}
                                    helperText={touched.tags && errors.tags ? errors.tags : ''}
                                    error={touched.tags && errors.tags ? true : false}
                                    onTagsRemove={(tags) => console.log(`Removed tags: ${tags}`)}
                                    onTagsChange={handleTagsUpdate}
                                />

                                {!loading && categoriesList.length > 0 && (
                                    <Dropdown
                                        className="col-span-4"
                                        list={categoriesList}
                                        size="xl"
                                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                                    />
                                )}

                                <Textfield
                                    placeholder="Price"
                                    id="price"
                                    type="number"
                                    label="Price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                    helperText={touched.price && errors.price ? errors.price : ''}
                                    error={touched.price && errors.price ? true : false}
                                    className="col-span-4"
                                />

                                <Box className="col-span-4" gap="2rem">
                                    <Autocomplete
                                        multiple
                                        options={attributes}
                                        getOptionLabel={(option) => option.name}
                                        onChange={handleSelectAttribute}
                                        renderInput={(params) => (
                                            <Textfield {...params} label="Attributes" placeholder="Attributes" />
                                        )}
                                    />
                                </Box>
                            </Box>
                            <Box sx={Card} className="col-span-2 grid grid-cols-4 gap-5">
                                <Box className=" col-span-4">
                                    <Title icon={'fxemoji:deliverytruck'} className=" mb-5">
                                        Details
                                    </Title>
                                </Box>

                                <Textfield
                                    placeholder="... cm"
                                    id="height"
                                    type="number"
                                    label="Height"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.height}
                                    helperText={touched.height && errors.height ? errors.height : ''}
                                    error={touched.height && errors.height ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="... cm"
                                    id="length"
                                    type="number"
                                    label="Length"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.length}
                                    helperText={touched.length && errors.length ? errors.length : ''}
                                    error={touched.length && errors.length ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="... cm"
                                    id="width"
                                    type="number"
                                    label="Width"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.width}
                                    helperText={touched.width && errors.width ? errors.width : ''}
                                    error={touched.width && errors.width ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="... gram"
                                    id="weight"
                                    type="number"
                                    label="Weight"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.weight}
                                    helperText={touched.weight && errors.weight ? errors.weight : ''}
                                    error={touched.weight && errors.weight ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="Stock"
                                    id="available"
                                    type="number"
                                    label="Stock"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.available}
                                    helperText={touched.available && errors.available ? errors.available : ''}
                                    error={touched.available && errors.available ? true : false}
                                    className="col-span-2"
                                />
                                <Textfield
                                    placeholder="Description"
                                    id="description"
                                    type="text"
                                    label="Description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    helperText={touched.description && errors.description ? errors.description : ''}
                                    error={touched.description && errors.description ? true : false}
                                    className="col-span-2"
                                />
                            </Box>
                            <Box className="col-span-4 gap-5">
                                <InputUpload
                                    handleTakeImages={handleTakeImages}
                                    // images={images}
                                    // onDeleteImage={onDeleteImage}
                                    // className="h-1"
                                    // onImageAdd={onImageAdd}
                                    // handleRemoveAllImage={handleRemoveAllImage}
                                />
                                {/* <ImageUpload></ImageUpload> */}
                            </Box>
                            <Box className="flex gap-7" gap="2rem">
                                <Button onClick={() => handleAddProduct(values)} size="sm" color="green">
                                    <Icon className="mx-[2px]" width={25} icon={APP_ICON.i_plus} />
                                    Create Product
                                </Button>
                                <Button type="clear" size="sm" color="yellow">
                                    <Icon className="mx-1" width={25} icon="ant-design:clear-outlined" />
                                    Clear form
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}
