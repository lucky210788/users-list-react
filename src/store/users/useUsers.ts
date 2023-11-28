import {useDispatch} from "react-redux";
import {getUsersData} from "./index"
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {RootState} from "../index";

export const useUsers = () => {
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    const getUsers = () => dispatch(getUsersData());

    return {
        getUsers
    }
}