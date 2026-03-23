import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
      style={{ backgroundColor: "#fff8f0" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Large logo centered */}
        <div className="mb-10">
          <Image
            src="/logo-large.jpg"
            alt="Sol-Ray Bob"
            width={320}
            height={320}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            priority
          />
        </div>

        <p
          className="font-sans text-xs uppercase mb-6"
          style={{ color: "#e8821a", letterSpacing: "0.2em" }}
        >
          Sun science. Solar philosophy. Daytime living.
        </p>

        <h1
          className="font-serif font-light mb-8"
          style={{
            color: "#1a1008",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            lineHeight: "1.1",
          }}
        >
          Built for the ones who are ready to live in the light.
        </h1>

        <p
          className="font-sans font-light text-lg mb-12 max-w-xl mx-auto"
          style={{ color: "#7a6a5a", lineHeight: "1.7" }}
        >
          Everything here is built on one idea. The sun is not background
          noise. It is the foundation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#canon" className="btn-amber">
            Explore the Canon
          </a>
          <a href="#community" className="btn-outline-dark">
            Enter the Community
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{ backgroundColor: "#e8d5b8" }} />
          <span
            className="font-sans text-xs uppercase"
            style={{ color: "#e8d5b8", letterSpacing: "0.2em" }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}
