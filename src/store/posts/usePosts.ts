import {useDispatch} from "react-redux";
import {getPostsData} from "./index"
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";
import {RootState} from "../index";

export const usePosts = () => {
    const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    const getPosts = (userId: number) => dispatch(getPostsData(userId));

    return {
        getPosts
    }
}