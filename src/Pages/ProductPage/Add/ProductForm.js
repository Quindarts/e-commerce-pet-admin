import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form, Formik, useFormikContext } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import Button from '../../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'
import dayjs from 'dayjs'
import Calendar from '../../../Components/ui/Calendar'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import * as yup from 'yup'
import client from '../../../services/api-context'
import { enqueueSnackbar } from 'notistack'
import { useReducer } from 'react'
import { APP_ICON } from '../../../Utils/Constants'
import Title from '../../../Components/ui/Title/Title'
import { Card } from '../styles'
export const ProductForm = (props) => {
    const { values, id } = props
    const [avatarSrc, setAvatarSrc] = useState('https://uko-react.vercel.app/static/avatar/001-man.svg')
    const [user, setUser] = useState(null)
    const [selectedDate, setSelectedDate] = useState(values?.birthday)
    const [error, setError] = React.useState(null)
    const initialValues = {
        name: '',
        bought: '',
        sell: '',
        stock: '',
        Width: '',
        Height: '',
        Length: '',
        Weight: '',
        description: '',
    }

    //userReducer
    const errorMessage = React.useMemo(() => {
        switch (error) {
            case 'maxDate': {
                return 'User need to be at least 18 years olds'
            }
            case 'minDate': {
                return 'User need to be at most 60 years olds'
            }
            case 'required': {
                return 'Birthday missing.'
            }
            default: {
                return ''
            }
        }
    }, [error])
    const handleImageUpload = (event) => {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
            setAvatarSrc(reader.result)
        }

        if (file) {
            reader.readAsDataURL(file)
        }
    }
    const handleClear = () => {
        setSelectedDate({})
        setError('')
    }
    const minDate = dayjs().subtract(60, 'year')
    const maxDate = dayjs().subtract(18, 'year')
    const SEARCH_ENUM = {
        ADMIN: 'admin',
        USER: 'user',
        WAREHOUSE: 'warehouse',
    }

    const list = [
        { title: 'Admin', value: SEARCH_ENUM.ADMIN },
        { title: 'User', value: SEARCH_ENUM.USER },
        { title: 'Warehouse', value: SEARCH_ENUM.WAREHOUSE },
    ]
    const GENDER_ENUM = {
        MALE: 'male',
        FEMALE: 'female',
        PREFER_NOT_TO_SAY: null,
    }

    const genderList = [
        { title: 'Male', value: GENDER_ENUM.MALE },
        { title: 'Female', value: GENDER_ENUM.FEMALE },
        { title: 'Prefer not to say', value: GENDER_ENUM.PREFER_NOT_TO_SAY },
    ]
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
    const validationSchema = yup.object().shape({
        name: yup.string().required('Required'),
        bought: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        sell: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        stock: yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        Width: yup.number().required('Required').positive('Must be positive'),
        Height: yup.number().required('Required').positive('Must be positive'),
        Length: yup.number().required('Required').positive('Must be positive'),
        Weight: yup.number().required('Required').positive('Must be positive'),
        description: yup.string().required('Required'),
    })

    const handleAddProduct = () => {
        if (values === undefined) {
            setError('required')
        }
        const addressId = user?.address[0]._id

        if (values !== undefined) {
            const productData = {
                _id: user._id,
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                phone: values.phone,
                dateOfBirth: values.birthday,
                role: values.role,
                avatar: avatarSrc,
                gender: values.gender,
            }

            const productDimensions = {
                detail: values.detail,
                ward: {
                    wardName: values.ward,
                },
                district: {
                    districtName: values.district,
                },
                province: {
                    provinceName: values.province,
                },
                country: 'VietNam',
            }
            const userRequest = client.post(`/users/${id}`, productData).catch((error) => {
                throw error
            })
            const addressRequest = client.post(`/addresses/${addressId}`, productDimensions).catch((error) => {
                console.error('Address request error:', error)
                throw error
            })
            Promise.all([userRequest, addressRequest])
                .then((responses) => {
                    console.log(responses)
                    const userResponse = responses[0]
                    const addressResponse = responses[1]
                    console.log(userResponse)
                    console.log(addressResponse)
                    if (userResponse.status === 200 && addressResponse.status === 200) {
                        enqueueSnackbar('Update successful', {
                            variant: 'success',
                        })
                    }
                    // resetForm()
                })
                .catch((error) => {
                    console.error(error)
                    enqueueSnackbar('Fail to update', {
                        variant: 'error',
                    })
                })
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                // handle form submission
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur }) => (
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            helperText={touched.name && errors.name ? errors.name : ''}
                            error={touched.name && errors.name ? true : false}
                            className="col-span-4"
                        />
                        <Dropdown className="col-span-2" list={brand} size="xl" />
                        <Dropdown className="col-span-2" list={category} size="xl" />
                        <Dropdown className="col-span-8" list={attributeList} />
                        <Textfield
                            placeholder="Bought Price"
                            id="bought"
                            type="number"
                            label="Bought Price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bought}
                            helperText={touched.bought && errors.bought ? errors.bought : ''}
                            error={touched.bought && errors.bought ? true : false}
                            className="col-span-4"
                        />
                        <Textfield
                            placeholder="Sell Price"
                            id="sell"
                            type="number"
                            label="Sell Price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.sell}
                            helperText={touched.sell && errors.sell ? errors.sell : ''}
                            error={touched.sell && errors.sell ? true : false}
                            className="col-span-4"
                        />
                        <Textfield
                            placeholder="Some tags"
                            id="tags"
                            type="text"
                            label="Tags"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tags}
                            helperText={touched.tags && errors.tags ? errors.tags : ''}
                            error={touched.tags && errors.tags ? true : false}
                            className="col-span-8"
                        />
                    </Box>
                    <Box sx={Card} className="col-span-2 grid grid-cols-4 gap-5">
                        <Box className=" col-span-4">
                            <Title icon={'fxemoji:deliverytruck'} className=" mb-5">
                                Details
                            </Title>
                        </Box>

                        <Textfield
                            placeholder="Stock"
                            id="stock"
                            type="number"
                            label="Stock"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.stock}
                            helperText={touched.stock && errors.stock ? errors.stock : ''}
                            error={touched.stock && errors.stock ? true : false}
                            className="col-span-4"
                        />
                        <Textfield
                            placeholder="... cm"
                            id="Height"
                            type="number"
                            label="Height"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Height}
                            helperText={touched.Height && errors.Height ? errors.Height : ''}
                            error={touched.Height && errors.Height ? true : false}
                            className="col-span-2"
                        />
                        <Textfield
                            placeholder="... cm"
                            id="Length"
                            type="number"
                            label="Length"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Length}
                            helperText={touched.Length && errors.Length ? errors.Length : ''}
                            error={touched.Length && errors.Length ? true : false}
                            className="col-span-2"
                        />
                        <Textfield
                            placeholder="... cm"
                            id="Width"
                            type="number"
                            label="Width"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Width}
                            helperText={touched.Width && errors.Width ? errors.Width : ''}
                            error={touched.Width && errors.Width ? true : false}
                            className="col-span-2"
                        />
                        <Textfield
                            placeholder="... gram"
                            id="Weight"
                            type="number"
                            label="Weight"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Weight}
                            helperText={touched.Weight && errors.Weight ? errors.Weight : ''}
                            error={touched.Weight && errors.Weight ? true : false}
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
                            className="col-span-4"
                        />
                    </Box>
                </Form>
            )}
        </Formik>
    )
}
