import React from 'react';

interface SuggestionsProps {
  id: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Suggestions
        </h2>
        <p className="text-xl text-bright-yellow mb-8">
          Coming soon...
        </p>
      </div>
    </section>
  );
};

export default Suggestions;