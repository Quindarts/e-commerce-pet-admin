import { defer, redirect } from 'react-router'
import { APP_ROUTER } from '../../Utils/Constants'
import { tokenService } from '../../services/token.services'

export const loaderUser = async () => {
    //call api check user
    // saved store

    if (!localStorage.getItem('tokenList')) {
        throw redirect(APP_ROUTER.LOGIN)
    }
    return true
}
