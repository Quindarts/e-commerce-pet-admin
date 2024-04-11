export function formatTableCategory(list) {
    if (!list) {
        return []
    }
    return list.map((category) => ({
        ...category,
        id: category._id,
    }))
}

export function formatTableProduct(list) {
    if (!list) {
        return []
    }
    return list.map((product) => ({
        ...product,
        id: product._id,
    }))
}
