import Switch from "@mui/material/Switch"
import { useEffect, useState } from "react"

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

type Theme = 'Shiny' | 'Normal'

export const Switcher = () => {

    const [theme, setTheme] = useState<Theme>('Normal')

    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? 'Shiny' : 'Normal')

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);

    return (
        <div className="container-switch">
            <span>Normal/Shiny</span>
            <Switch {...label} defaultChecked onChange={handleChange} checked={theme === 'Shiny'}/>
        </div>
    )
}