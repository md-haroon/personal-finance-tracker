"use client"
import {useContext,useState} from "react"
import { ExpenseContext } from "@/app/expense/ExpenseContext";



export default function ExpenseForm() {

    const {setFormData} = useContext(ExpenseContext);

    const formOnSubmit = (e) => {
        
        e.preventDefault();
        
        setFormData((prev) => {
            let newref = [...prev]
            newref.push(prev[0])
            return newref;
        })
    }

    return (
        <>
            <h1>New Expence</h1>
            <form className="p-2" onSubmit={formOnSubmit}>
                <input type="text" className="w-full mt-9 border-2 border-rose-600" id="fname" name="fname" />
                <input type="text" className="w-full mt-9 border-2 border-rose-600" id="lname" name="lname" />
                <input type="text" className="w-full mt-9 border-2 border-rose-600" id="lname" name="lname" />
                <button type="submit">From submit</button>
            </form>
        </>

    )
}