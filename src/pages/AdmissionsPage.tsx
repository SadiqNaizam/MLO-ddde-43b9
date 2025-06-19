import React from 'react';
import { Link } from 'react-router-dom';
import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { BookOpenText, Award, CalendarDays, DollarSign, MailQuestion, Download, Send } from 'lucide-react';

const admissionFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  programOfInterest: z.string().optional(),
  inquiry: z.string().min(10, { message: "Your inquiry must be at least 10 characters." }),
});

type AdmissionFormValues = z.infer<typeof admissionFormSchema>;

const AdmissionsPage: React.FC = () => {
  console.log('AdmissionsPage loaded');

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      programOfInterest: "Undecided",
      inquiry: "",
    },
  });

  function onSubmit(values: AdmissionFormValues) {
    console.log("Admission Inquiry Submitted:", values);
    toast.success("Your inquiry has been submitted successfully!", {
      description: "We will get back to you shortly.",
    });
    form.reset();
  }

  const pageSections = [
    {
      id: "programs",
      title: "Academic Programs Overview",
      icon: BookOpenText,
      items: [
        {
          value: "undergraduate",
          trigger: "Undergraduate Programs",
          content: "Apex Institute offers a range of cutting-edge undergraduate programs designed to foster innovation and critical thinking. Explore Bachelor of Science degrees in fields like AI & Machine Learning, Quantum Engineering, Sustainable Energy Systems, and Bio-Robotics. Our curriculum integrates foundational theory with hands-on research from year one.",
        },
        {
          value: "postgraduate",
          trigger: "Postgraduate Programs",
          content: "Elevate your expertise with our world-renowned postgraduate programs. We offer Master's and Doctoral degrees focused on deep research and specialization. Our flagship programs include PhDs in Advanced Materials Science, Computational Neuroscience, and Space Systems Engineering, alongside specialized Master's in Cybersecurity and Ethical AI.",
        },
      ],
    },
    {
      id: "criteria",
      title: "Admission Criteria & Process",
      icon: Award,
      items: [
        {
          value: "admission-criteria",
          trigger: "Rigorous Admission Criteria",
          content: "Admission to Apex Institute is highly competitive and based on a holistic review. We seek exceptional individuals who demonstrate outstanding academic achievement, a passion for science and technology, strong problem-solving skills, and leadership potential. Standardized test scores (where applicable), letters of recommendation, and a compelling statement of purpose are key components.",
        },
        {
          value: "application-process",
          trigger: "Application Process",
          content: "The application process is conducted entirely online through our admissions portal. Key steps include: 1. Creation of an online account. 2. Submission of academic transcripts. 3. Uploading standardized test scores. 4. Submission of letters of recommendation. 5. Writing a personal essay and research interest statement. 6. Payment of the application fee. Interviews may be required for shortlisted candidates.",
        },
        {
          value: "deadlines",
          trigger: "Key Admission Deadlines",
          content: "Stay ahead by noting these important dates:\n- Early Application Deadline: November 1st, 2024\n- Regular Application Deadline: January 15th, 2025\n- Financial Aid Application: February 1st, 2025\n- Admission Decisions Released: March 30th, 2025\n- Enrollment Confirmation: May 1st, 2025",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50">
      <GlobalHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400">
              Admissions at Apex Institute
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Embark on a journey of discovery and innovation. Learn how to join a community of forward-thinkers shaping the future of technology and engineering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" asChild className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-8 py-3">
                <a href="#apply">Start Your Application</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-sky-500 text-sky-400 hover:bg-sky-700/30 hover:text-sky-300 font-semibold px-8 py-3">
                <a href="#inquiry">Ask a Question</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {pageSections.map((section) => (
            <section key={section.id} className="mb-16">
              <div className="flex items-center mb-6">
                <section.icon className="h-8 w-8 text-sky-400 mr-3" />
                <h2 className="text-3xl font-semibold text-slate-100">{section.title}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {section.items.map((item) => (
                  <AccordionItem key={item.value} value={item.value} className="bg-slate-800/70 border-slate-700 rounded-lg px-2">
                    <AccordionTrigger className="text-lg font-medium text-slate-200 hover:text-sky-300 py-4 px-4 text-left">
                      {item.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 px-4 pb-4 pt-2 text-base leading-relaxed">
                      {item.content.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < item.content.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}

          <Separator className="my-16 bg-slate-700" />

          {/* Student Stipends & Financial Aid */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-sky-800 via-cyan-800 to-indigo-800 border-cyan-700 shadow-xl">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <DollarSign className="h-8 w-8 text-yellow-300 mr-3" />
                  <CardTitle className="text-3xl font-semibold text-yellow-200">Unique Student Stipends & Financial Aid</CardTitle>
                </div>
                <CardDescription className="text-cyan-100 text-base">
                  We are committed to attracting the brightest minds, regardless of financial background.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-100 space-y-4 text-base">
                <p>
                  Apex Institute offers generous stipends for all admitted postgraduate research students, covering tuition fees and living expenses. Undergraduate students have access to a wide array of merit-based scholarships and need-based financial aid packages.
                </p>
                <p>
                  Our "Innovation Fellows" program provides additional funding and mentorship for students pursuing groundbreaking research projects. We believe financial constraints should not hinder academic excellence.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" asChild className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold">
                  <Link to="/financial-aid-details">Learn More About Financial Support</Link>
                </Button>
              </CardFooter>
            </Card>
          </section>

          <Separator className="my-16 bg-slate-700" />
          
          {/* Call to Action / Allure */}
          <section className="mb-16 text-center">
             <h2 className="text-3xl font-semibold text-slate-100 mb-4">The Apex Advantage</h2>
             <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                Studying at Apex Institute means joining an elite community dedicated to pushing the boundaries of knowledge. With state-of-the-art facilities, world-renowned faculty, and a vibrant ecosystem of innovation, you'll be empowered to achieve your highest potential and make a lasting impact on the world.
             </p>
             <Button size="lg" asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold">
                <Link to="/academic-programs">Explore Our Programs</Link>
             </Button>
             <Button variant="outline" size="lg" className="ml-4 border-slate-500 text-slate-300 hover:bg-slate-700/50 hover:text-slate-100 font-semibold">
                <Download className="mr-2 h-5 w-5" /> Download Admissions Brochure
             </Button>
          </section>


          <Separator className="my-16 bg-slate-700" />

          {/* Inquiry Form Section */}
          <section id="inquiry" className="mb-16 scroll-mt-20">
            <Card className="bg-slate-800 border-slate-700 shadow-xl">
              <CardHeader className="text-center">
                <MailQuestion className="h-12 w-12 text-sky-400 mx-auto mb-4" />
                <CardTitle className="text-3xl font-semibold text-slate-100">Have Questions? Reach Out to Us!</CardTitle>
                <CardDescription className="text-slate-400 text-base mt-2">
                  Our admissions team is here to help. Fill out the form below, and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Ada Lovelace" {...field} className="bg-slate-700 border-slate-600 text-slate-50 focus:border-sky-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="e.g., ada@example.com" {...field} className="bg-slate-700 border-slate-600 text-slate-50 focus:border-sky-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="programOfInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Program of Interest (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., PhD in Quantum Engineering" {...field} className="bg-slate-700 border-slate-600 text-slate-50 focus:border-sky-500" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="inquiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Your Inquiry</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please type your question or message here..."
                              rows={5}
                              {...field}
                              className="bg-slate-700 border-slate-600 text-slate-50 focus:border-sky-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold">
                      <Send className="mr-2 h-5 w-5" /> Submit Inquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default AdmissionsPage;