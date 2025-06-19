import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Cpu, Settings, Zap, FlaskConical, Atom, Brain, Microscope, Factory, ChevronRightIcon } from 'lucide-react';

// Data structures
interface SubSectionData {
  id: string;
  name: string;
  description: string;
  link: string;
}

interface ResearchCenterData {
  id: string;
  name: string;
  description: string;
  link: string;
}

export interface DisciplineData {
  id: string;
  name: string;
  shortName?: string; // For compact trigger
  briefDescription: string;
  icon: React.ElementType;
  mainLink: string; // Link to the main discipline page
  accentColor?: string; // e.g., 'cyan-500' for border-l-cyan-500
  subSections?: SubSectionData[];
  researchCenters?: ResearchCenterData[];
}

// Sample data for disciplines
const defaultDisciplines: DisciplineData[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    briefDescription: 'Pioneering the future of computation, AI, and digital systems. Explore cutting-edge research and innovative programs.',
    icon: Cpu,
    mainLink: '/academic-programs?discipline=cse',
    accentColor: 'sky-500',
    subSections: [
      { id: 'ai', name: 'Artificial Intelligence', description: 'Developing intelligent machines and algorithms that transform industries.', link: '/academic-programs?discipline=cse&sub=ai' },
      { id: 'cyber', name: 'Cybersecurity', description: 'Protecting digital assets and infrastructure against emerging threats.', link: '/academic-programs?discipline=cse&sub=cybersecurity' },
      { id: 'data', name: 'Data Science', description: 'Extracting knowledge and insights from complex datasets.', link: '/academic-programs?discipline=cse&sub=datascience' },
    ],
    researchCenters: [
      { id: 'ai-hub', name: 'AI Research Hub', description: 'Focal point for AI innovation and collaboration.', link: '/innovation-hub?center=ai-hub' },
      { id: 'quantum-lab', name: 'Quantum Computing Lab', description: 'Exploring the frontiers of quantum information science.', link: '/innovation-hub?center=quantum-lab' },
    ],
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    shortName: 'MechE',
    briefDescription: 'Designing and building the physical systems of tomorrow, from robotics to sustainable energy solutions.',
    icon: Settings,
    mainLink: '/academic-programs?discipline=me',
    accentColor: 'emerald-500',
    subSections: [
      { id: 'robotics', name: 'Robotics & Automation', description: 'Creating autonomous systems for diverse applications.', link: '/academic-programs?discipline=me&sub=robotics' },
      { id: 'thermo', name: 'Thermal-Fluid Sciences', description: 'Advancing energy conversion and fluid dynamics.', link: '/academic-programs?discipline=me&sub=thermofluids' },
    ],
  },
  {
    id: 'ee',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EE',
    briefDescription: 'Innovating in electronics, power systems, and communications that connect and power the world.',
    icon: Zap,
    mainLink: '/academic-programs?discipline=ee',
    accentColor: 'amber-500',
    subSections: [
      { id: 'microelectronics', name: 'Microelectronics & VLSI', description: 'Designing next-gen integrated circuits.', link: '/academic-programs?discipline=ee&sub=microelectronics' },
      { id: 'power', name: 'Power & Energy Systems', description: 'Developing sustainable and resilient energy grids.', link: '/academic-programs?discipline=ee&sub=power' },
    ],
    researchCenters: [
      { id: 'nanotech-center', name: 'Nanotechnology Center', description: 'Research at the nanoscale for electronics and materials.', link: '/innovation-hub?center=nanotech' },
    ],
  },
  {
    id: 'bioe',
    name: 'Bioengineering & Biomedical Tech',
    shortName: 'BioE',
    briefDescription: 'Fusing engineering principles with biological sciences to advance healthcare and biotechnology.',
    icon: FlaskConical,
    mainLink: '/academic-programs?discipline=bioe',
    accentColor: 'rose-500',
    subSections: [
      { id: 'biomaterials', name: 'Biomaterials & Tissue Engineering', description: 'Creating materials for medical implants and regeneration.', link: '/academic-programs?discipline=bioe&sub=biomaterials' },
      { id: 'medimaging', name: 'Medical Imaging', description: 'Developing new techniques for visualizing biological systems.', link: '/academic-programs?discipline=bioe&sub=medimaging' },
    ],
  },
];

// ListItem component for use within NavigationMenuContent
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; icon?: React.ElementType }
>(({ className, title, children, icon: ItemIcon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {ItemIcon && <ItemIcon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />}
            <div className="text-sm font-medium leading-none group-hover:text-accent-foreground">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface InteractiveDisciplineGuideProps {
  disciplines?: DisciplineData[];
  className?: string;
}

const InteractiveDisciplineGuide: React.FC<InteractiveDisciplineGuideProps> = ({
  disciplines = defaultDisciplines,
  className,
}) => {
  console.log('InteractiveDisciplineGuide loaded');

  if (!disciplines || disciplines.length === 0) {
    return <p>No disciplines to display.</p>;
  }

  return (
    <NavigationMenu orientation="horizontal" className={cn("relative z-10", className)}>
      <NavigationMenuList className="flex flex-wrap justify-center">
        {disciplines.map((discipline) => (
          <NavigationMenuItem key={discipline.id} value={discipline.id}>
            <NavigationMenuTrigger className="text-sm lg:text-base">
              <discipline.icon className={cn("mr-2 h-4 w-4 text-muted-foreground", discipline.accentColor && `text-${discipline.accentColor}`)} />
              {discipline.shortName || discipline.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className={cn(discipline.accentColor && `border-t-4 border-${discipline.accentColor}`)}>
              <div className="p-6 md:w-[600px] lg:w-[750px] grid gap-6 grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-4 flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <discipline.icon className={cn("h-10 w-10", discipline.accentColor && `text-${discipline.accentColor}`)} />
                    <div>
                      <h3 className="text-xl font-semibold">{discipline.name}</h3>
                      <p className="text-sm text-muted-foreground">{discipline.briefDescription}</p>
                    </div>
                  </div>
                  <NavigationMenuLink asChild>
                    <Link to={discipline.mainLink} className={cn(navigationMenuTriggerStyle(), "bg-primary text-primary-foreground hover:bg-primary/90 w-full justify-start group")}>
                      Explore {discipline.shortName || 'Discipline'}
                      <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </NavigationMenuLink>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {discipline.subSections && discipline.subSections.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-md text-foreground">Specializations</h4>
                      <Separator />
                      <ul className="space-y-1">
                        {discipline.subSections.map((sub) => (
                          <ListItem key={sub.id} title={sub.name} to={sub.link}>
                            {sub.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  )}

                  {discipline.researchCenters && discipline.researchCenters.length > 0 && (
                     <div className="space-y-2">
                      <h4 className="font-semibold text-md text-foreground">Research Centers</h4>
                      <Separator />
                      <ul className="space-y-1">
                        {discipline.researchCenters.map((center) => (
                          <ListItem key={center.id} title={center.name} to={center.link}>
                            {center.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default InteractiveDisciplineGuide;