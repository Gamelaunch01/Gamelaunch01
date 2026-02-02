import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <>
            <header className="relative mb-8 group">
                <div className="h-48 md:h-64 rounded-2xl overflow-hidden relative">
                    <img alt="Cover" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR0pYgphvY_Wm78NsT-6Ce4qQOvnlq-NK8HVgLsenTZ6zud4r-m8ztSeP39hLZbksz3vaeon5sSsSUIt30Ou-O7LTVsncGtHa3z6AiEvkKlIjXYhugKDKLhICyMKvX_tIn3F9F9SJcIfYUKF38VMEuPHikHEDxh3G6GvuALbB5fPIBUoX5T46jxbto_poS5gsC_hQ99r7mUBS7MnZV2f7BdSZRmuACbX2-1KxrDhywO-_1Vnd54YktsXKVv4J7vKvKXV9VB18eMZH1" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                </div>
                <div className="px-6 -mt-12 flex flex-col md:flex-row items-end gap-6 relative">
                    <div className="relative">
                        <img alt="Avatar" className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-card-light dark:border-card-dark shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy727UeWGDMqm_6s2Bthy5TXBKAkZeKqk0GKOTfXjxXbTHHCt-JuhH_5BGF9K_7dPo31jXXEIaPOTAFPAs6KOt4aEJzHxIsufOb4KnQOAllDhsa4UB-74vZVHtO2Xk0LKML2Y3E5aSGre9YNsJIO4iOUubkyyeO3-TWrwFvVsN3ZgzLwDI4iIMq0ZQqBOi677xK1AMFMLD-UeYZtZy8PpWKHIYak0cH3GOshyu5EAsjDhfupOSDGJB3lJ2qjOYtlGs3XzMRYwn4H-g" />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-black px-2 py-1 rounded font-bold text-xs uppercase tracking-wider">Lvl 42</div>
                    </div>
                    <div className="flex-1 pb-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl font-extrabold">KwameLive</h1>
                            <div className="flex gap-2">
                                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold border border-accent/30 flex items-center gap-1">
                                    <span className="material-icons-round text-sm">emoji_events</span> TOP PLAYER
                                </span>
                                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30 flex items-center gap-1">
                                    <span className="material-icons-round text-sm">verified</span> VERIFIED
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xl">Competitive FPS enthusiast &amp; Indie dev supporter. Exploring the boundaries of virtual storytelling. 🎮✨</p>
                    </div>
                    <div className="flex gap-3 pb-4">
                        <button className="bg-primary text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                            <span className="material-icons-round">edit</span> Edit Profile
                        </button>
                        <button className="bg-slate-200 dark:bg-white/10 px-4 py-3 rounded-xl hover:bg-slate-300 dark:hover:bg-white/20 transition-colors">
                            <span className="material-icons-round">share</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Sidebar */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">Player Performance</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-medium">Win Rate</span>
                                <span className="text-xl font-bold text-primary">68%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[68%]"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase">Rank</div>
                                    <div className="font-bold">Legendary</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase">Followers</div>
                                    <div className="font-bold">2.5k</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest">Achievements</h3>
                            <span className="material-icons-round text-slate-400 text-sm cursor-pointer">chevron_right</span>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="aspect-square bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center group cursor-pointer" title="Tournament Winner">
                                <span className="material-icons-round text-accent">emoji_events</span>
                            </div>
                            <div className="aspect-square bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center group cursor-pointer" title="Early Supporter">
                                <span className="material-icons-round text-blue-400">rocket_launch</span>
                            </div>
                            <div className="aspect-square bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center group cursor-pointer" title="Blogger">
                                <span className="material-icons-round text-purple-400">rate_review</span>
                            </div>
                            <div className="aspect-square bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center group cursor-pointer" title="Beta Tester">
                                <span className="material-icons-round text-emerald-400">bug_report</span>
                            </div>
                            <div className="aspect-square bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center group cursor-pointer" title="Speed Runner">
                                <span className="material-icons-round text-rose-400">timer</span>
                            </div>
                            <div className="aspect-square bg-slate-100 dark:bg-white/5 rounded-lg border border-dashed border-slate-300 dark:border-white/10 flex items-center justify-center">
                                <span className="material-icons-round text-slate-300 dark:text-white/20 text-sm">lock</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">Top Connections</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img alt="Friend" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9jtvHifD6VGrk2LfHvJMjlWdFBeIJsZ8occLCEoKmd51AMLZiRXuSdT2EM6zPuasUQunOF7VLUJoDYGcwWlfpNGnva5twILJVCLIYfFY_29ecmw_TI0kdY8gu587rqdsVPA181FBPTipqSdqASW6j5Z-Q1EWGMoytpAcL3MHGCWqG6W94aU1EnN0yv3pObmr-rYlkivaaNHVJOtF_je19qrYgqPOAb3av9I5GFQEgP0VNJBqZCyfl-rW8hePlm09f_WDyMXoIaqff" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card-light dark:border-card-dark rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold">AishaGamer</div>
                                    <div className="text-xs text-slate-500">Playing: CyberStreet</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img alt="Friend" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJoNIgTcsxa1Sed3MHP7CmveUMu__0DkixVtLGLGpomjd_6Tk8COX5D1sTHOhXmF9BvKMbS2pSIbcCitpTjPoKW_HlD_oiGsT9m--Gw8Pumgv8ojiwL9H7m5x8IvSjo4cZjHl3vHOdb55XNBFuc8awPnOljwbWmY5PyUSJvpCjuooz7sAFDmd_qtpL_7VCVaOi6Pb_wKY26uMFGV2gV8daDAxi1m9Hr6Cei7U5RrlkZmr5rj3lrcHU5TLvKAEpsAwNrnf-STNO2gDM" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 border-2 border-card-light dark:border-card-dark rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold">DevJay</div>
                                    <div className="text-xs text-slate-500">Offline</div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-2 text-sm font-bold border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">View All</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-6 space-y-8">
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-extrabold flex items-center gap-2">
                                <span className="material-icons-round text-primary">rocket_launch</span>
                                Supported on Launchpad
                            </h2>
                            <Link className="text-sm text-primary font-bold hover:underline" to="/launchpad">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group relative bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-lg">
                                <img alt="Game" className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOCKSfe3VhWWtqqHrkzA6L5UPmFjfOiObIa55sn601RZ1nNvUO-4F95c8CwkStb6hfjgatXhM-pGG0my968QyG7nHUksxmViVS7bqY7pOUtZijhmFBw5OnoPG0BGavO4X85Rh5hQPuUfDeIvUNkM3F7Wxk90PnRAoTlqDQBslo922p48Q4jIAbAizraCPo8PGlFjZbOeNxsDgy_bPwpkXvCNS6hLzszHEVqG_9vpht7OhcJY-FZ__iCa0-3izfGXQB5Ccj5rI-XNhJ" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-primary font-bold uppercase mb-1">In Development</div>
                                            <h4 className="font-bold text-white">Legend of the Nile</h4>
                                        </div>
                                        <button className="bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-lg transition-colors">
                                            <span className="material-icons-round">play_arrow</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-lg">
                                <img alt="Game" className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyIMrAa0GsE8b59WQMM4HG9JHv97yrSRDO0_ZyF4w95oYb20u9Nqz8EXc_ZDRSEtZ5SMtK8DgvYoU4_e2Mf-lC9QD3Nx7aSF2HcG-9U2b8SzrLFOvYzZiAhBttSxFyPsvhSaxDEmW3f0iDP4nvUqXVgETvTsRQfF95ykN6lHC-Vvrc2M6kXhOoezdLziqdr76677a-1WVA2Hk8kV9Ojsl_OW7FBe0vQfWNKUbuaEiNGG1WUyYlqFm0N1IkLGGOgf5UAT5xqzFkMEKy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-accent font-bold uppercase mb-1">Released</div>
                                            <h4 className="font-bold text-white">CyberStreet Neo</h4>
                                        </div>
                                        <button className="bg-accent/20 hover:bg-accent/30 text-accent p-2 rounded-lg transition-colors">
                                            <span className="material-icons-round">favorite</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-extrabold flex items-center gap-2">
                                <span className="material-icons-round text-primary">forum</span>
                                Community Posts
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                                <div className="flex gap-4">
                                    <img alt="Avatar" className="w-12 h-12 rounded-full ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARYhqRizGf3UtbfGMr65Ko0A-6aMDx3lwxCiWFanWjPfcAFjThhXnFK71urwyfm6I7v7Tu929hqTCpzQx6BqkXCr3SkEY5A0Xh2OdED4SKRIehiV_L-Ws0rFZAcI5kihMjfaJPfxwJ7zIZKYna-RVxSFQBK5kbcQIXt5vyNCvSfPmaXLRX0ghG6ZHE35UCxbP2tItKp5YMM12660NdsJzqoCMx63le1t52bX8izEdWwKSuK6uGtwd4LPNubiGTd3qHBtgDFqcBSXNP" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold">KwameLive</span>
                                            <span className="text-xs text-slate-500">2 hours ago</span>
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300 mb-4">Just broke my personal record in Savannah Showdown! 🏆 The new mechanics in the latest patch are insane. Who's ready for the weekend tournament?</p>
                                        <div className="rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-white/10">
                                            <img alt="Post Image" className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuVlcuBiws-YUoKnff-Non6b70XAfG0yCnflvnXl9CBqil0g8uVOXQ_YN4Cm2x23-WuiMpF-6CQOyi7xiqr2ND2CiYR5V3mOBg3u8vkfg9KDwXeJ617iVjmFPj9qwu8qOB5NkcS-yqEsPcP1TXUbR7eoPWalRQ3mig3WmgVTUsQzlKpxrm2FeH0qRt2qv_vc6DNRyn2bvPNOSKVcu2ZFeh2ao0Y4VmepaGDTwdPFerYpnxKVMNnImq5kTyz5sl0Qzer3XfTQY9JnDQ" />
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-rose-500 transition-colors">
                                                <span className="material-icons-round text-xl">favorite_border</span>
                                                <span className="text-sm font-bold">128</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors">
                                                <span className="material-icons-round text-xl">chat_bubble_outline</span>
                                                <span class="text-sm font-bold">24</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors">
                                                <span className="material-icons-round text-xl">share</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                                <div className="flex gap-4">
                                    <img alt="Avatar" className="w-12 h-12 rounded-full ring-2 ring-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaCanHYqPU23HSr6d6SIasAwwE9wmLJV-M7pHuuqdUdtaq6FCBfqhR6jZfXBC4Qvb2_SRobH3sBfumHbmye2GLOdoQsAjMfu1GJNMvX35aLglN4Lb-nBdK8QYY_qFKR3oN01bfKS5LHIT2urC-m4ANYekNSsUsCCp__7cDSSMznoFtKiXLfUPE4Mb-p87adyn9IBWnK9OwP2BTxVVD0LBliDc6abedldR7pPST2nV8GIbjvGxIcozNkdW6JIy6V1Dhp4u7uiKZ75YL" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold">KwameLive</span>
                                            <span className="text-xs text-slate-500">Yesterday</span>
                                        </div>
                                        <p className="text-slate-700 dark:text-slate-300">Started dev logs for my new prototype "Neon Ghost". Feedback welcome on the color palette! 🎨🎮</p>
                                        <div className="flex items-center gap-6 mt-4">
                                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-rose-500 transition-colors">
                                                <span className="material-icons-round text-xl">favorite_border</span>
                                                <span className="text-sm font-bold">85</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors">
                                                <span className="material-icons-round text-xl">chat_bubble_outline</span>
                                                <span className="text-sm font-bold">12</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">Tournament History</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-sm">Savannah Showdown</span>
                                    <span className="text-accent font-bold text-sm">#1</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Prize: $500.00</span>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-green-500/10 text-green-500 rounded font-bold uppercase">Paid</span>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-sm">CyberCity Open</span>
                                    <span className="text-slate-400 font-bold text-sm">#4</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Prize: $0.00</span>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-500/10 text-slate-400 rounded font-bold uppercase">Ended</span>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-sm">Africa Gamers Cup</span>
                                    <span className="text-accent font-bold text-sm">#2</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Prize: $250.00</span>
                                    <span className="text-[10px] px-1.5 py-0.5 bg-green-500/10 text-green-500 rounded font-bold uppercase">Paid</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-4 text-sm font-bold text-primary hover:bg-primary/10 py-2 rounded-xl transition-colors">More Results</button>
                    </div>

                    <div className="bg-primary p-6 rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
                        <div className="absolute -right-4 -top-4 opacity-20">
                            <span className="material-icons-round text-9xl text-black">trophy</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-black font-extrabold text-lg mb-1 leading-tight">Next Challenge: Mystic Falls</h3>
                            <p className="text-black/70 text-sm mb-4">Starts in 02:15:08</p>
                            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-zinc-900 transition-colors uppercase tracking-widest">Register Now</button>
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm">
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">Learning Progress</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center">
                                <span className="material-icons-round text-primary">code</span>
                            </div>
                            <div>
                                <div className="text-sm font-bold">Unreal Engine Basics</div>
                                <div className="text-xs text-slate-500">Module 4/12</div>
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[33%]"></div>
                        </div>
                        <Link className="block text-center w-full mt-6 py-2 text-sm font-bold bg-slate-100 dark:bg-white/5 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-colors" to="/learning">Open Learning Hub</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
