import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface py-20">
      <div className="container-main">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className=" p-2 inline-block ">
              <Image
                src="/footer.png"
                alt="Logo"
                width={150}
                height={70}
                className="h-32 w-auto rounded-md"
              />
            </div>

            <p className=" leading-8 text-text2">
              We grow brands that grow the planet. A digital agency built for
              purpose-driven businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Services
            </h4>

            <div className="space-y-3 text-text2">
              <p>Badili AI</p>
               <p>Badili Studio</p>
              <p>Badili Build</p>
               <p>Badili Consult</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Company
            </h4>

            <div className="space-y-3 text-text2">
              <a href="/about" className="block hover:text-cyan-500 transition">
                About
              </a>
              <a href="#work" className="block hover:text-cyan-500 transition">
                Work
              </a>
              <a
                href="#services"
                className="block hover:text-cyan-500 transition"
              >
                Services
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Connect
            </h4>

            <div className="space-y-3 text-text2">
              <p>badiili.arbarne@gmail.com</p>
              <p>Nairobi, Kenya</p>
              <p>+254 757 721222</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-6 text-sm  text-center text-text3">
          © {currentYear} Badiili . Built with purpose.
        </div>
      </div>
    </footer>
  );
}
