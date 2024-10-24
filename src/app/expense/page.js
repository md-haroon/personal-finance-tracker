import ExpenceForm from "@/app/expense/ExpenceFormComponent";

import "@/app/expense/expense.page.css";

export default function expensePage(params) {
    return(
        <>
        <div className="expence-container">
            
            <section className="form-section">
                <ExpenceForm />
            </section>

            <div className="details-section">
                <section className="sumary-cards">
f
                </section>
                <section className="expence-details">
f
                </section>
            </div>

        </div>
        </>
    )
}