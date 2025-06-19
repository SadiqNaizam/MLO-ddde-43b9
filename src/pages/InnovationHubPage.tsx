import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import ResearchHighlightCard, { ResearchHighlightCardProps } from '@/components/ResearchHighlightCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// lucide-react Icons
import { Lightbulb, BookOpen, Rocket } from 'lucide-react';

const patentsData: ResearchHighlightCardProps[] = [
  {
    type: 'patent',
    title: "Advanced Photonic Chip Design",
    abstract: "A groundbreaking design for photonic chips enabling ultra-fast data transmission and processing, crucial for next-gen AI and communication.",
    detailsLink: "/innovation-hub#patent-photonic-chip", // Placeholder anchor link
    date: "Granted: Mar 2024",
    authors: ["Dr. Evelyn Reed", "Prof. Kenji Tanaka"],
    status: "Granted",
    tags: ["Photonics", "Semiconductors", "Optical Computing"],
    imageUrl: "https://images.unsplash.com/photo-1617863419323-b6727cb05ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9uaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    type: 'patent',
    title: "Self-Healing Composite Materials",
    abstract: "Development of novel composite materials capable of autonomously repairing damage, extending lifespan for aerospace and automotive applications.",
    detailsLink: "/innovation-hub#patent-self-healing", // Placeholder anchor link
    date: "Filed: Dec 2023",
    authors: ["Dr. Anya Sharma", "Dr. Marcus Chen"],
    status: "Filed & Published",
    tags: ["Materials Science", "Nanotechnology", "Smart Materials"],
    imageUrl: "https://images.unsplash.com/photo-1551884831-bbf3cdc64387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1dHVyaXN0aWMlMjBtYXRlcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const papersData: ResearchHighlightCardProps[] = [
  {
    type: 'paper',
    title: "Ethical Frameworks for Generative AI",
    abstract: "A comprehensive study proposing new ethical guidelines and frameworks for the development and deployment of generative AI systems in society.",
    detailsLink: "/innovation-hub#paper-ai-ethics", // Placeholder anchor link
    date: "Published: Jan 2024",
    authors: ["Prof. Alistair Finch", "Dr. Lena Hanson"],
    status: "Journal of AI Ethics",
    tags: ["AI Ethics", "Generative AI", "Policy", "HCI"],
    imageUrl: "https://images.unsplash.com/photo-1696258680491-0f21f0a3b01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWklMjBldGhpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    type: 'publication',
    title: "Cryo-EM of Viral Proteins",
    abstract: "High-resolution structural analysis of key viral proteins using advanced cryo-EM techniques, offering insights for antiviral drug design.",
    detailsLink: "/innovation-hub#paper-cryo-em", // Placeholder anchor link
    date: "Published: Feb 2024",
    authors: ["Dr. Ben Carter", "Dr. Sarah Green", "Prof. Ivan Petrov"],
    status: "Nature Structural Biology",
    tags: ["Biophysics", "Virology", "CryoEM", "Drug Discovery"],
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zY29wZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const startupsData: ResearchHighlightCardProps[] = [
  {
    type: 'startup',
    title: "QuantumLeap Computing",
    abstract: "Building fault-tolerant quantum computers to solve complex problems intractable for classical machines. Aiming for quantum supremacy.",
    detailsLink: "/innovation-hub#startup-quantumleap", // Placeholder anchor link
    date: "Founded: 2023",
    status: "Seed Stage",
    tags: ["Quantum Computing", "Deep Tech", "AI Hardware"],
    imageUrl: "https://images.unsplash.com/photo-1635070049060-e333c002bace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    type: 'startup',
    title: "BioSynth Solutions",
    abstract: "Utilizing synthetic biology to create sustainable alternatives to petrochemicals for industrial applications and consumer goods.",
    detailsLink: "/innovation-hub#startup-biosynth", // Placeholder anchor link
    date: "Incubated: 2022",
    status: "Pre-Seed Funding",
    tags: ["Synthetic Biology", "Sustainability", "Biotech"],
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9db50d0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlvdGVjaG5vbG9neSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    type: 'startup',
    title: "EduVerse Platforms",
    abstract: "Developing immersive VR/AR educational tools for engineering and science disciplines, transforming how students learn complex concepts.",
    detailsLink: "/innovation-hub#startup-eduverse", // Placeholder anchor link
    date: "Launched: 2024",
    status: "Product Launch",
    tags: ["EdTech", "VR/AR", "Immersive Learning"],
    imageUrl: "https://images.unsplash.com/photo-1605792657496-26c9ff83971f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const InnovationHubPage = () => {
  console.log('InnovationHubPage loaded');

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <GlobalHeader />
      <main className="flex-grow container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <section className="my-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-500">
            The Innovation Nexus
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Apex Institute's hub for pioneering research, transformative patents, and a thriving ecosystem of student and faculty-led startups.
          </p>
        </section>

        <Tabs defaultValue="patents" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-10 bg-muted p-1 rounded-lg shadow">
            <TabsTrigger value="patents" className="py-2.5 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md text-sm font-medium">Patents & IP</TabsTrigger>
            <TabsTrigger value="papers" className="py-2.5 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md text-sm font-medium">Research Publications</TabsTrigger>
            <TabsTrigger value="startups" className="py-2.5 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md text-sm font-medium">Startup Ecosystem</TabsTrigger>
          </TabsList>

          <TabsContent value="patents">
            <Card className="bg-card shadow-xl border-border/60">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-semibold flex items-center text-primary">
                  <Lightbulb className="mr-3 h-8 w-8 text-yellow-400" />
                  Patents & Intellectual Property
                </CardTitle>
                <CardDescription className="text-md mt-2">
                  Our commitment to innovation is reflected in a growing portfolio of patents, driving technological advancements and societal impact.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {patentsData.map((patent) => (
                  <ResearchHighlightCard key={patent.title} {...patent} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="papers">
            <Card className="bg-card shadow-xl border-border/60">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-semibold flex items-center text-primary">
                  <BookOpen className="mr-3 h-8 w-8 text-green-400" />
                  Seminal Research Publications
                </CardTitle>
                <CardDescription className="text-md mt-2">
                  Explore groundbreaking research papers authored by our esteemed faculty and researchers, pushing the boundaries of knowledge.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {papersData.map((paper) => (
                  <ResearchHighlightCard key={paper.title} {...paper} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="startups">
            <Card className="bg-card shadow-xl border-border/60">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-semibold flex items-center text-primary">
                  <Rocket className="mr-3 h-8 w-8 text-purple-400" />
                  Campus Startup Ecosystem
                </CardTitle>
                <CardDescription className="text-md mt-2">
                  Fostering entrepreneurship and translating research into impactful ventures. Discover startups launched from our innovation hub.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-10 pt-2">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2 border-border">Featured Startups</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {startupsData.map((startup) => (
                      <ResearchHighlightCard key={startup.title} {...startup} />
                    ))}
                  </div>
                </div>
                <div id="support-details"> {/* Anchor for potential linking */}
                  <h3 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2 border-border">Startup Support & Resources</h3>
                  <Card className="bg-background/50 shadow-md border-border/40">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-6 text-md">
                        We provide comprehensive support for aspiring entrepreneurs, including mentorship, funding opportunities, and state-of-the-art incubation facilities.
                      </p>
                      <Table className="border rounded-lg">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="font-semibold text-foreground">Resource</TableHead>
                            <TableHead className="font-semibold text-foreground">Description</TableHead>
                            <TableHead className="font-semibold text-foreground">Availability</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Mentorship Program</TableCell>
                            <TableCell>Connect with industry experts and experienced faculty.</TableCell>
                            <TableCell>Year-round</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Seed Funding</TableCell>
                            <TableCell>Access to early-stage capital for promising ventures.</TableCell>
                            <TableCell>Competitive Calls</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Incubation Space</TableCell>
                            <TableCell>Dedicated co-working and lab spaces with advanced tools.</TableCell>
                            <TableCell>On Application</TableCell>
                          </TableRow>
                           <TableRow>
                            <TableCell>Legal & IP Support</TableCell>
                            <TableCell>Guidance on patents, incorporation, and legal compliance.</TableCell>
                            <TableCell>Workshops & Clinics</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <div className="mt-8 text-center">
                        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all">
                          <Link to="/admissions?interest=innovation-entrepreneurship">
                            Join Our Innovators & Apply
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default InnovationHubPage;