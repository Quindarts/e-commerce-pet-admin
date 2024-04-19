import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import * as yup from 'yup'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import { enqueueSnackbar } from 'notistack'
import client from '../../../services/api-context'
import { Fragment } from 'react'
import { CircularProgress } from '@mui/material'
export const SEARCH_ENUM = {
    ADMIN: 'admin',
    USER: 'user',
    WAREHOUSE: 'warehouse',
    OWNER: 'owner',
}
const list = [
    { title: 'User', value: SEARCH_ENUM.USER },
    { title: 'Admin', value: SEARCH_ENUM.ADMIN },
    { title: 'Warehouse', value: SEARCH_ENUM.WAREHOUSE },
    { title: 'Owner', value: SEARCH_ENUM.OWNER },
]
function EditUser(props) {
    const { handleCloseEditUserModal, id } = props
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeSearch, setTypeSearch] = useState(SEARCH_ENUM.NAME)
    const [avatarSrc, setAvatarSrc] = useState('https://uko-react.vercel.app/static/avatar/001-man.svg')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true)
            try {
                const response = await client.get(`/users/${id}`)
                setUser(response.user)
            } catch (error) {
                console.error('Failed to fetch users:', error)
                if (error.response) {
                    console.error('Response data:', error.response.data)
                    console.error('Response status:', error.response.status)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    const [sortedRoles, setSortedRoles] = useState(list)
    useEffect(() => {
        if (user && user.role) {
            const userRoleItem = list.find((item) => item.value === user.role)
            const otherRoles = list.filter((item) => item.value !== user.role)
            setSortedRoles([userRoleItem, ...otherRoles])
        }
    }, [user])

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
    const validationSchema = yup.object({
        firstName: yup
            .string()
            .required('First name is required')
            .matches(/^[a-zA-Z]+$/, 'First name should only contain alphabets'),

        lastName: yup
            .string()
            .required('Last name is required')
            .matches(/^[a-zA-Z]+$/, 'Last name should only contain alphabets'),

        email: yup.string().required('Email is required').email('Email is invalid'),
        location: yup.string().required('Required'),
        phone: yup
            .string()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .required('Required'),
        city: yup
            .string()
            .required('Required')
            .matches(/^[a-zA-Z]+$/, 'City should only contain alphabets'),
        birthday: yup
            .date()
            .min(new Date(new Date().setFullYear(new Date().getFullYear() - 60)), 'You must be under 60 years old')
            .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'You must be at least 18 years old')
            .required('Required'),
    })
    const handleSubmitUser = () => {}
    return (
        <Fragment>
            {user ? (
                <Box mx={2} mb={3} mt={1}>
                    <Typography
                        style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }}
                        marginBottom="15px"
                        variant="h7"
                    >
                        Edit User
                    </Typography>
                    <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                        <Box
                            position={'relative'}
                            height={'120px'}
                            width={'120px'}
                            mb={3}
                            sx={{ borderRadius: '50%', bgcolor: '#f3f3f9' }}
                        >
                            <img style={{ borderRadius: '50%' }} alt="" src={avatarSrc} />
                            <Box
                                sx={{ border: '3px solid white', backgroundColor: '#2499ef', cursor: 'pointer' }}
                                borderRadius={'50%'}
                                height={32}
                                width={32}
                                position={'absolute'}
                                top={0}
                                right={'4px'}
                                color={'white'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                <label style={{ cursor: 'pointer' }}>
                                    <Icon width={20} height={20} icon={APP_ICON.i_camera} />
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={(event) => {
                                            handleImageUpload(event)
                                        }}
                                    />
                                </label>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Formik
                            initialValues={{
                                firstName: `${user?.first_name}`,
                                lastName: `${user?.last_name}`,
                                email: `${user?.email}`,
                                location: `${user?.address}`,
                                phone: `${user?.number}`,
                                city: `${user?.address}`,
                                birthday: `${user?.date}`,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmitUser}
                        >
                            {({ handleBlur, handleChange, values, errors, touched }) => (
                                <Form>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="First Name"
                                                id="firstName"
                                                type="text"
                                                label="First Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstName}
                                                helperText={
                                                    touched.firstName && errors.firstName ? errors.firstName : ''
                                                }
                                                error={touched.firstName && errors.firstName ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="Last Name"
                                                id="lastName"
                                                type="text"
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
                                                placeholder="example@gmail.com"
                                                id="email"
                                                type="email"
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
                                                placeholder="location"
                                                id="location"
                                                type="location"
                                                label="Location"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.location}
                                                helperText={touched.location && errors.location ? errors.location : ''}
                                                error={touched.location && errors.location ? true : false}
                                            />
                                        </Box>
                                    </Box>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="0123456789"
                                                id="phone"
                                                type="phone"
                                                label="Phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                helperText={touched.phone && errors.phone ? errors.phone : ''}
                                                error={touched.phone && errors.phone ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="City"
                                                id="city"
                                                type="city"
                                                label="City"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                                helperText={touched.city && errors.city ? errors.city : ''}
                                                error={touched.city && errors.city ? true : false}
                                            />
                                        </Box>
                                    </Box>
                                    <Box width="100%" display={'flex'} gap={2}>
                                        <Box my={1} flex={1}>
                                            <Textfield
                                                placeholder="MM/DD/YYYY"
                                                id="birthday"
                                                type="birthday"
                                                label="Birthday"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.birthday}
                                                helperText={touched.birthday && errors.birthday ? errors.birthday : ''}
                                                error={touched.birthday && errors.birthday ? true : false}
                                            />
                                        </Box>
                                        <Box my={1} flex={1}>
                                            <Dropdown
                                                key={sortedRoles.map((role) => role.value).join(',')}
                                                list={sortedRoles}
                                                onChange={(e) => setTypeSearch(e.target.value)}
                                                sx={{
                                                    pointerEvents: 'none',
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box mt={2} sx={{ display: 'flex', gap: 2 }}>
                                        <Button
                                            onClick={handleCloseEditUserModal}
                                            sx={{ width: '50%' }}
                                            color="primary"
                                            variant="outline"
                                        >
                                            <Icon width={20} style={{ marginRight: 4 }} icon="mdi:cancel-outline" />
                                            Cancel
                                        </Button>
                                        <Button type="submit" sx={{ width: '50%' }} color="primary">
                                            <Icon width={20} style={{ marginRight: 4 }} icon="iconamoon:edit" />
                                            Create User
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={300}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default EditUser
