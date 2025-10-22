"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
}
