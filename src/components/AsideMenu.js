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
            {
                cardList.map((card,index) => {
                    const position = (index === 0) ? "first" : (index === cardList.length - 1) ? "last" : "";
                    return (
                        <div key={index} className={`card ${position}`}>
                            <div>
                                <h1 className="text-lg">{card.percentage}</h1>
                            </div>
                            <div>
                                <h2 className="font-bold uppercase text-lg">{card.type}</h2>
                                <p className="text-sm text-slate-500">Budget: <span className="font-semibold">SGD {card.budget}</span></p>
                                <p className="text-sm text-black">Spend: <span className="font-semibold">{card.spend}</span></p>
                            </div>
                        </div>
                    );
                })
            }
        </aside>
    );
}