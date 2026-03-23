const pillars = [
  {
    icon: "☀️",
    title: "Light",
    body: "The Sun is not decoration. It is medicine. Solraybob.com is built on the science of light.",
  },
  {
    icon: "🌿",
    title: "Body",
    body: "Your body is the instrument. Everything here is designed to tune it.",
  },
  {
    icon: "🏯",
    title: "Discipline",
    body: "The Japanese Way. Nothing extra. Everything intentional.",
  },
];

export default function Pillars() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#fff8f0", borderTop: "1px solid #e8d5b8", borderBottom: "1px solid #e8d5b8" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-sans text-xs tracking-widest uppercase mb-4"
            style={{ color: "#e8821a", letterSpacing: "0.2em" }}
          >
            Foundation
          </p>
          <h2
            className="font-serif font-light"
            style={{
              color: "#1a1008",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            }}
          >
            Three pillars. One life.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="text-4xl mb-6">{pillar.icon}</div>
              <h3
                className="font-serif font-medium mb-4"
                style={{ color: "#1a1008", fontSize: "1.5rem" }}
              >
                {pillar.title}
              </h3>
              <p
                className="font-sans text-sm"
                style={{ color: "#7a6a5a", lineHeight: "1.75" }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
