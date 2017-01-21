import { CHANGE_RANGE, CHANGE_SELECTION} from '../constants'

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {
            selected: selected
        }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_RANGE,
        payload: {
            dateRange

        }
    }
}

