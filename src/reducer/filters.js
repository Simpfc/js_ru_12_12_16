import { CHANGE_RANGE, CHANGE_SELECTION} from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action
    //console.log('---', action)
    switch (type) {
        case CHANGE_SELECTION:
            return {...filters , selected: payload.selected};
        case CHANGE_RANGE:
            return {...filters , dateRange: payload.dateRange};
    }

    return filters
}