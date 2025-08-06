"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleTheme = () => {
        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    };

    if (!isMounted) {
        return (
            <button className="p-2 rounded-md transition-colors">
                <div className="w-5 h-5" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        >
            {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    );
}
