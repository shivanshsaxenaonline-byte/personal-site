import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import profile from './profile.json';

/**
 * Every entry here is also emitted as a `sameAs` URL in the Person JSON-LD
 * (`src/lib/schema.ts`), which is how search engines tie these profiles to
 * the same person. So a link that 404s is worse than a missing one — it
 * claims an identity that cannot be confirmed. Check each before adding.
 */
export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/shivanshsaxenaonline-byte',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/shivansh-saxena-033606252/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://x.com/Shivansh1821707',
    label: 'X',
    icon: faXTwitter,
  },
  {
    link: 'https://www.instagram.com/shivanshsaxenaonline/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: `mailto:${profile.email}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
