import React, {createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = (props)=> {
    const [userData,setUserData]=useState({first:"", last:"",email:"",dob:"",phoneNum:"",password:""})
    return <DataContext.Provider {...props} value={{first:userData.first, last:userData.last, email:userData.email,
        dob:userData.dob, phoneNum:userData.phoneNum, password: userData.password, setUserData:setUserData}} />;
};

export { DataProvider};