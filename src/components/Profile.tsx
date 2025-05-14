
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
          <div className="relative group w-64 h-64 mb-6">
            <input
              type="file"
              id="profile-image"
              className="sr-only"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label 
              htmlFor="profile-image" 
              className="cursor-pointer block w-full h-full"
            >
              <div className={`
                w-full h-full rounded-2xl overflow-hidden 
                border-2 transition-all duration-300
                ${imagePreview 
                  ? 'border-transparent shadow-xl' 
                  : 'border-dashed border-portfolio-blue/40 hover:border-portfolio-blue hover:shadow-lg'
                }
              `}>
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center">
                    <Avatar className="w-24 h-24 mb-4 bg-slate-200 border border-slate-300">
                      <AvatarFallback className="text-slate-400 text-4xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 15a6 6 0 100-12 6 6 0 000 12z"></path>
                          <path d="M19 21a7 7 0 10-14 0"></path>
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-portfolio-gray-dark font-medium">
                      Insira sua foto aqui
                    </p>
                    <p className="text-xs text-portfolio-gray-dark/70 mt-2">
                      Recomendação: 800x800px
                    </p>
                  </div>
                )}
              </div>
              
              {/* Hover overlay */}
              <div className={`
                absolute inset-0 rounded-2xl flex items-center justify-center
                bg-portfolio-blue/10 backdrop-blur-sm opacity-0 
                group-hover:opacity-100 transition-opacity duration-300
                ${imagePreview ? '' : 'hidden'}
              `}>
                <p className="text-white bg-portfolio-blue-dark/80 px-3 py-1 rounded-full text-sm">
                  Alterar foto
                </p>
              </div>
            </label>
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
            >
              <Download size={18} className="mr-2 transition-transform group-hover:translate-y-0.5 duration-300" />
              <span>Download CV</span>
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
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
