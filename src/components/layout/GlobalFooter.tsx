import React from 'react';
import { Link } from 'react-router-dom';
import { School, Copyright, Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const GlobalFooter: React.FC = () => {
  console.log('GlobalFooter loaded');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/school/your-college' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/your-college' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/your-college' },
  ];

  const footerNavLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Accessibility', href: '/accessibility' },
  ];

  return (
    <footer className="bg-secondary/30 text-secondary-foreground/80 border-t border-border/40">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <School className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Apex Institute</span>
            </Link>
            <p className="text-sm">
              A premier college of pure engineering and technology research, fostering innovation and global leadership.
            </p>
            <p className="flex items-center text-sm">
              <Copyright className="h-4 w-4 mr-2" /> {currentYear} Apex Institute. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/academic-programs" className="hover:text-primary transition-colors">Academic Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/faculty-directory" className="hover:text-primary transition-colors">Faculty</Link></li>
              <li><Link to="/innovation-hub" className="hover:text-primary transition-colors">Innovation</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Information</h3>
            <ul className="space-y-2">
              {footerNavLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
               <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li> {/* Assuming a contact page might exist */}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <address className="space-y-2 not-italic text-sm">
              <p className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                123 Innovation Drive, Tech City, TC 54321
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@apexinstitute.edu" className="hover:text-primary transition-colors">info@apexinstitute.edu</a>
              </p>
            </address>
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2 text-foreground">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                     className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;