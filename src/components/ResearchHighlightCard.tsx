import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, FlaskConical, Rocket, ArrowRight, BookOpen, Lightbulb, Building } from 'lucide-react';

interface ResearchHighlightCardProps {
  type: 'patent' | 'paper' | 'startup' | 'publication' | 'project';
  title: string;
  abstract: string;
  detailsLink: string;
  imageUrl?: string;
  date?: string; // e.g., "Published: Jan 2024", "Founded: 2023"
  authors?: string[]; // e.g., ["Dr. Ada Lovelace", "Prof. Charles Babbage"]
  status?: string; // e.g., "Granted", "Published", "Seed Stage", "Ongoing"
  tags?: string[]; // e.g., ["AI", "Robotics", "Quantum Computing"]
}

const TypeIcon: React.FC<{ type: ResearchHighlightCardProps['type'] }> = ({ type }) => {
  switch (type) {
    case 'paper':
      return <FileText className="h-6 w-6 text-blue-400" aria-label="Paper" />;
    case 'patent':
      return <Lightbulb className="h-6 w-6 text-yellow-400" aria-label="Patent" />; // Changed from FlaskConical
    case 'startup':
      return <Rocket className="h-6 w-6 text-purple-400" aria-label="Startup" />;
    case 'publication':
      return <BookOpen className="h-6 w-6 text-green-400" aria-label="Publication" />;
    case 'project':
      return <Building className="h-6 w-6 text-teal-400" aria-label="Project" />; // Added project type
    default:
      return null;
  }
};

const ResearchHighlightCard: React.FC<ResearchHighlightCardProps> = ({
  type,
  title,
  abstract,
  detailsLink,
  imageUrl,
  date,
  authors,
  status,
  tags,
}) => {
  console.log('ResearchHighlightCard loaded for:', title);

  return (
    <Card className="flex flex-col h-full bg-slate-800/80 text-slate-50 border border-slate-700 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 rounded-lg overflow-hidden group">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={`Visual representation for ${title}`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader className="pt-6 px-6">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
            {title}
          </CardTitle>
          <div className="flex-shrink-0">
            <TypeIcon type={type} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 py-4 space-y-3">
        <p className="text-sm text-slate-300 line-clamp-4 leading-relaxed">
          {abstract}
        </p>
        <div className="space-y-1 text-xs text-slate-400">
          {date && <p><strong className="font-medium text-slate-300">Date:</strong> {date}</p>}
          {authors && authors.length > 0 && (
            <p><strong className="font-medium text-slate-300">Authors:</strong> {authors.join(', ')}</p>
          )}
          {status && (
            <p><strong className="font-medium text-slate-300">Status:</strong> <Badge variant="secondary" className="ml-1 text-xs">{status}</Badge></p>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sky-300 border-sky-700 bg-sky-900/30 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-4 border-t border-slate-700/50">
        <Button asChild variant="default" className="w-full bg-blue-600 hover:bg-blue-500 text-white group-hover:shadow-md group-hover:shadow-blue-500/50 transition-all">
          <Link to={detailsLink} className="flex items-center justify-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResearchHighlightCard;