const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500">
        {/* Top Segment - Red */}
        <path 
          d="M50 50 L50 5 A45 45 0 0 1 93 40 Z" 
          fill="#E41E26" 
        />
        {/* Right Segment - Purple */}
        <path 
          d="M50 50 L93 40 A45 45 0 0 1 75 88 Z" 
          fill="#72348B"
        />
        {/* Bottom Segment - Dark Blue */}
        <path 
          d="M50 50 L75 88 A45 45 0 0 1 25 88 Z" 
          fill="#262262"
        />
        {/* Left Segment - Green */}
        <path 
          d="M50 50 L25 88 A45 45 0 0 1 7 40 Z" 
          fill="#00A651"
        />
        {/* Top-Left Segment - Orange */}
        <path 
          d="M50 50 L7 40 A45 45 0 0 1 50 5 Z" 
          fill="#F39200"
        />
        
        {/* The White Center Shape (Plectrum style) */}
        <path 
          d="M50 30 C35 30 25 45 30 65 C35 75 50 85 50 85 C50 85 65 75 70 65 C75 45 65 30 50 30 Z" 
          fill="currentColor"
          className="text-white dark-mode-logo-text"
        />
      </svg>
    </div>
  );
};

export default Logo;
