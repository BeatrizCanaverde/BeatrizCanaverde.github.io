// Edit this file to update News and Publications.
// In `authors`, wrap your own name in ** ** to bold it. Use "..." to abbreviate long lists.

const NEWS = [
  { date: "September 2026", html: '<a href="https://arxiv.org/abs/2502.16357" target="_blank" rel="noopener" class="paper-link">LegalBench.PT: A Benchmark for Portuguese Law</a> was accepted at <a href="https://nllpw.org/workshop/" target="_blank" rel="noopener">EMNLP 2026 NLLP</a> 🇭🇺' },
  { date: "August 2026", html: '<em>Lusopol: How do LLMs Handle Politically Charged Questions? The Use Case of Portugal</em> was accepted at <a href="https://2026.emnlp.org/" target="_blank" rel="noopener">EMNLP 2026</a> 🇭🇺' },
  { date: "August 2026", html: '<em>How Well Do Vision-Language Models Understand Movies?</em> was accepted at <a href="https://2026.emnlp.org/" target="_blank" rel="noopener">EMNLP 2026</a> 🇭🇺' },
  { date: "July 2026", html: '<a href="https://openreview.net/forum?id=93Xw0UkZhC" target="_blank" rel="noopener" class="paper-link">SEQUOR: A Multi-Turn Benchmark for Realistic Constraint Following</a> was accepted at <a href="https://colm.cc/" target="_blank" rel="noopener">COLM 2026</a> 🇺🇸' },
  { date: "February 2026", html: '<a href="https://aclanthology.org/2026.propor-1.38/" target="_blank" rel="noopener" class="paper-link">AMALIA: A Fully Open Large Language Model for European Portuguese</a> and <a href="https://aclanthology.org/2026.propor-1.102/" target="_blank" rel="noopener" class="paper-link">MATH-PT: A Math Reasoning Benchmark for European and Brazilian Portuguese</a> were accepted at <a href="https://propor2026.ufba.br/" target="_blank" rel="noopener">PROPOR 2026</a> 🇧🇷' },
];

const PUBLICATIONS = [
  {
    title: "LegalBench.PT: A Benchmark for Portuguese Law",
    authors: "**Beatriz Canaverde**, Telmo Pessoa Pires, Leonor Melo Ribeiro, André F. T. Martins",
    venue: "EMNLP 2026 Workshop on Natural Legal Language Processing (NLLP)",
    year: 2026,
    links: [],
  },
  {
    title: "Lusopol: How do LLMs Handle Politically Charged Questions? The Use Case of Portugal",
    authors: "Giuseppe Attanasio, Inês Vieira, Inês Calvo, **Beatriz Canaverde**, Ben Peters, Orfeas Menis Mastromichalakis, Miguel Faria, James Furtado, Iago Paulo, David Semedo, João Magalhães, André F. T. Martins",
    venue: "EMNLP 2026 Conference",
    year: 2026,
    links: [],
  },
  {
    title: "How Well Do Vision-Language Models Understand Movies?",
    authors: "Emmanouil Zaranis, António Farinhas, Saul Santos, **Beatriz Canaverde**, Miguel Moura Ramos, Wafaa Mohammed, Giuseppe Attanasio, Chrysoula Zerva, Nithin Sivakumaran, Shoubin Yu, Elena Bueno-Benito, Aditya K. Surikuchi, Ben Peters, Danae Sánchez Villegas, André G. Viveiros, Pavlo Vasylenko, Baohao Liao, Sonal Sannigrahi, Jaehong Yoon, Elias Stengel-Eskin, Mariella Dimiccoli, Oswald Lanz, Alessandro Suglia, Mohit Bansal, Sandro Pezzelle, Stella Frank, Vlad Niculae, Desmond Elliott, Raffaella Bernardi, Raquel Fernández, André F. T. Martins",
    venue: "EMNLP 2026 Conference",
    year: 2026,
    links: [],
  },
  {
    title: "SEQUOR: A Multi-Turn Benchmark for Realistic Constraint Following",
    authors: "**Beatriz Canaverde**, Duarte Miguel Alves, José Pombal, Giuseppe Attanasio, André F. T. Martins",
    venue: "Third Conference on Language Modeling (COLM 2026)",
    year: 2026,
    links: [["OpenReview", "https://openreview.net/forum?id=93Xw0UkZhC"]],
  },
  {
    title: "MATH-PT: A Math Reasoning Benchmark for European and Brazilian Portuguese",
    authors: "Tiago Teixeira, Ana Carolina Erthal, Juan Belieni, **Beatriz Canaverde**, Diego Mesquita, Miguel Faria, Eliezer de Souza da Silva, André F. T. Martins",
    venue: "Proceedings of the 17th International Conference on Computational Processing of Portuguese (PROPOR 2026)",
    year: 2026,
    links: [["ACL Anthology", "https://aclanthology.org/2026.propor-1.102/"]],
  },
  {
    title: "AMALIA: A Fully Open Large Language Model for European Portuguese",
    authors: "Afonso Simplício, Gonçalo Vinagre, Miguel Moura Ramos, Diogo Tavares, Rafael Ferreira, Giuseppe Attanasio, Duarte M. Alves, Inês Calvo, Inês Vieira, Rui Guerra, James Furtado, **Beatriz Canaverde**, ..., André Martins, João Magalhães",
    venue: "Proceedings of the 17th International Conference on Computational Processing of Portuguese (PROPOR 2026)",
    year: 2026,
    links: [["ACL Anthology", "https://aclanthology.org/2026.propor-1.38/"]],
  },
  {
    title: "Movie Facts and Fibs (MF²): A Benchmark for Long Movie Understanding",
    authors: "Emmanouil Zaranis, António Farinhas, Saul Santos, **Beatriz Canaverde**, Miguel Moura Ramos, Aditya K. Surikuchi, ..., Giuseppe Attanasio, ..., André F. T. Martins",
    venue: "ICLR 2026 Workshop on Multimodal Intelligence: Next Token Prediction and Beyond",
    year: 2026,
    links: [["ICLR", "https://iclr.cc/virtual/2026/10013210"]],
  },
];

const PROJECTS = [
  {
    name: "AMALIA",
    logo: "assets/projects/amalia.png",
    url: "https://ia.gov.pt/amalia",
    desc: "A fully open large language model for European Portuguese, trained with more high-quality pt-PT data and evaluated on new native pt-PT benchmarks.",
  },
  {
    name: "AgentRisk",
    logoHtml: '<span class="agentrisk-logo"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M7 24 C16 13.5 32 13.5 41 24 C32 34.5 16 34.5 7 24 Z" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"/><circle cx="21.5" cy="24" r="4.5" fill="currentColor"/><circle cx="27.5" cy="24" r="4.5" class="brand"/></svg><span>Agent<span class="brand-text">Risk</span></span></span>',
    url: "https://agentrisk-semeval.lovable.app",
    desc: "SemEval 2027 Shared Task on Risk Understanding in Agentic Systems.",
  },
];

const ACTIVITIES = [
  { date: "July 2026", role: "monitor", name: "LxMLS 2026", url: "http://lxmls.it.pt/2026/" },
  { date: "July 2025", role: "student", name: "LxMLS 2025", url: "http://lxmls.it.pt/2025/index.html" },
];
