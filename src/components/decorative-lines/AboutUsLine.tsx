'use client';

const AboutUsLine = () => {
  return (
    <div className="relative w-full">
      <div 
        className="absolute -left-[12vw] w-[calc(100%+12vw)] md:-left-[15vw] md:w-[calc(100%+15vw)] top-0"
        style={{ 
          height: '6px',
          backgroundColor: 'black',
          marginTop: '12px'
        }}
      />
    </div>
  );
};

export default AboutUsLine;
