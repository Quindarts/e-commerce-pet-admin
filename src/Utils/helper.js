export function formatTableCategory(list) {
    return list.map((category) => ({
        ...category,
        id: category._id,
    }))
}
