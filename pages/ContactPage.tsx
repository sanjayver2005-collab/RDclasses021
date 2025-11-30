
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-gray-200">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <Header />
                <main className="flex-grow">
                    <div className="container mx-auto px-4 py-16 sm:py-24">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-black tracking-[-0.033em] text-[#111418] dark:text-white sm:text-5xl">Get in Touch</h1>
                            <p className="mt-4 text-lg font-normal text-[#617289] dark:text-gray-400 max-w-2xl mx-auto">We're here to help you succeed. Fill out the form or use the details below to get in touch.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <div className="flex flex-col gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-background-dark/50 transition-shadow hover:shadow-md">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-10"><span className="material-symbols-outlined">location_on</span></div>
                                        <div>
                                            <h3 className="font-semibold text-base text-[#111418] dark:text-white">Our Address</h3>
                                            <p className="text-base text-[#617289] dark:text-gray-400">123 Education Lane, Knowledge City, 45678</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-background-dark/50 transition-shadow hover:shadow-md">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-10"><span className="material-symbols-outlined">call</span></div>
                                        <div>
                                            <h3 className="font-semibold text-base text-[#111418] dark:text-white">Phone</h3>
                                            <p className="text-base text-[#617289] dark:text-gray-400">+1 (234) 567-890</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-background-dark/50 transition-shadow hover:shadow-md">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-10"><span className="material-symbols-outlined">mail</span></div>
                                        <div>
                                            <h3 className="font-semibold text-base text-[#111418] dark:text-white">Email</h3>
                                            <p className="text-base text-[#617289] dark:text-gray-400">contact@rdclasses.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm">
                                    <img alt="Map showing location of RD Classes" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxfMJyzHDM4QbVR1RIPEhu7G8AAgNAKfUOQfzMv6GhLb1yVUXNhkg-bY_cUZtVCXEYw0aPqAhIpuzkRK8I1JhUes9KItghhylut8D85bvWvd34yL6ZS-kBjENaDV5bnryW9KGE9cOIoMmO7owAkYBhid99ZlK3F0cxinCxvkjskQiTg7aBK8D2TY1Pf9hmtGPr5rz9S0rC5MJvu3RzN9CGp53XUnYCBJW8zHRe7UwnW2VBFOU9tjT6__5H4_tY9kOW48Z5vVYMEtA" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">Send us a Message</h2>
                                <form action="#" className="space-y-6" method="POST">
                                    <div>
                                        <label className="block text-sm font-medium text-[#617289] dark:text-gray-400 mb-2" htmlFor="full-name">Full Name</label>
                                        <input className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm" id="full-name" name="full-name" placeholder="John Doe" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#617289] dark:text-gray-400 mb-2" htmlFor="email">Email Address</label>
                                        <input className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm" id="email" name="email" placeholder="you@example.com" type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#617289] dark:text-gray-400 mb-2" htmlFor="phone">Phone Number</label>
                                        <input className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm" id="phone" name="phone" placeholder="+1 (555) 123-4567" type="tel" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#617289] dark:text-gray-400 mb-2" htmlFor="interest">I'm interested in...</label>
                                        <select className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm" id="interest" name="interest">
                                            <option>General Inquiry</option>
                                            <option>English</option>
                                            <option>Computer</option>
                                            <option>Communication Skills</option>
                                            <option>Tuition (Classes 1-5)</option>
                                            <option>Tuition (Classes 6-10)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#617289] dark:text-gray-400 mb-2" htmlFor="message">Message</label>
                                        <textarea className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm" id="message" name="message" placeholder="How can we help you?" rows={4}></textarea>
                                    </div>
                                    <div>
                                        <button className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition-colors duration-200" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ContactPage;
