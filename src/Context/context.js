import React, { useState, useContext } from 'react'
import data from '../data'
import dataTwo from '../dataTwo'
import plan from '../plan'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [table, setTable] = useState(data);
    const [planList, setPlanList] = useState(plan);
    const [startDate, setStartDate] = useState(null);
    const [isClicked, SetIsClicked] = useState(false);
    const [warning, SetWarning] = useState(false);
    const [active, setActive] = useState(true);
    const [sheduleId, setSheduleId] = useState(0);
    const [date, setDate] = useState(null);
    const [info, setInfo] = useState(false);


    const [aboutTop, setAboutTop] = useState({
        top: null,
        bottom: null
    });
    const [serviceTop, setServiceTop] = useState({
        top: null,
        bottom: null
    });
    const [contactTop, setContactTop] = useState({
        top: null,
        bottom: null
    })
    
    return <AppContext.Provider value={{table,setTable,data, dataTwo, startDate, setStartDate, isClicked, SetIsClicked, warning, SetWarning, setSheduleId, sheduleId, active, setActive, setDate, date, info, setInfo, planList,serviceTop, setServiceTop,aboutTop, setAboutTop,contactTop, setContactTop}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
