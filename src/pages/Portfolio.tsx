import React, { useState } from 'react';
import { 
  Palette, 
  Video, 
  Globe, 
  Camera, 
  FileText,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectCategories = [
    { icon: Palette, name: 'Design & Branding' },
    { icon: Video, name: 'Video & Media' },
    { icon: Globe, name: 'Web & Digital' }/*,
    { icon: Camera, name: 'Photography' },
    { icon: FileText, name: 'Case Studies' }*/
  ];

  const projects: Project[] = [
    {
      id: 1,
      category: 'Design & Branding',
      title: 'Travel company Branding',
      description: 'Complete brand identity ',
      image: 'src/assets/images/tjb3.jpg',
      tags: ['Branding', 'Logo Design', 'Identity']
    },
    {
      id: 2,
      category: 'Video & Media',
      title: 'Product Launch Video',
      description: '',
      image: 'src/assets/images/New_CCTV.jpg',
      tags: ['Video Production', 'Marketing', 'Tech']
    },
    {
      id: 3,
      category: 'Web & Digital',
      title: 'Tech Startup Branding',
      description: 'Complete brand identity for an AI-driven tech startup',
      image: 'src/assets/images/20250725_1602_Tech Neon Elegance_simple_compose_01k111h7cjea3b65vbwp0j8ghb.png',
      tags: ['web']
    },
    // Add more projects here...
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto pt-24 text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Real Work. Real Results.
        </h1>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          A showcase of our diverse portfolio spanning design, digital media, web solutions, and innovative case studies.
        </p>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto mb-12 flex justify-center space-x-4">
        <button 
          onClick={() => setActiveCategory('All')}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
            ${activeCategory === 'All' 
              ? 'bg-[#2980B9] text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }
          `}
        >
          All Projects
        </button>
        {projectCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
              ${activeCategory === category.name 
                ? 'bg-[#2980B9] text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }
            `}
          >
            <category.icon size={20} />
            <span>{category.name}</span>
          </button>
        ))}
      </section>

      {/* Project Grid */}
      <section className="container mx-auto grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-800 rounded-lg overflow-hidden group relative"
            onClick={() => openLightbox(project)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                <Maximize2 size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-[#2980B9]">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-8"
          onClick={closeLightbox}
        >
          <div 
            className="bg-[#1E1E1E] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full max-h-[600px] object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#2980B9] mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="flex space-x-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                className="bg-[#2980B9] hover:bg-blue-700 text-white"
                onClick={closeLightbox}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#2980B9]">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Let's collaborate and bring your vision to life. Our team is ready to help you achieve your goals.
        </p>
        <Button 
          className="bg-[#2980B9] hover:bg-blue-700 text-white text-lg px-8 py-3"
        >
          Start a Project
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;