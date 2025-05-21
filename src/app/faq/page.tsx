'use client';

import { useState } from 'react';
import NavBar from '../components/navbar';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'What is Gilded RP?',
    answer: 'Gilded RP is a Red Dead Redemption 2 roleplay community focused on immersive storytelling and character-driven experiences.',
  },
  {
    question: 'How do I join the server?',
    answer: 'You can join by visiting our Discord, reading the rules, and loading into the server using RedM.',
  },
  {
    question: 'Do I need any mods to play?',
    answer: 'Yes, you need to install RedM and teamspeak, follow our setup instructions to ensure compatibility with our server.',
  },
  {
    question: 'Where can I find the rules?',
    answer: 'The full rules are available on the Rules page, accessible through the top navigation.',
  },
  {
    question: 'How do I take the whitelist quiz?',
    answer: 'The quiz will pop up when you join the redm server for the first time. You will be prompted to answer a series of questions about the rules and server guidelines.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />

      {/* Header */}
      <div className="text-center my-12 px-32">
      <h1 className="text-4xl font-bold text-yellow-400">Frequently Asked Questions</h1>
      <hr className="h-px my-8 bg-yellow-500 border-0 " />
      <h2 className="mt-2 text-xl text-sm">Everything you need to know about Gilded RP</h2>
      </div>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/5 rounded-lg shadow-md p-6 text-amber-100 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-amber-700 pb-4">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold hover:text-yellow-300 transition"
              >
                {item.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="mt-3 text-base text-amber-200">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
