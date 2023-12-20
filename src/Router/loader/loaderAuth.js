import { defer, redirect } from 'react-router'
import { APP_ROUTER } from '../../Utils/Constants'

export const loaderUser = async () => {
    //call api check user
    // saved store
    if (!localStorage.getItem('user')) {
        throw redirect(APP_ROUTER.LOGIN)
    }
    return true
}
