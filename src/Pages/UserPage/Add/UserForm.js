import { Box } from '@mui/material'
import React, { useState } from 'react'
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

export const UserForm = (props) => {
    const { values, id } = props
    const [avatarSrc, setAvatarSrc] = useState('https://uko-react.vercel.app/static/avatar/001-man.svg')
    const [user, setUser] = useState(null)
    const [selectedDate, setSelectedDate] = useState(values?.birthday)
    const [error, setError] = React.useState(null)
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
    const handleClear = () => {
        setSelectedDate('')
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
    const validationSchema = yup.object({
        firstName: yup
            .string()
            .required('First name is required')
            .matches(
                /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
                'First name should only contain alphabets',
            ),
        lastName: yup
            .string()
            .required('Last name is required')
            .matches(
                /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
                'Last name should only contain alphabets',
            ),
        email: yup.string().required('Email is required').email('Email is invalid'),
        ward: yup
            .string()

            .required('Ward is required')
            .matches(
                /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
                'Ward should only contain alphabets',
            ),
        district: yup
            .string()

            .required('Required')
            .matches(
                /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s0-9]+$/,
                'District should only contain alphabets',
            ),

        detail: yup
            .string()

            .required('Required')
            .matches(
                /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s0-9/]+$/,
                'Detail should only contain alphabets',
            ),
        phone: yup
            .string()

            .matches(/^0\d{9}$/, 'Must be 10 digits and start with 0')
            .required('Required'),
        province: yup
            .string()

            .required('Province is required')
            .matches(
                /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,
                'Province should only contain alphabets',
            ),
        birthday: yup.object().shape({
            date: yup.date().nonNullable(true),
        }),
    })

    const handleSubmit = () => {
        if (values === undefined) {
            setError('required')
        }
        const addressId = user?.address[0]._id

        if (values !== undefined) {
            const userData = {
                _id: user._id,
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                phone: values.phone,
                dateOfBirth: values.birthday,
                role: values.role,
                avatar: avatarSrc,
            }

            const addressData = {
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
            const userRequest = client.post(`/users/${id}`, userData).catch((error) => {
                throw error
            })
            const addressRequest = client.post(`/addresses/${addressId}`, addressData).catch((error) => {
                console.error('Address request error:', error)
                throw error
            })
            Promise.all([userRequest, addressRequest])
                .then((responses) => {
                    alert('DADA')
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
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                detail: '',
                ward: '',
                district: '',
                province: '',
                phone: '',
                birthday: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, handleBlur, handleChange, values, errors, touched }) => (
                <Form>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box my={1} flex={1}>
                            <Textfield
                                name="firstName"
                                placeholder="First Name"
                                id="firstName"
                                label="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                                helperText={touched.firstName && errors.firstName ? errors.firstName : ''}
                                error={touched.firstName && errors.firstName ? true : false}
                            />
                        </Box>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="Last Name"
                                id="lastName"
                                label="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                                helperText={touched.lastName && errors.lastName ? errors.lastName : ''}
                                error={touched.lastName && errors.lastName ? true : false}
                            />
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="0123456789"
                                id="phone"
                                label="Phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                helperText={touched.phone && errors.phone ? errors.phone : ''}
                                error={touched.phone && errors.phone ? true : false}
                            />
                        </Box>
                        <Box my={1} flex={1}>
                            <Calendar
                                showDaysOutsideCurrentMonth
                                className="AUP"
                                name="birthday"
                                minDate={minDate}
                                maxDate={maxDate}
                                id="birthday"
                                label="Birthday"
                                value={selectedDate}
                                onBlur={handleBlur}
                                onChange={(newValue) => {
                                    setFieldValue('birthday', newValue)
                                }}
                                views={['month', 'day', 'year']}
                                onError={(newError) => setError(newError)}
                                slotProps={{
                                    textField: {
                                        helperText: errorMessage,
                                        error: errorMessage !== '' ? true : false,
                                    },
                                    field: {
                                        clearable: true,
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="example@gmail.com"
                                id="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                helperText={touched.email && errors.email ? errors.email : ''}
                                error={touched.email && errors.email ? true : false}
                            />
                        </Box>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="123, ABC street"
                                id="detail"
                                label="Address Detail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.detail}
                                helperText={touched.detail && errors.detail ? errors.detail : ''}
                                error={touched.detail && errors.detail ? true : false}
                            />
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="Ward"
                                id="ward"
                                label="Ward"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ward}
                                helperText={touched.ward && errors.ward ? errors.ward : ''}
                                error={touched.ward && errors.ward ? true : false}
                            />
                        </Box>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="District"
                                id="district"
                                label="District"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.district}
                                helperText={touched.district && errors.district ? errors.district : ''}
                                error={touched.district && errors.district ? true : false}
                            />
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box my={1} flex={1}>
                            <Textfield
                                placeholder="Province"
                                id="province"
                                label="Province"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.province}
                                helperText={touched.province && errors.province ? errors.province : ''}
                                error={touched.province && errors.province ? true : false}
                            />
                        </Box>
                        <Box my={1} flex={1}>
                            <Dropdown id="role" list={list} size="xl" />
                        </Box>
                    </Box>
                    <Box mt={2} sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            onClick={handleClear}
                            sx={{ width: '50%' }}
                            color="primary"
                            variant="outline"
                            type="reset"
                        >
                            <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                            Clear
                        </Button>

                        <Button onClick={handleSubmit} type="submit" sx={{ width: '50%' }} color="primary">
                            <Icon width={20} style={{ marginRight: 4 }} icon="iconamoon:edit" />
                            Create User
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    )
}
