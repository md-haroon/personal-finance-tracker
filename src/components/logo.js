export default function Logo() {
    return (
        <div className="logo-container">
            <img className="logo-img w-1/5 h-full" src="/logo.svg" />
            <div className="flex flex-col w-1/4 h-full">
                <p className="logo-text p-0 m-0">EXPENSE</p>
                <p className="logo-text p-0 m-0">TRACKER</p>
            </div>
        </div>
    )
}