import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const root: HTMLElement = window.document.documentElement;
        root.classList.add("theme-transition"); // Add transition class
        const initialTheme: string = root.classList.contains("dark")
            ? "dark"
            : "light";
        setTheme(initialTheme);

        // Remove transition on initial load to prevent flash
        return () => {
            root.classList.remove("theme-transition");
        };
    }, []);

    const toggleTheme = () => {
        const root: HTMLElement = window.document.documentElement;
        root.classList.add("theme-transition"); // Ensure transition class is present

        if (theme === "light") {
            root.classList.add("dark");
            setTheme("dark");
        } else {
            root.classList.remove("dark");
            setTheme("light");
        }

        // Remove transition class after animation completes
        const cleanup: () => void = () => {
            root.classList.remove("theme-transition");
            root.removeEventListener("transitionend", cleanup);
        };
        root.addEventListener("transitionend", cleanup);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
