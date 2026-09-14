export interface ServiceItem {
  id: string;
  icon: string;
  category: 'automotivo' | 'residencial' | 'socorro';
  title: string;
  shortDesc: string;
  badge?: string;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  location: string;
  serviceOrVehicle: string;
  text: string;
  rating: number;
  timeAgo: string;
}

export const siteConfig = {
  name: 'Chaveiro Rodrigues 24h',
  tradeName: 'Chaveiro Rodrigues 24hs — Residencial e Automotivo',
  tagline: 'Socorro Móvel 24 Horas em Campinas: Chaves Codificadas, Abertura sem Danos, Residencial, Bateria e Pneu',
  phoneDisplay: '(19) 9988-4792',
  phoneRaw: '+551999884792',
  whatsappNumber: '551999884792',
  whatsappDefaultMessage: 'Olá Chaveiro Rodrigues! Preciso de atendimento em Campinas. Meu problema/local é: ',
  address: 'Atendimento Móvel em toda Campinas e RMC — Base Central: Av. José de Souza Campos, Cambuí, Campinas - SP',
  city: 'Campinas',
  state: 'SP',
  cnpj: '48.291.834/0001-92',
  rating: {
    score: '4.9',
    count: 347,
  },
  emergencyArrivalMinutes: '30',
  discountVsDealer: '60%',

  coverage: {
    neighborhoods: [
      'Cambuí',
      'Barão Geraldo',
      'Taquaral',
      'Centro',
      'Nova Campinas',
      'Ouro Verde',
      'Guanabara',
      'Mansões Santo Antônio',
      'Swiss Park',
      'Alphaville Campinas',
      'Jardim Chapadão',
      'Sousas',
      'Joaquim Egídio',
      'Jardim Londres',
    ],
    metroCities: [
      'Valinhos',
      'Vinhedo',
      'Sumaré',
      'Hortolândia',
      'Paulínia',
      'Jaguariúna',
      'Indaiatuba',
    ],
    highways: [
      'Rodovia Dom Pedro I (SP-065)',
      'Rodovia Anhanguera (SP-330)',
      'Rodovia dos Bandeirantes (SP-348)',
      'Rodovia Santos Dumont (SP-075)',
      'Rodovia Adhemar Pereira de Barros (SP-340)',
    ],
  },

  services: [
    {
      id: 'chaves-codificadas',
      category: 'automotivo',
      icon: '🔑',
      title: 'Chaves Codificadas, Canivete e Telecomando',
      badge: 'Até 60% mais barato',
      shortDesc: 'Confecção e codificação de chaves com transponder, chaves canivete e telecomandos de alarme para nacionais e importados.',
      features: ['Chips originais homologados', 'Reprogramação no local', 'Garantia de 1 ano'],
    },
    {
      id: 'abertura-automotiva',
      category: 'automotivo',
      icon: '🚗',
      title: 'Abertura de Veículos sem Danos',
      badge: 'Mais Solicitado',
      shortDesc: 'Ficou com a chave trancada dentro do carro? Abertura técnica pantográfica rápida sem arranhar a pintura ou entortar batentes.',
      features: ['Atendimento em até 30 min', 'Técnica cirúrgica Lishi', 'Todos os modelos e marcas'],
    },
    {
      id: 'perda-total-veiculo',
      category: 'automotivo',
      icon: '🚨',
      title: 'Assistência para Perda Total de Chaves',
      badge: 'Sem Guincho',
      shortDesc: 'Perdeu todas as chaves do carro? Abrimos o veículo, decodificamos o cilindro e geramos um conjunto novo funcionando no local.',
      features: ['Dispensa guincho/reboque', 'Codificação na ECU', 'Pronto no mesmo dia'],
    },
    {
      id: 'reparo-miolo-travas',
      category: 'automotivo',
      icon: '⚙️',
      title: 'Reparo de Miolo de Ignição e Travas',
      badge: 'Socorro Rápido',
      shortDesc: 'Remoção de pontas de chave quebradas na ignição ou portas, conserto de miolos emperrados e restauração de travas.',
      features: ['Extração sem quebrar cilindro', 'Restauração de segredo', 'Peças de reposição'],
    },
    {
      id: 'socorro-bateria',
      category: 'socorro',
      icon: '⚡',
      title: 'Socorro de Carga de Bateria 24h',
      badge: 'Emergência na Pista',
      shortDesc: 'Carro apagou ou não dá partida? Enviamos nossa unidade com equipamento de carga assistida segura para ligar seu veículo imediatamente.',
      features: ['Carga rápida sem pico de tensão', 'Atendimento na rua ou garagem', 'Plantão dia e noite'],
    },
    {
      id: 'socorro-troca-pneus',
      category: 'socorro',
      icon: '🛞',
      title: 'Socorro de Troca de Pneus',
      badge: 'Chegada Rápida',
      shortDesc: 'Pneu furado na rodovia ou no trânsito? Nossa equipe faz a substituição ágil e segura pelo estepe para você seguir viagem.',
      features: ['Chave de impacto e macaco seguro', 'Sinalização e segurança', 'Em toda Campinas e rodovias'],
    },
    {
      id: 'abertura-residencia',
      category: 'residencial',
      icon: '🏠',
      title: 'Abertura e Confecção de Chaves Residenciais',
      badge: 'Plantão 24h',
      shortDesc: 'Trancado para fora de casa? Abertura técnica de fechaduras residenciais e comerciais e confecção de cópias na hora.',
      features: ['Casas, apartamentos e comércios', 'Sem estragar a fechadura', 'Atendimento imediato'],
    },
    {
      id: 'fechadura-digital',
      category: 'residencial',
      icon: '📱',
      title: 'Instalação de Fechaduras Digitais',
      badge: 'Segurança Moderna',
      shortDesc: 'Instalação e configuração de fechaduras eletrônicas inteligentes (biometria, senha, tag e app) com acabamento perfeito.',
      features: ['Principais marcas do mercado', 'Instalação sem rebarbas', 'Treinamento de uso'],
    },
    {
      id: 'fechadura-tetra',
      category: 'residencial',
      icon: '🛡️',
      title: 'Instalação de Fechadura Tetra',
      badge: 'Alta Resistência',
      shortDesc: 'Reforce a segurança da sua porta principal contra arrombamentos com a instalação de travas auxiliares Tetra chave de alta segurança.',
      features: ['Cilindro maciço quádruplo', 'Máxima proteção contra gazua', 'Chaves multiponto'],
    },
    {
      id: 'abertura-cofres',
      category: 'residencial',
      icon: '🔐',
      title: 'Abertura Técnica de Cofres',
      badge: 'Especializado',
      shortDesc: 'Perdeu a combinação ou a chave emperrou? Abertura técnica e sigilosa de cofres mecânicos e digitais.',
      features: ['Sigilo profissional absoluto', 'Métodos não destrutivos', 'Reparo do segredo'],
    },
  ] as ServiceItem[],

  brands: [
    { name: 'Volkswagen', logo: 'VW' },
    { name: 'Chevrolet', logo: 'GM' },
    { name: 'Fiat', logo: 'FIAT' },
    { name: 'Toyota', logo: 'TOYOTA' },
    { name: 'Hyundai', logo: 'HYUNDAI' },
    { name: 'Honda', logo: 'HONDA' },
    { name: 'Jeep', logo: 'JEEP' },
    { name: 'Renault', logo: 'RENAULT' },
    { name: 'Nissan', logo: 'NISSAN' },
    { name: 'Ford', logo: 'FORD' },
    { name: 'BMW', logo: 'BMW' },
    { name: 'Audi', logo: 'AUDI' },
    { name: 'Mercedes-Benz', logo: 'MERCEDES' },
    { name: 'Peugeot', logo: 'PEUGEOT' },
    { name: 'Citroën', logo: 'CITROËN' },
    { name: 'Caoa Chery', logo: 'CHERY' },
  ],

  testimonials: [
    {
      name: 'Rodrigo Silveira',
      location: 'Lagoa do Taquaral — Campinas',
      serviceOrVehicle: 'Abertura T-Cross 2022',
      rating: 5,
      timeAgo: 'Ontem',
      text: 'Fiquei trancado para fora do carro no estacionamento da Lagoa às 23h de domingo. Chamei o Chaveiro Rodrigues pelo WhatsApp, o técnico chegou em 18 minutos e abriu sem arranhar nada. Atendimento nota 10!',
    },
    {
      name: 'Marcelo Ferreira',
      location: 'Rodovia Dom Pedro I — Valinhos',
      serviceOrVehicle: 'Chave Presença Corolla Cross',
      rating: 5,
      timeAgo: 'Há 3 dias',
      text: 'A chave presencial parou de funcionar e o carro não ligava. O Chaveiro Rodrigues veio até o posto na Dom Pedro, reprogramou a chave canivete na hora por menos da metade do preço da concessionária.',
    },
    {
      name: 'Mariana Duarte',
      location: 'Cambuí — Campinas',
      serviceOrVehicle: 'Carga de Bateria & Abertura',
      rating: 5,
      timeAgo: 'Há 5 dias',
      text: 'Esqueci a chave dentro do carro e a bateria ainda arriou. O Chaveiro Rodrigues chegou super rápido, abriu a porta com gazua pantográfica sem danificar nada e ainda deu a carga de partida. Me salvou!',
    },
    {
      name: 'Eduardo Guimarães',
      location: 'Barão Geraldo — Campinas',
      serviceOrVehicle: 'Fechadura Tetra & Digital',
      rating: 5,
      timeAgo: 'Há 2 semanas',
      text: 'Contratei para instalar fechadura digital na minha porta de entrada e uma fechadura tetra na área de serviço. Instalação limpa, pontual e muito seguro. Recomendo de olhos fechados.',
    },
  ] as TestimonialItem[],

  faqs: [
    {
      q: 'Quanto tempo demora para a equipe chegar até o meu local?',
      a: 'Nosso tempo médio de chegada em qualquer ponto de Campinas é de 20 a 35 minutos. Possuímos unidades móveis circulando estrategicamente próximas às principais vias (Norte-Sul, Dom Pedro, Anhanguera e Tapera Grande).',
    },
    {
      q: 'A abertura do veículo ou residência risca ou danifica a fechadura?',
      a: 'Não! Utilizamos exclusivamente ferramentas pantográficas e gazuas profissionais que operam o segredo interno do cilindro de forma cirúrgica. Não entortamos portas nem estragamos batentes e borrachas, preservando 100% da garantia do seu patrimônio.',
    },
    {
      q: 'Vocês realizam socorro de carga de bateria e troca de pneu na rua?',
      a: 'Sim! Além de chaveiro automotivo e residencial, realizamos socorro mecânico leve de emergência: carga assistida de bateria com equipamento anti-pico de tensão e substituição de pneu furado pelo estepe.',
    },
    {
      q: 'Vocês conseguem fazer chave se eu tiver perdido todas (sem cópia reserva)?',
      a: 'Sim! Não é necessário guinchar o carro até a concessionária. Vamos até onde o carro estiver com nossa van-oficina, decodificamos o cilindro, gravamos o chip transponder e entregamos o veículo funcionando no mesmo dia.',
    },
    {
      q: 'Quais são as formas de pagamento aceitas?',
      a: 'Aceitamos Pix, dinheiro e cartões de débito e crédito (em até 12x na maquininha móvel levada pelo profissional). Emitimos comprovante e garantia por escrito.',
    },
    {
      q: 'Vocês atendem de madrugada e aos finais de semana?',
      a: 'Sim! Nosso plantão opera 24 horas por dia, 7 dias por semana, incluindo feriados e madrugadas.'
    },
  ],
};
