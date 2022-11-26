import {createListenerMiddleware} from "@reduxjs/toolkit";
import {updateStatus} from "../login/actions";
import {LoginStatus} from "../../../constants/loginStatus";

export const authenticatedMiddleware = createListenerMiddleware()
authenticatedMiddleware.startListening({
    actionCreator: updateStatus,
    effect: (action, api) => {
        if(action.payload === LoginStatus.Authenticated) {

        }
        else {

        }
    }
})
