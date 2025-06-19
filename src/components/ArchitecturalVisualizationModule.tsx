import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Building2, Orbit, LineChart, ZoomIn, ZoomOut, RotateCcw, Info, Lightbulb } from 'lucide-react';

type BuildingView = 'exterior' | 'interior_layout' | 'data_flow' | 'innovation_spotlight';

interface ArchitecturalVisualizationModuleProps {
  buildingId: string;
  buildingName: string;
  buildingDescription: string;
  placeholderImageUrl: string; // URL for a static image representing the building or model
  availableViews?: BuildingView[];
  defaultView?: BuildingView;
  accentColor?: string; // e.g., 'border-sky-500' or 'bg-green-500' for specific themes
}

const ArchitecturalVisualizationModule: React.FC<ArchitecturalVisualizationModuleProps> = ({
  buildingId,
  buildingName,
  buildingDescription,
  placeholderImageUrl,
  availableViews = ['exterior', 'interior_layout', 'data_flow', 'innovation_spotlight'],
  defaultView = 'exterior',
  accentColor = 'border-blue-500'
}) => {
  const [currentView, setCurrentView] = useState<BuildingView>(defaultView);

  console.log(`ArchitecturalVisualizationModule loaded for: ${buildingName} (ID: ${buildingId})`);

  const renderViewContent = () => {
    switch (currentView) {
      case 'exterior':
        return (
          <div className="text-center">
            <Orbit className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Exterior 3D Model View</p>
            <p className="text-xs mt-1">Interactive placeholder: Pan, zoom, and rotate the building exterior.</p>
          </div>
        );
      case 'interior_layout':
        return (
          <div className="text-center">
            <Building2 className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Interior Layout Visualization</p>
            <p className="text-xs mt-1">Explore floor plans and key internal structures.</p>
          </div>
        );
      case 'data_flow':
        return (
          <div className="text-center">
            <LineChart className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Simulated Data & Activity Flow</p>
            <p className="text-xs mt-1">Visualizing network traffic, energy consumption, or research data streams.</p>
          </div>
        );
      case 'innovation_spotlight':
        return (
          <div className="text-center">
            <Lightbulb className="mx-auto h-12 w-12 text-yellow-400 mb-2" />
            <p className="text-sm text-muted-foreground">Innovation Hotspots</p>
            <p className="text-xs mt-1">Highlighting key labs, research projects, or breakthrough areas.</p>
          </div>
        );
      default:
        return <p>Select a view to explore.</p>;
    }
  };

  const viewLabels: Record<BuildingView, string> = {
    exterior: "Exterior View",
    interior_layout: "Interior Layout",
    data_flow: "Data Flows",
    innovation_spotlight: "Innovations"
  };

  return (
    <Card className={`w-full overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50 border-2 ${accentColor} transition-all duration-300 hover:shadow-blue-500/50`}>
      <CardHeader className="pb-3 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl lg:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500">{buildingName}</CardTitle>
          <Badge variant="secondary" className="bg-slate-700 text-slate-300 border-slate-600">Interactive Module</Badge>
        </div>
        <CardDescription className="text-sm text-slate-400 pt-1">{buildingDescription}</CardDescription>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        <div className="relative group">
          <AspectRatio ratio={16 / 9} className="bg-slate-700 rounded-md overflow-hidden border border-slate-600">
            <img
              src={placeholderImageUrl}
              alt={`${buildingName} visualization`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Explore {buildingName}</p>
            </div>
          </AspectRatio>
          <div className="absolute top-2 right-2 flex space-x-1">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800/70 hover:bg-slate-700/90 border-slate-600 text-slate-300">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800/70 hover:bg-slate-700/90 border-slate-600 text-slate-300">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-800/70 hover:bg-slate-700/90 border-slate-600 text-slate-300">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700 min-h-[100px] flex flex-col items-center justify-center">
          {renderViewContent()}
        </div>

        {availableViews && availableViews.length > 0 && (
          <div>
            <p className="text-sm font-medium text-slate-300 mb-2">Select Visualization Mode:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {availableViews.map((view) => (
                <Button
                  key={view}
                  variant={currentView === view ? "default" : "outline"}
                  onClick={() => setCurrentView(view)}
                  className={`w-full ${currentView === view ? `${accentColor.replace('border-', 'bg-').replace('-500', '-600')} hover:${accentColor.replace('border-', 'bg-').replace('-500', '-500')} text-white` : 'bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600'}`}
                >
                  {viewLabels[view] || view.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 border-t border-slate-700 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Info className="h-4 w-4" />
          <span>This is an interactive architectural visualization. Click controls or views to explore.</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArchitecturalVisualizationModule;