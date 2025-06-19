import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { School, Search, Menu, X, Globe } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
}

const GlobalHeader: React.FC = () => {
  console.log('GlobalHeader loaded');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/academic-programs', label: 'Academic Programs' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/faculty-directory', label: 'Faculty Directory' },
    { href: '/innovation-hub', label: 'Innovation Hub' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block py-2 px-4 text-lg transition-colors hover:bg-accent hover:text-accent-foreground rounded-md ${
    isActive ? 'bg-accent text-accent-foreground font-semibold' : 'text-foreground'
  }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="College Home">
          <School className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl tracking-tight">Apex Institute</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={navLinkClasses}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search site..."
              className="pl-10 pr-3 py-2 h-10 w-40 lg:w-56 rounded-md bg-muted/50 border-border/60 focus:bg-background"
              aria-label="Search site"
            />
          </div>
          <Button variant="ghost" size="icon" className="hidden lg:inline-flex" aria-label="Select language">
            <Globe className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <School className="h-7 w-7 text-primary" />
                    <span className="font-bold text-lg">Apex Institute</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                
                <div className="relative mb-6 sm:hidden">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search site..."
                    className="pl-10 pr-3 py-2 h-10 w-full rounded-md bg-muted/50 border-border/60 focus:bg-background"
                    aria-label="Search site"
                  />
                </div>

                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={mobileNavLinkClasses}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <Button variant="outline" className="w-full mt-6 lg:hidden" aria-label="Select language">
                  <Globe className="h-5 w-5 mr-2" /> Select Language
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;