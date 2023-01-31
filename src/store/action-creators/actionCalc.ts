import {Dispatch} from "redux";
import {calcAction, calcActionTypes} from "../../types/calculator";


export const inputSquare = (num: number) => {
    return (dispatch: Dispatch<calcAction>) => {
        dispatch({type: calcActionTypes.CHANGE_SQUARE, payload: num})
    }
}

export const selectApartment = (str: string) => {
    return (dispatch: Dispatch<calcAction>) => {
        dispatch({type: calcActionTypes.APARTMENT_SELECT, payload: str})
    }
}

export const selectViewJob = (isView: boolean) => {
    return (dispatch: Dispatch<calcAction>) => {
        dispatch({type: calcActionTypes.VIEW_JOBS, payload: isView})
    }
}
