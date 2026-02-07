export default function RightSidebar() {
    return (
        <div className="col-span-12 xl:col-span-3 flex flex-col gap-6">
            <section className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg uppercase tracking-wider">Learning Hub</h3>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    </div>
                </div>
                <div className="p-4 grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img alt="Course" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPsbAfBXoKWvT7qsgLdguSLjLoyBooW4f3a6VwGMFZw8U09yhMXjsLvfpL8i2DcG0PuKL4uqZCwjMeALVx2BYAtN_M3c6A8jopzDgeYNjnq0e5NsjvusWDOFfbkSqBMqUyRDb6VuPwpFqBKmqo8ic9pDqdohcjd_yyhEK6e7Xp9qcYFi48UhSgIaDtqLAsHNwy-02O52nFz0RiC8YB4p2fkGdsNTrPjEjDKilWc_y5WnBieN73xX2B6ZBZhN7HEMTc_2wLHzw6CQ9X" />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">Game Development Basics</h5>
                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">12 Lessons • Beginner</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img alt="Course" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAuxTs3IIxXaWK3N_NDL2w9I6qSWNfT6sawp887it5_Rpuo5fKqAP4_MXrngFDgNDsLUpIFJt8gWLlnLilXs2E7WyKV-sZnOGqMpTm4_R0yAnVnLwCU1wDJyoKFBZa8w0CgM7vp998a0nZRfl0ADqiNM_MQMeM8CcGNj8dTBHVaLeWfVg0ypqrjvRnqLPEa5wB5rmR-wS1D0kvC-fBxLmXUrA1DgajgUA-J0K4uLmmMEQCaSFbYemRYJ84McqasmT1J8ENrnehw1nr" />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">Streaming & Esports Tips</h5>
                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">8 Lessons • Intermediate</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img alt="Course" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHa3XD0b0d5mv29HvZjogligcOqOhNKNSMf-NmdNp-AN7RIcqShWEn9kZnhHjRSSsmZcMlGr_vcNS-86pA8VrizMrMU1FZAZmrOinabiUJWh7KedOYcCM0ZBNebqp0xOj6Ah91NYxNSXOo2fo6YTHLXtphldL9IQoNWx60Qwf4JNPtG1N_vDjiDvhoc3llbe7I0MS77WM25MkiObW53CzrHtFhZ_yihd0dZwk_O6-7Bx5MhC4UadfGscwAeAt5r2WCxhyGjBF6siwu" />
                        </div>
                        <div>
                            <h5 className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">Monetize Your Game</h5>
                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">15 Lessons • Advanced</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg uppercase tracking-wider">Top Streams Live Now</h3>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    </div>
                </div>
                <div className="p-4 grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <div className="relative group rounded-xl overflow-hidden aspect-video">
                            <img alt="Streamer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGWsUSP-Tl2nRibc9PiL4pxohbMDWWPDeOAZEn9GXVFxcd5QYBVV1Gt1PFxS2DiiNlT7mfROmTIq3K_vP7DSMwLeY68eHenUBnqChmYolVQ7OoV14yW3resGZvBa6iKjW6c83N-4AXaD18oRuc_eNWdTWvk7DHMt_6PILGS3-K7KmuCbv1yPkPL7Re_dI5V4ks8khj5VLX6kwndcyeZ9V47EobO23M9MwD6B1B-bvZW2OSC12gVdUx-iwLC9kQpWbSgjulJ34WlwgZ" />
                            <div className="absolute top-2 left-2 flex items-center gap-2">
                                <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-tighter">
                                    <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span> LIVE
                                </span>
                                <span className="bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded">3.5K</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img alt="Kwame" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-g3D2U_YyCSafvg-dwuVru5_0GhFVmpt_r1bS41GUwLPw3uSQSBg9SkkVwjyToo4sxidSAhnuq-7kWtr2zaSX_iTLo6qpQX3ynQM_A6E77VeNf7FUHoJ3EorF--WGKPfFR7F1ivCBoNoUJH5QzmpFdKnUILPNpIXFJ56ZbM90Wq1kEfyck7uA3AmpkFXKB2UgOoqWBjrrY1BMUPK94elzlPxrlxtwWVvLbufctnD5FhQg9_aqYEOrUtQ1E1kyaTdhb4GanNyy0g5v" />
                                <div>
                                    <p className="text-[11px] font-bold leading-none">KwameLive</p>
                                    <p className="text-[9px] text-slate-500">FIFA 24S</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                <span className="material-icons-round text-[12px] text-red-500">favorite</span> 2.5K
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="relative group rounded-xl overflow-hidden aspect-video">
                            <img alt="Streamer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo96MhyUIkrhh1IP_ZtYLKtvKjpOH259CQ01NXCCbOWiSsOL1m-O2dNqoFBM5opxS7VVF1v5nbbxtusgUIUvbqyXqFUQr-Ycie5Q9VgFX6fpDvzqiyd9teiG01_ZBaZH3cLiRjYxqmY_UXs_xXWhikR0YkKo3jsl9akaGm1Yr42JMZZRtcrmGlWj1Glo7tLURoz7l28gvtC0dCRGWipDuZ3xoPCUdHGjrdbAmk6jDf3J-zRTgWqTnXDln6LfTfFPw_hCn3sQXkUZRl" />
                            <div className="absolute top-2 left-2 flex items-center gap-2">
                                <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-tighter">
                                    <span className="w-1 h-1 rounded-full bg-white animate-pulse"></span> LIVE
                                </span>
                                <span className="bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-1.5 py-0.5 rounded">1.2K</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img alt="Lola" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVl6odRL4FNKA4UDvLE91dM8zz-6sQC5yy6HTBGOHvlFOdnB7UMw2YedwPAnJ9bbNWyCmR7cGJvw2m3mLYbqAe63ZssE2Jjiuoj-36vpsFOlACWeCED3LtIyo7QBJciXjideDKDfcPGwRAN1CTdP8-HQv9YDoLPtNqZQXVlLjS8I1D6hDf0CbPF7zTGoZtfV5-M4EkdqmkqTgHsA9qu5JnA7LD00QEv-M9pdOv_M7cRbsLhADHqQalM1gHA2tZefk8_Qyp2cDzJvB5" />
                                <div>
                                    <p className="text-[11px] font-bold leading-none">LolaPlays</p>
                                    <p className="text-[9px] text-slate-500">Action RPG</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                <span className="material-icons-round text-[12px] text-red-500">favorite</span> 1.8K
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
