import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import GlobalHeader from '@/components/layout/GlobalHeader';
import GlobalFooter from '@/components/layout/GlobalFooter';
import FacultyProfileCard from '@/components/FacultyProfileCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Users } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  imageUrl: string;
  profileUrl: string;
  researchInterests: string[];
}

const ITEMS_PER_PAGE = 8;

// Sample Faculty Data
const allFacultyMembers: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Distinguished Professor & Director of AI Research',
    department: 'Computer Science & Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/1',
    researchInterests: ['Machine Learning', 'Natural Language Processing', 'Robotics'],
  },
  {
    id: '2',
    name: 'Prof. Kenji Tanaka',
    title: 'Professor, Advanced Materials Science',
    department: 'Materials Science & Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/2',
    researchInterests: ['Nanomaterials', 'Biomaterials', 'Polymer Chemistry'],
  },
  {
    id: '3',
    name: 'Dr. Aisha Khan',
    title: 'Associate Professor, Robotics & Autonomous Systems',
    department: 'Mechanical Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/3',
    researchInterests: ['Human-Robot Interaction', 'Drone Technology', 'Mechatronics'],
  },
  {
    id: '4',
    name: 'Prof. Samuel Green',
    title: 'Head of Department, Electrical Engineering',
    department: 'Electrical & Electronics Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/4',
    researchInterests: ['Power Systems', 'Renewable Energy', 'Microelectronics'],
  },
  {
    id: '5',
    name: 'Dr. Maria Rodriguez',
    title: 'Assistant Professor, BioMedical Imaging',
    department: 'Bioengineering',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/5',
    researchInterests: ['Medical Diagnostics', 'Computational Biology', 'Neuroscience'],
  },
  {
    id: '6',
    name: 'Prof. Chen Wei',
    title: 'Professor, Quantum Computing',
    department: 'Computer Science & Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/6',
    researchInterests: ['Quantum Algorithms', 'Cryptography', 'Information Theory'],
  },
  {
    id: '7',
    name: 'Dr. Ben Carter',
    title: 'Associate Professor, Sustainable Energy Systems',
    department: 'Mechanical Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1627161683021-0c7f5f7b4f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/7',
    researchInterests: ['Solar Energy', 'Wind Turbines', 'Energy Storage'],
  },
  {
    id: '8',
    name: 'Prof. Lena Petrova',
    title: 'Professor of Cybersecurity',
    department: 'Computer Science & Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/8',
    researchInterests: ['Network Security', 'Ethical Hacking', 'Data Privacy'],
  },
  {
    id: '9',
    name: 'Dr. Omar Farooq',
    title: 'Assistant Professor, Chemical Engineering',
    department: 'Chemical Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1610982539693-9e693f6cf009?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/9',
    researchInterests: ['Process Design', 'Catalysis', 'Biochemical Engineering'],
  },
  {
    id: '10',
    name: 'Prof. Sofia Rossi',
    title: 'Professor, Aerodynamics',
    department: 'Aerospace Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1609505848945-999ef187a0a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/10',
    researchInterests: ['Fluid Dynamics', 'Aircraft Design', 'Space Propulsion'],
  },
   {
    id: '11',
    name: 'Dr. Raj Patel',
    title: 'Associate Professor, Data Science',
    department: 'Computer Science & Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/11',
    researchInterests: ['Big Data Analytics', 'Predictive Modeling', 'AI Ethics'],
  },
  {
    id: '12',
    name: 'Prof. Yuna Kim',
    title: 'Professor, Structural Engineering',
    department: 'Civil Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1598257006408-541646168969?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80',
    profileUrl: '/faculty-directory/profile/12',
    researchInterests: ['Earthquake Resistance', 'Bridge Design', 'Sustainable Infrastructure'],
  }
];

const FacultyDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSearchQuery, setCurrentSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log('FacultyDirectoryPage loaded');
  }, []);

  const departments = useMemo(() => {
    const uniqueDepartments = new Set(allFacultyMembers.map(f => f.department));
    return ['All Departments', ...Array.from(uniqueDepartments).sort()];
  }, []);

  const filteredFaculty = useMemo(() => {
    setCurrentPage(1); // Reset to first page on filter change
    return allFacultyMembers.filter(faculty => {
      const matchesSearchTerm = currentSearchQuery === '' ||
        faculty.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        faculty.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
        faculty.researchInterests.some(interest => interest.toLowerCase().includes(currentSearchQuery.toLowerCase()));
      
      const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
      
      return matchesSearchTerm && matchesDepartment;
    });
  }, [currentSearchQuery, selectedDepartment]);

  const totalPages = Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE);
  
  const currentFacultyOnPage = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredFaculty.slice(startIndex, endIndex);
  }, [filteredFaculty, currentPage]);

  const handleSearch = () => {
    setCurrentSearchQuery(searchTerm);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };
  
  const getPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 5; // Example: 1 ... 4 5 6 ... 10
    const halfMax = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow + 2) { // Show all pages if not too many
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <PaginationItem key={i}>
                    <PaginationLink href="#" isActive={currentPage === i} onClick={(e) => { e.preventDefault(); handlePageChange(i); }}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
    } else {
        // Always show first page
        items.push(
            <PaginationItem key={1}>
                <PaginationLink href="#" isActive={currentPage === 1} onClick={(e) => { e.preventDefault(); handlePageChange(1); }}>
                    1
                </PaginationLink>
            </PaginationItem>
        );

        let startPage = Math.max(2, currentPage - halfMax);
        let endPage = Math.min(totalPages - 1, currentPage + halfMax);
        
        if (currentPage - halfMax <= 2) {
            endPage = Math.min(totalPages - 1, maxPagesToShow);
        }
        if (currentPage + halfMax >= totalPages - 1) {
            startPage = Math.max(2, totalPages - maxPagesToShow +1);
        }
        
        if (startPage > 2) {
            items.push(<PaginationItem key="start-ellipsis"><PaginationEllipsis /></PaginationItem>);
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <PaginationItem key={i}>
                    <PaginationLink href="#" isActive={currentPage === i} onClick={(e) => { e.preventDefault(); handlePageChange(i); }}>
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        if (endPage < totalPages - 1) {
            items.push(<PaginationItem key="end-ellipsis"><PaginationEllipsis /></PaginationItem>);
        }
        
        // Always show last page
        items.push(
            <PaginationItem key={totalPages}>
                <PaginationLink href="#" isActive={currentPage === totalPages} onClick={(e) => { e.preventDefault(); handlePageChange(totalPages); }}>
                    {totalPages}
                </PaginationLink>
            </PaginationItem>
        );
    }
    return items;
};


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <GlobalHeader />
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Page Title and Intro */}
          <section className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-teal-400">
              Meet Our Esteemed Faculty
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the brilliant minds shaping the future of engineering and technology research at Apex Institute. Our faculty are leaders in their fields, dedicated to pioneering discovery and inspiring the next generation of innovators.
            </p>
          </section>

          {/* Filters Section */}
          <Card className="mb-10 p-6 shadow-lg border-border/60">
            <CardHeader className="p-0 pb-4 mb-4 border-b">
                <CardTitle className="text-2xl flex items-center">
                    <Users className="mr-3 h-7 w-7 text-primary" />
                    Find Faculty
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="search-faculty" className="text-sm font-medium">Search by Name or Keyword</Label>
                    <div className="flex gap-2">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                        id="search-faculty"
                        type="text"
                        placeholder="e.g., Dr. Reed, AI, Robotics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }}
                        className="pl-10"
                        />
                    </div>
                    <Button onClick={handleSearch} className="min-w-[100px]">
                        <Search className="mr-2 h-4 w-4 sm:hidden md:inline-block" /> Search
                    </Button>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="department-filter" className="text-sm font-medium">Filter by Department</Label>
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger id="department-filter">
                        <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                        {departments.map(dept => (
                        <SelectItem key={dept} value={dept}>
                            {dept}
                        </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                </div>
                </div>
            </CardContent>
          </Card>

          {/* Faculty Grid */}
          <section className="mb-12">
            {currentFacultyOnPage.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {currentFacultyOnPage.map(faculty => (
                  <FacultyProfileCard
                    key={faculty.id}
                    id={faculty.id}
                    name={faculty.name}
                    title={faculty.title}
                    department={faculty.department}
                    imageUrl={faculty.imageUrl}
                    profileUrl={faculty.profileUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No faculty members found matching your criteria.</p>
                <Button variant="link" onClick={() => { setSearchTerm(''); setCurrentSearchQuery(''); setSelectedDepartment('all');}} className="mt-4">
                    Clear Filters
                </Button>
              </div>
            )}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <section className="flex justify-center py-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1);}}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {getPaginationItems()}
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1);}}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </section>
          )}
        </div>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default FacultyDirectoryPage;