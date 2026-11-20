import { profile } from "../data";

const Footer = () => (
  <footer className="rule">
    <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row justify-between gap-2 mono text-mute">
      <p>© 2026 {profile.name}</p>
      <p>{profile.role}</p>
    </div>
  </footer>
);

export default Footer;
