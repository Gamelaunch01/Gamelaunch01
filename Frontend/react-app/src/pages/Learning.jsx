import { Link } from 'react-router-dom';

export default function Learning() {
    return (
        <>
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2">Learning <span className="text-primary">Hub</span></h1>
                    <p className="text-slate-400 max-w-xl">Master the craft of game development and competitive streaming with industry experts.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                        <input className="bg-card-dark border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary w-64 text-white" placeholder="Search courses..." type="text" />
                    </div>
                    <button className="flex items-center gap-2 bg-card-dark border border-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors">
                        <span className="material-icons-round text-sm">tune</span> Filter
                    </button>
                </div>
            </header>

            <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-display font-bold flex items-center gap-2">
                        <span className="material-icons-round text-primary">history</span> Continue Learning
                    </h2>
                    <a className="text-sm text-primary hover:underline" href="#">View all active</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card-dark rounded-2xl overflow-hidden border border-white/5 group flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-48 sm:h-auto overflow-hidden relative">
                            <img alt="Game Dev Course" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa931O4Q4f3VwzFMfbXmUDq50kwwsOv_-ec_cvbAFikhaIX3ERxqK05Ry5Wk8sP9EX_dNf3Qa_N7F7qfrP8T2wE3KrzGPgttaw_qZrfrTcjCCMrcfJRcL5BCWf2egOe_0SYzojOAx1gKX2Vrh8O_1DYEPSKRfoJtwmP4GVifj4lw3gBLGM9EI1m_jP1s1upa4UPkqiYppkf9_Fm8E-E-taRtOPFKNMneq0TsB2BEWoZdm9jrE8xi8U1axARiJy3B-ohsnW977sV7Ot" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-icons-round text-5xl text-white">play_circle_filled</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-1 rounded">Level 2: Advanced</span>
                                    <span className="text-xs text-slate-400">65% Complete</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1 leading-tight">Environmental Design in Unreal Engine 5</h3>
                                <p className="text-sm text-slate-400">By Sarah "DesignPro" Chen</p>
                            </div>
                            <div className="mt-6">
                                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-3 overflow-hidden">
                                    <div className="bg-primary h-full rounded-full progress-bar-glow" style={{ width: "65%" }}></div>
                                </div>
                                <button className="w-full bg-primary text-background-dark font-bold py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                    <span className="material-icons-round text-sm">play_arrow</span> Resume Session
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-dark rounded-2xl overflow-hidden border border-white/5 group flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-48 sm:h-auto overflow-hidden relative">
                            <img alt="Streaming Course" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ijSWsG6ivg82lIIXpgMTvzhLegKQBIkikqM5xCKecc-Z5zSBNE1hIvhf4NB290scwrbWqr-XGNuOfW3C_LuXf6YeYVOQPfdXkkhD0uLIy5qavQZ35f22h7xooLEFyxa547m9Vqv236ujpPCirBPCVg3u-HKUT5Wu-o88pxNPo4Vp0zTe3STQtz00hCj_61XirQt5nqn6Sj7vFqpo19ShT50RsYv7ru_dYYvUUFIsxSBlGrRcozEbtErFJnYE6lCoQYS5-PnkxqV0" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-icons-round text-5xl text-white">play_circle_filled</span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Beginner</span>
                                    <span className="text-xs text-slate-400">20% Complete</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1 leading-tight">Mastering Audience Engagement</h3>
                                <p className="text-sm text-slate-400">By Marcus "StreamKing" Bell</p>
                            </div>
                            <div className="mt-6">
                                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-3 overflow-hidden">
                                    <div className="bg-primary h-full rounded-full progress-bar-glow" style={{ width: "20%" }}></div>
                                </div>
                                <button className="w-full bg-white/5 text-white border border-white/10 font-bold py-2 rounded-lg text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                    <span className="material-icons-round text-sm">play_arrow</span> Resume Session
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-12">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-display font-bold">Game Development Basics</h2>
                            <p className="text-xs text-slate-500 mt-1">Start your journey from zero to creator.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 bg-card-dark rounded-full hover:bg-white/5"><span className="material-icons-round text-sm">chevron_left</span></button>
                            <button className="p-2 bg-card-dark rounded-full hover:bg-white/5"><span className="material-icons-round text-sm">chevron_right</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Unity Basics" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtHDdxm8W4UqDSvP4t_9rrGU_nfZtUVgyRrYYt37Wzy-nae4reqwKGWOYd9mDZKyhFumxQgtAE1X8PyW8-U1vQOyHTrpqUAXsQUBNuGet6983atKU2JIesGYhqbOyiR4cPbgUd9uKNI93IHvroPjs6VD1SITKNGEgtuuy3DYfocD5YwUlU1rVclxypdjne24I7oaM7uRhWO8HjNmKitGcyrWfdMzSEqZgb-P-q6JN4624hHUJegzj5smLtxnRRerNsZPFFYeTv8HtV" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold">12h 45m</div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">C# Scripting for Unity 3D</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-primary">
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star_half</span>
                                    </div>
                                    <span className="text-[10px] text-slate-500">(1.2k)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold">$49.99</span>
                                    <span className="text-[10px] text-slate-400">8 Lessons</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Assets" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzaJRWd0flIjMLcHLko6gleh9FnNo8iM5niTVjUVRxq9GZ77ChDP-yAEcBlEToiR6N1Ch5Rh3flqq_-gwMKqiyMBW75B0DOr7Gwp4vNl90dPszgATl6yquuX83tW8oNRNrxACuyuVXETfxYVGMipAsqNuW9aYOTspqPtyibIRCgBmzFsaWsQEV4W-OExU0XalEerSN3XNjMo6xVhGT_k-NXNzmgxWHB56fgXJ3sTKAi54jwBx7CVZ0zCGZZ_1i1I4_dUCkBB_PXuDC" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold">8h 20m</div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">3D Asset Creation: Blender</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-primary">
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                    </div>
                                    <span className="text-[10px] text-slate-500">(856)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold">FREE</span>
                                    <span className="text-[10px] text-slate-400">12 Lessons</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Logic" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkrHzH9wC6zvtnK0HV2p0a-c2iamdoXHNxEiLyMaoKHDhqe7ocw7Jmc1OjLEp06Xbu7jPgie0o49Hk4W-hfauDNcX1yzw0uhZZK0rYLQ7IOvj0LFXgLxyXvzQnrebM0FPK5-liRo1mtlIH70hnJ31kSOEDmO5VNtfu7Ek98zgC_qb5DRL3oWZiv59KXawqFrAIWMjsGmd-e6MHEciD0vhORUjANAVF6_b5Zz7Q1Bm_0yKxrHyLicFDpRB3NrrNLo0NYbUKuQwqRtZf" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold">15h 10m</div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Game Logic &amp; State Mgmt</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-primary">
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star_outline</span>
                                    </div>
                                    <span className="text-[10px] text-slate-500">(432)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold">$29.99</span>
                                    <span className="text-[10px] text-slate-400">6 Lessons</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="UI/UX" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD39V0CHdvD3xRlX9BAcNs_c-fftxMlTumVEyQxzP6lw4Kpm6Tp-GiEgI6E1ZW3NTi3S2crM7fOiuPSH3TdGqCrGI_f25ysV4Ulq6Nfyizx9Mk4hR-geO5p9oOLx_5bE-4CBBxtCKG_RU-nARcxfUYM07YUEAfABi2HoH0nWt6cFWzzadZNo9KLzQYf7a2yFmq1fuKo3bBP29tWqk-Di51evgGo0M1wSgfYmpNjR4kX591LUalFjLvaTk69mdsCqbF2tQOacfwUhAvA" />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold">6h 40m</div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">UI Design for Mobile Games</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-primary">
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                        <span className="material-icons-round text-[12px]">star</span>
                                    </div>
                                    <span className="text-[10px] text-slate-500">(2.1k)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold">$19.99</span>
                                    <span className="text-[10px] text-slate-400">10 Lessons</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-display font-bold">Streaming &amp; Esports Tips</h2>
                            <p className="text-xs text-slate-500 mt-1">Build your brand and dominate the arena.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 bg-card-dark rounded-full hover:bg-white/5"><span className="material-icons-round text-sm">chevron_left</span></button>
                            <button className="p-2 bg-card-dark rounded-full hover:bg-white/5"><span className="material-icons-round text-sm">chevron_right</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Twitch Gear" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMxWEUilzfS88e5MvRLLsgPbPK8W_mLXkyPiESBVsT5PWsx0db2hSfvNNU7kW8y8fdI_-kshg1qxQJloILe33OtE3rWwz8iJ0Lq1inoItxAKw5ykOXzGow_k0C0Lh7w0NjGmcjZFWJaF2W0FrZxPwPkYr2BQkAZNR-wh9KoQvsQYEs92oOBNY6dswIGpo1qMpdSRC95MR7N5TtPBks0h4lclFOZW635fbnNKOjV4Id7uElhxIQPul7irM3WpsYScBCgHntn8UQKM2M" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="material-icons-round text-white text-4xl">play_circle</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">OBS Masterclass: Pro Setup</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <img alt="Instructor" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT2jpPx4utG7M_RwPQsImaqlKC5VtBPJ_ZF8rX4mWWAv3kVs76KV9GbP7cFDLPWG0pkErjLN_yaQLS-RDydp7Tu8LzNFXTIYOlXp6LzfClPNhwAZN7LqNq_5dm9sYlt9c8n8jx2Ws3bW4aFhVEycuZbmDjrwDGugXg5EFcEa_HhA-cmPI6Ax0TNOrEFBFL0iPEOHVg-7uotYZg4qypsb0Kx5QWED2-I9Cs9_eJIgFJ398SEvTMpQvXI1SyHBtYj_IAof82Bl73U2aB" />
                                        <span className="text-[10px] text-slate-400">Alex Rivers</span>
                                    </div>
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Technical</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Engagement" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUKFjFfbAPBIqg9m8GY4DXjVxFCK572_IM-hR8Gnw5vhamuQSHiiOtE_mtOHrnPcqYxCaTDtGAKgsFRyP7MMEMrPkOUVxGCmf1oq_Am3HIDnOEgiGsGBxisSZZM_Mzp42s810r5_MnaFvuid1ZnBG1kMwGW4mn-9F5HX-yb85a0UiFWOZjFk-JVqvd852LibXHNc1yEbohr9I1unAmBYMMWHfPS7GLBpaEEw58AhMRVP0qYO789ieEf6FYquzQaZOz6WqRPbjFX9XX" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Growing Your Twitch Community</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <img alt="Instructor" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5z_UbGLHUipsthNzZBcylR1ppQ-CIngoyOiz6nhUQxt5-JC-VueWWpzt7F8bI8lYQGU9bLwHeohNTcbnmIjM3miQZA8JF5P6XDLks4GUDgQniiETNZjFWkx59HtAe2FY4zD1YKHUfYG_jHTj4HrEDH1lCc8yoS4s2QW4ySYuGgr7xKvlOCOKrz1QfuivwMJPLrR0DhxLgA6YUBbGvM6BIHBeVwnEegjmPhIwqobzq1NMRA8OxYWHdZX75iFL7JWUoTAKrDj8QwpKa" />
                                        <span className="text-[10px] text-slate-400">Maya Stream</span>
                                    </div>
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Marketing</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Pro Play" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4m_GdOJB5TV3B2YTG7doqV1ZR3xo0PPjKTljsZN09aNUTikp2-74qPgZWOLUNl_VhR9OblabCpUNqJliqTussrAjZ7vpTKlpKut4Oeb9m38aVEaYCPa71tReAwJo_5uYB4mfKu772lAAlGjH5dtdzlWUwTSVNcBJ_94TeZYJcHWPLGf23r1TW6JKFAaByayOw4DvAT7EIdkCaKhgyh3z5dDbeA-3hJG2y34yo-tOsv-rQldcnarb5nYsWW4OxndPFweuhjfSZ20Q6" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Pro Aiming Mechanics: FPS</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <img alt="Instructor" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI7ovbZHqoEBTFBKiEicw4X_jjsBMhWLcVPneKkfSXqcpDq14zHXOm0jGSQ7eOsBvUcM4_fKmAAz2VaAgGTSPzmTj50mgyPHqVGFm8SIQeLiycFYcn0JZjkp5-ukQuu_990dV0DuE-W-HTc2S-4H-KYo3sw09qGCr3D6nLIXzHV-xt7qXardVhNDBN4rrx5B9wG_nVbc4e8EPqLxU5iADIcc1LUu5krMGGh2klnMr7SLxqQQiwvww5jFRUoaE9-qXtbagvx23xfyyC" />
                                        <span class="text-[10px] text-slate-400">Viper_Gaming</span>
                                    </div>
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Esports</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card-dark rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                            <div className="aspect-video relative">
                                <img alt="Esports" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSjQT2bXUtmABTKyXm_cynNVeqGpi1S0csiJtEPqyZC2IDf_XU4QoEos0aY0XeboSUvM3BYuAQrhAS6Gk3uD7gZ0D6JU5GY3hb16I6awCvW9y3sXXoJgh4QhMy45Tf2_hkURkxS7T29HlnfBf9EFecx9uWIzuc476Lr2Hebn8vPJWEBM7tLOAX3Ib3LAPbiPx8VP_S1DKi9jF2izHtAzD9Nw0VQoYh5Ha5Z1qOtMnekwdCU5dALjsFz7IRCB7-i-uo3s28vGZtXMwu" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Sponsorships &amp; Contracts 101</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <img alt="Instructor" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Q-Y3LA3caOBxV48_BpBX-PmPs5hGN-_wUIAQzXk54Z7U8hYRgg-DyRRpynhvL-2hFf4Vxlt9kKaKE5KhHVgx16t_mh7_b0t5q84rOOXKfk3H-bT3U4YG7yCHtakrcXcYZT2tqarf9x2U1WVHoOdnzaSF6lNNsSNKfQpoo4cemuV1fbTm3Vu-ob2D04bEZeCvygi0c-gFIIUTbS7OGxfu0ZtVrdtlMWCxtw6YKZAluFE8s54Ze11MBj1wcvUKxCLb0UEkNw56JzHJ" />
                                        <span className="text-[10px] text-slate-400">Derrick Legal</span>
                                    </div>
                                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Business</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 bg-gradient-to-r from-primary/20 to-transparent p-1 border border-primary/20 rounded-3xl overflow-hidden">
                <div className="bg-card-dark p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[1.4rem]">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-display font-bold mb-4">Launch Your <span className="text-primary">Indie Studio</span></h2>
                        <p className="text-slate-400 mb-6">Our most comprehensive program yet. Learn the business side of game development, from LLC formation to Steam launch strategies.</p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button className="bg-primary text-background-dark font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform">Enroll in Accelerator</button>
                            <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">Learn More</button>
                        </div>
                    </div>
                    <div className="relative w-full max-w-sm">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative bg-background-dark border border-white/10 p-4 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                                <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
                                <div className="h-24 w-full bg-slate-800/50 rounded flex items-center justify-center">
                                    <span className="material-icons-round text-primary/40 text-4xl">rocket_launch</span>
                                </div>
                                <div className="h-4 w-full bg-slate-800 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
