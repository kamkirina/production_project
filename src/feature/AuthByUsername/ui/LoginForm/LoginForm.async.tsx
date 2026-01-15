import { FC, lazy } from 'react';
import { LoginFormProps } from 'feature/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy < FC<LoginFormProps>>(async () => new Promise((resolve) => {
    // @ts-ignore
    // imitation of delay
    setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));
