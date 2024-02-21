export function formatTableCategory(list) {
    if (!list) {
        return []
    }
    return list.map((category) => ({
        ...category,
        id: category._id,
    }))
}
