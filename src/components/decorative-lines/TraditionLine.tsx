'use client';

const TraditionLine = () => {
  return (
    <div className="relative w-full">
      <div 
        className="absolute -right-[8vw] w-[calc(100%+8vw)] md:-right-[12vw] md:w-[calc(100%+12vw)] top-0"
        style={{ 
          height: '6px',
          backgroundColor: 'black',
          marginTop: '12px',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default TraditionLine;
