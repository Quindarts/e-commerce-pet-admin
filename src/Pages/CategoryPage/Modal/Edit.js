import { Form, Formik } from 'formik'
import { Fragment, useEffect, useState } from 'react'
import Textfield from '../../../Components/ui/Textfield/Textfield'
import { Box, Checkbox, CircularProgress, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { apiGetCategoryById, apiUpdateCategoryById } from '../../../services/api-category'
import { useSnackbar } from 'notistack'
import useCategory from '../../../hook/api/category'

function ModalEdit(props) {
    const { category_id, handleCloseEditModal } = props
    const [checked, setChecked] = useState(true)
    const { enqueueSnackbar } = useSnackbar()
    const [categoryFetch, setCategoryFetch] = useState(null)
    const { handleGetAllCategoryByParams, currentPage, limit } = useCategory()

    useEffect(() => {
        apiGetCategoryById(category_id)
            .then((data) => {
                if (data.success && data.category) {
                    setCategoryFetch(data.category)
                }
            })
            .catch((err) => {
                enqueueSnackbar(err, { variant: 'error' })
            })
    }, [])

    const handleSubmitEditForm = async (values, actions) => {
        apiUpdateCategoryById(category_id, values).then((res) => {
            if (res.success && res.status === 201) {
                handleCloseEditModal()
                enqueueSnackbar(res.message, { variant: 'success' })
                handleGetAllCategoryByParams(limit, currentPage)
            }
        })
    }
    const handleChangeActive = (event) => {
        setChecked(event.target.checked)
    }
    return (
        <Fragment>
            {categoryFetch ? (
                <Fragment>
                    <Formik
                        className="form"
                        initialValues={{
                            name: `${categoryFetch.name}`,
                            total: `${categoryFetch.total}`,
                            description: `${categoryFetch.description}`,
                        }}
                        onSubmit={handleSubmitEditForm}
                    >
                        {({ handleBlur, handleChange, values }) => (
                            <Form style={{ display: 'flex', gap: 3, flexDirection: 'column', margin: '15px' }}>
                                <Typography
                                    style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }}
                                    marginBottom="15px"
                                    variant="h7"
                                >
                                    Category details
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                                        <Box flex={1}>
                                            <Textfield
                                                label="Name"
                                                name="name"
                                                id="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </Box>
                                        <Box flex={1}>
                                            <Textfield
                                                label="Code"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={categoryFetch.code}
                                                disabled
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Textfield
                                            label="Total"
                                            name="total"
                                            id="total"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.total}
                                        />
                                    </Box>
                                    <Box>
                                        <Textfield
                                            label="Description"
                                            name="description"
                                            id="description"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.description}
                                        />
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Typography className="t">Active Category:</Typography>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChangeActive}
                                            onBlur={handleBlur}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    <Button
                                        onClick={handleCloseEditModal}
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
                </Fragment>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" height={300}>
                    <CircularProgress />
                </Box>
            )}
        </Fragment>
    )
}

export default ModalEdit
