import { NavLink } from 'react-router-dom';

export default function MobileMenu({ isOpen, closeMenu }) {
    if (!isOpen) return null;

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-lg font-medium py-3 border-l-4 border-primary pl-4 text-primary"
            : "text-lg font-medium py-3 border-l-4 border-transparent pl-4 hover:text-primary transition-colors";

    return (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={closeMenu}>
            <div className="absolute right-0 top-0 h-full w-64 bg-card-light dark:bg-card-dark border-l border-gray-200 dark:border-gray-800 p-6" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-8">
                    <span className="font-display text-xl font-bold">Menu</span>
                    <button className="p-2" onClick={closeMenu}>
                        <span className="material-icons-round">close</span>
                    </button>
                </div>
                <nav className="flex flex-col gap-4">
                    <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/community" className={linkClass} onClick={closeMenu}>Community</NavLink>
                    <NavLink to="/tournaments" className={linkClass} onClick={closeMenu}>Tournaments</NavLink>
                    <NavLink to="/learning" className={linkClass} onClick={closeMenu}>Learning</NavLink>
                    <NavLink to="/launchpad" className={linkClass} onClick={closeMenu}>Launchpad</NavLink>
                    <NavLink to="/profile" className={linkClass} onClick={closeMenu}>Profile</NavLink>
                </nav>
            </div>
        </div>
    );
}
