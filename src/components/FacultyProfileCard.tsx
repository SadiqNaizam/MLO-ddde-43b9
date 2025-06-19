import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from 'lucide-react';

interface FacultyProfileCardProps {
  id: string | number; // For React key and potentially other uses
  name: string;
  title: string;
  department: string;
  imageUrl: string;
  profileUrl: string; // e.g., "/faculty-directory/dr-jane-doe"
}

const FacultyProfileCard: React.FC<FacultyProfileCardProps> = ({
  name,
  title,
  department,
  imageUrl,
  profileUrl,
}) => {
  console.log('FacultyProfileCard loaded for:', name);

  return (
    <Card className="w-full max-w-xs bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] flex flex-col group">
      <CardHeader className="p-0 relative">
        <Link to={profileUrl} aria-label={`View profile for ${name}`}>
          <AspectRatio ratio={3 / 4} className="bg-muted">
            <img
              src={imageUrl || 'https://via.placeholder.com/300x400?text=Faculty+Photo'}
              alt={`Professional photo of ${name}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </Link>
      </CardHeader>

      <CardContent className="p-5 flex-grow flex flex-col items-center text-center">
        <Link to={profileUrl} className="hover:no-underline">
          <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-md text-muted-foreground mt-1 line-clamp-2" title={title}>
          {title}
        </p>
        <p className="text-sm text-accent-foreground/80 mt-1 line-clamp-1" title={department}>
          {department}
        </p>
      </CardContent>

      <CardFooter className="p-4 border-t bg-card-foreground/[.03]">
        <Button asChild variant="outline" className="w-full group/button border-primary/30 text-primary hover:bg-primary/10 hover:border-primary hover:text-primary">
          <Link to={profileUrl}>
            View Full Profile
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FacultyProfileCard;