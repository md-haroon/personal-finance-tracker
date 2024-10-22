export default function NavMenu(props) {
    return (
        <nav className="pl-40">
            <ul className="flex items-center w-full">
                <li className="w-1/12"><a href="">DASHBOARD</a></li>
                <li className="w-1/12"><a href="/expense">EXPENSES</a></li>
                <li className="w-1/12"><a href="/budgeting">BUDGETS</a></li>
                <li className="w-1/12"><a href="/reports">REPORTS</a></li>
                <li className="w-1/12"><a href="/settings">SETTINGS</a></li>
            </ul>
        </nav>
    );
}