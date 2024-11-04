import Logo from "../components/logo";
import NavMenu from "../components/NavMenu";

export default function Header() {
    return (
        <header>
            <div className="flex">
                <div className="w-3/12">
                    <Logo />
                </div>
                <div className="grow">
                    <NavMenu />
                </div>
                <div className="w-1/12">03</div>
            </div>
        </header>
    );
}