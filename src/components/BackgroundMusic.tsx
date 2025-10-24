import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Add CSS for music button animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes musicPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      .music-playing {
        animation: musicPulse 2s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);



  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(e => {
          console.log('Audio play failed:', e);
        });
        setIsPlaying(true);
      }
    }
  };

  const handleAudioLoad = () => {
    console.log('Audio file loaded successfully!');
    setIsLoaded(true);
  };

  const handleAudioError = (e: any) => {
    console.log('Audio file could not be loaded:', e);
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onCanPlayThrough={handleAudioLoad}
        onError={handleAudioError}
        className="hidden"
      >
        <source src="/music/ganeshChips.mp3" type="audio/mpeg" />
      </audio>

      {/* Music control button */}
      {isLoaded && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleMusic}
            className={`bg-[#880000] hover:bg-[#660000] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
              isPlaying ? 'music-playing' : ''
            }`}
            title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          {/* Volume indicator */}
          {isPlaying && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
