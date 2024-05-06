import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Formik, useFormikContext } from 'formik'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Card } from '../styles'
import * as yup from 'yup'
import client from '../../../services/api-context'
import { enqueueSnackbar } from 'notistack'
import { UserForm } from './UserForm'

export const SEARCH_ENUM = {
    ADMIN: 'admin',
    USER: 'user',
    WAREHOUSE: 'warehouse',
}

function UserAddPage(props) {
    const { id } = props
    const [avatarSrc, setAvatarSrc] = useState('https://uko-react.vercel.app/static/avatar/001-man.svg')
    const [user, setUser] = useState(null)
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

    return (
        <Box sx={Card} className="mx-auto max-w-[580px] justify-center px-8 py-9" mx={2} mb={3} mt={1}>
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
                <UserForm />
            </Box>
        </Box>
    )
}

export default UserAddPage
