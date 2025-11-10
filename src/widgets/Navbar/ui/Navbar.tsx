import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'feature/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuth, setIsAuth] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuth(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuth(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {/* eslint-disable-next-line max-len */}
                <Button className={cls.mainLink} theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>{t('Войти')}</Button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <LoginModal isOpen={isAuth} onClose={onCloseModal} />
                <AppLink
                    to="/"
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('главная')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('о нас')}
                </AppLink>
            </div>
        </div>
    );
};
