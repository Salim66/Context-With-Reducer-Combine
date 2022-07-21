import { useReducer } from "react";
import MsgContext from "../context/MsgContext";
import { initialMsg, msgReducer } from "../reducers/MsgReducers";


const MsgContextProviders = ({ children }) => {

    const [msgState, dispatch] = useReducer(msgReducer, initialMsg);

    return (
        <MsgContext.Provider value={ { msgState, dispatch } }>
            { children }
        </MsgContext.Provider>
    );

}

export default MsgContextProviders;