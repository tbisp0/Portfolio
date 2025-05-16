
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

interface BacklogItem {
  id: string;
  challenge: string;
  solution: string;
  result: string;
}

const BacklogCycle: React.FC = () => {
  const backlogItems: BacklogItem[] = [
    {
      id: "backlog-1",
      challenge: "A FGV precisava aumentar a visibilidade de cursos, palestras e atualizações institucionais.",
      solution: "A solução foi implementar um painel digital estratégico no hall da instituição, com curadoria de conteúdo e atualização automatizada.",
      result: "Aumento do engajamento presencial em 72% e maior percepção institucional."
    },
    {
      id: "backlog-2",
      challenge: "Baixa conversão nas páginas de produtos do e-commerce B2B.",
      solution: "Redesenho da experiência de navegação com foco em features valorizadas pelo público corporativo e simplificação do processo de cotação.",
      result: "Aumento de 27% nas conversões de cotações e redução de 40% no abandono da jornada de compra."
    },
    {
      id: "backlog-3",
      challenge: "Dificuldade dos pesquisadores em localizar recursos e publicações acadêmicas na plataforma.",
      solution: "Reestruturação da arquitetura da informação e implementação de sistema de busca avançada com filtros contextuais.",
      result: "Redução de 35% no tempo de busca e aumento significativo na satisfação dos usuários acadêmicos."
    },
    {
      id: "backlog-3",
      challenge: "Dificuldade dos pesquisadores em localizar recursos e publicações acadêmicas na plataforma.",
      solution: "Reestruturação da arquitetura da informação e implementação de sistema de busca avançada com filtros contextuais.",
      result: "Redução de 35% no tempo de busca e aumento significativo na satisfação dos usuários acadêmicos."
    },
    {
      id: "backlog-3",
      challenge: "Dificuldade dos pesquisadores em localizar recursos e publicações acadêmicas na plataforma.",
      solution: "Reestruturação da arquitetura da informação e implementação de sistema de busca avançada com filtros contextuais.",
      result: "Redução de 35% no tempo de busca e aumento significativo na satisfação dos usuários acadêmicos."
    },
    {
      id: "backlog-3",
      challenge: "Dificuldade dos pesquisadores em localizar recursos e publicações acadêmicas na plataforma.",
      solution: "Reestruturação da arquitetura da informação e implementação de sistema de busca avançada com filtros contextuais.",
      result: "Redução de 35% no tempo de busca e aumento significativo na satisfação dos usuários acadêmicos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-portfolio-blue-dark mb-3 flex items-center justify-center gap-3">
          <span className="text-3xl">🌀</span> Ciclo de Backlogs Estratégicos
        </h2>
        <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
        <p className="text-portfolio-gray-dark mb-12 max-w-3xl mx-auto">
          Desafios reais enfrentados por stakeholders e soluções de UX aplicadas estrategicamente para resolver problemas de negócio.
        </p>
      </motion.div>
      
      <motion.div
        className="grid gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Accordion type="single" collapsible className="w-full">
          {backlogItems.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <AccordionItem value={item.id} className="mb-6 overflow-hidden border-none">
                <div className="relative">
                  {/* Decorative vertical line */}
                  <div className="absolute left-8 top-0 h-full w-0.5 bg-portfolio-blue-light/20 z-0"></div>
                  
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 relative z-10">
                    <AccordionTrigger className="px-8 py-6 text-left font-medium text-portfolio-gray-dark hover:no-underline group">
                      <div className="flex items-start gap-4">
                        <div className="bg-portfolio-blue-light/10 text-portfolio-blue-dark p-3 rounded-lg flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-portfolio-blue-dark pr-8 group-hover:text-portfolio-blue transition-colors">
                            {item.challenge}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                      <div className="px-8 pb-6 pl-[4.5rem] space-y-6">
                        <div className="space-y-4 border-l-2 border-portfolio-blue-light/30 pl-6 relative">
                          <div className="absolute w-3 h-3 bg-portfolio-blue-light rounded-full -left-[7px] top-2"></div>
                          <h4 className="font-semibold text-portfolio-blue">Solução</h4>
                          <p className="text-portfolio-gray-dark">{item.solution}</p>
                        </div>
                        
                        <div className="space-y-4 border-l-2 border-portfolio-blue/30 pl-6 relative">
                          <div className="absolute w-3 h-3 bg-portfolio-blue rounded-full -left-[7px] top-2"></div>
                          <h4 className="font-semibold text-portfolio-blue-dark">Resultado</h4>
                          <p className="text-portfolio-gray-dark">{item.result}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default BacklogCycle;
