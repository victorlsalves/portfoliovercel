import { Activity, CalendarDays, Cpu, Gamepad2, Network } from "lucide-react";

export const projects = [
  {
    title: "Gestão Energética IoT Fullstack",
    category: "Fullstack",
    label: "IoT · Fullstack · TCC",
    icon: Activity,
    code: "ESP32 → MQTT → WEB",
    description:
      "Do hardware à nuvem: monitoramento de energia e controle remoto de cargas em tempo real.",
    githubUrl: "https://github.com/victorlsalves/smart-rental-home-TCC",
    star: {
      situation:
        "Imóveis de aluguel precisam de uma forma prática de acompanhar o consumo de energia e gerenciar cargas à distância.",
      task: "Desenvolver um MVP que conectasse medição de energia, processamento dos dados e controle remoto em uma aplicação web.",
      action:
        "Integrei ESP32 e sensor PZEM-004T com MQTT, um backend NestJS e PostgreSQL com Prisma; no frontend, usei Next.js e WebSockets para atualizar o monitoramento.",
      result:
        "O MVP reúne telemetria, monitoramento em tempo real e recursos para automatizar ou desligar cargas remotamente.",
    },
    tags: ["NestJS", "Next.js", "PostgreSQL", "ESP32", "MQTT"],
  },
  {
    title: "Algoritmo de Otsu Embarcado",
    category: "Embarcados",
    label: "Embarcados · Processamento de imagens",
    icon: Cpu,
    code: "BARE-METAL / STM32",
    description:
      "Processamento de imagens em baixo nível, com foco em tempo, memória e eficiência energética.",
    githubUrl: "https://github.com/victorlsalves/stm32-otsu-implementation-and-analysis",
    star: {
      situation:
        "Executar processamento de imagens em um microcontrolador exige atenção aos recursos limitados de memória, tempo e energia.",
      task: "Implementar a limiarização de Otsu em STM32 e avaliar seu comportamento em comparação com um computador convencional.",
      action:
        "Escrevi o algoritmo em C sem bibliotecas de imagem de terceiros, fiz a compilação cruzada para STM32 e preparei testes de profiling.",
      result:
        "O projeto entrega a implementação embarcada e uma análise comparativa de tempo de execução, memória e corrente elétrica.",
    },
    tags: ["C", "STM32", "Profiling"],
  },
  {
    title: "Sistema de Reservas",
    category: "Software",
    label: "Engenharia de software",
    icon: CalendarDays,
    code: "REQUISITOS → ARQUITETURA → POC",
    description: "Arquitetura e prova de conceito para a gestão de reservas de espaços públicos.",
    githubUrl: null,
    star: {
      situation:
        "A gestão de reservas de espaços públicos requer regras claras e uma solução coerente com as necessidades de seus usuários.",
      task: "Investigar os requisitos e propor uma arquitetura para uma aplicação de reservas.",
      action:
        "Realizei a elicitação de requisitos, desenhei a arquitetura e implementei uma prova de conceito aplicando padrões de projeto.",
      result:
        "A prova de conceito demonstra a estrutura da solução e os principais fluxos de reserva definidos para o projeto.",
    },
    tags: ["Arquitetura", "PoC", "Design Patterns"],
  },
  {
    title: "Detector de Deadlocks",
    category: "Software",
    label: "Sistemas operacionais · Concorrência",
    icon: Network,
    code: "PROCESSOS / SEMÁFOROS",
    description:
      "Detecção e prevenção de deadlocks com programação paralela e gerenciamento de processos.",
    githubUrl: "https://github.com/victorlsalves/threads-semaphores-deadlocks",
    star: {
      situation:
        "Processos concorrentes que disputam recursos compartilhados podem entrar em deadlock, interrompendo seu progresso.",
      task: "Explorar técnicas de detecção e prevenção de deadlocks em um projeto de sistemas operacionais.",
      action:
        "Implementei modelos matriciais para analisar estados de recursos e usei gerenciamento de processos e semáforos para trabalhar sincronização e concorrência.",
      result:
        "O projeto reúne implementações práticas de detecção e prevenção de deadlocks e demonstra conceitos de programação paralela.",
    },
    tags: ["C/C++", "SO", "Concorrência"],
  },
  {
    title: "Space Arcade (Java POO)",
    category: "Software",
    label: "Desenvolvimento de jogos",
    icon: Gamepad2,
    code: "JAVA / OBJECT-ORIENTED",
    description:
      "Um jogo arcade nativo que conecta orientação a objetos e interfaces gráficas interativas.",
    githubUrl: "https://github.com/victorlsalves/java-oop-arcade-game",
    star: {
      situation:
        "O projeto final de programação orientada a objetos pedia a criação de um jogo com interface gráfica em Java.",
      task: "Desenvolver um jogo arcade que aplicasse os conceitos estudados na disciplina.",
      action:
        "Organizei a lógica do jogo com orientação a objetos e construí a interface gráfica com as bibliotecas de Java.",
      result:
        "O resultado é um jogo arcade nativo que aplica POO em uma experiência gráfica interativa.",
    },
    tags: ["Java", "POO", "GUI"],
  },
];

export type PortfolioProject = (typeof projects)[number];
export const categories = ["Todos", "Fullstack", "Embarcados", "Software"];
