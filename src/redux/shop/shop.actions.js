import axios from 'axios'

import ShopActionTypes from './shop.types'

export const getItems = () => dispatch => {
    axios.get('/api/seller/product')
        .then(res => {
            console.log(res.data.product)
            dispatch({
                type: ShopActionTypes.GET_ITEMS,
                payload: res.data.product
            })
        }).catch(err => console.log('eeh',err))
}