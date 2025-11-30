
import React, { useState } from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="w-full max-w-md p-6">
                <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-gray-200/50 bg-white p-8 shadow-sm dark:border-gray-800/50 dark:bg-background-dark">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Link to="/" className="flex items-center gap-3">
                            <Logo className="size-8" />
                            <h2 className="text-xl font-bold text-[#111418] dark:text-white">RD Classes</h2>
                        </Link>
                        <h1 className="text-[#111418] text-3xl font-bold tracking-tight dark:text-white">Student &amp; Parent Login</h1>
                        <p className="text-base font-normal text-gray-600 dark:text-gray-400">Welcome back! Please enter your details.</p>
                    </div>
                    <div className="w-full space-y-5">
                        <label className="flex flex-col">
                            <p className="pb-2 text-base font-medium text-[#111418] dark:text-gray-300">Email or Username</p>
                            <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617289] focus:border-primary focus:outline-0 focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="Enter your email or username" />
                        </label>
                        <label className="flex flex-col">
                            <div className="flex items-center justify-between pb-2">
                                <p className="text-base font-medium text-[#111418] dark:text-gray-300">Password</p>
                                <a className="text-sm font-medium text-primary hover:underline dark:text-blue-400" href="#">Forgot Password?</a>
                            </div>
                            <div className="relative flex w-full flex-1 items-stretch">
                                <input className="form-input flex h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe0e6] bg-white p-3 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617289] focus:border-primary focus:outline-0 focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary" placeholder="Enter your password" type={passwordVisible ? "text" : "password"} />
                                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#617289] dark:text-gray-400" onClick={togglePasswordVisibility}>
                                    <span className="material-symbols-outlined">{passwordVisible ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </label>
                        <Link to="/dashboard" className="block">
                          <button className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-base font-bold leading-normal text-white hover:bg-primary/90 transition-colors">
                              <span className="truncate">Login</span>
                          </button>
                        </Link>
                    </div>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account? <Link to="/signup" className="font-bold text-primary hover:underline dark:text-blue-400">Sign Up</Link>
                    </p>
                </div>
                <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
                    <a className="hover:underline" href="#">Help Center</a>
                    <span className="mx-2">·</span>
                    <a className="hover:underline" href="#">Terms of Service</a>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;
