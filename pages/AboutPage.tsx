
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <Header />
                <main className="flex-1">
                    {/* HeroSection */}
                    <div className="px-4 sm:px-10 lg:px-20 py-5">
                        <div className="layout-content-container flex flex-col max-w-6xl mx-auto flex-1">
                            <div className="@container">
                                <div className="@[480px]:p-4">
                                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 transition-transform duration-500 hover:scale-105" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiifGb45rksDScWt3F24jgGzl9-Ijhs1U5luTCv9R8PL7UDS4jViJohiCZai5jZKTs5ZPm5WTsHQocCoIoIYEz9o06PP4FZm9_9AC7niLSlNhxSud_bnii7IQKoYoW4_k4IJDw7OlYojpCAd18ixt7aNQ8duHxUF0dSZPwAPRz2A4v-2haM3gJ8buCC7LlD-3eOV99G4BKGK0Lq-K0pmFASemeFBYkISjA86g2fRHy4a__F5kfTN1pqHFKqrlcmfsVIqFZ3NZBMZQ")' }}>
                                        <div className="flex flex-col gap-2 text-left max-w-3xl">
                                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">About RD Classes: Nurturing Minds for a Brighter Future.</h1>
                                            <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base">Our mission is to provide quality, accessible, and personalized education that empowers students to achieve their full potential and succeed in all their future endeavors.</h2>
                                        </div>
                                        <div className="flex-wrap gap-3 flex">
                                            <Link to="/courses">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-primary/90 transition-colors">
                                                    <span className="truncate">Explore Our Courses</span>
                                                </button>
                                            </Link>
                                            <Link to="/contact">
                                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-background-light dark:bg-background-dark text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                                <span className="truncate">Contact Us</span>
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FeatureSection */}
                    <div className="px-4 sm:px-10 lg:px-20 py-10">
                        <div className="layout-content-container flex flex-col max-w-6xl mx-auto flex-1">
                            <div className="flex flex-col gap-10 @container">
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Our Philosophy</h2>
                                    <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">Our Commitment to Student Success</h1>
                                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">We believe in a holistic approach to education that combines expert instruction with personalized attention and a focus on practical, real-world skills.</p>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-0">
                                    <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-6 flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                        <div className="text-primary flex items-center justify-center bg-primary/10 rounded-full p-3"><span className="material-symbols-outlined">school</span></div>
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Expert Tutors</h2>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Our educators are highly qualified and passionate about helping students succeed.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-6 flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                        <div className="text-primary flex items-center justify-center bg-primary/10 rounded-full p-3"><span className="material-symbols-outlined">person</span></div>
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Personalized Learning</h2>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">We tailor our teaching methods to meet the unique needs and learning style of each student.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark/50 p-6 flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                        <div className="text-primary flex items-center justify-center bg-primary/10 rounded-full p-3"><span className="material-symbols-outlined">trending_up</span></div>
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Proven Results</h2>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Our curriculum is designed to deliver tangible improvements and academic excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Educators Section */}
                    <div className="px-4 sm:px-10 lg:px-20 py-10 bg-white dark:bg-background-dark">
                        <div className="layout-content-container flex flex-col max-w-6xl mx-auto flex-1 gap-10">
                            <div className="flex flex-col gap-4 text-center items-center">
                                <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Our Team</h2>
                                <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">Meet Our Expert Educators</h1>
                                <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">Our dedicated team of professionals is the cornerstone of our success, bringing passion and expertise to every class.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                                    <img className="w-32 h-32 rounded-full object-cover mb-4" alt="John Doe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCotkZAHAv3QykLfhixnvsH_FPHzqExR7ZNXEsGW6nXkfINv1xgSOSABVs6MGDOc35R5iO1lEA5JGyfUMRx57u_u5BZ8yF_IIf-EO3fvvBS7ZTRy_04sWq1LhAmOsYguaqc1qBemdhlTeuvTTSy9T2gmU-bF2XLWBQSLf6bypTPUSfKweXwtrgd17jjKev4FEDnVbjf9i2gkWl4orzEGXHFqu6mZHg6AjjC8OOODIXad1wGxqFrLZ4MyNo2KpLqsxgBn_WJCS5AHY"/>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h3>
                                    <p className="text-primary font-medium">Mathematics &amp; Science</p>
                                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">With over 10 years of experience, John makes complex concepts simple and engaging for students of all levels.</p>
                                </div>
                                <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                                    <img className="w-32 h-32 rounded-full object-cover mb-4" alt="Jane Smith" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnnKYjnYkCZroZpA3IVfIJSfrY9yc0FTJE3o9gU3NCpuLUdobKyUy5hmcUZU28qjUcPa_a43KKsZs_SrAQPa6wwCaWDc2LNpNDOrCkUmNcMkvMM9q17OQLswzXx6ye16eUhhETh3_83NxXEXDObcLaTwlRnb23sDxuBuOcWoLjwLVQ-sl8Y1S-nEU3_2sQ5aH3_ugahprc8LMUcOVmTuUsdtJ3JNVV_y1Q2RefYihjwMUoNJ9mx9f3ZSbzrEVfcrU4dEJ7XkNIprI"/>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jane Smith</h3>
                                    <p className="text-primary font-medium">English &amp; Communication Skills</p>
                                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Jane is a certified language expert who helps students build confidence and master the art of communication.</p>
                                </div>
                                <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                                    <img className="w-32 h-32 rounded-full object-cover mb-4" alt="Mike Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2f93ckgcKMriAahXSYd_dDVg8omJpDG9WhSdYRZJUGNlDBX63EnSyKYiPgqLq-Y_E8OoD0T4yOVO2jHX2BTo26RXgBYvMIBpHZR7A3gqctjcL0X8yEIW7OG418XUFmSDwY4J_YiO3FwndQ4MLHLmhW8G1dnBjhog0eEevDJ78Pcv9bb2DVkxCGgk00V8lVOcRA0fO83iqa7v41BbwCtZIA5iYEtT1B0HRPHGK8Gw5F24zUe25ksOX6V1OBnNLZnW6sHjQSGm4tsc"/>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mike Johnson</h3>
                                    <p className="text-primary font-medium">Computer Science</p>
                                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">A software developer turned educator, Mike brings real-world programming knowledge into the classroom.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Section */}
                    <div className="px-4 sm:px-10 lg:px-20 py-20">
                        <div className="max-w-4xl mx-auto bg-primary rounded-xl text-center p-10 sm:p-16">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Join Our Community</h2>
                            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Ready to take the next step in your educational journey? Explore our courses or get in touch with our team to find the perfect fit for you.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/courses">
                                    <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
                                        <span className="truncate">Explore Our Courses</span>
                                    </button>
                                </Link>
                                <Link to="/contact">
                                <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary/30 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/40 transition-colors">
                                    <span className="truncate">Contact Us</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default AboutPage;
