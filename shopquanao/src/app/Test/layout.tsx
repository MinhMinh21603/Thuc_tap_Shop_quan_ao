import React from 'react';
import HeaderClient from '../_components/HeaderClient';
import Footer from '../_components_Tnhan/Footer';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=''> 
            <HeaderClient></HeaderClient>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default layout;