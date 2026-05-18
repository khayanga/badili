export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)] py-20">
      <div className="container-main">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-4xl font-bold italic text-primary">
              Badili
            </h3>

            <p className="mt-5 leading-8 text-[var(--text2)]">
              We grow brands that grow the planet. A
              digital agency built for purpose-driven
              businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Services
            </h4>

            <div className="space-y-3 text-[var(--text2)]">
              <p>Badili Grow</p>
              <p>Badili Studio</p>
              <p>Badili Build</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Company
            </h4>

            <div className="space-y-3 text-[var(--text2)]">
              <p>About</p>
              <p>Work</p>
              <p>Values</p>
              <p>Team</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Connect
            </h4>

            <div className="space-y-3 text-[var(--text2)]">
              <p>hello@badili.co</p>
              <p>Nairobi, Kenya</p>
              <p>+254 700 000 000</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-6 text-sm text-[var(--text3)]">
          © 2026 Badili Agency. Built with purpose.
        </div>
      </div>
    </footer>
  );
}