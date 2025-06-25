import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <header className='lg:max-w-10/12 mx-auto'>
                <Navbar></Navbar>
            </header>

            <main className='lg:max-w-10/12 mx-auto mb-10'>
                <Outlet></Outlet>
            </main>

            <footer className='md:h-[60vh] h-[50vh]'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;