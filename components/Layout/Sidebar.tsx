"use client";

import Link from "next/link";
import { Home, Box, Settings } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-6 fixed">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <ul className="space-y-4">
                <li>
                    <Link href="/" className="flex items-center gap-2 hover:text-gray-300">
                        <Home size={18} /> Home
                    </Link>
                </li>
                <li>
                    <Link href="/orders" className="flex items-center gap-2 hover:text-gray-300">
                        <Box size={18} /> Orders
                    </Link>
                </li>
                <li>
                    <Link href="/settings" className="flex items-center gap-2 hover:text-gray-300">
                        <Settings size={18} /> Settings
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
