'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faVideo, 
  faVideoSlash, 
  faMicrophone, 
  faMicrophoneSlash, 
  faPhone, 
  faMessage,
  faExpand,
  faCompress,
  faUserMd,
  faUser,
  faPaperclip,
  faEllipsisVertical,
  faRecordVinyl
} from '@fortawesome/free-solid-svg-icons';

interface VideoCallProps {
  patientName: string;
  appointmentType: string;
  onClose: () => void;
}

export default function VideoCall({ patientName, appointmentType, onClose }: VideoCallProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'doctor' | 'patient'; time: string }>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [callDuration, setCallDuration] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Handle call duration
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { 
          text: newMessage,
          sender: 'doctor',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setNewMessage('');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/90">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className={`bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl h-[85vh]'}`}>
          {/* Video call header */}
          <div className="px-6 py-4 bg-gray-800/50 backdrop-blur-sm flex items-center justify-between border-b border-gray-700/50">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faUserMd} className="text-blue-400" />
                  {patientName}
                </h3>
                <p className="text-sm text-gray-400">{appointmentType}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {isRecording && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/20 rounded-full">
                  <FontAwesomeIcon icon={faRecordVinyl} className="w-3 h-3 text-red-500 animate-pulse" />
                  <span className="text-sm font-medium text-red-500">Recording</span>
                </div>
              )}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-400">{formatDuration(callDuration)}</span>
              </div>
              <button 
                onClick={() => setShowChat(!showChat)}
                className={`p-2 rounded-lg transition-colors ${
                  showChat 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'text-gray-400 hover:bg-gray-700'
                }`}
              >
                <FontAwesomeIcon icon={faMessage} className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition-colors">
                <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Main content area */}
            <div className="flex-1 relative bg-gray-800">
              {/* Main video feed */}
              <div className="absolute inset-0">
                {isVideoOn ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="flex flex-col items-center gap-4">
                      <FontAwesomeIcon icon={faUserMd} className="w-20 h-20 text-gray-600" />
                      <span className="text-gray-500 font-medium">Camera Off</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Patient video (floating overlay) */}
              <div className="absolute top-4 right-4 w-64 aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700/50">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="w-12 h-12 text-gray-600" />
                    <span className="text-sm text-gray-500">Patient's Camera</span>
                  </div>
                </div>
              </div>

              {/* Controls overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-4 rounded-full transition-all transform hover:scale-105 ${
                      isMuted 
                        ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <FontAwesomeIcon 
                      icon={isMuted ? faMicrophoneSlash : faMicrophone} 
                      className="w-5 h-5 text-white"
                    />
                  </button>
                  <button
                    onClick={() => setIsVideoOn(!isVideoOn)}
                    className={`p-4 rounded-full transition-all transform hover:scale-105 ${
                      !isVideoOn 
                        ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <FontAwesomeIcon 
                      icon={isVideoOn ? faVideo : faVideoSlash} 
                      className="w-5 h-5 text-white"
                    />
                  </button>
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`p-4 rounded-full transition-all transform hover:scale-105 ${
                      isRecording 
                        ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <FontAwesomeIcon 
                      icon={faRecordVinyl} 
                      className="w-5 h-5 text-white"
                    />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-red-500/30"
                  >
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-all transform hover:scale-105"
                  >
                    <FontAwesomeIcon 
                      icon={isFullscreen ? faCompress : faExpand} 
                      className="w-5 h-5 text-white"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat sidebar */}
            {showChat && (
              <div className="w-96 border-l border-gray-700/50 bg-gray-800/50 backdrop-blur-sm flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        message.sender === 'doctor' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === 'doctor'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-700 text-gray-200'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-700/50">
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <FontAwesomeIcon icon={faPaperclip} className="w-4 h-4" />
                      </button>
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                      />
                      <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!newMessage.trim()}
                      >
                        <FontAwesomeIcon icon={faMessage} className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
