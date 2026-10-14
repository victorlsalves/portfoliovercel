import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Code2, Cpu, Database, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Moon, Network, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { portraitSrc, resumeSrc } from '@/lib/media';
import { categories, projects, type PortfolioProject } from '@/lib/portfolio';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Victor Linhares Alves | Software & Sistemas Embarcados' },
    { name: 'description', content: 'Portfólio de Victor Linhares Alves: desenvolvimento fullstack, IoT e sistemas embarcados. Conheça projetos, habilidades e formação no IFCE.' },
    { property: 'og:title', content: 'Victor Linhares Alves | Portfólio' },
    { property: 'og:description', content: 'Conectando hardware e software: projetos fullstack, IoT e sistemas embarcados.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const navigation = [['sobre', 'Sobre'], ['projetos', 'Projetos'], ['habilidades', 'Habilidades'], ['trajetoria', 'Trajetória']] as const;
const socials = [{ icon: Github, label: 'GitHub', url: 'https://github.com/victorlsalves' }, { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/victorlsalves' }, { icon: Mail, label: 'E-mail', url: 'mailto:victorlinhares36@gmail.com' }];

function TypingRole() {
  const [text, setText] = useState('Desenvolvedor Fullstack');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const roles = ['Desenvolvedor Fullstack', 'Desenvolvedor de Sistemas Embarcados'];
    let role = 0, length = 'Desenvolvedor Fullstack'.length, deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      length += deleting ? -1 : 1;
      const currentRole = roles[role] ?? roles[0] ?? 'Desenvolvedor Fullstack';
      setText(currentRole.slice(0, length));
      let delay = deleting ? 35 : 70;
      if (length === 0) { role = (role + 1) % roles.length; deleting = false; delay = 300; }
      else if (length === currentRole.length && !deleting) { deleting = true; delay = 2600; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, []);
  return <div className="typing-line"><span className="text-primary">&gt; </span>{text}<span className="typing-cursor" /><span className="sr-only">Desenvolvedor Fullstack e Desenvolvedor de Sistemas Embarcados</span></div>;
}

function Index() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  useEffect(() => {
    const saved = localStorage.getItem('victor-theme');
    setDark(saved === 'dark');
    document.documentElement.classList.toggle('dark', saved === 'dark');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-20% 0px -55% 0px' });
    navigation.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle('dark', next); localStorage.setItem('victor-theme', next ? 'dark' : 'light'); };
  const downloadCV = async () => {
    try {
      const response = await fetch(resumeSrc);
      if (!response.ok) throw new Error('Download indisponível');
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a'); link.href = url; link.download = 'Victor-Linhares-Alves-CV.pdf'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch { window.open(resumeSrc, '_blank', 'noopener,noreferrer'); }
  };
  return <>
    <header className="site-header">
      <div className="site-width header-inner">
        <a href="#inicio" className="brand" aria-label="Victor Linhares, início"><span className="brand-mark">&lt;/&gt;</span><span>victor<span className="text-primary">.</span>linhares</span></a>
        <nav className="nav-links" aria-label="Navegação principal">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>)}</nav>
        <div className="header-actions">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'} title={dark ? 'Modo claro' : 'Modo escuro'}>{dark ? <Sun /> : <Moon />}</Button>
          <Button asChild size="sm" className="header-contact"><a href="mailto:victorlinhares36@gmail.com">Vamos conversar <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="site-width hero-grid">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> SOFTWARE & SISTEMAS EMBARCADOS</div>
            <p className="mt-7 text-sm text-muted-foreground">Olá, eu sou o Victor.</p>
            <h1>Victor<br /><span>Linhares Alves<span className="text-foreground">.</span></span></h1>
            <TypingRole />
            <p className="hero-description">Conecto hardware e software para transformar desafios em soluções. Do primeiro bit à experiência final.</p>
            <div className="hero-buttons"><Button asChild><a href="mailto:victorlinhares36@gmail.com">Entrar em contato <ArrowUpRight /></a></Button><Button variant="outline" onClick={downloadCV} className="h-[46px] px-5"><Download /> Baixar CV</Button></div>
            <div className="hero-socials">{socials.map(({ icon: Icon, label, url }) => <a key={label} href={url} aria-label={label} title={label} target={label === 'E-mail' ? undefined : '_blank'} rel="noopener noreferrer"><Icon size={18} /></a>)}<span className="social-divider" /><span className="location"><MapPin size={13} /> Fortaleza, CE · Brasil</span></div>
          </div>
          <div>
            <div className="portrait-stage"><div className="portrait-frame"><img src={portraitSrc} alt="Victor Linhares Alves sorrindo" fetchPriority="high" /></div><span className="portrait-label label-code"><Code2 size={19} /> &lt; fullstack developer /&gt;</span><span className="portrait-label label-hardware"><Cpu size={21} /><span>Hardware + Software</span></span></div>
            <p className="portrait-caption">CÓDIGO COM PROPÓSITO. SOLUÇÕES COM IMPACTO.</p>
          </div>
        </div>
        <div className="site-width hero-bottom"><a href="#sobre" className="scroll-link"><ArrowDown size={15} /> CONHEÇA MEU TRABALHO</a><span className="hero-index">01 / 05 — INTRODUÇÃO</span></div>
      </section>

      <section id="sobre" className="section"><div className="site-width about-grid"><div><p className="eyebrow"><span className="section-number">01</span> SOBRE MIM</p><h2>Entre o código<br />e o mundo real<span className="text-primary">.</span></h2><p className="section-lead">Curiosidade para entender.<br />Engenharia para construir.</p></div><div className="about-copy"><p>Sou desenvolvedor de software e estudante de <strong>Engenharia de Computação no IFCE, Campus Fortaleza</strong>. Minha base técnica abrange todo o ciclo de desenvolvimento: de algoritmos otimizados para microcontroladores a aplicações web e bancos de dados relacionais.</p><p>Minha paixão está em <strong>conectar hardware e software</strong>. Trabalho com IoT e sistemas embarcados, além de arquiteturas fullstack com Node.js, React e PostgreSQL. Tenho interesse em integração de sistemas, inteligência artificial e sistemas distribuídos, com certificação internacional em redes HCIA-Datacom.</p><div className="about-note"><GraduationCap size={18} /> Engenharia de Computação · IFCE</div></div></div></section>

      <section id="projetos" className="section projects-section"><div className="site-width"><div className="section-heading"><div><p className="eyebrow"><span className="section-number">02</span> PROJETOS SELECIONADOS</p><h2>Ideias que viraram código<span className="text-primary">.</span></h2><p className="section-lead">Experiência prática, da arquitetura à implementação.</p></div><div className="project-filters" role="group" aria-label="Filtrar projetos">{categories.map(category => <Button key={category} variant={filter === category ? 'default' : 'ghost'} size="sm" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</Button>)}</div></div><div className="project-grid">{projects.filter(project => filter === 'Todos' || filter === project.category).map(project => <article className="project-card" key={project.title}><div className="project-visual" aria-hidden="true"><div className="visual-lines" /><project.icon /><span className="project-visual-label">{project.code}</span></div><div className="project-content"><p className="project-category">{project.label}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><div className="project-detail"><Button variant="link" className="px-0 text-xs" onClick={() => setSelected(project)}>Explorar projeto <ArrowUpRight /></Button><span className="font-mono text-[9px] text-muted-foreground">IFCE</span></div></div></article>)}</div></div></section>

      <section id="habilidades" className="section"><div className="site-width"><div className="section-heading"><div><p className="eyebrow"><span className="section-number">03</span> HABILIDADES</p><h2>Minha caixa de ferramentas<span className="text-primary">.</span></h2><p className="section-lead">Tecnologias e fundamentos que sustentam cada solução.</p></div></div><div className="skills-grid">{[
        { icon: Braces, name: 'Linguagens', items: ['C / C++', 'Java', 'JavaScript / TypeScript', 'Python', 'SQL / Ada'] },
        { icon: Database, name: 'Web & Dados', items: ['React / Next.js', 'Node.js / NestJS', 'PostgreSQL / MySQL', 'Prisma ORM', 'WebSockets / Figma'] },
        { icon: Cpu, name: 'Infra & IoT', items: ['ESP32 / STM32', 'Protocolo MQTT', 'Redes Datacom', 'Proteus', 'Sistemas embarcados'] },
        { icon: Network, name: 'Fundamentos', items: ['Estruturas de dados', 'POO / Design Patterns', 'Sistemas distribuídos', 'Profiling de código', 'Concorrência'] },
      ].map(({ icon: Icon, name, items }) => <div className="skill-group" key={name}><Icon className="skill-icon" size={26} /><h3>{name}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></div></section>

      <section id="trajetoria" className="section journey-section"><div className="site-width journey-grid"><div><p className="eyebrow"><span className="section-number">04</span> TRAJETÓRIA</p><h2>Aprendizado<br />em movimento<span className="text-primary">.</span></h2><p className="section-lead">Uma base sólida, construída com dedicação e vontade de ir além.</p><div className="tags mt-7"><span className="tag">Português · Nativo</span><span className="tag">Inglês · C2</span><span className="tag">Alemão · A1</span></div></div><div className="timeline">{[
        { meta: 'FORMAÇÃO ACADÊMICA · CURSANDO', title: 'Engenharia de Computação', text: 'Instituto Federal do Ceará · Campus Fortaleza. Arquitetura de computadores, redes, engenharia de software e sistemas embarcados.' },
        { meta: 'CERTIFICAÇÃO INTERNACIONAL', title: 'HCIA-Datacom · Huawei', text: 'Huawei ICT Academy · Redes e infraestrutura. Pontuação: 800/1000.' },
        { meta: 'IDIOMAS & DESENVOLVIMENTO', title: 'EF SET English Certificate · C2 Proficient', text: 'Inglês fluente · 75/100. Certificação C++ Completo pela Udemy.' },
        { meta: 'BASE ACADÊMICA · CONCLUÍDO', title: 'Colégio Farias Brito & Colégio Militar', text: 'Ensino Médio no Farias Brito (Turma ITA). Ensino Fundamental e Médio no Colégio Militar de Fortaleza.' },
      ].map(item => <div className="timeline-item" key={item.title}><span className="project-category">{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>

      <section id="contato" className="section contact-section"><div className="site-width contact-layout"><div><p className="eyebrow"><span className="section-number">05</span> VAMOS CONVERSAR</p><h2>O próximo projeto começa<br />com uma boa conversa<span className="text-primary">.</span></h2><p className="section-lead">Tem uma oportunidade ou uma ideia? Quero conhecer.</p></div><Button size="lg" asChild><a href="mailto:victorlinhares36@gmail.com">Entrar em contato <ArrowUpRight /></a></Button></div></section>
    </main>
    <footer className="footer"><div className="site-width footer-inner"><p>© 2026 Victor Linhares Alves</p><div className="footer-links">{socials.map(({ icon: Icon, label, url }) => <a key={label} href={url} className="flex items-center gap-2" target={label === 'E-mail' ? undefined : '_blank'} rel="noopener noreferrer"><Icon size={13} />{label}<ArrowUpRight size={11} /></a>)}</div><a href="#inicio" className="flex items-center gap-2">Voltar ao topo <ArrowRight size={12} className="-rotate-90" /></a></div></footer>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-lg">{selected && <><p className="project-category">{selected.label}</p><DialogTitle className="dialog-title">{selected.title}</DialogTitle><DialogDescription className="leading-7">{selected.detail}</DialogDescription><div className="tags">{selected.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div><p className="flex items-center gap-2 text-xs text-muted-foreground"><Check size={14} /> Projeto acadêmico · IFCE</p></>}</DialogContent></Dialog>
  </>;
}
