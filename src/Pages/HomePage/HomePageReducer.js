const initialState = {
    totalTips: 0,
    taxMethod: 0,
    taxAmount: 0,
    perHour: 0,
    numberOfWaiters: 1
}

const HomePageReducer = (state, action) => {
    switch(action.type){
        case 'SET_TOTAL_TIPS':
            return {...state, totalTips: action.payload };
        case 'SET_TAX_METHOD':
            return { ...state, taxMethod: action.payload };
        case 'SET_TAX_AMOUNT':
            return { ...state, taxAmount: action.payload };
        case 'SET_PER_HOUR':
            return { ...state, perHour: action.payload };
        case 'SET_NUMBER_OF_WAITERS':
            return { ...state, numberOfWaiters: action.payload };
        default:
            return state;
    }
}

export {initialState, HomePageReducer};