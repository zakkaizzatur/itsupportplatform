import { GET_BRAND_LIST, CREATE_BRAND, DELETE_BRAND, GET_LAPTOP_LIST, CREATE_LAPTOP, DELETE_LAPTOP, UPDATE_LAPTOP  } from "../actions/DataPerangkatActions";

const initialState = [];

const DataPerangkatReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_BRAND_LIST:
        case GET_LAPTOP_LIST:
            return action.payload;
        case CREATE_BRAND:
        case CREATE_LAPTOP:
            return [...state, action.payload];
        case DELETE_BRAND:
        case DELETE_LAPTOP:
            return state.filter((data) => data.id !== action.payload);
        case UPDATE_LAPTOP:
            return state.map((data) => {
                if (data.id == action.payload.id) {
                    return {
                        ...data,
                        ...action.payload,
                    };
                } else {
                    return data;
                }
            });
    }
    return state
}

export default DataPerangkatReducer;