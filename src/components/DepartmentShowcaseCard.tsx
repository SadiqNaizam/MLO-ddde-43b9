import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, FlaskConical, Users, BookOpenText } from 'lucide-react';

interface DepartmentStats {
  labs: number;
  faculty: number;
  publications?: number;
}

interface DepartmentShowcaseCardProps {
  departmentName: string;
  description: string;
  stats: DepartmentStats;
  departmentPageLink: string;
  imageUrl?: string;
}

const DepartmentShowcaseCard: React.FC<DepartmentShowcaseCardProps> = ({
  departmentName,
  description,
  stats,
  departmentPageLink,
  imageUrl,
}) => {
  console.log(`DepartmentShowcaseCard loaded for: ${departmentName}`);

  return (
    <Card className="group w-full max-w-md bg-slate-800 border-slate-700 text-slate-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col">
      {imageUrl && (
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl}
              alt={`${departmentName} department visual`}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </AspectRatio>
        </CardHeader>
      )}
      
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
            {departmentName}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex-grow space-y-3">
          <CardDescription className="text-slate-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-200 ease-in-out min-h-[3.75rem]"> {/* Approx 3 lines for text-sm */}
            {description}
          </CardDescription>
          
          <div className="pt-3 border-t border-slate-700/70 space-y-2">
            <h4 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Key Metrics</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center">
                <FlaskConical className="w-4 h-4 mr-2 text-cyan-400 shrink-0" />
                Labs: {stats.labs}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-cyan-400 shrink-0" />
                Faculty: {stats.faculty}
              </span>
              {stats.publications !== undefined && (
                <span className="flex items-center col-span-2 sm:col-span-1">
                  <BookOpenText className="w-4 h-4 mr-2 text-cyan-400 shrink-0" />
                  Publications: {stats.publications}
                </span>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-0 mt-auto pt-4">
          <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link to={departmentPageLink}>
              Explore Department
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default DepartmentShowcaseCard;