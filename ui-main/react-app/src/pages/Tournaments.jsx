export default function Tournaments() {
    return (
        <div className="flex flex-col lg:flex-row gap-6">
            <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
                <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark p-5">
                    <h3 className="text-primary font-display text-sm font-bold uppercase tracking-widest mb-4">Filters</h3>
                    <div className="space-y-6">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase mb-3 block">Game Genre</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input defaultChecked className="rounded border-border-dark bg-transparent text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm">Battle Royale</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input className="rounded border-border-dark bg-transparent text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm">MOBA</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input className="rounded border-border-dark bg-transparent text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm">FPS Shooter</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input className="rounded border-border-dark bg-transparent text-primary focus:ring-primary" type="checkbox" />
                                    <span className="text-sm">Racing</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase mb-3 block">Region</label>
                            <select className="w-full bg-slate-50 dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-lg text-sm p-2.5 focus:ring-primary focus:border-primary">
                                <option>Africa (Global)</option>
                                <option>Europe</option>
                                <option>North America</option>
                                <option>Asia Pacific</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase mb-3 block">Entry Fee</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input className="border-border-dark bg-transparent text-primary focus:ring-primary" name="fee" type="radio" />
                                    <span className="text-sm">Free Entry</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input className="border-border-dark bg-transparent text-primary focus:ring-primary" name="fee" type="radio" />
                                    <span className="text-sm">Under $10</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                                    <input className="border-border-dark bg-transparent text-primary focus:ring-primary" name="fee" type="radio" />
                                    <span className="text-sm">Professional ($50+)</span>
                                </label>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-slate-100 dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-all">
                            Reset All Filters
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark p-5">
                    <h3 className="text-primary font-display text-sm font-bold uppercase tracking-widest mb-4">Top Players</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-500 font-bold text-xs">1</span>
                                <img alt="Rank 1" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_9rZng2T6cXfy-4CwkzePb1L6NUEOKYY-HWYMTNcizYPCAV1cUCN-u_aq7cybs0t2jv0z_u6JZfjQprKIlzfe7ff6d48won0pj2R0xgDsPpwT4wqK3jkG27IXzjl3w84ZnMycycA0WnSNje5AJf9qZfyFCEFLmTiVfz3w0H2PUg9fK1SpUU7kwANHJviljzGONeWMUynILqQdq9hh4bm9cuqb2WUFx_lpw4PZWXMYceUjtDZHD5vIwVfdg7wX8YtiDHq0fhiRmrfA" />
                                <span className="text-sm font-semibold">KingKayo</span>
                            </div>
                            <span className="material-icons-round text-primary text-sm">emoji_events</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-500 font-bold text-xs">2</span>
                                <img alt="Rank 2" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2WJSG2lJWbMc6WSpWFz-kAu1OWUsZxwC6jSh-nWOwR-cEJKC0zJyf9ck3Qt3_XuofZdPfyc4NG6MP4JBhhwV0RoQEMgW7IeKPueHOWmlvDmmgQ6W8EP2w8I0Ro6Tfbsqpe3uCHCcWhiF7dhlCfrwIzlwE8-an93QJ9p1V63oDCXEAVnoHht7pliu7WXHqusJEJlO-mSgmMYSzqdXeA0zttyEY4laf4V056S4wOlvysQq9F10at_vXcv7gVljBXJ0HXEadzY7pgNz6" />
                                <span className="text-sm font-semibold">ZeeBlast</span>
                            </div>
                            <span className="material-icons-round text-slate-400 text-sm">emoji_events</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-slate-500 font-bold text-xs">3</span>
                                <img alt="Rank 3" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0uaYDKDNdl84tePxrqwHdkC6DTKrKYcPunhpACf6-1Ydf3dj3McWkBYMOIgbljqdTI4QHa6xBoUDopnSe8XMtlGeusjylLrrQNKf1MGAzYHrXqb8C2kmttAoC17gy7wkvBskaLu14GmlJpnQl90g2fH9RdxGY4RZnMAM52ScsT2SVnE6DtarEnQ5P8s9gURPiG9zJ5Z9Fq1OPyzDEvRiVYyuflNqyifUjWb0wc7VEdvS8b7G-bH67SG60-10KKynWmK_faWOA42rW" />
                                <span className="text-sm font-semibold">NalaPro</span>
                            </div>
                            <span className="material-icons-round text-amber-700 text-sm">emoji_events</span>
                        </div>
                    </div>
                </div>
            </aside>

            <section className="flex-1 space-y-6">
                <div className="relative rounded-2xl overflow-hidden bg-black h-80 group shadow-2xl">
                    <img alt="Featured Tournament" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKO-QvXJY5azHrqYTOqxl4GkEPPZYr7rSsn8hvOUdzgYiFqKCx1waw3WXZeXWfT6Rk2GUAIgkPSlicHaMQtkBFLrqudhk0xHiu0bDUAS69ftQeTAF-f4kNOE9eeNSKBQ9ReyWrpk9Ev12GpvnRgBR1ZjP77_dP27e8ybYSf45MqhHYMa72kEn-c5K5NkjhW7UUcNSIt0g9oTSfBUh1gSq3a9N3c_E5vdNBgHWWqPvErQIWXVXiiiip_O8Go57Tos6KJZvfOC-RVpu5" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-center px-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-red-600 text-[10px] font-bold px-2 py-1 rounded animate-pulse">LIVE EVENT</span>
                            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Africa Gamers Cup</span>
                        </div>
                        <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-tighter">Savannah Showdown</h1>
                        <p className="text-slate-300 max-w-lg mb-6">Join the largest competitive event of the season. Compete with top tier players and win your share of the massive prize pool.</p>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Starts in</span>
                                <span className="text-2xl font-display font-bold text-white tracking-widest">02:15:08</span>
                            </div>
                            <div className="flex flex-col border-l border-white/20 pl-6">
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Prize Pool</span>
                                <span className="text-2xl font-display font-bold text-primary tracking-widest">$2,000</span>
                            </div>
                            <button className="ml-auto bg-primary text-black font-bold px-8 py-3 rounded-lg glow-hover transition-all transform hover:-translate-y-1 active:scale-95">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-display text-xl font-bold uppercase tracking-wide">Upcoming Tournaments</h2>
                        <div className="flex gap-2">
                            <button className="p-2 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded hover:bg-primary hover:text-black transition-colors">
                                <span className="material-icons-round text-sm">grid_view</span>
                            </button>
                            <button className="p-2 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded hover:bg-primary hover:text-black transition-colors">
                                <span className="material-icons-round text-sm">list</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all group">
                            <div className="relative h-40 overflow-hidden">
                                <img alt="CyberStreet" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhIt3xha_v7opgFkqJr-C6Rr3gpAeGXfLfTlb_cglNhCa2T9EzpNZHxy5X4xBZdfv55alNriuT3if7zMeuy9ggLyi4irxS2gvLpRNHH3A_PvAgXqNkF4yD3QlU4OOHQrs1cxgXAejzovWUUjb6P_6xUzlMiohcVMewEeKrfw_vHwxMRh_yF1laOQWhq5z9mKcStpCqtYQSuJJ84wW3CL9SSTWyb7atxl2TFB3k0-GentocoXH-mqf15tS7d9Q7DT5f5Qet_Ti2hGBC" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold">120 SLOTS LEFT</div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">CyberStreet League</h3>
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <span className="material-icons-round text-[14px]">sports_esports</span> Racing • 1v1
                                        </p>
                                    </div>
                                    <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-1 rounded font-bold">FREE</span>
                                </div>
                                <div className="flex items-center justify-between mb-5 py-3 border-y border-gray-200 dark:border-gray-800">
                                    <div className="text-center">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Prize</p>
                                        <p className="text-sm font-bold text-primary">$500</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-4">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Region</p>
                                        <p className="text-sm font-bold">Global</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-4">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Time</p>
                                        <p className="text-sm font-bold">Tomorrow</p>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 bg-slate-100 dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all group">
                            <div className="relative h-40 overflow-hidden">
                                <img alt="Mystic Falls" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR7tBwaQsYQiOj2r3--40AGrdJmQcz9VEvZX--uoLj4ZeMpC401vfEQfopeAwmqmBkifDzmI-ziCtv-xocIt4Us0YiyyrQLFIG1nQr-Gc6hUzSkiheRYxo9cGqQ6SzHFZ3te_Q4qaIRuddqktLIrrSOp1lViMWvgOGyAsO6ojz-GZBVwBZawtDNDdYOcDFrzqt1gen-kdevoURz8xsw2NhpPXcfB7MsRKXhBcpyZBQoYcf9s3bd1SkkB6hO2DFg4l2VQ4WiIO2rJ_w" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold">8 SLOTS LEFT</div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Mystic Falls Arena</h3>
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <span className="material-icons-round text-[14px]">shield</span> MOBA • 5v5
                                        </p>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-bold">$10 ENTRY</span>
                                </div>
                                <div className="flex items-center justify-between mb-5 py-3 border-y border-gray-200 dark:border-gray-800">
                                    <div className="text-center">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Prize</p>
                                        <p className="text-sm font-bold text-primary">$1,200</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-4">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Region</p>
                                        <p className="text-sm font-bold">EU/AF</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-4">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Time</p>
                                        <p className="text-sm font-bold">Sun, 18:00</p>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 bg-primary text-black rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                                    Register Team
                                </button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all group">
                            <div className="relative h-40 overflow-hidden">
                                <img alt="Safari Quest" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmVV0XOgfR6IICqyxFtog_5Yz6wmZRrbYluVlmZeyaEbSD2ApHVT6HXyV5gXl9LBJu2X15kLm_CbH41po9lfotqAlgSCjaAo33MAQvEVgV1WR7SYdV1b99ln4kSM0jHMvDSuiK1SL6n88Z_w7SKzZJAut-9f7XazxGwHkLWqB8f4XF1icltR9A-OxoyiNFTEWo7VhJEDNx8S7CgBz7jwhK7t6AiD0ySscufpYYXZgR1CkF891YyKJqA_ZnUlaVMuoL9_IfCJITpwmG" />
                                <div className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded text-[10px] font-bold">FULL</div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Safari Quest Blitz</h3>
                                        <p className="text-xs text-slate-400 flex items-center gap-1">
                                            <span className="material-icons-round text-[14px]">explore</span> Survival • Solo
                                        </p>
                                    </div>
                                    <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-1 rounded font-bold">FREE</span>
                                </div>
                                <div className="flex items-center justify-between mb-5 py-3 border-y border-gray-200 dark:border-gray-800">
                                    <div className="text-center">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Prize</p>
                                        <p className="text-sm font-bold text-primary">$250</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-4">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Region</p>
                                        <p className="text-sm font-bold">Africa</p>
                                    </div>
                                    <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-4">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">Time</p>
                                        <p className="text-sm font-bold">Ended</p>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 bg-slate-200 dark:bg-background-dark/50 text-slate-500 cursor-not-allowed border border-gray-200 dark:border-gray-800 rounded-lg font-bold text-xs uppercase tracking-widest">
                                    Tournament Closed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
