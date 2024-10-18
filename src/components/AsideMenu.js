const cardList = [
    {
        type: "Fixed Expenses",
        percentage: 100,
        budget: 300,
        spend: 300

    },
    {
        type: "Variable Expenses",
        percentage: 75,
        budget: 150,
        spend: 100
    },
    {
        type: "Recurring Expenses",
        percentage: 50,
        budget: 150,
        spend: 100
    },
    {
        type: "Discretionary Expenses",
        percentage: 30,
        budget: 150,
        spend: 100
    }
]


export default function AsideMenu() {
    return (
        <aside>
            <h3>Sidebar</h3>
            <p>This is some sidebar content. You can put links or any information here.</p>
            {
                cardList.map((card,index) => {
                    console.log(index)
                    const position = (index === 0) ? "first" : (index === cardList.length - 1) ? "last" : "";
                    return (
                        <div key={index} className={`card ${position}`}>
                            <div>
                                <h1 className="text-lg">{card.percentage}</h1>
                            </div>
                            <div>
                                <h2 className="font-bold uppercase text-lg">{card.type}</h2>
                                <p className="text-sm text-black">Budget: <span className="font-semibold">$3,500</span></p>
                                <p className="text-sm">Stage: <span className="font-semibold">Milestone 2</span></p>
                            </div>
                        </div>
                    );
                })
            }
        </aside>
    );
}