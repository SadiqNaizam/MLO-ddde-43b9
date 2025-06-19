import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// Custom Components
import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import InteractiveDisciplineGuide from '@/components/InteractiveDisciplineGuide';
import DepartmentShowcaseCard from '@/components/DepartmentShowcaseCard';
import ArchitecturalVisualizationModule from '@/components/ArchitecturalVisualizationModule';

// Shadcn/ui Components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Cpu, Users } from 'lucide-react';

// Placeholder data for a sample discipline (e.g., AI)
const sampleAIDisciplineData = {
  name: "Artificial Intelligence Program",
  overview: "Our Artificial Intelligence program is at the forefront of innovation, shaping the future of intelligent systems. We offer a comprehensive curriculum, state-of-the-art research facilities, and a world-class faculty dedicated to pushing the boundaries of AI.",
  courses: [
    { id: "ai-course-1", title: "Machine Learning Foundations", description: "Core principles and algorithms of machine learning." },
    { id: "ai-course-2", title: "Deep Learning & Neural Networks", description: "Advanced topics in neural network architectures and applications." },
    { id: "ai-course-3", title: "Natural Language Processing", description: "Techniques for understanding and generating human language." },
    { id: "ai-course-4", title: "Robotics and Autonomous Systems", description: "Integrating AI with physical systems for intelligent automation." },
  ],
  researchAreas: [
    { id: "ai-research-1", name: "Explainable AI (XAI)", description: "Developing AI systems that are transparent and interpretable." },
    { id: "ai-research-2", name: "AI Ethics and Governance", description: "Addressing the societal impact and ethical considerations of AI." },
    { id: "ai-research-3", name: "Reinforcement Learning", description: "Training agents to make optimal decisions in complex environments." },
  ],
  faqs: [
    { id: "faq1", question: "What are the career prospects for AI graduates?", answer: "AI graduates are in high demand across various sectors including tech, healthcare, finance, and research. Roles include AI Engineer, Data Scientist, Machine Learning Researcher, and AI Ethics Officer." },
    { id: "faq2", question: "Are there research opportunities for undergraduate students?", answer: "Yes, our program strongly encourages undergraduate research. Students can work with faculty on cutting-edge projects, often leading to publications or presentations at conferences." },
    { id: "faq3", question: "What kind of computing resources are available?", answer: "Students have access to high-performance computing clusters, GPU farms, and specialized AI labs equipped with the latest hardware and software." }
  ]
};

const AcademicProgramsPage = () => {
  console.log('AcademicProgramsPage loaded');
  // Example: You could use useSearchParams to determine which discipline to display
  // For this static example, we'll just display a generic AI section.
  // const [searchParams] = useSearchParams();
  // const discipline = searchParams.get('discipline');
  // const subDiscipline = searchParams.get('sub');
  // const selectedDisciplineName = discipline ? discipline.toUpperCase() : "Featured Discipline";

  // For demonstration, we'll use AI as the featured discipline.
  const currentDiscipline = sampleAIDisciplineData;


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <GlobalHeader />

      <main className="flex-grow">
        <section className="py-8 bg-muted/30 border-b border-border/40">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-2 text-primary">Academic Disciplines</h1>
            <p className="text-lg text-muted-foreground text-center mb-6">
              Explore our diverse range of cutting-edge engineering and technology programs.
            </p>
            <InteractiveDisciplineGuide />
          </div>
        </section>

        {/* This section would ideally be dynamic based on the selection from InteractiveDisciplineGuide */}
        {/* For this example, we showcase a pre-defined "Artificial Intelligence" section */}
        <section id="discipline-details" className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-sky-500 to-cyan-400">
              {currentDiscipline.name}
            </h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {currentDiscipline.overview}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <DepartmentShowcaseCard
              departmentName="AI Core Program"
              description="Foundational and advanced studies in Artificial Intelligence, Machine Learning, and Data Science. Equipping students with theoretical knowledge and practical skills."
              stats={{ labs: 5, faculty: 25, publications: 150 }}
              departmentPageLink="/academic-programs?discipline=cse&sub=ai#core-details" // Example link
              imageUrl="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <DepartmentShowcaseCard
              departmentName="Robotics & Automation Lab"
              description="Pioneering research in autonomous systems, human-robot interaction, and intelligent manufacturing. Home to state-of-the-art robotic platforms."
              stats={{ labs: 2, faculty: 10, publications: 60 }}
              departmentPageLink="/innovation-hub?center=robotics-lab" // Link to innovation hub for specific lab
              imageUrl="https://images.unsplash.com/photo-1581092921462-68495e50a3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3RpY3MlMjBsYWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            />
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Cpu className="mr-3 h-7 w-7" /> Why Study AI Here?
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />World-renowned faculty leading transformative research.</li>
                  <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />Access to state-of-the-art labs and computing resources.</li>
                  <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />Collaborative environment with industry partners and startups.</li>
                  <li className="flex items-start"><ArrowRight className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />Focus on ethical AI and real-world impact.</li>
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="default" className="w-full">
                    <Link to="/admissions">Explore Admissions <ArrowRight className="ml-2 h-4 w-4"/></Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mb-16">
            <ArchitecturalVisualizationModule
              buildingId="ai-innovation-center"
              buildingName="AI Innovation & Research Center"
              buildingDescription="A futuristic hub designed to foster collaboration and breakthroughs in artificial intelligence. Features smart labs, data visualization suites, and agile research spaces."
              placeholderImageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1dHVyaXN0aWMlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              accentColor="border-sky-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Program Details</h3>
              <Tabs defaultValue="core-courses" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="core-courses">Core Courses</TabsTrigger>
                  <TabsTrigger value="research-areas">Research Areas</TabsTrigger>
                  <TabsTrigger value="faculty">Key Faculty</TabsTrigger>
                </TabsList>
                <TabsContent value="core-courses" className="p-6 bg-muted/30 rounded-lg border">
                  <ul className="space-y-4">
                    {currentDiscipline.courses.map(course => (
                      <li key={course.id}>
                        <h4 className="font-semibold text-foreground">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                      </li>
                    ))}
                  </ul>
                   <Button variant="link" asChild className="mt-4 px-0 text-primary">
                    <Link to="/academic-programs/ai/full-curriculum">View Full Curriculum <ArrowRight className="ml-2 h-4 w-4"/></Link>
                  </Button>
                </TabsContent>
                <TabsContent value="research-areas" className="p-6 bg-muted/30 rounded-lg border">
                  <ul className="space-y-4">
                    {currentDiscipline.researchAreas.map(area => (
                      <li key={area.id}>
                        <h4 className="font-semibold text-foreground">{area.name}</h4>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" asChild className="mt-4 px-0 text-primary">
                    <Link to="/innovation-hub#ai-research">Explore AI Research <ArrowRight className="ml-2 h-4 w-4"/></Link>
                  </Button>
                </TabsContent>
                <TabsContent value="faculty" className="p-6 bg-muted/30 rounded-lg border">
                  <p className="text-muted-foreground mb-4">Meet some of our leading faculty in Artificial Intelligence.</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary"/>
                        <span className="font-medium">Dr. Evelyn Reed</span> - Expert in Deep Learning
                    </div>
                     <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary"/>
                        <span className="font-medium">Prof. Kenji Tanaka</span> - Specialist in Robotics & CV
                    </div>
                  </div>
                  <Button variant="link" asChild className="mt-4 px-0 text-primary">
                    <Link to="/faculty-directory?department=ai">View All AI Faculty <ArrowRight className="ml-2 h-4 w-4"/></Link>
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {currentDiscipline.faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index + 1}`} key={faq.id}>
                    <AccordionTrigger className="hover:no-underline text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </section>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default AcademicProgramsPage;