import { CHANGE_SITE_LANG } from '../constants'

export default (state = 'en', action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_SITE_LANG:
            console.log('----', type)
            return  payload;
    }
    return state;
}