import React from 'react';
import HeaderClient from '../_components/header/HeaderClient';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=''> 
            <HeaderClient></HeaderClient>
            <main>
                {children}
            </main>
        </div>
    );
};

export default layout;