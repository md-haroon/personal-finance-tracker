"use client"
import { createContext,useState } from "react";

const ExpenseContext = createContext(null);

let initializeData = [{
    "date" : "01/01/2023",
    "notes" : "this is note for sample",
    "category" : "food",
    "subCategory" : "rc",
    "amount" : "100",
    "currency" : "SGD"
}]

const ExpenseProvider = ({children}) => {

    const [formData, setFormData] = useState(initializeData);

    return(
        <ExpenseContext.Provider value={{formData,setFormData}}>
            {children}
        </ExpenseContext.Provider>
    );

}

export {ExpenseContext,ExpenseProvider};
