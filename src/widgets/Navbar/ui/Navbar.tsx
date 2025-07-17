import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuth, setIsAuth] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuth(!isAuth);
    }, [isAuth]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {/* eslint-disable-next-line max-len */}
                <Button className={cls.mainLink} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuth} onClose={onToggleModal}>
                    lorem ipsum lorem ipsum
                    v lorem ipsum lorem ipsum v v lorem ipsum v v lorem ipsum vlorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum v lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                    ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                    ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                    ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                    ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </Modal>
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
