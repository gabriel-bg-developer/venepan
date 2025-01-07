'use client';

interface DecorativeLineProps {
  alignment?: 'left' | 'right';
  className?: string;
  thickness?: number;        // Grosor de la línea en px
  color?: string;           // Color de la línea
  extend?: number;          // Cuánto se extiende la línea (en vw)
  marginTop?: number;       // Margen superior en px
  mobileExtend?: number;    // Extensión en móvil (en vw)
  totalWidth?: number;      // Ancho total en porcentaje (100 por defecto)
}

const DecorativeLine = ({ 
  alignment = 'left',
  className = '',
  thickness = 6,
  color = 'black',
  extend = 10,
  marginTop = 12,
  mobileExtend = 8,
  totalWidth = 100
}: DecorativeLineProps) => {
  const lineStyles = {
    left: `absolute -left-[${mobileExtend}vw] w-[calc(${totalWidth}%+${mobileExtend}vw)] 
           md:-left-[${extend}vw] md:w-[calc(${totalWidth}%+${extend}vw)]`,
    right: `absolute -right-[${mobileExtend}vw] w-[calc(${totalWidth}%+${mobileExtend}vw)] 
            md:-right-[${extend}vw] md:w-[calc(${totalWidth}%+${extend}vw)]`
  };

  return (
    <div className="relative w-full">
      <div 
        className={`
          ${alignment === 'left' ? lineStyles.left : lineStyles.right}
          top-0
          ${className}
        `}
        style={{ 
          height: `${thickness}px`,
          backgroundColor: color,
          marginTop: `${marginTop}px`
        }}
      />
    </div>
  );
};

export default DecorativeLine;
