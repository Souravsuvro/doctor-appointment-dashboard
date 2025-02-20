'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicrophone, 
  faMicrophoneSlash, 
  faVideo, 
  faVideoSlash, 
  faExpand, 
  faCompress, 
  faPaperPlane,
  faPhoneSlash 
} from '@fortawesome/free-solid-svg-icons';
import { Appointment, VideoCallProps } from '@/types/dashboard';

const VideoCall: React.FC<VideoCallProps> = ({ 
  appointment, 
  onClose 
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState<Array<{ 
    text: string; 
    sender: 'doctor' | 'patient'; 
    time: string 
  }>>([]);
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

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const toggleRecording = () => setIsRecording(!isRecording);
  const toggleChat = () => setShowChat(!showChat);

  return (
    <div 
      className={`
        fixed inset-0 z-50 bg-black bg-opacity-90 
        flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out
        ${isFullscreen ? 'p-0' : 'p-8'}
      `}
    >
      <div className="w-full max-w-4xl h-full max-h-[90vh] bg-gray-900 rounded-lg shadow-2xl flex">
        {/* Video Section */}
        <div className="flex-grow relative">
          <div 
            className={`
              w-full h-full bg-gray-800 rounded-l-lg 
              flex items-center justify-center
              ${!isVideoOn ? 'opacity-50' : ''}
            `}
          >
            {isVideoOn ? (
              <div className="text-white text-center">
                <div className="w-64 h-64 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <p>{appointment.patientName}</p>
              </div>
            ) : (
              <div className="text-white text-center">
                <FontAwesomeIcon icon={faVideoSlash} className="w-16 h-16 text-gray-500 mb-4" />
                <p>Video is turned off</p>
              </div>
            )}
          </div>

          {/* Call Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            <button 
              onClick={toggleMute}
              className={`
                p-3 rounded-full transition-colors
                ${isMuted ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}
              `}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              <FontAwesomeIcon 
                icon={isMuted ? faMicrophoneSlash : faMicrophone} 
                className="w-5 h-5" 
              />
            </button>

            <button 
              onClick={toggleVideo}
              className={`
                p-3 rounded-full transition-colors
                ${!isVideoOn ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}
              `}
              title={isVideoOn ? 'Turn off video' : 'Turn on video'}
            >
              <FontAwesomeIcon 
                icon={isVideoOn ? faVideo : faVideoSlash} 
                className="w-5 h-5" 
              />
            </button>

            <button 
              onClick={onClose}
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              title="End call"
            >
              <FontAwesomeIcon icon={faPhoneSlash} className="w-5 h-5" />
            </button>

            <button 
              onClick={toggleFullscreen}
              className="p-3 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              <FontAwesomeIcon 
                icon={isFullscreen ? faCompress : faExpand} 
                className="w-5 h-5" 
              />
            </button>
          </div>
        </div>

        {/* Chat Section */}
        {showChat && (
          <div className="w-96 bg-gray-800 rounded-r-lg p-4 flex flex-col">
            <div className="flex-grow overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`
                    mb-2 p-2 rounded-lg max-w-[80%]
                    ${message.sender === 'doctor' 
                      ? 'bg-blue-600 text-white self-end' 
                      : 'bg-gray-700 text-white self-start'}
                  `}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 block text-right">{message.time}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Call Information */}
      <div className="mt-4 text-white flex items-center space-x-4">
        <span>Call Duration: {formatDuration(callDuration)}</span>
        <span>Patient: {appointment.patientName}</span>
        <span>Appointment Type: {appointment.type}</span>
        {isRecording && (
          <span className="text-red-500 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Recording
          </span>
        )}
        <button 
          onClick={toggleRecording}
          className={`
            p-2 rounded-lg transition-colors
            ${isRecording 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
          `}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <button 
          onClick={toggleChat}
          className="p-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
        >
          {showChat ? 'Hide Chat' : 'Show Chat'}
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
