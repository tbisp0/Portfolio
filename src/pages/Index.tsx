import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Profile from '../components/Profile';
import ProjectShowcase from '../components/ProjectShowcase';
import BacklogCycle from '../components/BacklogCycle';
import Contact from '../components/Contact';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const profileData = {
    name: "Tarcisio Bispo de Araujo",
    title: "UX/Product Designer com foco em estratégia, impacto e experiência",
    bio: "Sou UX/Product Designer com forte atuação no design de produtos digitais focados em experiência do usuário, conversão e impacto de negócio. Com background em Marketing Digital, SEO e IA, integro estratégia, design e usabilidade em processos contínuos de melhoria e inovação. Já atuei em contextos acadêmicos, e-commerce B2B e comunicação institucional, sempre guiado por dados, empatia e visão de produto."
  };

  const projects = [
    {
      title: "FGV LAW",
      category: "Navegação e Usabilidade",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      summary: "Reestruturei a usabilidade e a navegação da plataforma FGV LAW, otimizando a organização de conteúdos jurídicos e o uso de abas. Reduzimos o tempo de navegação em 35% e aumentamos a satisfação dos usuários.",
      details: [
        "Análise heurística da interface",
        "Mapeamento de fluxo e wireframes",
        "Prototipação com foco em clareza informacional",
        "Testes de usabilidade e iterações",
        "Métricas de engajamento e feedback positivo"
      ]
    },
    {
      title: "Área de Pesquisa da Direito GV",
      category: "Mapas, Fluxos e Pesquisa",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      summary: "Redesenhei a experiência da área de pesquisa acadêmica da Direito GV, focando em fluxos intuitivos e melhor usabilidade para pesquisadores.",
      details: [
        "Entrevistas com usuários internos",
        "Criação de fluxogramas e mapa do site",
        "Wireframes validados com stakeholders",
        "Documentação UX e integração com desenvolvimento",
        "Resultados: melhor adesão e menor atrito no uso"
      ]
    },
    {
      title: "Taliparts",
      category: "UX Estratégico + B2B",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
      summary: "No Taliparts, atuei do zero até o MVP, conduzindo pesquisa com clientes, jornada, benchmark e entregas focadas na experiência de compra B2B.",
      details: [
        "Benchmark e análise da concorrência",
        "Entrevistas com compradores de peças automotivas",
        "Mapeamento da jornada do cliente e definição de personas",
        "Diagrama de empatia, fluxo e arquitetura do sistema",
        "Estratégia de produto alinhada a conversão e captação de leads"
      ]
    },
    {
      title: "TV Institucional",
      category: "Engajamento e Comunicação Visual",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
      summary: "Desenvolvi uma solução de comunicação institucional com TVs no hall da escola para promover eventos e fortalecer o vínculo com a comunidade.",
      details: [
        "Pesquisa com alunos e gestão escolar",
        "Curadoria de conteúdo e wireframes das telas",
        "Planejamento de engajamento e calendário dinâmico",
        "Resultados: aumento da retenção de mensagens e mais participação nos eventos"
      ]
    }
  ];

  // Ref for scroll
  const projectsRef = useRef(null);
  
  // Scroll handler
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(135deg, #f5f8ff 0%, #e3eafe 100%)"
      }}
    >
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,63,212,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,63,212,0.05),transparent_70%)]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Profile Section */}
          <Profile {...profileData} />
          
          {/* Scroll indicator */}
          <motion.div 
            className="hidden md:flex justify-center w-full absolute bottom-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <button 
              onClick={scrollToProjects} 
              className="flex flex-col items-center text-portfolio-blue-dark opacity-80 hover:opacity-100 transition-opacity"
            >
              <span className="mb-2 text-sm font-medium">Explore projetos</span>
              <ArrowDown className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Projects Section */}
      <div ref={projectsRef} className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ProjectShowcase projects={projects} />
          </motion.div>
        </div>
      </div>
      
      {/* Backlog Cycle Section with Pattern Background */}
      <div className="py-20 relative bg-gradient-to-b from-slate-100 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,63,212,0.03),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BacklogCycle />
          </motion.div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
