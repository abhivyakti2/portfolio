import React, { useEffect, useState } from 'react';

const FloatingElements: React.FC = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    type: 'flower' | 'sparkle' | 'heart';
    x: number;
    y: number;
    delay: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          type: ['flower', 'sparkle', 'heart'][Math.floor(Math.random() * 3)] as 'flower' | 'sparkle' | 'heart',
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 6,
          size: Math.random() * 20 + 10,
        });
      }
      setElements(newElements);
    };

    generateElements();
    window.addEventListener('resize', generateElements);
    return () => window.removeEventListener('resize', generateElements);
  }, []);

  const getElementContent = (type: string) => {
    switch (type) {
      case 'flower':
        return '🌸';
      case 'sparkle':
        return '✨';
      case 'heart':
        return '💕';
      default:
        return '🌼';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`floating-element absolute ${
            element.type === 'flower' ? 'floating-flower' : 'floating-sparkle'
          }`}
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            fontSize: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            opacity: 0.6,
          }}
        >
          {getElementContent(element.type)}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;