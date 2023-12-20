import React from 'react'
import Button from '../../Components/ui/Button/Button'

function ProductPage() {
    return (
        <div>
            ProductPage
            <Button variant="primary" onClick={() => window.localStorage.removeItem('user')}>
                Log out demo
            </Button>
        </div>
    )
}

export default ProductPage
