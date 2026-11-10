import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en";

type Dict = {
  nav: {
    brand: string;
    home: string;
    projects: string;
    studying: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    univ: string;
    name: string;
    suffix: string;
    role: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    tags: string[];
    info: {
      affiliationLabel: string;
      affiliationValue: string;
      emailLabel: string;
      emailValue: string;
      elsewhereLabel: string;
    };
  };
  about: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      body: string;
      link: string;
      linkText: string;
      secondaryLink?: string;
      secondaryLinkText?: string;
    }[];
  };
  studying: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      sub: string;
      body: string;
      link: string;
      linkText: string;
    }[];
  };
  blogSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      sub: string;
      body: string;
      link: string;
      linkText: string;
    }[];
  };
  contact: {
    kicker: string;
    title: string;
    desc: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sent: string;
    invalid: string;
  };
  footer: string;
};

export const dictionaries: Record<Lang, Dict> = {
  ko: {
    nav: {
      brand: "Hojun Lab",
      home: "소개",
      projects: "주요 프로젝트",
      studying: "기술 탐구",
      blog: "테크 블로그",
      contact: "연락하기",
      cta: "연락하기",
    },
    hero: {
      univ: "Kyung Hee University",
      name: "Hojun Lee,",
      suffix: "B.S.",
      role: "소프트웨어융합학과 · 데이터 기반 개발자",
      sub: "로그 데이터 분석 · 금융 데이터 파이프라인 · 백엔드 아키텍처",
      primaryCta: "프로젝트 보기",
      secondaryCta: "연락하기",
      tags: ["Python", "FastAPI", "Rust", "Java", "TypeScript", "Data Pipeline"],
      info: {
        affiliationLabel: "Affiliation",
        affiliationValue: "경희대학교 소프트웨어융합학과",
        emailLabel: "Email",
        emailValue: "minn0949@khu.ac.kr",
        elsewhereLabel: "Elsewhere",
      },
    },
    about: {
      kicker: "Projects",
      title: "주요 프로젝트",
      subtitle: "문제 정의부터 데이터 파이프라인 구축까지 주도한 작업들",
      cards: [
        {
          title: "개발자 행동 모니터링 시스템",
          body: "IDE 로그 데이터를 수집하여 개발자 생산성을 분석하는 VS Code 확장 프로그램. 문제 정의부터 프레임워크 구축까지 주도.",
          link: "https://github.com/monolail",
          linkText: "레포지토리 보기",
        },
        {
          title: "오픈 데이터 금융 분석",
          body: "OPEN DART 및 AI Hub 공시 데이터를 활용한 기업 상장 폐지 예측 모델링 및 실무 중심 파이프라인 구축.",
          link: "https://github.com/monolail/FINDA_1_MARKET-DATA",
          linkText: "레포지토리 보기",
        },
        {
          title: "AI 브랜드 모니터링 파이프라인",
          body: "썸트렌드 MCP와 LLM을 결합하여 매주 자동으로 브랜드 여론 및 최신 기술 트렌드를 분석하는 파이프라인 구축.",
          link: "https://github.com/monolail",
          linkText: "레포지토리 보기",
        },
      ],
    },
    studying: {
      kicker: "Currently Studying",
      title: "기술 탐구",
      subtitle: "지속 가능한 백엔드 및 시스템 엔지니어링을 위한 핵심 학습",
      items: [
        {
          title: "FastAPI & Async Architecture",
          sub: "비동기 고성능 파이썬 백엔드 서버 설계",
          body: "비동기 이벤트 루프 기반의 빠르고 현대적인 Python 웹 프레임워크 학습 및 고성능 API 서버 구축 실습.",
          link: "https://github.com/monolail?tab=repositories",
          linkText: "학습 코드 보기",
        },
        {
          title: "Rust in Practice",
          sub: "메모리 안전성과 동시성 시스템 프로그래밍",
          body: "가비지 컬렉터 없이 메모리 안전성과 고성능을 보장하는 소유권 모델(Ownership)과 안전한 동시성 제어 탐구.",
          link: "https://github.com/monolail?tab=repositories",
          linkText: "학습 코드 보기",
        },
        {
          title: "Java & JVM Internals",
          sub: "객체 지향 설계와 엔터프라이즈 백엔드 기본기",
          body: "객체 지향 프로그래밍의 핵심 원리부터 JVM 메모리 구조, Spring 생태계까지 탄탄한 백엔드 엔지니어링 다지기.",
          link: "https://github.com/monolail?tab=repositories",
          linkText: "학습 코드 보기",
        },
      ],
    },
    blogSection: {
      kicker: "Tech Blog",
      title: "테크 블로그",
      subtitle: "학습하고 고민한 흔적을 기록하는 아카이브 (Velog)",
      items: [
        {
          title: "오픈소스 (Open Source)",
          sub: "오픈소스 생태계 탐구 및 코드 기여 기록",
          body: "다양한 오픈소스 프로젝트의 아키텍처와 내부 코드를 분석하고, 직접 이슈를 해결하며 배운 점들을 정리합니다.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "포스트 보기",
        },
        {
          title: "자료구조 (Data Structure)",
          sub: "알고리즘과 핵심 CS 구조적 이해",
          body: "단순 암기가 아닌 메모리 구조와 시간·공간 복잡도 관점에서 자료구조와 알고리즘의 동작 원리를 깊게 파고듭니다.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "포스트 보기",
        },
        {
          title: "회고록 (Retrospectives)",
          sub: "프로젝트 및 엔지니어링 성장 회고",
          body: "학부 연구, 대외활동(BDAI, Finda, LG Aimers 등), 프로젝트를 진행하며 겪은 시행착오와 기술적 성장을 기록합니다.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "포스트 보기",
        },
        {
          title: "토이프로젝트 (Toy Projects)",
          sub: "작은 문제 해결부터 프로토타이핑까지",
          body: "일상 속 아이디어나 새로운 기술 스택을 빠르게 검증하기 위해 직접 설계하고 구현한 실험적 프로젝트 제작기입니다.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "포스트 보기",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "연락하기",
      desc: "새로운 기술에 대한 토론, 데이터 아키텍처에 대한 고민, 혹은 가벼운 커피챗도 언제나 환영합니다.",
      name: "이름",
      email: "이메일",
      message: "메시지",
      send: "메시지 보내기",
      sent: "메시지가 준비되었습니다. 메일 앱에서 전송을 완료해 주세요.",
      invalid: "이름, 이메일, 메시지를 모두 입력해 주세요.",
    },
    footer: "논리와 데이터로 설계합니다.",
  },
  en: {
    nav: {
      brand: "Hojun Lab",
      home: "Overview",
      projects: "Projects",
      studying: "Studying",
      blog: "Tech Blog",
      contact: "Contact",
      cta: "Contact",
    },
    hero: {
      univ: "Kyung Hee University",
      name: "Hojun Lee,",
      suffix: "B.S.",
      role: "Dept. of Software Convergence · Data-Driven Engineer",
      sub: "Log Analytics · Financial Data Pipelines · Backend Architecture",
      primaryCta: "View Projects",
      secondaryCta: "Get in Touch",
      tags: ["Python", "FastAPI", "Rust", "Java", "TypeScript", "Data Pipeline"],
      info: {
        affiliationLabel: "Affiliation",
        affiliationValue: "Kyung Hee Univ. · Software Convergence",
        emailLabel: "Email",
        emailValue: "minn0949@khu.ac.kr",
        elsewhereLabel: "Elsewhere",
      },
    },
    about: {
      kicker: "Projects",
      title: "Featured Projects",
      subtitle: "Work led from problem definition to end-to-end data pipelines",
      cards: [
        {
          title: "Developer Behavior Monitoring System",
          body: "A VS Code extension collecting IDE telemetry logs to quantify developer productivity. Led problem definition and framework design.",
          link: "https://github.com/monolail",
          linkText: "View Repository",
        },
        {
          title: "Financial Analysis with Open Data",
          body: "Corporate delisting prediction modeling and production-oriented data pipelines built with OPEN DART and AI Hub datasets.",
          link: "https://github.com/monolail/FINDA_1_MARKET-DATA",
          linkText: "View Repository",
        },
        {
          title: "AI Brand Monitoring Pipeline",
          body: "Automated pipeline combining Sometrend MCP and LLMs to analyze brand sentiment and tech trends on a weekly schedule.",
          link: "https://github.com/monolail",
          linkText: "View Repository",
        },
      ],
    },
    studying: {
      kicker: "Currently Studying",
      title: "Technical Exploration",
      subtitle: "Core studies for sustainable backend and systems engineering",
      items: [
        {
          title: "FastAPI & Async Architecture",
          sub: "High-performance asynchronous Python backends",
          body: "Exploring modern async event-loop web frameworks in Python to architect scalable, high-throughput API servers.",
          link: "https://github.com/monolail?tab=repositories",
          linkText: "View Code",
        },
        {
          title: "Rust in Practice",
          sub: "Memory safety and fearless concurrency",
          body: "Diving into systems programming with zero-cost abstractions, mastering Rust's ownership model and safe concurrency.",
          link: "https://github.com/monolail?tab=repositories",
          linkText: "View Code",
        },
        {
          title: "Java & JVM Internals",
          sub: "Object-oriented design and backend fundamentals",
          body: "Strengthening core backend engineering skills from OOP principles to JVM memory architecture and the Spring ecosystem.",
          link: "https://github.com/monolail?tab=repositories",
          linkText: "View Code",
        },
      ],
    },
    blogSection: {
      kicker: "Tech Blog",
      title: "Technical Writing",
      subtitle: "Archive of engineering notes, CS fundamentals, and retrospectives on Velog",
      items: [
        {
          title: "Open Source",
          sub: "Exploring open-source ecosystems & contributions",
          body: "Analyzing internal architectures of open-source projects and documenting lessons learned from resolving real-world issues.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "Read Posts",
        },
        {
          title: "Data Structures",
          sub: "Structural understanding of CS & algorithms",
          body: "Deep-diving into data structures and algorithms from the perspective of memory layout and time/space complexity.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "Read Posts",
        },
        {
          title: "Retrospectives",
          sub: "Reflections on projects & engineering growth",
          body: "Documenting trials, errors, and technical milestones across undergraduate research, BDAI, Finda, and LG Aimers.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "Read Posts",
        },
        {
          title: "Toy Projects",
          sub: "From small problem-solving to rapid prototyping",
          body: "Build logs of experimental side projects designed to test new tech stacks and solve everyday problems.",
          link: "https://velog.io/@second_ho_jun/posts",
          linkText: "Read Posts",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Get in Touch",
      desc: "Open for discussions on new technologies, data architecture, or a casual coffee chat.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sent: "Your message is ready — finish sending it in your mail app.",
      invalid: "Please fill in your name, email and message.",
    },
    footer: "Designed with logic and data.",
  },
};

type Ctx = { lang: Lang; t: Dict; toggle: () => void; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");
  const toggle = useCallback(() => setLang((l) => (l === "ko" ? "en" : "ko")), []);
  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], toggle, setLang }),
    [lang, toggle],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
