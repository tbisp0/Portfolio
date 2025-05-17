import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ProfileProps {
  name: string;
  title: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, bio }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImageFile(file);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Image Section */}
        <motion.div 
          className="lg:col-span-4 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 mb-6">
            <div
              className={`
                w-full h-full rounded-2xl overflow-hidden 
                border-2 border-transparent shadow-xl
              `}
            >
              <img 
                src="/images/tarcisio_bispo.png" // coloque o caminho da sua foto aqui
                alt="Foto de Tarcisio Bispo de Araujo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Bio Section */}
        <motion.div 
          className="lg:col-span-8 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-gray-dark mb-3">
            {name}
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1.5 bg-portfolio-blue mb-6"
          ></motion.div>
          
          <h2 className="text-xl md:text-2xl text-portfolio-blue mb-8 font-medium">
            {title}
          </h2>
          
          <p className="text-portfolio-gray-dark leading-relaxed mb-10 max-w-3xl text-base md:text-lg">
            {bio}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              className="group bg-portfolio-blue hover:bg-portfolio-blue-dark text-white transition-all duration-300 rounded-full pl-6 pr-5"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1NgQorqxUXbGKUaDruLfflxB4_6GhJyo8/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-2 transition-transform group-hover:translate-y-0.5 duration-300" />
                <span>Download CV</span>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="group border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-all duration-300 rounded-full pl-6 pr-5"
              asChild
            >
              <a href="mailto:contato@tarcisiobispo.com">
                <Mail size={18} className="mr-2 transition-transform group-hover:translate-y-0.5 duration-300" />
                <span>Vamos Conversar</span>
                <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1 duration-300" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="group bg-transparent hover:bg-portfolio-blue/10 text-portfolio-blue transition-all duration-300 rounded-full"
              asChild
            >
              <a href="https://www.linkedin.com/in/tarcisiobispouxdesigner/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2 transition-transform group-hover:scale-110 duration-300" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
