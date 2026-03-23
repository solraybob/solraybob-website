export default function TattooRemoval() {
  return (
    <section
      className="py-24 px-6"
      style={{
        backgroundColor: "#fff8f0",
        borderTop: "1px solid #e8d5b8",
        borderBottom: "1px solid #e8d5b8",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="font-sans text-xs uppercase mb-4"
          style={{ color: "#e8821a", letterSpacing: "0.2em" }}
        >
          The Project
        </p>
        <h2
          className="font-serif font-light mb-6"
          style={{
            color: "#1a1008",
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            lineHeight: "1.2",
          }}
        >
          The Great Removal
        </h2>
        <p
          className="font-sans text-base mb-4 max-w-lg mx-auto"
          style={{ color: "#7a6a5a", lineHeight: "1.75" }}
        >
          Full body suit. By hand. Under the sun. The most documented
          tattoo removal in history.
        </p>
        <p
          className="font-serif italic text-base mb-10"
          style={{ color: "#7a6a5a" }}
        >
          Every session. Every scar. Every day of light.
        </p>
        <a
          href="https://x.com/solraybob"
          target="_blank"
          rel="noopener noreferrer"
          className="link-amber"
        >
          Follow @solraybob on X
        </a>
      </div>
    </section>
  );
}
