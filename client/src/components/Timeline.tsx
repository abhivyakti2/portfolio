import React from 'react';

interface TimelineProps {
  id: string;
}

const Timeline: React.FC<TimelineProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Timeline
        </h2>
        <p className="text-xl text-bright-yellow mb-8">
          Coming soon...
        </p>
      </div>
    </section>
  );
};

export default Timeline;