import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AcademicProgramsPage from "./pages/AcademicProgramsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import FacultyDirectoryPage from "./pages/FacultyDirectoryPage";
import Homepage from "./pages/Homepage";
import InnovationHubPage from "./pages/InnovationHubPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/academic-programs" element={<AcademicProgramsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/faculty-directory" element={<FacultyDirectoryPage />} />
          <Route path="/innovation-hub" element={<InnovationHubPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
