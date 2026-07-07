import { Mail, Phone, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";
import "./contactNav.css";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/dripkid.zilla/", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@_kidzilla", label: "TikTok" },
  { icon: FaInstagram, href: "https://www.instagram.com/_kidzilla/", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/god-swil-omuka-275708381/", label: "LinkedIn" },
];

function ContactNav() {
  return (
    <div className="contact-nav">
      <div className="contact-nav__container">
        {/* Left: Contact Info */}
        <div className="contact-nav__left">
          <a href="mailto:info@dynamichub.com" className="contact-nav__link">
            <Mail size={14} className="contact-nav__icon" />
            <span>info@dynamichub.com</span>
          </a>

          <span className="contact-nav__divider">|</span>

          <a href="tel:+254746808099" className="contact-nav__link">
            <Phone size={14} className="contact-nav__icon" />
            <span>+254 746 808099</span>
          </a>
        </div>

        {/* Right: Hours & Social */}
        <div className="contact-nav__right">
          <div className="contact-nav__hours">
            <Clock size={14} className="contact-nav__icon" />
            <span>Mon - Sat: 9:00 am - 05:00pm | Closed on Sundays</span>
          </div>

          <span className="contact-nav__divider">|</span>

          <div className="contact-nav__socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="contact-nav__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactNav;