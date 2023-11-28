import {useDispatch} from "react-redux";
import {getAlbumsData} from "./index"
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {RootState} from "../index";

export const useAlbums = () => {
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    const getAlbums = (userId: number) => dispatch(getAlbumsData(userId));

    return {
        getAlbums
    }
}