import { 
  faNewspaper, 
  faMicrochip, 
  faHeartPulse,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

const news = [
  {
    image: '/images/NewsPost/cancer-research.jpg',
    category: 'Breaking News',
    categoryIcon: faNewspaper,
    categoryColor: 'text-purple-600',
    categoryBg: 'bg-purple-100',
    title: 'New Cancer Treatment Breakthrough',
    description: 'Researchers at Mayo Clinic discover promising immunotherapy approach...',
    source: 'Mayo Clinic',
    time: '2 hours ago'
  },
  {
    image: '/images/NewsPost/ai-healthcare.jpg',
    category: 'Technology',
    categoryIcon: faMicrochip,
    categoryColor: 'text-green-600',
    categoryBg: 'bg-green-100',
    title: 'AI in Healthcare Update',
    description: 'New AI system demonstrates 95% accuracy in early disease detection...',
    source: 'Nature Medicine',
    time: '1 day ago'
  },
  {
    image: '/images/NewsPost/heart-surgery.jpg',
    category: 'Medical Research',
    categoryIcon: faHeartPulse,
    categoryColor: 'text-rose-600',
    categoryBg: 'bg-rose-100',
    title: 'Revolutionary Heart Surgery Method',
    description: 'Minimally invasive technique shows promising results in cardiac procedures...',
    source: 'Journal of Cardiology',
    time: '3 hours ago'
  }
];

const totalPages = 5; // Total number of pages

export default function LatestNews() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="bg-white/60 dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-700/30">
      <div className="flex items-center justify-between p-6 border-b border-gray-200/60 dark:border-gray-700/30">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Medical News & Researches</h2>
          <div className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">3 New</span>
          </div>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
          View All
          <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
        {news.map((item, index) => (
          <div 
            key={index}
            className="group relative bg-white dark:bg-gray-800/40 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${item.categoryBg} dark:bg-opacity-10 backdrop-blur-sm`}>
                  <FontAwesomeIcon 
                    icon={item.categoryIcon} 
                    className={`w-3.5 h-3.5 ${item.categoryColor} dark:text-opacity-90`} 
                  />
                </div>
                <span className={`text-sm font-medium text-white drop-shadow-sm`}>
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.source}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-1.5 pb-4 sm:pb-6">
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={`p-2.5 sm:p-2 rounded-lg transition-all ${
            currentPage === 1 
              ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/40'
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 sm:w-4 sm:h-4" />
        </button>
        
        <div className="flex items-center gap-1">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              aria-label={`Go to page ${i + 1}`}
              className={`
                w-10 h-10 sm:w-8 sm:h-8 rounded-lg text-sm font-medium transition-all
                ${currentPage === i + 1
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/40'
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className={`p-2.5 sm:p-2 rounded-lg transition-all ${
            currentPage === totalPages
              ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/40'
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}
