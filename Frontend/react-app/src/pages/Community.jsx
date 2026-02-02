export default function Community() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
            <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <span className="material-icons text-8xl text-primary relative z-10">groups</span>
            </div>
            <h1 className="text-4xl font-display font-bold">Community Hub</h1>
            <p className="text-slate-400 text-lg max-w-md">
                We are building the ultimate space for gamers to connect.
                Leaderboards, forums, and team finding features are coming soon!
            </p>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold transition-all">
                Join Waitlist
            </button>
        </div>
    );
}
