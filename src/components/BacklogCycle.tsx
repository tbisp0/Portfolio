
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
  note: string;
}

const BacklogCycle: React.FC = () => {
  const backlogItems: BacklogItem[] = [
    {
      id: "backlog-1",
      challenge: "A FGV precisava aumentar a visibilidade de cursos, palestras e atualizações institucionais.",
      solution: "A solução foi implementar um painel digital estratégico no hall da instituição, com curadoria de conteúdo e atualização automatizada.",
      result: "Aumento do engajamento presencial em 72% e maior percepção institucional.",
      note: "Entendi que, para comunicar com eficiência em ambientes físicos, o conteúdo precisa ser pensado como uma interface viva: ritmo visual, relevância contextual e clareza imediata fazem toda a diferença na atenção e retenção das mensagens.",
    },
    {
      id: "backlog-2",
      challenge: "Usuários da DIREITO FGV tinham dificuldade em localizar documentos e conteúdos relevantes dentro do portal acadêmico.",
      solution: "Redesenho da experiência de navegação com foco em features valorizadas pelo público corporativo e simplificação do processo de cotação.",
      result: "Aumento de 27% nas conversões de cotações e redução de 40% no abandono da jornada de compra.",
      note: "Percebi que mapear objetivos do usuário tem mais valor do que seguir estruturas institucionais fixas.",
    },
    {
      id: "backlog-3",
      challenge: "A área de cursos da FGV LAW apresentava dificuldade na organização dos conteúdos, dificultando a navegação e impactando a visibilidade dos programas.",
      solution: "Estruturei um novo painel com filtros segmentados e sistema de abas, reorganizando a hierarquia das informações com foco em escaneabilidade e jornada de decisão do usuário.",
      result: "Houve um aumento significativo na visibilidade dos cursos e na conversão de acessos em interações com páginas específicas, além de maior clareza percebida pelos usuários..",
      note: "Compreendi que, ao lidar com grande volume de opções, o design da informação precisa facilitar a tomada de decisão — não apenas mostrar conteúdo, mas organizar a escolha com lógica e contexto.",
    },
    {
      id: "backlog-4",
      challenge: "A Taliparts precisava validar quais produtos seriam mais competitivos no Mercado Livre.",
      solution: "Conduzi benchmark detalhado com análise de concorrência, posicionamento e avaliações de produtos similares.",
      result: "A curadoria inicial de produtos teve maior índice de visualização e interesse já na primeira semana de divulgação.",
      note: "Analisar o terreno competitivo com profundidade é essencial antes de qualquer exposição de marca em canal aberto.",
    },
    {
      id: "backlog-5",
      challenge: "Faltava clareza sobre quem era o público-alvo real da Taliparts.",
      solution: "Modelei personas com base em entrevistas com lojistas, mecânicos e compradores autônomos.",
      result: "Definimos três perfis estratégicos que orientaram desde a escolha de produto até o tom da comunicação.",
      note: "Persona é mais do que um arquétipo — é a lente pela qual se interpreta todo o negócio.",
    },
    {
      id: "backlog-6",
      challenge: "Na Taliparts Os títulos e descrições dos anúncios no Mercado Livre não estavam otimizados para SEO no Mercado Livre.",
      solution: "Reestruturei os títulos com base em práticas de SEO específicas para marketplaces e testei descrições com palavras-chave frequentes.",
      result: "Melhoria significativa no posicionamento das ofertas e aumento em mais de 20% no tráfego orgânico em 6 meses.",
      note: "No marketplace, SEO é tão importante quanto o preço — é ele quem traz o clique.",
    },
    {
      id: "backlog-7",
      challenge: "Na Taliparts era necessário validar se os produtos publicados realmente tinham demanda real.",
      solution: "Estruturei um plano de validação com base em métricas de cliques, perguntas de compradores e comparação com benchmarks.",
      result: "Refinamos o catálogo com base em performance, evitando estoque parado e redirecionando esforços.",
      note: "estar pequeno e ajustar rápido é mais eficiente do que lançar 100 produtos no escuro.",
    },
    {
      id: "backlog-8",
      challenge: "Na FGV algumas páginas possuiam conteúdo institucional denso afastava os usuários da leitura integral.",
      solution: "Apliquei técnicas de UX writing (escaneabilidade, títulos objetivos, listas visuais) nas páginas-chave.",
      result: "O tempo médio de leitura aumentou e houve queda no abandono de página.",
      note: "Pequenas decisões no texto têm grande impacto na experiência de leitura e compreensão.",
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
