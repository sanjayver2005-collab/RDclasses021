
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
            <Header />
            <main>
              {/* HeroSection */}
              <div className="@container px-4 py-10 md:px-0 md:py-5">
                <div className="@[480px]:p-0">
                  <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 transition-transform duration-500 hover:scale-105" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAIpkpQzGEzNl55zJZXbdWt9eqz-MamkMqfIB3vtxSpwS5Tm4obbM9_6R5OvD_OF3SjUzWrok_VtwZ7Dei1r42Y-G1fUhm1N0QPi1W39aqu_8wnMd7e-utioY69JZao5gCLzPfXmfpDEgDhcCoGCL8hvqanH9JEmGfWWpbbJc7KEITCxDo5ttqrN2qR_UmVjDmFHYcjdcPxNXnxRSFPiKZtjt283S4cfrSWyBhl94Y970H7wo2AHCWb7Z_2p2x8aQxm9zoFhYidp4")'}}>
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Unlock Your Potential with Expert Guidance
                      </h1>
                      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        RD Classes offers personalized coaching to help you achieve academic excellence and master new skills.
                      </h2>
                    </div>
                    <div className="flex-wrap gap-3 flex">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform hover:scale-105">
                        <span className="truncate">Explore Courses</span>
                      </button>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-background-light/90 text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform hover:scale-105">
                        <span className="truncate">Book a Free Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Section */}
              <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Courses</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 px-4 py-5">
                <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXRyxwdPhteRsZ0AyHMF3LXFO0zutmrgMO5qGSUdO53f9zrfbsOSwQWNOcQzeo_DBTkxrmm1Ra4NNkr5K04uFO_T517Ofn24JgN5BYdzN-Hcf-N2zmcagKDPdt69TTxVDFKRqK-U-DjyjWYU_KcFvGjPPMiKlWp1u3-XQ6XoAvGPQ3qFXQuGCxi5Xa9EGm7jvJT5R8e_p4rIIxQZ1xAUL6fsfftpFVaKsVL5M7UfeCWN23SUkRiU6fBgd4zl7LekMcIoxRAniD16A")'}}></div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Spoken English</p>
                    <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">Master grammar and fluency with our comprehensive English program.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDgNv1U2MCcTSBrHPu7nkHae8q_jbkvA8NBBbd0C9YHV08Zdw_I-2RX_8FlBlktc4M9KkmMxdqVZfBNY0cNVR6wYKxSIra6JD7Y7a6ISCCmnlym9UdvYsv4cU8ISxeV9c9gTcM_Bu6asTEwKs5fpe-EDuFAYLSDvrFRlNFVI5hrceISo3l_RUZLrdt2LfcS_7Gogcn1h8KEq5G7hLfAq_yn74Pb_fNe7kgI76nZyuO75173V2e8lpc3dOal8hFka-aIaL1O-4GJcc")'}}></div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Computer Skills</p>
                    <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">From basics to advanced concepts, become proficient in computer skills.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPUZM57DTqXthywKnX1UPqRFfuebDPpBClpqHWsYxOrqg_7bZX-qzziQV7VzkiwP66lEZIVOUVe_KMOYCKqfSnWsJH0darBU7tIKTRg6kjxVzcJSzirNjHbxqitlS2aG9UoMS_Awitm8dNy_OgHpps01QLlAUkOSBbcGPGRrKVDVVt0vsfYpDHe3G-LrdA1cwh7TVWod3mhUCDAOmXh7mE8PJzsOJifgxEXDRhWDyAJYB1SRd82w05Tf4lLTiCjwygQALzaKzzHvk")'}}></div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Communication Skills</p>
                    <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">Enhance your personality and public speaking abilities.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3 transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCni_aJyWUraGNvAtWKNJXsFEkoXMjwY9tX5xsG111pv8ZC5-mhlYmlNpOoud0WM696AgSEydEx_xzoHAnXgGPSTCTg-A_uxNaYv4apnAJfs8otldlT7pxIMqR6RmlcPeBNSdA5KdmGuUIxso4R5f2wuzsm50jZdGQxOajwGqtQhGhLDp6VSpD2U5-dK_lrD8dy2THs_AnFg4u8bh7iLzeoNVtS1evxDPQokLLiMifJDAWk4GnqpsoC4lHbcIvKaKzKlK4RlP2Y9gY")'}}></div>
                  <div>
                    <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Tuition (1-10)</p>
                    <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">Personalized tutoring for all subjects from classes 1 to 10.</p>
                  </div>
                </div>
              </div>

              {/* FeatureSection */}
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#111418] dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Why Choose RD Classes?
                  </h1>
                  <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-normal max-w-[720px]">We are dedicated to providing the best learning environment for our students.</p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-0">
                  <div className="flex flex-1 gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                    <div className="text-primary"><span className="material-symbols-outlined !text-3xl">school</span></div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Expert Tutors</h2>
                      <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">Learn from experienced educators who are masters in their fields.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                    <div className="text-primary"><span className="material-symbols-outlined !text-3xl">person</span></div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Personalized Learning</h2>
                      <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">Our small batch sizes ensure every student gets individual attention.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-background-dark p-4 flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                    <div className="text-primary"><span className="material-symbols-outlined !text-3xl">trending_up</span></div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Proven Results</h2>
                      <p className="text-[#617289] dark:text-gray-400 text-sm font-normal leading-normal">A track record of success with students achieving top marks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="flex flex-col gap-8 px-4 py-10">
                <div className="flex flex-col items-center text-center gap-4">
                  <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-tight">What Our Students Say</h2>
                  <p className="text-[#617289] dark:text-gray-400 max-w-2xl">Hear from students and parents who have experienced the RD Classes difference.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-background-dark p-6 transition-shadow duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <img className="h-12 w-12 rounded-full object-cover" alt="Portrait of Ananya Sharma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjr3AvS52siNNkL9dxwx8xDoFnasHTtRC_mOBdkDd40LkonRWefR1YuRTSS42o9PYHIkSWNMkJnEPVy79odkGQT4RGR8OYt4GC2HV59Xvd0xUCKzhGBBzUIt39H5Gb5U0vDXb49BlLjysoNORjir62YPEVlAVJ8EAVGNBBK9IYOxOsm-m7KIIN63NAMm4jwfEhoKwVLRaM2se6KzQauJtn8Kf7xC2dAQNlCPOUYfomWaYapX-BfeqrZPP1JIqw6B12EkwPQhQoEbk"/>
                    <div>
                      <h3 className="font-bold text-[#111418] dark:text-white">Ananya Sharma</h3>
                      <p className="text-sm text-[#617289] dark:text-gray-400">Student, Spoken English</p>
                    </div>
                    </div>
                    <p className="text-[#617289] dark:text-gray-300">"The personalized attention I received at RD Classes was incredible. My confidence in speaking English has soared, and I can't thank the tutors enough for their guidance."</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-background-dark p-6 transition-shadow duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <img className="h-12 w-12 rounded-full object-cover" alt="Portrait of Rajesh Kumar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALDQyRwtgh8ehhsla8Szk2zXbEVjZT53fa1AmPw2W25pFc-L_NvOMRDj7566NPw-5L7w_zBqPopoEGlh6CzpxBDecvEGmsX14K_Pmy3ExslUYVpeUa8k6fm0tx0u-oYhs1T34Q_8Bi3b-OPtJgqkgQ5yAa0v5kKGnQZJunH1vs2e__i162YaunfriPBQd0fRxJ4nZhkmu92Y8aZAXK6tZUFoLRFm5Tsjk1SmHtkze9qzjrjJw12AQTQof3-iT1QGPAZxmej5C95W0"/>
                      <div>
                        <h3 className="font-bold text-[#111418] dark:text-white">Rajesh Kumar</h3>
                        <p className="text-sm text-[#617289] dark:text-gray-400">Parent</p>
                      </div>
                    </div>
                    <p className="text-[#617289] dark:text-gray-300">"My son's grades in Math and Science improved dramatically after joining the tuition classes. The teachers are patient, knowledgeable, and truly care about each student's progress."</p>
                  </div>
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

export default HomePage;
