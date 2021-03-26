import React, {useState, useEffect} from "react";
import ListNotices from "../../../components/Admin/Notices/ListNotices";
import {getNoticesApi} from "../../../api/notice";



export default function Notices() {

    const [notices, setNotices] = useState([]);
    const [reloadNotices, setReloadNotices] = useState(false);

    useEffect(() => {
        getNoticesApi().then(response => {
            setNotices(response.notices);
        });
        setReloadNotices(false);
    }, [reloadNotices]);

    return (
        <>
            <ListNotices notices={notices} setReloadNotices={setReloadNotices} />
        </>
    )

}