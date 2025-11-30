
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <Header />
                        <main className="flex flex-col gap-10 md:gap-16">
                            <div className="flex flex-wrap justify-between gap-3 p-4 pt-10 md:pt-16">
                                <div className="flex w-full flex-col gap-3 text-center items-center">
                                    <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">RD Classes Pricing & Timetable</h1>
                                    <p className="text-[#617289] dark:text-gray-400 text-base md:text-lg font-normal leading-normal max-w-xl">Find the perfect plan and schedule to start your learning journey with us.</p>
                                </div>
                            </div>
                            <section>
                                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Courses & Tuition Plans</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-3">
                                    {/* Pricing Cards */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">English Speaking</h3>
                                            <p className="flex items-baseline gap-1 text-[#111418] dark:text-white"><span className="text-4xl font-black leading-tight tracking-[-0.033em]">₹1500</span><span className="text-base font-medium">/ month</span></p>
                                        </div>
                                        <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary text-sm font-bold tracking-[0.015em] hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"><span className="truncate">Enroll Now</span></button>
                                        <div className="flex flex-col gap-3 pt-2 text-[#617289] dark:text-gray-400">
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>3 Month Duration</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Improve Fluency</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Build Confidence</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Expert Instructors</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border-2 border-solid border-primary bg-white dark:bg-background-dark p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                        <p className="absolute top-0 right-0 text-white text-xs font-medium tracking-[0.015em] bg-primary px-3 py-1.5" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%)', paddingLeft: '1.25rem'}}>Most Popular</p>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Computer Skills</h3>
                                            <p className="flex items-baseline gap-1 text-[#111418] dark:text-white"><span className="text-4xl font-black leading-tight tracking-[-0.033em]">₹2000</span><span className="text-base font-medium">/ month</span></p>
                                        </div>
                                        <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"><span className="truncate">Enroll Now</span></button>
                                        <div className="flex flex-col gap-3 pt-2 text-[#617289] dark:text-gray-400">
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>4 Month Duration</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>MS Office Suite</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Basic Programming</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Internet Fundamentals</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Communication Skills</h3>
                                            <p className="flex items-baseline gap-1 text-[#111418] dark:text-white"><span className="text-4xl font-black leading-tight tracking-[-0.033em]">₹1800</span><span className="text-base font-medium">/ month</span></p>
                                        </div>
                                        <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary text-sm font-bold tracking-[0.015em] hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"><span className="truncate">Enroll Now</span></button>
                                        <div className="flex flex-col gap-3 pt-2 text-[#617289] dark:text-gray-400">
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>3 Month Duration</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Public Speaking</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Presentation Skills</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Group Discussions</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">Tuition (1-10th)</h3>
                                            <p className="flex items-baseline gap-1 text-[#111418] dark:text-white"><span className="text-4xl font-black leading-tight tracking-[-0.033em]">₹2500</span><span className="text-base font-medium">/ month</span></p>
                                        </div>
                                        <button className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary text-sm font-bold tracking-[0.015em] hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"><span className="truncate">Enroll Now</span></button>
                                        <div className="flex flex-col gap-3 pt-2 text-[#617289] dark:text-gray-400">
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Full Academic Year</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>All Subjects Covered</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Personalized Attention</div>
                                            <div className="text-sm flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span>Regular Assessments</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Weekly Class Schedule</h2>
                                <div className="px-4 py-3">
                                    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-gray-50 dark:bg-gray-800/50">
                                                <tr className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                                    <th className="p-4 w-32">Time</th>
                                                    <th className="p-4">Monday</th>
                                                    <th className="p-4">Tuesday</th>
                                                    <th className="p-4">Wednesday</th>
                                                    <th className="p-4">Thursday</th>
                                                    <th className="p-4">Friday</th>
                                                    <th className="p-4">Saturday</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr className="dark:text-gray-300">
                                                    <td className="p-4 font-medium">9:00 - 10:30 AM</td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">English Speaking</div></td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">English Speaking</div></td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">English Speaking</div></td>
                                                    <td className="p-4"></td>
                                                </tr>
                                                <tr className="dark:text-gray-300">
                                                    <td className="p-4 font-medium">11:00 AM - 12:30 PM</td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Computer Skills</div></td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Computer Skills</div></td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Computer Skills</div></td>
                                                </tr>
                                                <tr className="dark:text-gray-300">
                                                    <td className="p-4 font-medium">2:00 - 3:30 PM</td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Communication</div></td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Communication</div></td>
                                                    <td className="p-4"></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Communication</div></td>
                                                    <td className="p-4"></td>
                                                </tr>
                                                <tr className="dark:text-gray-300">
                                                    <td className="p-4 font-medium">4:00 - 5:30 PM</td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Tuition (1-5th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Tuition (1-5th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Tuition (1-5th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Tuition (1-5th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Tuition (1-5th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Tuition (1-5th)</div></td>
                                                </tr>
                                                <tr className="dark:text-gray-300">
                                                    <td className="p-4 font-medium">6:00 - 7:30 PM</td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Tuition (6-10th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Tuition (6-10th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Tuition (6-10th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Tuition (6-10th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Tuition (6-10th)</div></td>
                                                    <td className="p-4"><div className="px-3 py-1.5 rounded-full text-center bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Tuition (6-10th)</div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                            <section className="my-10">
                                <div className="rounded-xl bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-8 md:p-12 text-center flex flex-col items-center gap-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white">Ready to Join?</h2>
                                    <p className="text-base text-gray-500 dark:text-gray-400 max-w-md">Seats are filling up fast! Enroll today to secure your spot and start your journey towards success with RD Classes.</p>
                                    <button className="mt-2 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"><span className="truncate">Enroll Today</span></button>
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
