
import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-black/10 dark:border-b-white/10 px-6 sm:px-10 lg:px-20 py-4">
                    <Link to="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
                        <Logo />
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">RD Classes</h2>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link className="hidden sm:block text-[#111418] dark:text-white/80 text-sm font-medium leading-normal" to="/">Home</Link>
                        <Link className="hidden sm:block text-[#111418] dark:text-white/80 text-sm font-medium leading-normal" to="/courses">Courses</Link>
                        <Link to="/login">
                          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                              <span className="truncate">Log In</span>
                          </button>
                        </Link>
                    </div>
                </header>
                <main className="flex-grow w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-81px)]">
                        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjm4cmWOJAfucRadH8BEDOY9w14I38SwuX3aMyVJvzexbYpdhzX3Qhkk0zNSQRbhjMU2Z7X564SH634OAe_DTjyx_del2BNYaZNd7pISiVvw2j4L_rSepoHzlJ4UtCB01MZGEErUul4G_mscrdzy0uB3WLfyMANaqTzX1uajL0uGHPI9sPYeVOQPW2A6UZqm6bUZf6qgtcKP5-rVMhgTT9QsWtulgdlnHp9HJJxy8OFj1-r_Y4rA4LSP6qiJ7ArRY6f8yqHmGu9yc")' }}>
                                <div className="absolute inset-0 bg-primary/20"></div>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white dark:bg-background-dark">
                            <div className="max-w-md w-full flex flex-col gap-8">
                                <div className="flex flex-col gap-2 text-center lg:text-left">
                                    <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Create Your Account</p>
                                    <p className="text-[#617289] dark:text-white/70 text-base font-normal leading-normal">Join RD Classes and start your learning journey today.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button className="flex w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 text-[#111418] dark:text-white text-base font-medium leading-normal gap-3 hover:bg-gray-50 dark:hover:bg-black/30 transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.578 12.27c0-.72-.06-1.42-.19-2.1H12v3.96h5.92c-.26 1.28-.98 2.38-2.05 3.1v2.58h3.3c1.93-1.78 3.03-4.4 3.03-7.54z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.3-2.58c-.98.66-2.23 1.06-3.98 1.06-3.05 0-5.64-2.06-6.56-4.84H2.1v2.67C3.97 20.98 7.7 23 12 23z" fill="#34A853"></path><path d="M5.44 14.04c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V7.57H2.1c-.69 1.36-1.1 2.87-1.1 4.47s.41 3.11 1.1 4.47l3.34-2.67z" fill="#FBBC05"></path><path d="M12 5.16c1.61 0 3.06.55 4.2 1.63l2.93-2.93C17.45 2.09 14.97 1 12 1 7.7 1 3.97 3.02 2.1 6.18l3.34 2.67c.92-2.78 3.51-4.84 6.56-4.84z" fill="#EA4335"></path></svg>
                                        <span className="truncate">Sign up with Google</span>
                                    </button>
                                    <div className="flex items-center gap-4"><hr className="w-full border-black/10 dark:border-white/10" /><p className="text-sm font-medium text-[#617289] dark:text-white/70">OR</p><hr className="w-full border-black/10 dark:border-white/10" /></div>
                                </div>
                                <form className="flex flex-col gap-4">
                                    <label className="flex flex-col w-full"><p className="text-[#111418] dark:text-white text-base font-medium pb-2">Full Name</p><input className="form-input flex w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-white/20 bg-white dark:bg-background-dark h-14 placeholder:text-[#617289] dark:placeholder:text-white/50 p-[15px] text-base" placeholder="Enter your full name" type="text" /></label>
                                    <label className="flex flex-col w-full"><p className="text-[#111418] dark:text-white text-base font-medium pb-2">Email Address</p><input className="form-input flex w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-white/20 bg-white dark:bg-background-dark h-14 placeholder:text-[#617289] dark:placeholder:text-white/50 p-[15px] text-base" placeholder="you@example.com" type="email" /></label>
                                    <label className="flex flex-col w-full"><p className="text-[#111418] dark:text-white text-base font-medium pb-2">Password</p><div className="relative w-full"><input className="form-input flex w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-white/20 bg-white dark:bg-background-dark h-14 placeholder:text-[#617289] dark:placeholder:text-white/50 p-[15px] pr-12 text-base" placeholder="Enter your password" type="password" /><button className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#617289] dark:text-white/70" type="button"><span className="material-symbols-outlined text-xl">visibility_off</span></button></div></label>
                                    <div className="flex items-start gap-3 pt-2">
                                        <input className="form-checkbox mt-1 h-5 w-5 rounded border-[#dbe0e6] dark:border-white/20 text-primary focus:ring-primary/50 bg-white dark:bg-background-dark" id="terms-checkbox" type="checkbox" />
                                        <label className="text-sm text-[#617289] dark:text-white/70" htmlFor="terms-checkbox">I agree to the <a className="font-medium text-primary hover:underline" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.</label>
                                    </div>
                                    <button className="flex min-w-[84px] w-full mt-4 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors"><span className="truncate">Create Account</span></button>
                                </form>
                                <p className="text-center text-sm text-[#617289] dark:text-white/70">Already have an account? <Link className="font-medium text-primary hover:underline" to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="w-full text-center p-6 text-xs text-gray-500 dark:text-gray-400 border-t border-black/10 dark:border-white/10">© 2024 RD Classes. All rights reserved.</footer>
            </div>
        </div>
    );
};

export default SignUpPage;
