export default function Launchpad() {
    return (
        <>
            <section className="mb-12 relative rounded-3xl overflow-hidden group">
                <div className="absolute inset-0">
                    <img alt="Legend of the Nile Game" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqKv-A-YgPyglP2y1O3cRUzYKpUEtVFyCSz-bNVf8AVqjJSokNdCA9nDd6xnwObs2kqW6AvWG8E6tOzaCP4DY2D1Vn3DgOyKk4XLcg1Lg8Uh2_mK5lhYzYms3BL1Le5h_3V9l1CxLwHNm3p6ZBUcluKhB-xX-n-igSXnxJYb_JwkSn6OvgVN6gXaixib5ZvB-rqyB2EUz8DvWzpnBec1MMGbiG_uDD_uXp6HijPCrDIkN5NnavDhKPVV-u8htrtjXsjRI4AudB51o-" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative h-[500px] flex flex-col justify-end p-12 max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Game of the Month</span>
                        <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md">New Release</span>
                    </div>
                    <h1 className="text-6xl font-display font-bold text-white mb-4 leading-tight">Legend of <br /><span className="text-primary italic">the Nile</span></h1>
                    <p className="text-slate-300 text-lg mb-8 line-clamp-2">Embark on an epic journey through ancient sands. A strategic RPG where your choices shape the fate of empires. Experience stunning visuals and a deep crafting system.</p>
                    <div className="flex items-center gap-4">
                        <button className="px-8 py-4 bg-primary hover:bg-yellow-500 text-black font-bold rounded-xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg gold-glow">
                            <span className="material-icons-round">play_circle_filled</span>
                            Play Demo
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2">
                            <span className="material-icons-round">favorite</span>
                            Support Dev
                        </button>
                        <div className="ml-auto flex items-center gap-6">
                            <div className="text-center">
                                <p className="text-primary font-bold text-xl font-display">4.8k</p>
                                <p className="text-slate-500 text-[10px] uppercase font-bold">Supporters</p>
                            </div>
                            <div className="text-center border-l border-white/10 pl-6">
                                <p className="text-white font-bold text-xl font-display">94%</p>
                                <p className="text-slate-500 text-[10px] uppercase font-bold">Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-3 space-y-8">
                    <div className="glass-effect rounded-2xl p-6 border-white/5">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-display font-bold text-lg text-white">Trending Projects</h3>
                            <span className="material-icons-round text-slate-500 cursor-pointer">more_horiz</span>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800">
                                    <img alt="Project 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2EUr2bptvt9ts63bqQ-Wq2nGEtaAT5Ex_yRLyoudSQO_0yOyVG1vL0ObBZ8UOX7_DEj96r0WwCm2Vi0wigoXakP6KWMmKtlx66wadj3JBMSGheF7c0j5zdhHO2JgmVCPhATISdKOz8XUNejteEW_qOwj3ktdX-6G1pxWYit54EvdJGtTsjYCd7aZUHnb73yaPhr_32yWAGH74RfjiCaXKgm5jN-pE9x4E9iYgcOrkOI0-I6lTsansgMkODtQw8_nJhHreudQHHQ6o" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-primary transition-colors">Safari Quest</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-slate-500">Adventure</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                        <span className="text-[10px] text-primary">85% Vote</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800">
                                    <img alt="Project 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD85StZymo5-hVOp1RWC_Hf-dgChzLyIfRAh8iDieAyhHLbSxRe2WgYs8IXzBiScAzuFNmQttCN0E8wJynwxpRg7wTLrfbX49dCM6vV7Fg44gJWTkjSmjxV6mtpaOKzXtT6Ev_A6OORNW61CGFgqw7FOORQbbFnPM-owQdh5y369Oy5oSnk6AyljeuJKTj8o-qzB25jpAatLDXBbI0dIVLO5RetMMKFC6sJ5CNP-2u1fWAN193TxOD3TygOC_5m_5Gmp8IcVfrIZ727" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-primary transition-colors">Cyber Street</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-slate-500">Cyberpunk</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                        <span className="text-[10px] text-primary">72% Vote</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800">
                                    <img alt="Project 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtK5pp_uppF7adp43gc8r_De04pUDIesLkhuHty4jk8-jYL_1LFBfvBFlWFEmWwTeu6WYpuQWm6n96ickw3DLVJe-mT46CpgYI8mNRxwM6WJlTwVhaAbbFLu-1hE0DNxEF4i39ML3fJytj5BQ4s4V0W2sQY4GJ62misAZHrQFzRu1Ql-3Xz7Er-wyfP2fXQHT1q-d-Uqvj8CP0n0QsMc4swfzFYBoqpUO_VJAEHNUgcKi9pWfwz7HH8z93dIeX2KGqZUPCASK5xG3q" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-primary transition-colors">Mystic Falls</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-slate-500">Fantasy</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                        <span className="text-[10px] text-primary">91% Vote</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-2 text-xs font-bold text-slate-400 hover:text-white border border-white/5 rounded-lg transition-colors">View All Trending</button>
                    </div>

                    <div className="glass-effect rounded-2xl p-6 border-white/5">
                        <h3 className="font-display font-bold text-lg text-white mb-6">Top Dev Supporters</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary font-bold w-4">1</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                                    <span className="text-sm text-slate-300">KingKayo</span>
                                </div>
                                <span className="material-icons-round text-primary text-sm">emoji_events</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-500 font-bold w-4">2</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                                    <span className="text-sm text-slate-300">ZeeBlast</span>
                                </div>
                                <span className="material-icons-round text-slate-500 text-sm">emoji_events</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-slate-600 font-bold w-4">3</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                                    <span className="text-sm text-slate-300">NalaPro</span>
                                </div>
                                <span className="material-icons-round text-slate-600 text-sm">emoji_events</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-9 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                            <span className="material-icons-round text-secondary">explore</span>
                            Explore Upcoming Indies
                        </h2>
                        <div className="flex items-center gap-3">
                            <select className="bg-card-dark text-slate-400 text-sm border-white/10 rounded-lg px-4 focus:ring-primary focus:border-primary">
                                <option>Most Voted</option>
                                <option>Latest Release</option>
                                <option>Crowdfunding</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group glass-effect rounded-2xl overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                <img alt="Neon Velocity" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfHJrRHLVoYqgNoyGn0LFrjTaXUTaJ9KSuU8BH7aHQMHPXqTQJUCCwFq4sDu3apZaDIYyAiU2uXXjYRRzXoJYlvsdfcI1ygtT-TEXzr3DMFhYQ1ciIk40fRzQ29lieSKIqYGJeCRcbiGr9xyikR9q6q1DCakPBiRbS0_FeepyNjUFnzt6ai05urBqtSLHerBh3TFfPemm4J4xfaG8dP_IfNFQB_k7B3uiieCvA2yzyUPjNueIrKWlh3wVszJC-JNek2mzCkKZSym2J" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black">
                                        <span className="material-icons-round">play_arrow</span>
                                    </button>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-secondary text-black text-[9px] font-extrabold uppercase rounded">VOTE NOW</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">Neon Velocity</h3>
                                        <p className="text-xs text-slate-500 mb-4">Developed by <span className="text-slate-300">Luminous Studios</span></p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                        <span className="material-icons-round text-primary text-xs">star</span>
                                        <span className="text-xs font-bold text-white">4.9</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mb-6 line-clamp-2">High-octane racing in a procedurally generated synth-wave landscape. Physics-based drifting and customizable cars.</p>
                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-700"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-600"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold">+12</div>
                                    </div>
                                    <button className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg border border-white/10 transition-colors flex items-center gap-2">
                                        <span className="material-icons-round text-sm">how_to_reg</span>
                                        Vote for Dev
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group glass-effect rounded-2xl overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                <img alt="Shadow Weaver" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5h7HSBpUc-AEl6xRgY8Sg0nayhmI_SHT0tDp_Aq1dCYMKkXRWPW7jKnKiJpVqJdbj1VzAcJNcGV0jFAfeqdpss3YbgmeFJYkUj04W0mIWR2TFpibFYe2l9SpHN89QRiMxzX1CxnSmQJPVM11R45KTWqonU3KptyhzWwp7Rt9wpJy0KCOy5GQ5cmtT3KQL8wZBKQYbmw_V7Cuo6I-6e-IKH9xdHESb2aJVv-YyDAHJ6dkxlV59jMD-OSwTqdC2lcQg5CbgFoBjnNaJ" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black">
                                        <span className="material-icons-round">play_arrow</span>
                                    </button>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-primary text-black text-[9px] font-extrabold uppercase rounded">80% FUNDED</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">Shadow Weaver</h3>
                                        <p className="text-xs text-slate-500 mb-4">Developed by <span className="text-slate-300">Midnight Games</span></p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                        <span className="material-icons-round text-primary text-xs">star</span>
                                        <span className="text-xs font-bold text-white">4.7</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mb-6 line-clamp-2">A dark-fantasy platformer where light is your only weapon. Manipulate shadows to solve puzzles and defeat cosmic horrors.</p>
                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-700"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-600"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold">+45</div>
                                    </div>
                                    <button className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg border border-white/10 transition-colors flex items-center gap-2">
                                        <span className="material-icons-round text-sm">how_to_reg</span>
                                        Vote for Dev
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group glass-effect rounded-2xl overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                <img alt="Bot Protocol" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeRiQb8x_CJ-nqn_n9-LeSr8Amoz-_sv20pj91b49PajCF28AF_RS2n82iueanwlY-jasC2wV-pZCkjI3qwEarv5Cj3rWsd8ge5I8Qa94-BraxVm_yWyquMNcAzHH7QzeVT-y1FFzesmtGGJB0GG87RpLEzMcWwVZy9g1wYWIt1GStgKF1Y5vzWvpPpHRfKJJ53Fx84DcPth19z9M-JF8uEwNyBuCFItWz6ZLDe6IukwXkZi8dIv1PZqCPIX1Jq2YLIbYl4IbSDy4i" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black">
                                        <span className="material-icons-round">play_arrow</span>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">Bot Protocol</h3>
                                        <p className="text-xs text-slate-500 mb-4">Developed by <span className="text-slate-300">Neural Network</span></p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                        <span className="material-icons-round text-primary text-xs">star</span>
                                        <span className="text-xs font-bold text-white">4.5</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mb-6 line-clamp-2">Top-down tactical shooter with heavy emphasis on robot customization and AI team management. 4-player co-op.</p>
                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-700"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-600"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold">+8</div>
                                    </div>
                                    <button className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg border border-white/10 transition-colors flex items-center gap-2">
                                        <span className="material-icons-round text-sm">how_to_reg</span>
                                        Vote for Dev
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group glass-effect rounded-2xl overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                <img alt="Pixel Frontier" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9R0Kxj9L0zVBYKLvFOOkw3TUE_ulPPqe-KksXH1lpmZ2OJKrE5iNd1UFm27NLY-580EcumbZJdE92gfvECoTJ4hITFSPJgFsqt05j6RLEysqYt4JqZMEtFqO5DDuGA1a9cA3nL1Y_GvYje_Xn5ytopqC88b12ee8dB0T7kpZtBYRuhv8i3JeDtDrlt5YfIVnNVurhP8tEkYqLu9mmdHhIBezk8YBHnnacD9neqK5B6SA67pbYgbv3wB90e8UIF2gv7Eq2a8rsbpSj" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black">
                                        <span className="material-icons-round">play_arrow</span>
                                    </button>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-yellow-600 text-white text-[9px] font-extrabold uppercase rounded tracking-wider">TOP RATED</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">Pixel Frontier</h3>
                                        <p className="text-xs text-slate-500 mb-4">Developed by <span className="text-slate-300">Retro Vibe</span></p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                        <span className="material-icons-round text-primary text-xs">star</span>
                                        <span className="text-xs font-bold text-white">5.0</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 mb-6 line-clamp-2">A love letter to 16-bit RPGs with modern mechanics. Explore a massive world with over 100 unique companions.</p>
                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-700"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-600"></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-500 flex items-center justify-center text-[10px] text-white font-bold">+156</div>
                                    </div>
                                    <button className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg border border-white/10 transition-colors flex items-center gap-2">
                                        <span className="material-icons-round text-sm">how_to_reg</span>
                                        Vote for Dev
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center py-10 gap-4">
                        <button className="px-10 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all">
                            Load More Projects
                        </button>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Showing 4 of 128 indie projects</p>
                    </div>
                </div>
            </div>
        </>
    );
}
