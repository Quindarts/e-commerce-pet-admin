import React from 'react'
import Modal from '../../../Components/ui/Modal/Modal'
import { Formik, Form } from 'formik'
import { Grid } from '@mui/material'
import * as yup from 'yup'
import Button from '../../../Components/ui/Button/Button'
import Textfield from '../../../Components/ui/Textfield/Textfield'

const Edit = ({
    isEditModalOpen,
    handleCloseEditModal,
    currentProduct,
    setCurrentProduct,
    currentCategory,
    updateProduct,
}) => {
    const schema = yup.object().shape({
        code: yup
            .string()
            .matches(/^[A-Za-z0-9]*$/)
            .required('Required'),
        name: yup
            .string()
            .matches(/^[A-Za-z0-9]*$/)
            .required('Required'),
        price: yup.number().min(0, '>= 0').required('Required'),
        available: yup.number().min(0, '>= 0').required('Required'),
        description: yup
            .string()
            .matches(/^[A-Za-z0-9]*$/)
            .required('Required'),
        tags: yup
            .string()
            .matches(/^[A-Za-z0-9]*$/)
            .required('Required'),
        brand: yup
            .string()
            .matches(/^[A-Za-z0-9]*$/)
            .required('Required'),
        category: yup
            .string()
            .matches(/^[A-Za-z0-9]*$/)
            .required('Required'),
        length: yup.number().min(0, '> 0').required('Required'),
        width: yup.number().min(0, '> 0').required('Required'),
        height: yup.number().min(0, '> 0').required('Required'),
        weight: yup.number().min(0, '> 0').required('Required'),
    })
    console.log(currentProduct)
    const handleChange = (event) => {
        const { name, value } = event.target
        setCurrentProduct((prevProduct) => ({ ...prevProduct, [name]: value }))
    }

    return (
        <Modal className="" maxWidth="lg" onClose={handleCloseEditModal} open={isEditModalOpen}>
            {currentProduct && (
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, { setSubmitting }) => {
                        if (values && values._id) {
                            updateProduct(values._id, values)
                                .then(() => {
                                    handleCloseEditModal()
                                    setSubmitting(false)
                                })
                                .catch((error) => {
                                    console.error('Failed to update product:', error)
                                    setSubmitting(false)
                                })
                        } else {
                            console.error('Product id is not defined.', values._id)
                            setSubmitting(false)
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Grid container className="space-y-3 p-5">
                                <Grid item xs={12}>
                                    <h1>Edit Product</h1>
                                </Grid>
                                <Grid item xs={6} className="space-y-2">
                                    <Textfield
                                        fullWidth
                                        name="code"
                                        label="Code"
                                        value={currentProduct.code}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                    <Textfield
                                        fullWidth
                                        name="name"
                                        label="Name"
                                        value={currentProduct.name}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Price"
                                        name="price"
                                        value={currentProduct.price}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Available"
                                        name="avaiable"
                                        value={currentProduct.avaiable}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Description"
                                        name="description"
                                        value={currentProduct.description}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Tags"
                                        name="tags"
                                        value={currentProduct.tags}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                </Grid>
                                <Grid item xs={6} className="space-y-2">
                                    <Textfield
                                        fullWidth
                                        label="Brand"
                                        name="brand"
                                        value={currentProduct.brand}
                                        onChange={handleChange}
                                        className="mb-5"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Length"
                                        name="length"
                                        value={
                                            currentProduct && currentProduct.dimensions
                                                ? currentProduct.dimensions.length
                                                : ''
                                        }
                                        onChange={handleChange}
                                        className="mb-5"
                                        placeholder="Product Length"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Width"
                                        value={
                                            currentProduct && currentProduct.dimensions
                                                ? currentProduct.dimensions.width
                                                : ''
                                        }
                                        onChange={handleChange}
                                        className="mb-5"
                                        placeholder="Product Width"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Height"
                                        value={
                                            currentProduct && currentProduct.dimensions
                                                ? currentProduct.dimensions.height
                                                : ''
                                        }
                                        onChange={handleChange}
                                        className="mb-5"
                                        placeholder="Product Height"
                                    />
                                    <Textfield
                                        fullWidth
                                        label="Weight"
                                        value={
                                            currentProduct && currentProduct.dimensions
                                                ? currentProduct.dimensions.weight
                                                : ''
                                        }
                                        onChange={handleChange}
                                        className="mb-5"
                                        placeholder="Product Weight"
                                    />

                                    <Textfield
                                        fullWidth
                                        label="Category"
                                        value={
                                            currentProduct && currentProduct.category
                                                ? currentProduct.category.message
                                                : ''
                                        }
                                        onChange={handleChange}
                                        className="mb-5"
                                        placeholder="Product Category"
                                    />
                                </Grid>
                                <Button type="submit" variant="contained" color="primary">
                                    Update Product
                                </Button>
                                <Button onClick={handleCloseEditModal}>Cancel</Button>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            )}
        </Modal>
    )
}

export default Edit
