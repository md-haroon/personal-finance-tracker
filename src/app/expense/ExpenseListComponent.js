"use client"

import { useContext } from 'react';
import { ExpenseContext } from "@/app/expense/ExpenseContext";

export default function ExpenseList() {
    
    const {formData} = useContext(ExpenseContext);
    
    return (
        
        <table className="w-full text-left table-auto min-w-max">
            <thead className="bg-slate-300">
                <tr className="">
                    <th>Date </th>
                    <th>Category</th>
                    <th>Sub-category</th>
                    <th>Amount</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {
                    formData.map((row, index) => (
                        <tr key={index} className="border h-10">
                            <td className='text-center'>{row.date}</td>
                            <td>{row.category}</td>
                            <td>{row.subCategory}</td>
                            <td className='text-center'>{row.amount}</td>
                            <td>{row.notes}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}