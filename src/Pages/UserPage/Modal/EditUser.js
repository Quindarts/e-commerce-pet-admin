import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'

function EditUser(props) {
    const { handleCloseEditUserModal, id } = props

    const [avatarSrc, setAvatarSrc] = useState('https://uko-react.vercel.app/static/avatar/001-man.svg')

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
    const handleSubmitUser = () => {}
    return (
        <Box>
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
                <Formik initialValues={{ name: 'quang' }} onSubmit={handleSubmitUser}>
                    {() => (
                        <Form>
                            <Box width="100%" display={'flex'} gap={3}>
                                <Box my={1} flex={1}>
                                    <Textfield label="First Name" />
                                </Box>
                                <Box my={1} flex={1}>
                                    <Textfield label="Last Name" />
                                </Box>
                            </Box>
                            <Box width="100%" display={'flex'} gap={3}>
                                <Box my={1} flex={1}>
                                    <Textfield label="Email" />
                                </Box>
                                <Box my={1} flex={1}>
                                    <Textfield label="Location" />
                                </Box>
                            </Box>
                            <Box width="100%" display={'flex'} gap={3}>
                                <Box my={1} flex={1}>
                                    <Textfield label="Phone" />
                                </Box>
                                <Box my={1} flex={1}>
                                    <Textfield label="City" />
                                </Box>
                            </Box>
                            <Box width="100%" display={'flex'} gap={3}>
                                <Box my={1} flex={1}>
                                    <Textfield label="Birthday" />
                                </Box>
                                <Box my={1} flex={1}>
                                    <Textfield label="Role" />
                                </Box>
                            </Box>
                            <Box mt={2} sx={{ display: 'flex', gap: 3 }}>
                                <Button
                                    onClick={handleCloseEditUserModal}
                                    sx={{ width: '50%' }}
                                    color="primary"
                                    variant="outline"
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" sx={{ width: '50%' }} color="primary">
                                    Save
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default EditUser
