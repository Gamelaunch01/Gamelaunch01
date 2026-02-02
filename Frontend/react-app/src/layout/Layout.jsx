import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';

export default function Layout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300">
            <Header toggleMobileMenu={() => setMobileMenuOpen(true)} />
            <MobileMenu isOpen={mobileMenuOpen} closeMenu={() => setMobileMenuOpen(false)} />

            <main className="max-w-[1600px] mx-auto px-6 py-8 w-full flex-grow">
                <Outlet />
            </main>

            <Footer />

            <div className="fixed bottom-6 right-6 z-50">
                <button className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg hover:rotate-12 transition-transform" onClick={() => document.documentElement.classList.toggle('dark')}>
                    <span className="material-icons-round">dark_mode</span>
                </button>
            </div>
        </div>
    );
}
