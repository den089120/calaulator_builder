import {calcAction, calcActionTypes, calcState} from "../../types/calculator";


const initialState: calcState = {
    squareApartment: 0,
    typeApartment: '',
    finalCostJobs: 0,
    finalCostMaterials: 0,

    isViewApartment: false,
    isViewCommonJobs: false,
    isViewJobs: false,
    isViewMaterials: false,
}

export const calcReducer = (state=initialState, action: calcAction): calcState => {
    switch (action.type) {
        case calcActionTypes.CHANGE_SQUARE:
            return {...state, isViewApartment: true, squareApartment: action.payload}
        case calcActionTypes.GET_SQUARE:
            return {...state}
        case calcActionTypes.APARTMENT_SELECT:
            return {...state, isViewCommonJobs: true, isViewMaterials: true, typeApartment: action.payload}
        case calcActionTypes.VIEW_JOBS:
            return {...state, isViewJobs: action.payload}
        default:
            return state
    }
}
