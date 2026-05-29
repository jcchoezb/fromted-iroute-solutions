import Image from "next/image";

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 w-full h-full transform group-hover:scale-110 transition-transform duration-500">
        {/*<Image
          src="/logo.png"
          alt="iRoute Logo"
          width={100}
          height={100}
          className="w-full h-full object-contain drop-shadow-lg"
          referrerPolicy="no-referrer"
        />*/}

        <img src="/logo.png" alt="test" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default Logo;
