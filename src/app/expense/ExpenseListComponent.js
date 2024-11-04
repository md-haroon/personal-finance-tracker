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
                    <th>Notes</th>
                    <th>Category</th>
                    <th>Sub-category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    formData.map((row, index) => (
                        <tr key={index} className="border">
                            <td>{row.date}</td>
                            <td>{row.notes}</td>
                            <td>{row.category}</td>
                            <td>{row.subCategory}</td>
                            <td>{row.amount}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}