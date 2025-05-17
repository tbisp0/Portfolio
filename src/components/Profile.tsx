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
                src="/images/tarcisio_bispo.png"
                alt="Foto de Tarcisio Bispo de Araujo"
                className="w-full h-full object-cover rounded-2xl"
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

            {/* WhatsApp Button - Adicionado manualmente */}
            <Button 
              variant="outline" 
              className="group border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-all duration-300 rounded-full pl-6 pr-5"
              asChild
            >
              <a href="https://wa.me/19990137380" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 w-5 h-5" />
                <span>Vamos Conversar</span>
                <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1 duration-300" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;

// Adicione o ícone do WhatsApp manualmente (caso não tenha no Lucide)
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M16.7 13.6c-.3-.2-1.7-.8-2-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2.1 1.1 2.6.4.5 2.1 2.8 5.1 3.7.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"
      fill="#25D366"
    />
    <path
      d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.3C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.4-4.7-1.2l-.3-.2-2.8.7.7-2.7-.2-.3C4.4 15.3 4 13.7 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
      fill="#25D366"
    />
  </svg>
);
