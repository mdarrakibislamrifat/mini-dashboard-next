

import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
    return (
        <header className="flex">
            <h2 className="text-2xl font-semibold">Mini Dashboard</h2>

            <ThemeToggle />
        </header>
    );
}
