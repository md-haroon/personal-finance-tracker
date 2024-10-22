import Logo from "../components/logo";
import NavMenu from "../components/NavMenu";

export default function Header() {
    return (
        <header>
            <div className="flex">
                <div class="w-3/12">
                    <Logo />
                </div>
                <div class="grow">
                    <NavMenu />
                </div>
                <div class="w-1/12">03</div>
            </div>
        </header>
    );
}