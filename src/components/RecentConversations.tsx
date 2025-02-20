import { faEllipsisVertical, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

interface Conversation {
  id: string;
  patientName: string;
  avatar: string;
  message: string;
  time: string;
  unread?: boolean;
}

const conversations: Conversation[] = [
  {
    id: '1',
    patientName: 'Sarah Johnson',
    avatar: '/images/Patients/Sarah Johnson.jpg',
    message: 'Hi Dr., I have been experiencing severe headaches...',
    time: '2 min ago',
    unread: true
  },
  {
    id: '2',
    patientName: 'Michael Brown',
    avatar: '/images/Patients/Michael Brown.jpg',
    message: 'Thank you for the prescription. When should I...',
    time: '15 min ago'
  },
  {
    id: '3',
    patientName: 'Emma Wilson',
    avatar: '/images/Patients/Emma Wilson.jpg',
    message: 'Is it normal to feel dizzy after taking the...',
    time: '1 hour ago'
  },
  {
    id: '4',
    patientName: 'James Miller',
    avatar: '/images/Patients/James Miller.jpg',
    message: 'My blood pressure readings for today are...',
    time: '2 hours ago'
  },
  {
    id: '5',
    patientName: 'Linda Davis',
    avatar: '/images/Patients/Linda Davis.jpg',
    message: 'When is my next appointment scheduled?',
    time: '3 hours ago'
  },
  {
    id: '6',
    patientName: 'Robert Taylor',
    avatar: '/images/Patients/Robert Taylor.jpg',
    message: 'The new medication seems to be working well...',
    time: '4 hours ago'
  }
];

export default function RecentConversations() {
  return (
    <div className="bg-white/60 dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-700/30 h-auto flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200/60 dark:border-gray-700/30">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Conversations</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">You have 3 unread messages</p>
          </div>
          <button className="hover:bg-gray-100/60 dark:hover:bg-gray-700/40 rounded-lg transition-colors">
            <FontAwesomeIcon icon={faEllipsisVertical} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Conversations List */}
      <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400/60 dark:scrollbar-thumb-blue-500/50 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/80 dark:hover:scrollbar-thumb-blue-400/70">
        <div className="divide-y divide-gray-200/60 dark:divide-gray-700/30">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="p-2 hover:bg-gray-50/60 dark:hover:bg-blue-500/10 transition-colors">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100 dark:ring-gray-700/30">
                    <Image
                      src={conversation.avatar}
                      alt={conversation.patientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {conversation.unread && (
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 dark:bg-blue-400 rounded-full">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 dark:bg-blue-300 opacity-75"></span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {conversation.patientName}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {conversation.message}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {conversation.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reply Button */}
                <button className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100/60 dark:hover:bg-gray-700/40 rounded-lg transition-colors">
                  <FontAwesomeIcon icon={faReply} className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Reply Button */}
      <div className="p-4 border-t border-gray-200/60 dark:border-gray-700/30">
        <button className="w-full py-2.5 px-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-900/30 hover:bg-blue-100/60 dark:hover:bg-blue-800/30 rounded-lg transition-colors">
          View All Messages
        </button>
      </div>
    </div>
  );
}
