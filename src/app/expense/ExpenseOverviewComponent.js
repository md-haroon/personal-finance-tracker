"use client"
import { useContext, useState } from "react"

export default function ExpenseOverview() {

    return (
        <div className="flex flex-row justify-between h-full pb-2">
            <div class="basis-1/4 shadow-inner shadow-indigo-500/50 p-2">

            </div>
            <div class="basis-1/4 shadow-inner shadow-indigo-500/50 p-2">
                <div className="w-full h-full flex flex-col justify-center text-center">
                    <h1 className="card-title">Top Spending</h1>
                    <h4 className="card-amt">100</h4>
                </div>
            </div>
            <div class="basis-1/4 shadow-inner shadow-indigo-500/50 p-2">
                <div className="w-full h-full flex flex-col justify-center text-center">
                    <h1 className="card-title">Remaining Budget</h1>
                    <h4 className="card-amt">50</h4>
                </div>
            </div>
            <div class="basis-1/4 shadow-inner shadow-indigo-500/50 p-2">
                <div className="w-full h-full flex flex-col justify-center text-center">
                    <h1 className="card-title">Total Expenses</h1>
                    <h4 className="card-amt">300</h4>
                </div>
            </div>
        </div>
    )

}