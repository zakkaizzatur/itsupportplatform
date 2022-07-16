import * as api from "../../../axios";

export const GET_BRAND_LIST = 'GET_BRAND_LIST';
export const CREATE_BRAND = 'CREATE_BRAND';
export const DELETE_BRAND = 'DELETE_BRAND';

export const GET_LAPTOP_LIST = 'GET_LAPTOP_LIST';
export const CREATE_LAPTOP = 'CREATE_LAPTOP';
export const DELETE_LAPTOP = 'DELETE_LAPTOP';
export const UPDATE_LAPTOP = 'UPDATE_LAPTOP';

export const GET_TYPE_LIST = 'GET_TYPE_LIST';
export const CREATE_TYPE = 'CREATE_TYPE';
export const DELETE_TYPE = 'DELETE_TYPE';

export const getBrands = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBrands();
        dispatch({ type: GET_BRAND_LIST, payload:data });
    } catch (error) {
        console.log(error);
    }
}

export const createBrand = (brand) => async (dispatch) => {
    try {
        const { data } = await api.createBrand(brand);
        dispatch({ type: CREATE_BRAND, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteBrand = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteBrand(id);
        dispatch({ type: DELETE_BRAND, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const getLaptop = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLaptop();
        dispatch({ type: GET_LAPTOP_LIST, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createLaptop = (laptop) => async (dispatch) => {
    try {
        const { data } = await api.createLaptop(laptop);
        dispatch({ type: CREATE_LAPTOP, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteLaptop = (id) => async (dispatch) => {
    try {
        await api.deleteLaptop(id);
        dispatch({ type: DELETE_LAPTOP, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const updateLaptop = (id, updatedLaptop) => async (dispatch) => {
    try {
        const {data} = await api.updateLaptop(id, updatedLaptop);
        dispatch({ type: UPDATE_LAPTOP, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const getType = () => async (dispatch) => {
    try {
        const { data } = await api.fetchType();
        dispatch({ type: GET_TYPE_LIST, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createType = (type) => async (dispatch) => {
    try {
        const { data } = await api.createType(type);
        dispatch({ type: CREATE_TYPE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteType = (id) => async (dispatch) => {
    try {
        await api.deleteType(id);
        dispatch({ type: DELETE_TYPE, payload: id });
    } catch (error) {
        console.log(error);
    }
}




