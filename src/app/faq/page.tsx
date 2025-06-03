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
  {
    question: 'Do I need to be Whitelisted? Where can I find the rules?',
    answer: `Getting whitelisted is easy—just join the server through the RedM Launcher and a pop-up quiz will begin. Once completed successfully, you're good to go. Make sure you've read the rules, as failing the quiz triggers a cooldown.\n\nRules: https://www.gildedroleplay.com/rules`,
  },
  {
    question: 'Do I need to download any special Mods to play?',
    answer: `No manual mods are required. Gilded downloads everything automatically when you join. The only external programs you'll need are TeamSpeak (V 3.6.0) and the Salty Chat plugin (V 3.1.2).\n\nSetup Info: https://www.gildedroleplay.com/getting-started`,
  },
  {
    question: 'The welcome/teamspeak splash image is stuck and I can’t move!',
    answer: `1. Make sure you have the correct versions of TeamSpeak and SaltyChat installed.\n2. Follow this video for help fixing DNS issues: https://www.youtube.com/watch?v=4a5CKxua7C8&t=70s\n3. Check: https://www.gildedroleplay.com/dns\n4. Ensure you've accepted SaltyChat's terms and conditions.`,
  },
  {
    question: 'I’m hearing someone across the map! How do I fix this?',
    answer: `This is caused by in-game voice chat. Disable it via:\nSettings > Audio > Voice Chat Enabled: Off`,
  },
  {
    question: 'Can I play without a mic? Can I sing or use a voice changer?',
    answer: `Yes! Gilded is flexible:\n- No mic? Apply for the "Mute Role" with a character backstory.\n- Singer/Musician? Apply for the "Bard Role" to sing or play music without push-to-talk.\n- Voice changer? Provide a quality sample for approval.\n\nOpen a ticket for any of these options.`,
  },
  {
    question: 'I just made a character and the appearance is all wrong!',
    answer: `Character customization like makeup, eyebrows, etc. is handled in-game via barbers, tailors, etc. If it's a major mistake (like giant eyes), new characters may qualify for a Second Chance Token.`,
  },
  {
    question: 'My character is too short, but I’ve had them for months!',
    answer: `Character changes are only allowed shortly after creation. Once your character is known in the world, we don’t offer appearance do-overs.`,
  },
  {
    question: 'How do I use emotes or understand IC language?',
    answer: `Emotes and RP terms enhance immersion. Learn them in the Discord 'Gilded Controls and Language' channel. Examples: “taking a nap”, “walking drunk”, etc.`,
  },
  {
    question: 'What makes Gilded RP unique? What can I do here?',
    answer: `Gilded offers unique, hand-crafted scripts and endless RP paths:\n- Run a business or work any job\n- Mine, farm, fish, cook, hunt, or govern\n- Get involved with Lawmen, Doctors, Vets, Politicians\n- Explore underworld RP\nMore ideas can be found in our Discord’s 'In-Character Plot Roles' channel.`,
  },
  {
    question: 'How do I apply for a business or know when they’re available?',
    answer: `Businesses become available when sold or repossessed. Watch the Discord ‘Announcements’ channel for updates. Apply via a Google Doc proposal in the 'Roles and Applications' channel.`,
  },
  {
    question: 'Why was my camp or home build removed?',
    answer: `Your build likely violated a rule (e.g., excessive lighting, blocking roads, unrealistic placement). Builds must align with RP guidelines. Review camp rules here:\nhttps://www.gildedroleplay.com/rules`,
  },
  {
    question: 'How do I get help or report a player?',
    answer: `Use our ticket system:\n- General Ticket: gameplay issues/questions\n- Tebex Support: purchases/custom items\n- Conflict/Player Report: rule violations\n- Tech Support: sound, crashes, etc.`,
  },
  {
    question: 'How can I donate or get special/custom items?',
    answer: `Support the server via subscription tiers or one-time purchases like custom telegrams or cookbooks. All donations come with perks like Priority Points.\n\nDonate here: <a href="www.google.com"> https://gilded-rp.tebex.io/category/support </a>`,
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
