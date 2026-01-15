import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M= 'size_m',
    L= 'size_l',
    XL= 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  square?: boolean
  theme?: ButtonTheme,
    size?: ButtonSize,
    disabled?: boolean,
}

export const Button: FC <ButtonProps> = (props) => {
    const {
        className, children, theme, square, size = ButtonSize.M, disabled, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
