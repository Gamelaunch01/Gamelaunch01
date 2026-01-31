import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/5 py-12 px-6 bg-card-dark">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                            <span className="material-icons text-background-dark text-sm font-bold">sports_esports</span>
                        </div>
                        <span className="font-display font-bold text-lg tracking-tight text-slate-200">Game<span className="text-primary">Launch</span></span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">The ultimate hub for gamers, creators, and competitors to connect, learn, and grow together in the digital age.</p>
                </div>
                <div>
                    <h4 class="font-bold text-sm mb-4 text-slate-200">Platform</h4>
                    <ul className="text-xs text-slate-500 space-y-2">
                        <li><Link className="hover:text-primary" to="/tournaments">Tournaments</Link></li>
                        <li><Link className="hover:text-primary" to="/community">Leaderboards</Link></li>
                        <li><Link className="hover:text-primary" to="/launchpad">Launchpad</Link></li>
                        <li><Link className="hover:text-primary" to="/learning">Learning Hub</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-4 text-slate-200">Resources</h4>
                    <ul className="text-xs text-slate-500 space-y-2">
                        <li><a className="hover:text-primary" href="#">Documentation</a></li>
                        <li><a className="hover:text-primary" href="#">API</a></li>
                        <li><a className="hover:text-primary" href="#">Partner Program</a></li>
                        <li><a className="hover:text-primary" href="#">Community Guidelines</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-4 text-slate-200">Newsletter</h4>
                    <p className="text-xs text-slate-500 mb-3">Get the latest tips and updates.</p>
                    <div className="flex gap-2">
                        <input className="bg-background-dark border-white/10 rounded-lg text-xs px-3 py-2 w-full focus:ring-primary text-slate-200" placeholder="Email" type="email" />
                        <button className="bg-primary text-background-dark p-2 rounded-lg"><span className="material-icons text-sm">send</span></button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] text-slate-600">© 2024 GameLaunch Platform. All rights reserved.</p>
                <div className="flex gap-4 text-slate-600">
                    <a href="#"><span className="material-icons text-sm">facebook</span></a>
                    <a href="#"><span className="material-icons text-sm">language</span></a>
                    <a href="#"><span className="material-icons text-sm">rss_feed</span></a>
                </div>
            </div>
        </footer>
    );
}
