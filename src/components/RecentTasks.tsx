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
    <div className="relative bg-[#3461FF] dark:bg-[#1a1f37] text-white rounded-[20px] p-8 overflow-hidden min-h-[400px]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-[70%]">
          <div className="flex items-center">
            <h2 className="text-[28px] font-semibold text-white">Recently Assigned Tasks</h2>
            <div className="bg-white/20 dark:bg-white/10 px-3 py-1 rounded-[10px] ml-3">
              <span className="text-base font-medium text-white">62</span>
            </div>
          </div>
          <button className="text-base font-medium text-white/80 hover:text-white transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4 max-w-[70%]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-[16px] px-4 py-3 text-white hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-200"
          >
            <div className={`
              flex-shrink-0 w-[52px] h-[52px] rounded-[12px] flex items-center justify-center text-white text-xl font-semibold
              ${task.icon === 'P' ? 'bg-blue-500/80 dark:bg-blue-500/50' : 
                task.icon === 'L' ? 'bg-purple-500/80 dark:bg-purple-500/50' : 
                'bg-rose-500/80 dark:bg-rose-500/50'}
            `}>
              {task.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-white">{task.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[14px] text-white/70">
                  {task.date}
                </p>
                <span className="text-white/40">|</span>
                <p className="text-[14px] text-white/70">
                  {task.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Image */}
      <div className="absolute -right-20 bottom-0 w-[600px] opacity-90 dark:opacity-70">
        <Image
          src="/doctor-image.png"
          alt="Doctor"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
