export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  badge?: string;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  location: string;
  vehicle: string;
  text: string;
  rating: number;
  timeAgo: string;
}

export const siteConfig = {
  name: 'Chaveiro Automotivo Campinas 24h',
  tradeName: 'Campinas AutoChaves 24 Horas',
  tagline: 'Socorro Automotivo Móvel de Emergência em até 30 minutos',
  phoneDisplay: '(19) 99876-5432',
  phoneRaw: '+5519998765432',
  whatsappNumber: '5519998765432',
  whatsappDefaultMessage: 'Olá! Preciso de socorro rápido para o meu carro em Campinas. Estou no local: ',
  address: 'Atendimento Móvel em toda Campinas e RMC — Base Central: Av. José de Souza Campos, Cambuí, Campinas - SP',
  city: 'Campinas',
  state: 'SP',
  cnpj: '48.291.834/0001-92 (Demonstrativo)',
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
      id: 'abertura-emergencia',
      icon: '🚗',
      title: 'Abertura de Emergência 24h',
      badge: 'Mais Solicitado',
      shortDesc: 'Abertura rápida sem arrombamento, sem riscar a pintura e sem danificar borrachas ou travas eletrônicas.',
      features: ['Atendimento em até 30 min', 'Técnica pantográfica não destrutiva', 'Nacionais e importados'],
    },
    {
      id: 'chaves-codificadas',
      icon: '🔑',
      title: 'Chaves Codificadas & Transponder',
      badge: 'Até 60% mais barato',
      shortDesc: 'Confecção e codificação de transponder eletrônico para carros nacionais e importados direto no local.',
      features: ['Chips originais homologados', 'Reprogramação no local', 'Garantia de 1 ano'],
    },
    {
      id: 'chaves-presenca',
      icon: '📡',
      title: 'Chave de Presença (Smart Key)',
      badge: 'Tecnologia Avançada',
      shortDesc: 'Cópias e programação completa para veículos com sistema Start/Stop e sensor de aproximação Keyless.',
      features: ['Sistemas Keyless modernos', 'Desbloqueio de módulo', 'Sem fila de concessionária'],
    },
    {
      id: 'chave-canivete',
      icon: '🛠️',
      title: 'Cópia e Conserto de Chave Canivete',
      badge: 'Pronto na Hora',
      shortDesc: 'Substituição de carcaças quebradas, botões desgastados, baterias e telecomandos de alarme.',
      features: ['Carcaças reforçadas', 'Troca de bateria imediata', 'Cópia de lâmina na van'],
    },
    {
      id: 'chave-quebrada',
      icon: '⚡',
      title: 'Extração de Chave Quebrada',
      badge: 'Socorro Rápido',
      shortDesc: 'Remoção cirúrgica de pontas de chaves quebradas dentro do miolo de ignição ou porta sem trocar o tambor.',
      features: ['Sem danificar o miolo', 'Confecção da nova chave na hora', 'Atendimento na rua ou garagem'],
    },
    {
      id: 'perda-total',
      icon: '🚨',
      title: 'Perda Total de Chaves (Sem Reserva)',
      badge: 'Solução Completa',
      shortDesc: 'Perdeu todas as chaves? Abrimos seu carro, lemos o segredo e geramos um conjunto novo do zero.',
      features: ['Sem necessidade de reboque', 'Codificação no computador de bordo', 'Emissão de Nota Fiscal'],
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
      vehicle: 'T-Cross 2022',
      rating: 5,
      timeAgo: 'Ontem',
      text: 'Fiquei trancado para fora do carro no estacionamento da Lagoa às 23h de domingo com o celular quase sem bateria. Chamei pelo WhatsApp, o técnico chegou em 18 minutos e abriu em 3 minutos sem arranhar nada. Salvou minha noite!',
    },
    {
      name: 'Marcelo Ferreira',
      location: 'Rodovia Dom Pedro I — Valinhos',
      vehicle: 'Corolla Cross 2023',
      rating: 5,
      timeAgo: 'Há 3 dias',
      text: 'A chave presencial parou de funcionar na volta do trabalho. Na concessionária me pediram 15 dias úteis e R$ 2.600. A van do Chaveiro veio até o posto na Dom Pedro, reprogramou a chave original por menos da metade do preço em 40 minutos.',
    },
    {
      name: 'Camila Pires',
      location: 'Cambuí — Campinas',
      vehicle: 'Jeep Renegade',
      rating: 5,
      timeAgo: 'Há 1 semana',
      text: 'Perdi a chave no shopping e não tinha reserva. Eles vieram com uma van ultra moderna cheia de máquinas computadorizadas, abriram o carro e fizeram uma chave canivete nova codificada com alarme na hora. Atendimento impecável!',
    },
    {
      name: 'Eduardo Guimarães',
      location: 'Barão Geraldo — Campinas',
      vehicle: 'Chevrolet Onix',
      rating: 5,
      timeAgo: 'Há 2 semanas',
      text: 'A ponta da chave quebrou dentro da ignição. Achei que teria que trocar o miolo todo, mas o chaveiro retirou a ponta em 10 minutos com uma ferramenta especial e já cortou outra na hora. Preço honesto e passou cartão na maquininha.',
    },
  ] as TestimonialItem[],

  faqs: [
    {
      q: 'Quanto tempo demora para o técnico chegar até o meu carro?',
      a: 'Nosso tempo médio de chegada em qualquer ponto de Campinas é de 20 a 35 minutos. Possuímos veículos de atendimento móvel circulando estrategicamente próximos às principais vias (Norte-Sul, Dom Pedro, Anhanguera e Tapera Grande).',
    },
    {
      q: 'A abertura do carro risca a lataria ou danifica a fechadura?',
      a: 'Não. Utilizamos exclusivamente ferramentas profissionais pantográficas e gazua Lishi que operam o segredo interno do tambor de forma cirúrgica. Não entortamos portas nem estragamos borrachas de vedação, preservando 100% da integridade e garantia do seu veículo.',
    },
    {
      q: 'Vocês conseguem fazer chave se eu tiver perdido todas (sem cópia reserva)?',
      a: 'Sim! Não é necessário guinchar o carro até a concessionária. Vamos até onde o carro estiver com nossa van-oficina, decodificamos o cilindro, gravamos o chip transponder e entregamos o veículo funcionando no mesmo dia.',
    },
    {
      q: 'Quais são as formas de pagamento aceitas?',
      a: 'Aceitamos Pix, cartões de débito e crédito (em até 12x na maquininha móvel) e dinheiro. Emitimos Nota Fiscal de prestação de serviços e fornecemos garantia formal por escrito.',
    },
    {
      q: 'Vocês atendem de madrugada e finais de semana?',
      a: 'Sim! Nosso plantão de emergência opera 24 horas por dia, 7 dias por semana, incluindo feriados e madrugadas.',
    },
  ],
};
