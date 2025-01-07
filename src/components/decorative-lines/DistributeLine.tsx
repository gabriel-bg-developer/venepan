'use client';

const DistributeLine = () => {
  return (
    <div className="relative w-full">
      <div 
        className="absolute -left-[8vw] w-[calc(100%+8vw)] md:-left-[10vw] md:w-[calc(100%+10vw)] top-0"
        style={{ 
          height: '6px',
          backgroundColor: 'black',
          marginTop: '12px'
        }}
      />
    </div>
  );
};

export default DistributeLine;
