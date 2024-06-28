import React, { useState } from 'react';

const AccordionItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        className="w-full text-left p-4 bg-gradient-to-r from-blue-900 to-green-600 text-white font-bold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {/* Content goes here */}
          <p>Accordion content for {title}</p>
        </div>
      )}
    </div>
  );
};

const DematFAQ = () => {
  const questions = [
    "Why Demat is important?",
    "What are the purposes of opening a Demat account?",
    "Who is a Beneficiary Owner?",
    "What is Dematerialization (Demat?)"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {questions.map((question, index) => (
        <AccordionItem key={index} title={question} />
      ))}
    </div>
  );
};

export default DematFAQ;