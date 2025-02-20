import Image from 'next/image';

interface Task {
  id: string;
  title: string;
  date: string;
  time: string;
  icon: 'P' | 'L' | 'S';
}

const tasks: Task[] = [
  {
    id: '1',
    title: 'Patient Rounds',
    date: '25 Jan, 2023',
    time: '04:00 PM',
    icon: 'P'
  },
  {
    id: '2',
    title: 'Laboratory test results review',
    date: '25 Jan, 2023',
    time: '04:00 PM',
    icon: 'L'
  },
  {
    id: '3',
    title: 'Surgical procedures',
    date: '25 Jan, 2023',
    time: '04:00 PM',
    icon: 'S'
  }
];

export default function RecentTasks() {
  return (
    <div className="relative bg-[#3461FF] dark:bg-[#1a1f37] text-white rounded-[20px] p-4 sm:p-6 md:p-8 overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
      {/* Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center justify-between w-full sm:max-w-[80%] md:max-w-[70%]">
          <div className="flex items-center">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-white">
              Recently Assigned Tasks
            </h2>
            <div className="bg-white/20 dark:bg-white/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-[10px] ml-2 sm:ml-3">
              <span className="text-sm sm:text-base font-medium text-white">62</span>
            </div>
          </div>
          <button className="text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3 sm:space-y-4 w-full sm:max-w-[80%] md:max-w-[70%]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 sm:gap-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-[16px] px-3 py-2 sm:px-4 sm:py-3 text-white hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-200 max-w-[250px] xs:max-w-[300px] sm:max-w-full"
          >
            <div className={`
              flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] rounded-[12px] flex items-center justify-center text-white text-base sm:text-xl font-semibold
              ${task.icon === 'P' ? 'bg-blue-500/80 dark:bg-blue-500/50' : 
                task.icon === 'L' ? 'bg-purple-500/80 dark:bg-purple-500/50' : 
                'bg-rose-500/80 dark:bg-rose-500/50'}
            `}>
              {task.icon}
            </div>
            <div className="flex-1 truncate">
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-white truncate">{task.title}</h3>
              <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                <p className="text-[12px] sm:text-[14px] text-white/70 truncate">
                  {task.date}
                </p>
                <span className="text-white/40">|</span>
                <p className="text-[12px] sm:text-[14px] text-white/70 truncate">
                  {task.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Image */}
      <div className="absolute bottom-0 right-0 hidden sm:block md:block pointer-events-none">
        <Image
          src="/doctor-image.png"
          alt="Doctor"
          width={500}
          height={500}
          className="object-contain 
          w-[200px] 
          sm:w-[250px] 
          md:w-[350px] 
          lg:w-[400px] 
          xl:w-[450px] 
          2xl:w-[500px]
          h-auto 
          max-w-none
          md:translate-x-10 
          lg:translate-x-16 
          xl:translate-x-20"
          priority
        />
      </div>
    </div>
  );
}