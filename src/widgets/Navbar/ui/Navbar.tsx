import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar,{} ,[className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.mainLink } theme={AppLinkTheme.SECONDARY}>главная</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>о нас</AppLink>
            </div>
        </div>
    );
};



