import { CHANGE_MONTH } from "./actions"

const initialState = 0

export const monthReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MONTH: {
            return action.payload
        }
        default: {
            return state
        }
    }
}