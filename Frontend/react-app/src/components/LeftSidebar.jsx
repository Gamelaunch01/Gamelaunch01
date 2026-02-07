export default function LeftSidebar() {
    return (
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <section className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg uppercase tracking-wider">Community Feed</h3>
                    <span className="material-icons-round text-slate-400 cursor-pointer">more_horiz</span>
                </div>
                <div className="p-4 space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <img alt="Aisha" className="w-8 h-8 rounded-full border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvBrnvfLfkCcAEs02_Ejar63t9ltZVdankNhS23QKAj7x6lhBoVwrVpVnuVnO5MBolSQdV9dVqbmbgAwKd2jV8jrjrcDHOyp1tokX7P7mdhxFn8e7N2JzTkbVsODOEC2nksqNWYdXusTucMpXoKPeO1-pHcrsQz_SuXXR4JdDymi9h3lXzyOf68ldzzSqPRzHdBFFdpjTkjP_CWaY-TRQF5Nmegm_VzCODVj5gfuQsjiTkL9bLkw9NZ1c8AHykQsZRlNIaRtC3VSmP" />
                            <div>
                                <p className="text-sm font-bold">AishaGamer</p>
                                <p className="text-[10px] text-slate-500 uppercase">2 hours ago</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">New high score! Who's ready for a challenge? 🏆✨</p>
                        <div className="flex items-center gap-4 text-slate-500">
                            <span className="flex items-center gap-1 text-[11px]"><span className="material-icons-round text-xs">favorite</span> 120</span>
                            <span className="flex items-center gap-1 text-[11px]"><span className="material-icons-round text-xs">chat_bubble</span> 20</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <img alt="DevJay" className="w-8 h-8 rounded-full border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYBQka9RNmyu3o78N0C0XDZ1jeAgcHa5-kGNN1b8Iq4CnQ20HN-7AJJfn6rotLJXcOdqmCK2RFRRW4jprVzBl9lKWLDDL4qbBdwTkXcyTn4tiBY8dXYgQQG08s9jKC9Vk661aEvWm8kj8xyCNYTKtaOqjqxEl6IETdfTRnmn4f2wK9W-iwf0p3cHDyqkwsnsM-pn1uDHpY0tYtMKuFAzyJzSke8ga6PtzDbiqccPFffw7q1zj9tbkgkqO3YBki3AgSNo8ArfPVOdIo" />
                            <div>
                                <p className="text-sm font-bold">DevJay</p>
                                <p className="text-[10px] text-slate-500 uppercase">4 hours ago</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Working on a new game level. Sneak peek? 🏗️🎮</p>
                        <div className="flex items-center gap-4 text-slate-500">
                            <span className="flex items-center gap-1 text-[11px]"><span className="material-icons-round text-xs">favorite</span> 95</span>
                            <span className="flex items-center gap-1 text-[11px]"><span className="material-icons-round text-xs">chat_bubble</span> 15</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                    <h3 className="font-display font-bold text-lg uppercase tracking-wider">Top Players</h3>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    </div>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-slate-400 w-4">1</span>
                            <img alt="KingKayo" className="w-8 h-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYk1nZ8zRy6TCWxD2zFjtzRlv_myWOLHEfTN3UOfRN7nTpTcLHi8hQ28RjlkJgcTEOIRPpUynrTWVVVHhpBerldPceoyDJhshElwbrNkf6mlqoDkNUMfw0NkOnUUsD07PTXuO22THuMr_uGFvCTIF_dwObPqBFi6uevN5fQ98qeOGltnmZSjIYZJP1KZGd9oIRTIhTDwMh9zq9T6lZiXieVw2mFPS2lMK-Z-yznmGsxzP1EzGH7-3ceMneZ_yxR7ZCM_TEnAyniBZ" />
                            <span className="text-xs font-semibold">KingKayo</span>
                        </div>
                        <span className="material-icons-round text-primary text-sm">emoji_events</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-slate-400 w-4">2</span>
                            <img alt="ZeeBlast" className="w-8 h-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmSnr7M8yxnilyPmx-YYDFf19MuDlbM5TjJ2Q-CnkNDzYMXIakPaKBlwFmRcaWrj_TxwI7q1vUk2QRPxOk6H7jao8Q4t9lSlj6kfCnDczPMG0b5zSPuNjxnxlx-2F6yIquNyILd0lx-ajDp3Z3IzNOOvlLEWWlJwkVVGPX5vQwly32WnapMh9Tk2rDGYn6pPZuB2Icbv09uvTNINHyTW_vxx04URyveNzhCoOTxOxw_K-5QibPIIRJy6r6x5ZO-F1AyPvduAyAAveN" />
                            <span className="text-xs font-semibold">ZeeBlast</span>
                        </div>
                        <span className="material-icons-round text-gray-300 dark:text-slate-600 text-sm">emoji_events</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-slate-400 w-4">3</span>
                            <img alt="NalaPro" className="w-8 h-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4vvmtbEjb25-OI7oJXsBIcvES_ByNtjY7N0FlwlNSwyHjWvlDEMbXMGJR8b-vKgSZt3BwdLbc4ys9_zTokIblxYvdPd3eIADl-jcaGbwpnrg0IVNyFKZ2ESqkxRIO--CnIq_MYDACgEKG-iXfKLSX9ip-OOB-eHl0zrWWZf0FC__Ii8eTbT7aKeTasgp2nxe-efKYjyyZoS9H1MUFceoZoVq_0ORdMhw935OkRPMeYsc4dF5afPkDsnLGlcTk_kTkrxfXumTxoD9Z" />
                            <span className="text-xs font-semibold">NalaPro</span>
                        </div>
                        <span className="material-icons-round text-orange-400/80 text-sm">emoji_events</span>
                    </div>
                </div>
            </section>

            <section className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                    <h3 className="font-display font-bold text-lg uppercase tracking-wider">Upcoming Indie Games</h3>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">terrain</span>
                        </div>
                        <span className="text-xs font-medium">Safari Quest</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                            <span className="material-icons-round text-blue-500 text-sm">precision_manufacturing</span>
                        </div>
                        <span className="text-xs font-medium">CyberStreet</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                            <span className="material-icons-round text-purple-500 text-sm">water_drop</span>
                        </div>
                        <span className="text-xs font-medium">Mystic Falls</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
