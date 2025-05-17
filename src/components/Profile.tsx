import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, ArrowRight } from 'lucide-react';

// Ícone do WhatsApp
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    width={32}
    height={32}
    className={`w-8 h-8 ${props.className || ""}`}
    aria-label="WhatsApp"
  >
    <circle cx="16" cy="16" r="16" fill="none" />
    <path
      d="M16 6.667a9.333 9.333 0 0 0-8.13 13.973l-1.07 3.12a1 1 0 0 0 1.263 1.263l3.12-1.07A9.333 9.333 0 1 0 16 6.667Zm0 16a6.667 6.667 0 0 1-3.413-.94l-.24-.14-2.08.713.713-2.08-.14-.24A6.667 6.667 0 1 1 16 22.667Zm3.36-4.36c-.187-.093-1.107-.547-1.277-.607-.17-.06-.293-.093-.417.093-.123.187-.48.607-.587.733-.107.127-.217.14-.403.047-.187-.093-.79-.29-1.504-.924-.556-.496-.93-1.11-1.04-1.297-.11-.187-.012-.288.082-.38.084-.083.187-.217.28-.33.093-.113.124-.187.187-.31.062-.124.031-.233-.015-.327-.047-.093-.417-1.007-.573-1.38-.15-.36-.303-.312-.417-.318-.107-.007-.233-.009-.36-.009-.124 0-.327.047-.5.233-.17.187-.66.646-.66 1.577 0 .93.676 1.83.77 1.957.093.124 1.33 2.04 3.23 2.78.452.155.805.247 1.08.316.454.108.87.093 1.197.057.366-.043 1.107-.453 1.263-.89.156-.437.156-.812.11-.89-.047-.078-.17-.124-.357-.217Z"
      fill="currentColor"
    />
  </svg>
);

interface ProfileProps {
  name: string;
  title: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, bio }) => {
  return (
    <section className="flex flex-col justify-center py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center lg:items-start w-full px-4 sm:px-8">
        {/* Card da foto */}
        <motion.div
          className="lg:col-span-4 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center mb-6 lg:mb-0 w-full">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl bg-white overflow-hidden hover:scale-105 transition-transform duration-300 mx-auto">
              <img
                src="/portfolio/images/tarcisio_bispo.png"
                alt="Foto de Tarcisio Bispo de Araujo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="lg:col-span-8 flex flex-col max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="heading-1 mb-2 text-balance"
            style={{ color: "var(--color-primary)" }}
          >
            {name}
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1.5 mb-6 rounded"
            style={{ background: "var(--color-secondary)" }}
          ></motion.div>
          <h2 className="heading-2 mb-8" style={{ color: "var(--color-secondary)" }}>
            {title}
          </h2>
          <p className="paragraph mb-10" style={{ color: "var(--color-muted)" }}>
            {bio}
          </p>
          {/* Botões */}
          <div className="flex flex-nowrap flex-row gap-4 sm:gap-6 mb-16 overflow-x-auto">
            <Button
              style={{ backgroundColor: "#25D366" }}
              className="group text-white hover:bg-[#1ebe5d] transition-all duration-300 rounded-full pl-5 pr-5 sm:pl-7 sm:pr-6 py-3 sm:py-4 text-base sm:text-lg items-center"
              asChild
            >
              <a href="https://wa.me/19990137380" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <WhatsAppIcon className="mr-3" width={28} height={28} />
                <span>Vamos Conversar</span>
                <ArrowRight size={24} className="ml-2 sm:size-7 transition-transform group-hover:translate-x-1 duration-300" />
              </a>
            </Button>
            <Button
              variant="default"
              className="group bg-portfolio-blue hover:bg-portfolio-blue-dark text-white transition-all duration-300 rounded-full pl-5 pr-5 sm:pl-7 sm:pr-6 py-3 sm:py-4 text-base sm:text-lg items-center"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1NgQorqxUXbGKUaDruLfflxB4_6GhJyo8/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download size={24} className="mr-3 w-7 h-7 sm:w-8 sm:h-8" />
                <span>Download CV</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              className="group bg-transparent hover:bg-portfolio-blue/10 text-portfolio-blue transition-all duration-300 rounded-full pl-5 pr-5 sm:pl-7 sm:pr-6 py-3 sm:py-4 text-base sm:text-lg items-center"
              asChild
            >
              <a href="https://www.linkedin.com/in/tarcisiobispouxdesigner/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Linkedin size={24} className="mr-3 w-7 h-7 sm:w-8 sm:h-8" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
          {/* Links extras, se houver */}
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
