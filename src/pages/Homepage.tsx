import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import GlobalHeader from '@/components/layout/GlobalHeader';
import ArchitecturalVisualizationModule from '@/components/ArchitecturalVisualizationModule';
import DepartmentShowcaseCard from '@/components/DepartmentShowcaseCard';
import ResearchHighlightCard from '@/components/ResearchHighlightCard';
import GlobalFooter from '@/components/layout/GlobalFooter';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

// Lucide Icons (optional, if needed for specific embellishments not in components)
import { ChevronRight } from 'lucide-react';

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  const researchHighlights = [
    {
      type: 'patent' as 'patent' | 'paper' | 'startup' | 'publication' | 'project',
      title: "Quantum Entanglement Communication System",
      abstract: "A groundbreaking patented system enabling secure, unjammable communication channels using principles of quantum entanglement, poised to revolutionize data security.",
      detailsLink: "/innovation-hub?item=quantum-patent-001",
      imageUrl: "https://images.unsplash.com/photo-1639755210181-82800ee08c5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
      date: "Granted: March 2024",
      status: "Patented",
      tags: ["Quantum Physics", "Communication", "Security", "Patents"],
    },
    {
      type: 'paper' as 'patent' | 'paper' | 'startup' | 'publication' | 'project',
      title: "AI-Driven Personalized Medicine",
      abstract: "Published research in 'Nature Digital Medicine' detailing an AI framework that analyzes genomic data to predict patient responses to therapies with unprecedented accuracy.",
      detailsLink: "/academic-programs?discipline=bioe&paper=ai-med-002",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
      date: "Published: January 2024",
      authors: ["Dr. Aris Thorne", "Prof. Lena Hanson"],
      status: "Published",
      tags: ["AI", "Bioengineering", "Genomics", "Healthcare"],
    },
    {
      type: 'startup' as 'patent' | 'paper' | 'startup' | 'publication' | 'project',
      title: "Synapse Dynamics",
      abstract: "A faculty-incubated startup developing neuromorphic computing chips that mimic the human brain's efficiency, attracting significant venture capital.",
      detailsLink: "/innovation-hub?startup=synapse-dynamics",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450&q=80",
      status: "Series A Funded",
      tags: ["Neuromorphic Computing", "Startup", "Deep Tech", "Hardware"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <GlobalHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative py-32 md:py-48 lg:py-64 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="relative container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Apex Institute
              </span>
              <span className="block text-slate-200 mt-2 sm:mt-4">Engineering the Future, Today.</span>
            </h1>
            <p className="mt-6 max-w-xl md:max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
              Discover a world of innovation, research, and unparalleled academic excellence at the forefront of technology and engineering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-lg px-8 py-3 transform transition-transform hover:scale-105">
                <Link to="/academic-programs">
                  Explore Programs <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sky-300 border-sky-400 hover:bg-sky-400/10 hover:text-sky-200 font-semibold text-lg px-8 py-3 transform transition-transform hover:scale-105">
                <Link to="/admissions">
                  Admissions Info
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Architectural Visualization Section */}
        <section className="py-16 md:py-24 bg-slate-900">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Experience Our Campus
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Virtually navigate our state-of-the-art facilities, research labs, and collaborative spaces.
              </p>
            </div>
            <ArchitecturalVisualizationModule
              buildingId="main_campus_viewer"
              buildingName="Apex Institute - Interactive Campus Explorer"
              buildingDescription="An immersive look into the heart of innovation at Apex Institute. Explore our iconic structures and the advanced technology within."
              placeholderImageUrl="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&h=720&q=80"
              accentColor="border-cyan-500"
              availableViews={['exterior', 'interior_layout', 'innovation_spotlight']}
            />
          </div>
        </section>

        {/* Department Showcase Section */}
        <section className="py-16 md:py-24 bg-slate-800/50">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Explore Our Disciplines
              </h2>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                Dive into specialized fields of study, each pushing the boundaries of knowledge and application.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DepartmentShowcaseCard
                departmentName="Computer Science & Engineering"
                description="Pioneering AI, cybersecurity, and quantum computing. Lead the digital frontier with cutting-edge research and innovation."
                stats={{ labs: 30, faculty: 75, publications: 600 }}
                departmentPageLink="/academic-programs?discipline=cse"
                imageUrl="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&h=576&q=80"
              />
              <DepartmentShowcaseCard
                departmentName="Mechanical & Aerospace Engineering"
                description="Innovating in robotics, sustainable energy, advanced materials, and space exploration systems."
                stats={{ labs: 22, faculty: 55, publications: 420 }}
                departmentPageLink="/academic-programs?discipline=me"
                imageUrl="https://images.unsplash.com/photo-1507146153580-69a1f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&h=576&q=80"
              />
              <DepartmentShowcaseCard
                departmentName="Bioengineering & Life Sciences"
                description="Fusing engineering with biology to create breakthroughs in medical technology, synthetic biology, and computational genomics."
                stats={{ labs: 18, faculty: 40, publications: 310 }}
                departmentPageLink="/academic-programs?discipline=bioe"
                imageUrl="https://images.unsplash.com/photo-1532187643623-dbf2f5984c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&h=576&q=80"
              />
            </div>
          </div>
        </section>

        {/* Research Highlights Carousel Section */}
        <section className="py-16 md:py-24 bg-slate-900">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Cutting-Edge Research & Innovation
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Witness the transformative impact of our research across diverse technological frontiers.
              </p>
            </div>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {researchHighlights.map((highlight, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <ResearchHighlightCard {...highlight} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex bg-slate-700 hover:bg-slate-600 border-slate-600 text-white" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex bg-slate-700 hover:bg-slate-600 border-slate-600 text-white" />
            </Carousel>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="link" className="text-sky-400 hover:text-sky-300 text-lg">
                <Link to="/innovation-hub">
                  Explore All Innovations <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* News Snippets Section */}
        <section className="py-16 md:py-24 bg-slate-800/50">
            <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                        Latest News & Events
                    </h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                        Stay updated with our recent achievements, upcoming events, and institutional announcements.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-xl hover:shadow-cyan-500/30 transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-sky-300">Apex Institute Hosts Global AI Ethics Summit</CardTitle>
                            <CardDescription className="text-slate-400">January 15, 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-300">Leading researchers, policymakers, and industry pioneers convened at Apex Institute to discuss the future of ethical AI development and deployment. Keynotes and panels explored fairness, transparency, and accountability in AI systems.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-sky-300">New $10M Grant for Sustainable Energy Research Center</CardTitle>
                            <CardDescription className="text-slate-400">February 5, 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-300">Apex Institute has been awarded a significant grant to establish a new interdisciplinary research center focused on developing breakthrough technologies for sustainable energy generation and storage, aiming to combat climate change.</p>
                        </CardContent>
                    </Card>
                </div>
                 <div className="mt-12 text-center">
                    {/* Placeholder: In a real app, this would link to a /news or /events page */}
                    <Button variant="outline" size="lg" className="text-cyan-300 border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-200 font-semibold">
                        View All News (Coming Soon)
                    </Button>
                </div>
            </div>
        </section>

        {/* Call to Action Section - Admissions */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-sky-800 via-cyan-800 to-blue-800 text-white">
          <div className="container max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Shape the Future?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-sky-100">
              Join a community of innovators, thinkers, and leaders. Explore our admissions process and discover your potential at Apex Institute, where brilliant minds converge to solve the world's greatest challenges.
            </p>
            <div className="mt-10">
              <Button asChild size="xl" className="bg-white text-blue-700 hover:bg-slate-100 font-bold text-xl px-12 py-4 shadow-lg transform transition-transform hover:scale-105">
                <Link to="/admissions">
                  Apply to Apex Institute
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default Homepage;