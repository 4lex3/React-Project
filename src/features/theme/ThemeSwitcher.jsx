export function ThemeSwitcher() {
    return <button onClick={() => document.body.classList.toggle("dark")} style={{marginTop: "auto"}}>🌙/☀️ Tema</button>
}
