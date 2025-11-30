
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Category = 'All' | 'Classrooms' | 'Student Activities' | 'Events & Workshops' | 'Our Facilities';

interface GalleryItem {
  id: number;
  category: Category[];
  imageUrl: string;
  title: string;
  isVideo?: boolean;
}

const galleryItems: GalleryItem[] = [
    { id: 1, category: ['Student Activities'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH5GvxP0H9Vp-Cq5HZGQlfuj_MKQPoVVJRFSnxYbOp22BS51pmGHsdTwZdD3ElzGef4fFhvLZEuXydJnLvopejNZk_PoZLUTevYzUw5BpHtA53Q5Pz3l5M2LCyLbbKFpM--i2KTim_HKsSlV3ekDSMMkWvpxw5Ltiw7FnBJCyTdrbvVtLRRfUcWURx1FNC2OUM1rsTe-2ypsQF8rHwCw_faYnMfsUCpcUnqutRXjEDjaSS1A3XUb2Y3ROdIbfXOxo6i7NdDTCH21I', title: 'Students collaborating on a project' },
    { id: 2, category: ['Events & Workshops'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtDGHKDycJWR3mOIv8pTh6y_Cw6m3oLqH5g17uQ2mfzspvoph0lp9Q2nXAVr51ruuj789m5q81PkDEjt74QZT-C5aTCwJowipmA2uvVyq_DMn_ObFPDpUzCW25EBfuu08Qx7p8pL_pi0sL0pMqJ0sAPrsgdVyz7AEWHC07-3i9xWgPk3jsA50XcMzx0oUms8-ZLqZgABa3wXtZf0v9NSYDePgDOgclkGboKGixD-6F_-Z40BjwOK0VtH73mFM6AgdiFW2bKnRzFUw', title: 'Annual Day Celebration 2023' },
    { id: 3, category: ['Our Facilities'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnACNYOkeO0O_vXAO4dRIAWwioX3vLu7ajIDJgaxurAZyKk4kqJhRnOYfyyX_GmG16hHcwkSL4kDs4tFWgiqzLYM3uBXnmAjOdDU90UTmKuQMKUeHAqlpknPFynA_QHN0F2pGkXuCp3VtasQc4t3TVZzuR6TFKi6bTh89gCJa8PJ49KsV2hzFsq_wcubHWXJaYI7_4wu5jrQi7SRu2flckooJI2wY08cHhKd5rMhzwH_yAk6AC8xPdVaU-qmXsPzLIureQk8nOWPk', title: 'Interactive Computer Skills lab session' },
    { id: 4, category: ['Classrooms'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0nxoSiAIi9U3B2tqN6T8tESqKCf-a_7-JJlv9rdviwHaPPBgutiisKOti8AcxBw_eds5bTaFEJDi3bdKdVHlBVI0ACKnXveQZ2hG5tpb52TBo7lhX2xRTp737EeYmKsQ0BcXzzeA2Uru6WXARQGfIC75Fv80aCY-zWsKoFeNdoyHsythNYDt1q7wsm5O-LxJ1ysPuuvDzhqAjqTjyopS3SnSGuU6TeAk8W1ofr8IHYv_V3eFAsSS-6s2cb7ue3OaCXLQOqr7FJS8', title: 'Modern classroom environment' },
    { id: 5, category: ['Events & Workshops'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_dMMiATguFZCGmsKAyAzWF9FO0yLHt1dS3p0-w61AXqEF7KpJ8ZWByI56IrKEkqDGc6svHEwOxyjMB1Hl_3-AsdPRSHe7pV7OqESb_zXHpMfLxzoEfZFMY-BQbvYIDJCf1GixE9WOTsplARP7FLM9bAeEtdH9BpzIAxhfGAbu9LJLeceqGJKJdggAw0kDXy-t82sIrGpXpMFl_5RbPCa3-g5m22PwSMUAf_ex8t-t_lQ0ECv0T8WrGU21u7hQU5Ya252VOFd5Q9E', title: 'Guest lecture on Communication Skills' },
    { id: 6, category: ['Our Facilities'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLtAs5BNZdzSGLdTRQb2mASi0Z1gPHxaX-24WrD9JZ0xZTqbl4URa-enkW7NHH3XZWhbq5gYjzXsN5lI110rZE1cXSV2coJbsQP7GBPsQg5r4-aGowEodMwtDk7RoYwR7xiX5ZLHYXP_9j69v3c8z4C9BgihJgaKRQgAGdDcDWrR3hBDpfRQamKe_aqkg80B8i6nfQqwXnu9LVoDDRSHu6pGCARGpWb0wJZhD5ViMUi8i0uUxQcpLwvpfY5zL79vC501SYoNaVdHc', title: 'Our state-of-the-art library' },
    { id: 7, category: ['Student Activities'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxVdALl-vDWGc5ScR6VfhPhbFoXSI4x-WSd3riqTWT5DkmJxaFOzZ4hXyFdyAX0WCPFm65Z7Wv7RPV61Iwz8ONrkoTcNTyYeWXWRbhoe2iGarbRPahv-iLLHvBOx39AA_7t_9HgJwzbVsy1RgQWlnby_Q_gJ3Aqyi0sAPE-W02GJNoJZafaSslZWk0AjaMyTFDYxbxwYNqre15zakGEkX-1cDQawMhUHVXHYLiyBJBl2akTlxfkvTBwI-CwoKdwhRI9rrLtqa30LE', title: 'Group presentation practice' },
    { id: 8, category: ['Student Activities'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcTVda9t_XOJQh3ee2Nb1jgh-JRmv2xbiwcJ48y7u5MXqteNPXeMPq_TERt7CNQW_m448XqBsjHrZZ2IIhEdj7wDusZ377K0KEAQnlsBe9Vv3Y2_kBEm7nv4ys6L56YXd5nWEfvOPeXNSP0R5Bauysxmkg1u-M5p4yHOOlwnxUiOFRr8APFQ47rAQOG7kXEtMnfDFoP_IIllndaKcNiHWxvSXMRf4mAkW1bEodu5y4FupHcBt029XIjtKuwYBVdLoPGz7Joa6skHM', title: 'Science fair winners' },
    { id: 9, category: ['Our Facilities'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBndpXZmVPShCkA4gRMGYaglQ9AVdi-eKM742wy_vLg-8Qte1BI_imNRe2PG_W8rol8K0Y-atj2PWhjkO98G0kYTHtIeKFPlZdWv9XS2ZfiXgZRXlSc5rb4et1NZRW01afsmsLUhnvPCd2z-2OFwK1VSbuD-UMf6RQZM3Qq5qsGLUT0rUspypMKdgvH5xnOaz5anCDm0H19TO55ry_KUBEUxf5x41NaT-K3Th3KTa2b--HhDMFeo7c82GPAnmPAlB1rlzXoglrsL6M', title: 'A virtual tour of our facilities (Video)', isVideo: true },
];

const categories: Category[] = ['All', 'Classrooms', 'Student Activities', 'Events & Workshops', 'Our Facilities'];

const GalleryPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    
    const filteredItems = useMemo(() => {
        if (activeCategory === 'All') return galleryItems;
        return galleryItems.filter(item => item.category.includes(activeCategory));
    }, [activeCategory]);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-7xl flex-1 px-4 sm:px-6 md:px-10">
                        <div className="flex flex-wrap justify-between gap-4 py-8">
                            <div className="flex min-w-72 flex-col gap-3">
                                <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome to the RD Classes Gallery</h1>
                                <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal">A Glimpse into RD Classes</p>
                            </div>
                        </div>
                        <div className="flex gap-2 p-1 flex-wrap">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium leading-normal transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
                            {filteredItems.map(item => (
                                <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                                    {item.isVideo && (
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
                                            <span className="material-symbols-outlined text-white text-6xl">play_circle</span>
                                        </div>
                                    )}
                                    <div 
                                        className="bg-cover bg-center flex flex-col justify-end p-4 h-full transition-transform duration-300 ease-in-out group-hover:scale-105" 
                                        style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("${item.imageUrl}")` }}
                                    >
                                        <p className="text-white text-base font-bold leading-tight w-full line-clamp-3">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="@container">
                            <div className="flex flex-col justify-end gap-6 px-4 py-16 text-center">
                                <div className="flex flex-col gap-2 items-center">
                                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-2xl">Ready to Join Us?</h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">Take the next step in your educational journey with RD Classes.</p>
                                </div>
                                <div className="flex justify-center">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:bg-primary/90 transition-colors">
                                        <span className="truncate">Enquire Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default GalleryPage;
