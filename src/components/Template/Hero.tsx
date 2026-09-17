import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m an {profile.role} at{' '}
            <a href="https://kapeefit.com" className="hero-highlight">
              {profile.employer}
            </a>
            , where I build the internal software the business runs on — CRMs,
            management dashboards, API integrations, and workflow automation. I
            architected{' '}
            <a
              href="https://github.com/shivanshsaxenaonline-byte/kamour-sales-os"
              className="hero-highlight"
            >
              Kamour Sales OS
            </a>
            , a sales CRM that replaced work scattered across Zoho, nine
            spreadsheets, and a WhatsApp inbox.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
