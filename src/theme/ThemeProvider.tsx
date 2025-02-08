import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";


export const ThemeProvider: FC = ({children}) => {

    const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(initialTheme);



    const defaultTheme = useMemo(() =>(
        {
            theme: theme,
            setTheme: setTheme
        }
    ), [theme])

    return (
    <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
    );
};

