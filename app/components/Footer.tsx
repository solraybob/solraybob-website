import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: "#faf6f0",
        borderTop: "1px solid #e8d5b8",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/solraybob-logo.jpg"
              alt="Sol-Ray Bob"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="font-sans text-xs uppercase"
            style={{ color: "#7a6a5a", letterSpacing: "0.18em" }}
          >
            solraybob.com
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://x.com/solraybob"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            X
          </a>
          <a
            href="https://instagram.com/solraybob"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
          <a
            href="https://solray.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Solray AI
          </a>
        </div>

        <p
          className="font-serif italic text-sm"
          style={{ color: "#e8d5b8" }}
        >
          Nothing wasted. Nothing extra.
        </p>
      </div>
    </footer>
  );
}
