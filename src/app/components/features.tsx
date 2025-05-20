// components/Features.tsx

const features = [
  {
    title: "Immersive World",
    description: "Custom-built maps, unique storylines, and deep lore.",
  },
  {
    title: "Community Driven",
    description: "Player-run events, factions, and dynamic interactions.",
  },
  {
    title: "Fair Play",
    description: "Strict rule enforcement and active moderation.",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Gilded Roleplay?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-zinc-800 p-6 rounded-md shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
