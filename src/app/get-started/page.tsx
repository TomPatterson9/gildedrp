'use client'

import React from 'react'
import NavBar from '../components/navbar'

const GettingStarted = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 py-12 text-amber-100">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-2">Getting Started</h1>
        <p className="text-center text-sm text-amber-300 mb-10">
          How to join and play on Gilded RP — everything you need to know
        </p>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-4">How to join Gilded RP</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Steam</li>
              <li>Legal Copy of Red Dead Redemption 2 <strong>OR</strong> Red Dead Online</li>
              <li>Discord</li>
              <li>Teamspeak</li>
              <li>SaltyChat TeamSpeak Plugin</li>
              <li>RedM from <a href="https://redm.net" className="text-blue-400 underline" target="_blank">redm.net</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Discord Setup</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Join the Gilded RP Discord server</li>
              <li>Read the Rules channel</li>
              <li>Go to <code>#roles-and-applications</code> and react to receive the <strong>@Gilded Prospect</strong> role</li>
              <li>Fill out the whitelist application via dropdown (done in your DMs with the bot)</li>
              <li>When whitelist is on, your role will limit access until approved</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Teamspeak Setup</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Install Teamspeak</li>
              <li>Download and install SaltyChat 3.1.2</li>
              <li>If having trouble, follow <a href="#" className="text-blue-400 underline">this guide</a></li>
              <li>Disable sound notifications: <br />
                <code>Self &gt; Soundpack &gt; Sounds Deactivated</code>
              </li>
              <li>Set up Push-To-Talk:
                <br /><code>Tools &gt; Capture &gt; Capture Device &gt; Push-To-Talk</code>
              </li>
              <li><strong>Teamspeak IP:</strong> 135.148.68.55:9987</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Connect & Play</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Launch RedM (authorize with Discord if prompted)</li>
              <li>Search for <strong>Gilded RP</strong> in the server list</li>
              <li>If not found, open F8 and enter: <code>connect 135.148.68.54</code></li>
              <li>Enjoy the experience!</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default GettingStarted
