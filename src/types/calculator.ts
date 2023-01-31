
export enum calcActionTypes {
    CHANGE_SQUARE = "changeSquare",
    GET_SQUARE = "getSquare",
    APARTMENT_SELECT = "apartmentSelect",
    VIEW_JOBS = "viewJobs",
}

interface changeSquareAction {
    type: calcActionTypes.CHANGE_SQUARE;
    payload: number;
}
interface selectTypeApart {
    type: calcActionTypes.APARTMENT_SELECT;
    payload: string;
}
interface selectViewJobs {
    type: calcActionTypes.VIEW_JOBS;
    payload: boolean;
}

interface getSquareAction {
    type: calcActionTypes.GET_SQUARE;
}
export type calcAction = changeSquareAction | getSquareAction | selectTypeApart | selectViewJobs;


export interface calcState {
    squareApartment: number;
    typeApartment: string;
    finalCostJobs: number;
    finalCostMaterials: number;
    isViewApartment: boolean;
    isViewCommonJobs: boolean;
    isViewJobs: boolean;
    isViewMaterials: boolean;

}