import { useEffect, useState } from "react";

export function ThemeSwitcher() {

    const [userTheme, setUserTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');


    useEffect(() => {
        document.body.classList.remove("dark", "light");
        document.body.classList.add(userTheme);
    }, [userTheme]);

    return <button onClick={() => setUserTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")} style={{ marginTop: "auto" }}>🌙/☀️ Tema</button>
}
