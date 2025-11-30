
import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';


const SideNav: React.FC = () => {
    const navItems = [
        { icon: 'grid_view', name: 'Dashboard', active: true },
        { icon: 'import_contacts', name: 'My Courses' },
        { icon: 'assignment', name: 'Homework' },
        { icon: 'folder_open', name: 'Study Materials' },
        { icon: 'settings', name: 'Settings' },
    ];
    return (
        <aside className="hidden md:flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex h-full flex-col justify-between p-4">
                <div className="flex flex-col gap-4">
                    <Link to="/" className="flex items-center gap-4 px-3 text-[#111418] dark:text-white">
                        <Logo className="size-8" />
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">RD Classes</h2>
                    </Link>
                    <nav className="flex flex-col gap-2 mt-4">
                        {navItems.map(item => (
                            <div key={item.name} className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 ${item.active ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                <p className="text-sm font-medium leading-normal">{item.name}</p>
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLC73vVudmDRcg_AlyRM92zci6Uk0kpDfdo3y0vOrI7qKmPFlEPIA6UM49jeXg5sjXPbFFC5qzXZG0pnwkHLzXwf5nbNRq08n9NInhcVEfvc6huro7IK97HR3UwfzXRXMpO21IB6JT5tamtLFy6cjKhXzqiNFyDliEYelWjbr0UqtibOM4Nltul_a2Ewf_rsSIJNbQGRBFMIvhCOPecGGdXi5kmXuUaMUwoRM2P7hNACM0yzqTBANytI2uQHKI2o37g36Wh6RN9j4")' }}></div>
                        <div className="flex flex-col">
                            <h1 className="text-[#111418] dark:text-white text-base font-medium leading-normal">Riya Sharma</h1>
                            <p className="text-[#617289] dark:text-slate-400 text-sm font-normal leading-normal">Class 8</p>
                        </div>
                    </div>
                     <Link to="/">
                        <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="truncate">Logout</span>
                        </button>
                    </Link>
                </div>
            </div>
        </aside>
    );
};


const DashboardPage: React.FC = () => {
    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display">
            <SideNav />
            <main className="flex-1 overflow-y-auto">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-10">
                    <label className="flex flex-col w-full max-w-sm">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                            <div className="text-[#617289] dark:text-slate-400 flex bg-[#f0f2f4] dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg"><span className="material-symbols-outlined text-xl">search</span></div>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] dark:bg-slate-800 h-full placeholder:text-[#617289] dark:placeholder:text-slate-400 px-4 pl-2 text-base" placeholder="Search courses, homework..." />
                        </div>
                    </label>
                    <div className="flex flex-1 justify-end gap-4 items-center">
                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-[#f0f2f4] dark:bg-slate-800 text-[#111418] dark:text-white"><span className="material-symbols-outlined text-xl">notifications</span></button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM-DJ5dMqeZ-OXdUlsv_ADh5_p4CJ4Z5SzL-RISNeDlP9Sg0ILRzF3mNxXtPrhqsoJNYXHaychOUhClei7xrV4ndY-nSWIH0jnDEWyDAORkOFYPMc5o8dcHoYycOvRriPxFlGQLCQYHFQZLi8x7QtpK4s7jvoP9lmwF3euw6htU7atcK7G8iOC52bdu5PYCEsFCuimPP8IXaZznBsUOko-vBvynh5TeGtjl_LtziwtIp298g_RuSA766DVcIvH5GXsXslz5wmFTsA")' }}></div>
                    </div>
                </header>
                <div className="p-10">
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <div className="flex min-w-72 flex-col gap-2">
                            <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, Riya!</p>
                            <p className="text-[#617289] dark:text-slate-400 text-base font-normal leading-normal">Here's a summary of your academic journey today. Keep up the great work!</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-8">
                           {/* My Courses Section */}
                            <div>
                                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">My Courses</h2>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
                                    <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-transform duration-300 hover:-translate-y-1">
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtC3_Ad1P7Hc8Pk462Ygot1nMssKfOLrZPje7Q2-0UsfnBGjDEkxNKjBKiLO9kXyH9diERrM29BPx8eYd5NPHu4jRodtmm4_PsZ0jvo3Zgsusk0JOuQ821hny2XT1BajsCWz7F4rY0J8DTlHyZv9_xsE7K6D5IoHspLnBGXgwEJ4q7RVKRFUTAz4S5Ky5uj27njq1TKL592USNDLuxrGQool4MnQx36suBUcKD59euyrGHTNmEwbCNEk9i5lgT4_1GyAem72SW7wQ")'}}></div>
                                        <div>
                                            <p className="text-[#111418] dark:text-white text-base font-medium">English - Class 8</p>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 my-2"><div className="bg-green-500 h-1.5 rounded-full" style={{width: "65%"}}></div></div>
                                            <div className="flex justify-between items-center"><p className="text-[#617289] dark:text-slate-400 text-sm">65% complete</p><a className="text-primary text-sm font-medium hover:underline" href="#">Continue</a></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-transform duration-300 hover:-translate-y-1">
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-p8UC6AbkAEJ-6jKFSunBkn6f2kV2ROk1QjCLaqox95wWqZr1v9akcnON7Cj2ztw7Kk7cBSYfOi4JaOCjbGtHItaCNctYs_BIJ0xPlgS_ahfo_-puLKWkTReOFyg_IeyBa8jEduF1PhI5pl5cdFek5G0L5WWSHtBFzu7qI8jYRn4WgIl2TXFAzaJBIoFSgU9eVp2TcKuYvxRnxamrbj9Pgf36rHef42STm0_PT7ItpWyLbeW5Fj0vPP_9qn1rQEu0gqHb6ajd8dA")'}}></div>
                                        <div>
                                            <p className="text-[#111418] dark:text-white text-base font-medium">Computer Basics</p>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 my-2"><div className="bg-green-500 h-1.5 rounded-full" style={{width: "80%"}}></div></div>
                                            <div className="flex justify-between items-center"><p className="text-[#617289] dark:text-slate-400 text-sm">80% complete</p><a className="text-primary text-sm font-medium hover:underline" href="#">Continue</a></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-transform duration-300 hover:-translate-y-1">
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCG20aICu5XEiaa-nddh101lwMawbG8j-OL9-AVKzooRDDGN0Z-2bugModMfWYxvNVhriYedW7h8QPZXH2sudXR9yEL6tn_PrfK8oqNgbZoQJGGJfvK1Kj8OSv49Onkp0iZo0nmHRoXOuEWLmHK55BquUEt66X26PBaiNXnvgHpOqrPYUS8mxrEDFeGCsS92QPdVrZYFX3LKIAEGjookhWR8JQ2ttcFpLvRzg-CqVsB2VTF7Y2t3ILeATRcGWNFWiihtb5slmePs3c")'}}></div>
                                        <div>
                                            <p className="text-[#111418] dark:text-white text-base font-medium">Communication Skills</p>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 my-2"><div className="bg-green-500 h-1.5 rounded-full" style={{width: "40%"}}></div></div>
                                            <div className="flex justify-between items-center"><p className="text-[#617289] dark:text-slate-400 text-sm">40% complete</p><a className="text-primary text-sm font-medium hover:underline" href="#">Continue</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1 flex flex-col gap-8">
                            {/* Overall Progress */}
                            <div>
                                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Overall Progress</h2>
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center">
                                    <div className="relative size-40">
                                        <svg className="size-full" viewBox="0 0 36 36"><circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle><g className="origin-center -rotate-90 transform"><circle className="stroke-current text-primary transition-all duration-500" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset="35" strokeWidth="3"></circle></g></svg>
                                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2"><span className="text-center text-3xl font-bold text-[#111418] dark:text-white">65%</span></div>
                                    </div>
                                    <p className="text-center text-[#617289] dark:text-slate-400 mt-4">Great job! You are on track to complete your courses successfully.</p>
                                </div>
                            </div>
                            {/* Upcoming Homework */}
                             <div>
                                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Upcoming Homework</h2>
                                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div><p className="font-medium text-[#111418] dark:text-white">Computer Science Worksheet</p><p className="text-sm text-slate-500 dark:text-slate-400">Due: Tomorrow, 11:59 PM</p></div><span className="text-xs font-semibold uppercase px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400">Urgent</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div><p className="font-medium text-[#111418] dark:text-white">English Essay Submission</p><p className="text-sm text-slate-500 dark:text-slate-400">Due: In 3 days</p></div><span className="text-xs font-semibold uppercase px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400">Pending</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div><p className="font-medium text-[#111418] dark:text-white">Communication Presentation</p><p className="text-sm text-slate-500 dark:text-slate-400">Due: In 1 week</p></div><span className="text-xs font-semibold uppercase px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Not Started</span>
                                    </div>
                                    <button className="w-full text-center text-primary font-semibold text-sm pt-2 hover:underline">View All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
