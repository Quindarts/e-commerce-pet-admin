import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryByParams } from '../../services/api-category'
import { enqueueSnackbar } from 'notistack'
import { setFetching } from '../../store/category.slice'

const useCategory = () => {
    const category = useSelector((state) => state.categorys)
    const { isFetch, params } = category
    const currentPage = parseInt(params.page)
    const limit = parseInt(params.limit)
    const dispatch = useDispatch()

    const handleGetAllCategoryByParams = async (limit, offset) => {
        
        dispatch(setFetching(true))
        const resultAction = await dispatch(fetchCategoryByParams({ limit, offset }))

        if (fetchCategoryByParams.fulfilled.match(resultAction)) {
            dispatch(setFetching(false))
        }
        if (fetchCategoryByParams.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetching(false))
        }
    }
    return { category, isFetch, currentPage, limit, handleGetAllCategoryByParams }
}
export default useCategory
