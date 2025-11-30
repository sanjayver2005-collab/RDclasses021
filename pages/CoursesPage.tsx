
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CoursesPage: React.FC = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden text-gray-800 dark:text-gray-200">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 md:px-10">
                        <Header />
                        <main className="flex-grow">
                            {/* HeroSection */}
                            <div className="@container py-10 md:py-20">
                                <div className="flex flex-col gap-6 px-4 @[864px]:flex-row @[864px]:items-center">
                                    <div className="flex flex-col gap-6 @[480px]:gap-8 @[864px]:justify-center @[864px]:w-1/2">
                                        <div className="flex flex-col gap-2 text-left">
                                            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                                                Unlock Your Potential with Our Expert-Led Courses.
                                            </h1>
                                            <h2 className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal @[480px]:text-base">
                                                We offer a variety of courses in language, technology, and academic tuition for all age groups.
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-primary/90 transition-colors" href="#courses">
                                                <span className="truncate">View Courses</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full @[864px]:w-1/2 bg-center bg-no-repeat aspect-video bg-cover rounded-xl transition-transform duration-500 hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjl3d6TfcKG5JAfrp5Co7rUIqpXjWrAXkXxwqN9sZsiN1XtQKqKKTUFkgdcvI1SstCHe4vfVr2hzw5GDptGyGmNvWR1__NHTIjz6C_QFtjMTKu0SL19xLRnh9STfIFmtnQzwlD_XEM72FAoa9gUco8xQGPWKNwY5lEnQi2_iB5pW38La9yjzkX4eyxUoouvL3oGmHsTE7Uclyzngpc740arf6o0uuoXbCevqxQEYxS-bORO-Aqw8ICj4W5C7xnIXZoE3jtK0rOVns")' }}></div>
                                </div>
                            </div>
                            <div className="space-y-12" id="courses">
                                {/* Language & Skills */}
                                <div>
                                    <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Language &amp; Skills</h2>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-4">
                                        <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRT-MroO4cNSdfqc1otQRyuN5gImWl4OBtz_WZ3tPSGwCntfpYp1oNEzfw8ZzZOnDZV6sJgw-ACFScPPdXV0xsrIU8zLRJOoLTGqaW_nCPf_7k4un2yl9ZQb-A5JG4fuyp1p6F8LWb0YXbESssxgKamlURyQl-bL1tOYxjwvodeAFkU2Ep4F2pR0u_jZ8-GIhLUPjD7qkwmFUfILLVsTwFafxJWOG-oZ9miVPSG-wFC7YrTRKbGJ4xImTTA6RgKgMovfxI07NHcv0")' }}></div>
                                            <div>
                                                <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">English</p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Grammar, Spoken English, Creative Writing</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAauUtO69FMqfAqAZr3gFktGRELK0w9d5Q-ZBMyV0fPgfny5b7DZdjUgBzgvS0wVbrMx-cj_gJwh8vUBbgrQVdn5NxWQ8jyeq4IiYietXf1UJ6H5jvHp8zLDe06KoloSwh9M3FsSTy0aeNoALboxZEBAQ4qPK2FjcfTrImX-_Eu4R7PAE8JwGQ4C2pK0x9JnnHLBwth5ddpJG-Ujwyi1mqNUeC0G0we3sTtetjS4l38H9d3t2yLNLRI2Ucmd47TXo4IDXa3gc_nlmM")' }}></div>
                                            <div>
                                                <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">Computer</p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">MS Office, Basic Programming, Digital Literacy</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjHGculG6QIINONkyRMzcJ5Wxvt5xDJU_pjbiIfN5G_7WUlrbEVX83_eQWTtYlK8CR-vAxQ401RRz95vp15b4m995Jk0K_3HoNA8xKf92QlmnECScChHQgzJovWDvTiHoj5LDsDzBUcZxSrlOOmxvKoKmt0HBobuU2jyeFqxO8DvBPhHhbHHtQMYapNE1nd6LNfzFKXs-a8sLeGQ0DO_562hQrx-m_MDCBGL2eQd4ubo9GUTJHblRCmfeWKZCbyKj-AaLjkd7nWEc")' }}></div>
                                            <div>
                                                <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">Communication Skills</p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Public Speaking, Presentation Skills, Body Language</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Academic Tuition */}
                                <div>
                                    <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Academic Tuition (Classes 1-10)</h2>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 p-4">
                                        <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCejYzdSwZsZmhF7-XW1mGoubmWq9S7Ukl4Z-oTC7KRdOj790hvOkWCRH1i9TzseIVC0RNkhYr1EedF-wMH2fz1lCqhb9KQP7vYe8vxhBP7wj4IMAXEgUHpzOv5pCGVduMFF8Gs35oVspIbDobQl2iUNmlRgJgGiZQnN6ZjH8hzLQD36F5Jo-vmnLqmgVDEfet0OKOOA8VxuCnIxdVIDBHAQWz1r3b3jAzo5XplgJKyKi3ozj2AZtCzO0Tr6cbFPltlvIjXmIB4Vb4")' }}></div>
                                            <div>
                                                <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">Primary (Classes 1-5)</p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Focus on foundational learning and core subjects.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLt-Ywk7yHNK4r-R0e7WQI6Psi49kp0fkcuX-IHKq-vI4f03z8M9DcSHC3XfYm-wRsmKvJYgPE6fbeWGGuhMko5srrxRsvPxgyxS1kb6_Q9t1KHohX02e9PQdgBCdmofZVAYw_g2oWRABdniHqLQCD7XceM9yA8TnkdNCjOttFzjQL0PZ4Qtpql7svJ-lzcJ26Blybu3SsvgAlffnq2b_udVRDKFZrlyp66DAPnky33VLiIv18vaaNunwMRpgZgUsOgpUA6LUjDog")' }}></div>
                                            <div>
                                                <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">Middle (Classes 6-8)</p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Focus on subject mastery and exam preparation.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4MFadQPTgv6qOOIsZy29P1LJynIz9n3pEFgOqkTbekj08WfVhn4gPRlHGy648AdbdwpmyQyCAmJEJBo4tPUQwi0CqNLppUiKGqg2rJ46qy8o9CvpodYHyfmphQRUVBOujmuAmwDjAz_d2IpRwie4IRJcv3Z5lTeh212PcMEI7LWwOinlUP-l6mX7fy4FdmNPZYyWt5r98jGqhr6UpvxkvMC7NIYhz_jTwD867fX43KnVari7GtP2SmvxoMPMPEtpMPNzYhPBxv6w")' }}></div>
                                            <div>
                                                <p className="text-gray-900 dark:text-white text-lg font-medium leading-normal">Secondary (Classes 9-10)</p>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Focus on board exam strategies and in-depth subject knowledge.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CTA Section */}
                            <div className="my-16 md:my-24 px-4">
                                <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 md:p-12 text-center">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Ready to Start Learning?</h2>
                                    <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">Join RD Classes today and take the first step towards achieving your academic and professional goals. Our expert instructors are here to guide you.</p>
                                    <Link to="/contact">
                                    <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                        <span className="truncate">Contact an Advisor</span>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
