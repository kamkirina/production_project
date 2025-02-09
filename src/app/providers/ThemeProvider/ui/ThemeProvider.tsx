import { type FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
    const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(initialTheme);

    const defaultTheme = useMemo(() => (
        {
            theme,
            setTheme,
        }
    ), [theme]);

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
