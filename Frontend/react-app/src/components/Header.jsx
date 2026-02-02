import { NavLink } from 'react-router-dom';

export default function Header({ toggleMobileMenu }) {
    const navClass = ({ isActive }) =>
        isActive
            ? "text-sm font-medium border-b-2 border-primary text-slate-900 dark:text-white py-5"
            : "text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors py-5";

    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="material-icons-round text-black text-xl">sports_esports</span>
                        </div>
                        <span className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">GameLaunch</span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-6">
                        <NavLink to="/" className={navClass}>Home</NavLink>
                        <NavLink to="/community" className={navClass}>Community</NavLink>
                        <NavLink to="/tournaments" className={navClass}>Tournaments</NavLink>
                        <NavLink to="/learning" className={navClass}>Learning</NavLink>
                        <NavLink to="/launchpad" className={navClass}>Launchpad</NavLink>
                        <NavLink to="/profile" className={navClass}>Profile</NavLink>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800">
                        <span className="material-icons-round text-sm text-slate-400">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-xs w-32 md:w-48 text-slate-700 dark:text-slate-200" placeholder="Search games..." type="text" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative">
                            <span className="material-icons-round">notifications</span>
                            <span className="absolute top -2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
                        </button>
                        <button className="p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                            <span className="material-icons-round">forum</span>
                        </button>
                        <button className="p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                            <span className="material-icons-round">settings</span>
                        </button>
                        <div className="h-8 w-px bg-gray-200 dark:bg-gray-800 mx-1"></div>
                        <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <span className="hidden sm:block text-sm font-medium">My Profile</span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-emerald-400 overflow-hidden border-2 border-white dark:border-gray-800">
                                <img alt="User Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNxgJEDEcaBA6VHtSPJdiAA1y-9NpioF2l0zS8g15qxarI14uC9o4nnA98fVOtAdrgGOzfXsiAH37T_NIpkRRyLo2HOS_7aWcAYoTcZri5RefZ6iUID3KaDcksKWrF_Iyonn5FOmn7AnLkDfmCFv64B_FdzbaCm8_3VQeZ0JLUJty_qp6SXG7Xt8g5jveie8WcM340oeyRbBcRqgqNEPgwbRGWcAom-z5FL1kd2kc2TpINPLMnzgDBy1PLe4nTyKGCXFKASKsOGeJA" />
                            </div>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <button className="lg:hidden p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full" onClick={toggleMobileMenu}>
                        <span className="material-icons-round">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
