import {ExpenseProvider} from "@/app/expense/ExpenseContext";
import ExpenseForm from "@/app/expense/ExpenseFormComponent";
import ExpenseList from "@/app/expense/ExpenseListComponent";
import ExpenseOverview  from "@/app/expense/ExpenseOverviewComponent";



import "@/app/expense/expense.page.css";

export default function expensePage(params) {
    return (
        <ExpenseProvider>
            <div className="expence-container">

                <section className="form-section">
                    <ExpenseForm />
                </section>

                <div className="details-section">
                    <section className="sumary-cards">
                        <ExpenseOverview />
                    </section>
                    <section className="expence-details">
                        <ExpenseList/>
                    </section>
                </div>

            </div>
        </ExpenseProvider>
    )
}