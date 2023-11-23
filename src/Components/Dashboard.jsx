import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLists, getState } from "../store/user/userAction";
import "./Dashboard.css"
import UserDetails from "./UserDetails";
import moment from "moment-timezone";
import { useCallback } from "react";
import LoaderComponent from "./Loader";

function Dashboard() {
    const [pageNumber, setpageNumber] = useState(1);
    const getUserState = useSelector(getState);
    const dispatch = useDispatch();
    const { userList,isLodingData } = getUserState;

    useEffect(() => {
        dispatch(fetchUserLists())
    }, [dispatch])

    const toBottom = useCallback((e) => {
        const bottom = (e.target.scrollTop + e.target.clientHeight) >= (e.target.scrollHeight - 1)
        if (bottom) {
            setpageNumber(pageNumber + 1)
            dispatch(fetchUserLists(pageNumber + 1))
        }
    }, [dispatch, pageNumber])

    return (
        <div className="dash_board_conatiner--wrapper" onScroll={(e) => { toBottom(e); }}>
            <LoaderComponent isLoading={isLodingData }/>
            {userList && userList.map((eachNode) => {
                let date = moment(new Date(eachNode?.node?.last_update)).format("MMM DDD,YYYY HH:mm A")
                return (<UserDetails key={eachNode?.nid} date={date} userData={eachNode?.node} />)

            })}
            
        </div>
    )
}
export default Dashboard