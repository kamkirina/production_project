import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App = () => (
    <div className={classNames('app', {})}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
