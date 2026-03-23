const books = [
  {
    title: "Bright Days, Dark Nights",
    description:
      "The core text. Light as medicine. Darkness as context. How to live with both.",
  },
  {
    title: "The Last Supper",
    description:
      "What you eat is a philosophy. This is the solar approach to food and fasting.",
  },
  {
    title: "Superior Physique",
    description:
      "The body under the sun. How light, movement, and discipline build something real.",
  },
  {
    title: "The Japanese Way",
    description:
      "Nothing extra. Everything intentional. The aesthetic foundation of the philosophy.",
  },
];

export default function Canon() {
  return (
    <section
      id="canon"
      className="py-24 px-6"
      style={{ backgroundColor: "#faf6f0" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-sans text-xs uppercase mb-4"
            style={{ color: "#e8821a", letterSpacing: "0.2em" }}
          >
            Philosophy
          </p>
          <h2
            className="font-serif font-light mb-4"
            style={{
              color: "#1a1008",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: "1.15",
            }}
          >
            The Solar Canon
          </h2>
          <p className="font-sans text-base" style={{ color: "#7a6a5a" }}>
            14 books. The philosophical foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex flex-col p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8d5b8",
                boxShadow: "0 2px 12px rgba(26,16,8,0.05)",
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-6"
                style={{ backgroundColor: "#fff8f0" }}
              >
                <span style={{ fontSize: "1.2rem" }}>☀️</span>
              </div>

              <h3
                className="font-serif font-medium mb-3 flex-shrink-0"
                style={{
                  color: "#1a1008",
                  fontSize: "1.2rem",
                  lineHeight: "1.3",
                }}
              >
                {book.title}
              </h3>
              <p
                className="font-sans text-sm mb-8 flex-1"
                style={{ color: "#7a6a5a", lineHeight: "1.65" }}
              >
                {book.description}
              </p>

              <a href="#" className="btn-amber-sm">
                Read
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="link-amber">
            The full Canon, all 14 books
          </a>
        </div>
      </div>
    </section>
  );
}
