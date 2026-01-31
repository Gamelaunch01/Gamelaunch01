import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-6">
            <LeftSidebar />

            {/* Main content */}
            <div className="col-span-12 lg:col-span-9 xl:col-span-6 flex flex-col gap-6">
                <div className="relative h-64 rounded-3xl overflow-hidden group">
                    <img alt="Gaming Setup" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcMsYm_4jwWLSK1TZ8rLugMw5kWG4v8mrHKKMvOlGZecSRURSRxY5CWzLHFn6ULZH3rDsesBLDc2JpDkejmFyB7gMkMpGRl7ufQ4JHjt9culAZUo2nBn7O39SehCdfpKTlZ7se3vwwL1bwRdF84DRH50h2q8Pc9zs2SmhgX_g_YW5dzq_EOStCt10xqaan5fKYQzwhbvBeq20Wy8THk97Fqz-Wpd-BkBacQyVPNDcU5EoJOuatTbN8PxwIkcFMDU21a2wwWNMcqaiI" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-10">
                        <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">AFRICA GAMERS CUP</h1>
                        <p className="text-primary font-bold text-lg mb-1">Register Now & Compete to Win!</p>
                        <p className="text-slate-300 text-xs mb-6 uppercase tracking-widest">Weekly Prizes • Live Tournament</p>
                        <div>
                            <button className="bg-primary text-black px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">Join Now</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-full">
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="font-display font-bold text-lg uppercase tracking-wider">Featured Tournament</h3>
                        </div>
                        <div className="relative flex-grow">
                            <img alt="Tournament" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0eRWWSSmjRlzlAVVfe7GINM1xGc6ejVB7xKQRdEBGWl8vVW-u4siPTY0I3sP5wQhZiBaIqqo84KpWoma5X7-fo4zqSd7uURqjz1V6292lQ5YWWCCq93Gap5mT2Ts9qKILY9L2yj3mhY6owMMxrIZGuX76Pcxnpo-_Afv_QAv9X0VXPh2L5Z1wDl78hWlpmQFDBvK5jTmv61gfWIGxc2vZsq7AcrYpgNq_YTo7vNFE3KAN0BzdVkl29V2wFNTJfrwHmoCgNFgsnfug" />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                                <h4 className="text-white font-display text-2xl font-bold uppercase mb-2">Savannah Showdown</h4>
                                <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-[10px] text-white font-bold border border-white/30 uppercase tracking-widest mb-4">
                                    Starts in: 02:15:08
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-between bg-gray-50 dark:bg-black/40">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Prize Pool</p>
                                <p className="text-primary text-xl font-display font-bold leading-none mt-1">$2,000</p>
                            </div>
                            <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-xs uppercase hover:bg-white transition-colors">Register Now</button>
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-full">
                        <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="font-display font-bold text-lg uppercase tracking-wider">Game Launchpad</h3>
                        </div>
                        <div className="relative flex-grow">
                            <img alt="Launchpad Game" className="w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX4WH7NN9_6mkwZ9T-GhnPdt5l9D4wsb_8kLVKyWhvBSANYB0WTBL4KOoeRp3yMcGYjPHCIBB1LFYR3HZTYuVuUPx4Z5HfPjce-Mf5tyimFDooYBVQNqDyJii_FPUUXFg5p4tLTwAj3IPHvBTRxyenqPoO11SWNrF8pKm_0RUm7o8MUcBc4Nazs-GRmENRo5HerlA9dqpWYhLB7rKKhd5X5nbeME0v7cGyen7hd4QfPiWWoMW506_lJ4MxdGcTE5jzEaUryXNup5Id" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
                                <span className="bg-red-600 text-[10px] font-black text-white px-2 py-0.5 rounded w-max mb-2 uppercase italic tracking-tighter">NEW RELEASE</span>
                                <h4 className="text-white font-display text-2xl font-bold leading-tight mb-4">Legend of the Nile</h4>
                                <div className="flex gap-2">
                                    <button className="bg-green-600 text-white px-3 py-1.5 rounded text-xs font-bold flex-1">Play Demo</button>
                                    <button className="bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded text-xs font-bold flex-1 border border-white/20">Support Dev</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-black/20 flex gap-2 overflow-hidden">
                            <div className="w-10 h-10 rounded bg-primary/20 flex-shrink-0 flex items-center justify-center">
                                <span className="material-icons-round text-primary">change_history</span>
                            </div>
                            <div className="space-y-1 w-full">
                                <div className="h-1.5 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div>
                                <div className="h-1.5 bg-gray-200 dark:bg-slate-800 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RightSidebar />
        </div>
    );
}
