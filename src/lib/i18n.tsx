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
  nav: { home: string; about: string; projects: string; contact: string };
  hero: { headline: string; sub: string; cta: string; badge: string };
  about: {
    kicker: string;
    title: string;
    cards: { title: string; body: string }[];
  };
  projects: {
    kicker: string;
    title: string;
    items: { title: string; desc: string; tags: string[] }[];
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
    nav: { home: "홈", about: "소개", projects: "프로젝트", contact: "연락처" },
    hero: {
      badge: "경희대학교 소프트웨어학과 · 데이터 기반 개발자",
      headline:
        "감으로 코딩하지 않습니다. 데이터로 사용자 경험을 증명하는 개발자, 이호준입니다.",
      sub: "경희대학교 소프트웨어학과 3학년. 로그 데이터와 알고리즘으로 병목을 해결하고, 철학과 역사에서 얻은 통찰로 지속 가능한 아키텍처를 설계합니다. 당신의 다음 혁신에 저의 논리를 더해보세요.",
      cta: "커피챗 제안하기 (Let's Talk)",
    },
    about: {
      kicker: "Projects",
      title: "주요 프로젝트",
      cards: [
        {
          title: "개발자 행동 모니터링 시스템",
          body: "IDE 로그 데이터를 수집하여 개발자 생산성을 분석하는 VS Code 확장 프로그램. 문제 정의부터 프레임워크 구축까지 주도.",
        },
        {
          title: "오픈 데이터 금융 분석",
          body: "OPEN DART 및 AI Hub 공시 데이터를 활용한 실무 중심의 파이프라인 구축 및 분석 프로젝트.",
        },
        {
          title: "AI 브랜드 모니터링 파이프라인",
          body: "썸트렌드 MCP와 LLM을 결합하여 매주 자동으로 브랜드 여론 및 최신 기술 트렌드를 분석하는 파이프라인 구축.",
        },
      ],
    },
    projects: {
      kicker: "Featured Projects",
      title: "문제 정의부터 구현까지 주도한 작업들",
      items: [
        {
          title: "개발자 행동 모니터링 시스템 (VS Code Extension)",
          desc: "IDE 내에서 발생하는 로그 데이터를 수집하여 개발자의 생산성 지표를 모니터링하는 시스템 기획 및 개발. 문제 정의부터 프레임워크 구축까지 주도.",
          tags: ["TypeScript", "VS Code API", "로그 분석"],
        },
        {
          title: "오픈 데이터 API 연동 금융 분석 (OPEN DART & AI Hub)",
          desc: "빅데이터 및 AI 연합 활동(BDAI)을 통해 공시 데이터와 AI Hub 데이터를 활용한 실무 중심의 데이터 파이프라인 구축 경험.",
          tags: ["Python", "OPEN DART API", "데이터 파이프라인"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "저와 함께 멋진 프로덕트를 만들어보지 않으시겠습니까?",
      desc: "새로운 기술에 대한 토론, 데이터 아키텍처에 대한 고민, 혹은 단순히 기술과 인문학에 대한 커피챗도 환영합니다. 지금 바로 연락주세요.",
      name: "이름",
      email: "이메일",
      message: "메시지",
      send: "보내기",
      sent: "메시지가 준비되었습니다. 메일 앱에서 전송을 완료해 주세요.",
      invalid: "이름, 이메일, 메시지를 모두 입력해 주세요.",
    },
    footer: "논리와 데이터로 설계합니다.",
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      badge: "Kyung Hee University · Data-driven engineer",
      headline: "I don't code by intuition. I prove user experience with data.",
      sub: "Junior Software Engineering student at Kyung Hee University. I solve bottlenecks with log data and algorithms, and design sustainable architectures inspired by history and philosophy. Add my logic to your next innovation.",
      cta: "Let's Talk",
    },
    about: {
      kicker: "Projects",
      title: "Featured Projects",
      cards: [
        {
          title: "Developer Behavior Monitoring System",
          body: "A VS Code extension that collects log data inside the IDE to monitor developer productivity metrics. Led everything from problem definition to framework creation.",
        },
        {
          title: "Financial Analysis with Open Data",
          body: "Built practice-oriented data pipelines using corporate disclosure data and AI Hub datasets through the Big Data & AI union (BDAI).",
        },
        {
          title: "AI Brand Monitoring Pipeline",
          body: "Automated pipeline combining Sometrend MCP and LLMs to analyze brand sentiment and latest tech trends weekly.",
        },
      ],
    },
    projects: {
      kicker: "Featured Projects",
      title: "Work I led from problem definition to shipping",
      items: [
        {
          title: "Developer Behavior Monitoring System (VS Code Extension)",
          desc: "Planned and built a system that collects log data inside the IDE to monitor developer productivity metrics — leading everything from problem definition to the framework itself.",
          tags: ["TypeScript", "VS Code API", "Log analytics"],
        },
        {
          title: "Financial Analysis with Open Data APIs (OPEN DART & AI Hub)",
          desc: "Through the Big Data & AI union (BDAI), built practice-oriented data pipelines using corporate disclosure data and AI Hub datasets.",
          tags: ["Python", "OPEN DART API", "Data pipeline"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something amazing together.",
      desc: "Open for discussions on new tech, data architecture, or just a coffee chat about tech and humanities. Reach out today.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
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
