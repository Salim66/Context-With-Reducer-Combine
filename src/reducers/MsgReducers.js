
// create initail State
export const initialMsg = "Bangladesh";


// Create reducer function
export const msgReducer = (state, { type, payload }) => {

    switch(type){
        case 'MSG_UPDATE':
            return payload;

        default:
            return state;
    }

}