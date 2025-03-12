"use client"
import { useContext, useReducer, useState } from "react"
import { ExpenseContext } from "@/app/expense/ExpenseContext";

const initalState = {
    date: { value: '', error: null },
    category: { value: '', error: null },
    subCategory: { value: '', error: null },
    amount: { value: '', error: null },
    currency: { value: '', error: null },
    notes: { value: '', error: null }
}

function reducerHandler(state, action) {

    switch (action.type) {
        case"FIELD_RESET":
            return initalState;
        case "FIELD_UPDATE":
            let test = {...state[action.field],value:action.payload}    
            return {...state,[action.field]:test};
        default:
            return state
    }
}

export default function ExpenseForm() {

    const { setFormData } = useContext(ExpenseContext);
    const [state, dispatch] = useReducer(reducerHandler, initalState)

    function fieldChangeHandle(e) {
        dispatch({
            type: "FIELD_UPDATE",
            field: e.target.name,
            payload: e.target.value
        });
    }
    const formOnSubmit = (e) => {
        e.preventDefault();
        let statePaylod = Object.keys(state).reduce((acc, key) => {
            acc[key] = state[key].value;
            return acc;
        },{});
        
        setFormData((prev) => {
            let newref = [...prev]
            newref.push(statePaylod)
            return newref;
        })
    }

    return (
        <>
            <h1>New Expence</h1>
            <form className="p-2" onSubmit={formOnSubmit} onReset={()=>dispatch({type:"FIELD_RESET"})}>
                <input type="text" onChange={fieldChangeHandle} className="inputStyle" id="date" name="date" />
                <input type="text" onChange={fieldChangeHandle} className="inputStyle" id="category" name="category" />
                <input type="text" onChange={fieldChangeHandle} className="inputStyle" id="subCategory" name="subCategory" />
                <input type="text" onChange={fieldChangeHandle} className="inputStyle" id="amount" name="amount" />
                <input type="text" onChange={fieldChangeHandle} className="inputStyle" id="currency" name="currency" />
                <input type="text" onChange={fieldChangeHandle} className="inputStyle" id="notes" name="notes" />
                <button type="reset" className="w-1/2 py-1 mt-9 border-2 uppercase">Reset</button>
                <button type="submit" className="w-1/2 py-1 mt-9 border-2 uppercase">Submit</button>
            </form>
        </>

    )
}