
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
    {
        question: 'What are the operating hours for RD Classes?',
        answer: 'Our classes run from Monday to Saturday, 9:00 AM to 7:00 PM. The office is open for inquiries during these hours as well. We are closed on Sundays and public holidays.',
        category: 'General',
    },
    {
        question: 'What subjects are covered in the tuition for classes 1-10?',
        answer: 'We provide comprehensive tuition for all major subjects including Mathematics, Science (Physics, Chemistry, Biology), Social Studies, English, and Hindi for classes 1 through 10, following the CBSE and ICSE curriculums.',
        category: 'Courses',
    },
    {
        question: 'What is the admission process for new students?',
        answer: "The admission process begins with a consultation to understand the student's needs. This is followed by a simple assessment test for class placement. Finally, parents can complete the registration form and submit the required documents to finalize enrollment.",
        category: 'Fees & Enrollment',
    },
    {
        question: 'What are the qualifications of the teaching staff?',
        answer: 'All our teachers are highly qualified with postgraduate degrees in their respective subjects and have extensive teaching experience. They undergo regular training to stay updated with the latest educational methodologies.',
        category: 'Teaching Methods',
    },
    {
        question: 'How do you track student progress?',
        answer: "We monitor student progress through regular weekly tests, monthly assessments, and term examinations. Detailed performance reports are shared with parents during regular parent-teacher meetings to discuss the student's strengths and areas for improvement.",
        category: 'Teaching Methods',
    },
];

const FaqPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex flex-1 justify-center py-5 sm:py-10 px-4 sm:px-6 md:px-8">
                    <div className="layout-content-container flex flex-col w-full max-w-4xl gap-8">
                        <div className="flex flex-col items-center text-center gap-4">
                            <p className="text-gray-800 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Frequently Asked Questions</p>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl">Find answers to common questions about our courses, enrollment, and more. If you can't find what you're looking for, feel free to contact us.</p>
                        </div>
                        <div className="px-4 py-3">
                            <label className="flex flex-col min-w-40 h-14 w-full">
                                <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-background-dark/50">
                                    <div className="text-gray-400 dark:text-gray-500 flex items-center justify-center pl-4"><span className="material-symbols-outlined text-2xl">search</span></div>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-800 dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pl-2 text-base" placeholder="Search for a question..." />
                                </div>
                            </label>
                        </div>
                        <div className="flex justify-center gap-2 sm:gap-3 p-3 flex-wrap pr-4">
                            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full cursor-pointer bg-primary/20 dark:bg-primary/30 px-4"><p className="text-primary dark:text-white text-sm font-medium">General</p></div>
                            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors px-4"><p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Courses</p></div>
                            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors px-4"><p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Fees & Enrollment</p></div>
                            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors px-4"><p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Teaching Methods</p></div>
                        </div>
                        <div className="flex flex-col p-4 space-y-2">
                            {faqs.map((faq, index) => (
                                <details key={index} className="flex flex-col border-b border-b-gray-200 dark:border-b-gray-800 py-2 group" open={index === 0}>
                                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 list-none">
                                        <p className="text-gray-800 dark:text-gray-100 text-base font-medium">{faq.question}</p>
                                        <div className="text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform"><span className="material-symbols-outlined">expand_more</span></div>
                                    </summary>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pb-3 pt-1">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                        <div className="bg-white dark:bg-background-dark/50 rounded-xl p-8 mt-12 flex flex-col items-center text-center gap-4">
                            <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full"><span className="material-symbols-outlined text-primary dark:text-white text-3xl">support_agent</span></div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Still have questions?</h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-md">Can't find the answer you're looking for? Please don't hesitate to reach out to our friendly support team.</p>
                            <button className="flex items-center justify-center rounded-lg h-11 px-6 mt-2 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"><span className="truncate">Contact Us</span></button>
                        </div>
                    </div>
                </main>
                <footer className="w-full bg-gray-100 dark:bg-background-dark/30 mt-16 py-8 px-4 sm:px-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 RD Classes. All Rights Reserved.</p>
                        <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default FaqPage;
