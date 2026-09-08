import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "이호준 | Hojun.dev — 데이터로 증명하는 개발자 포트폴리오" },
      {
        name: "description",
        content:
          "경희대학교 소프트웨어학과 이호준의 포트폴리오. 로그 데이터와 알고리즘으로 병목을 해결하고 지속 가능한 아키텍처를 설계합니다.",
      },
      { property: "og:title", content: "이호준 | Hojun.dev — Data-driven developer" },
      {
        property: "og:description",
        content:
          "VS Code 확장 기반 개발자 행동 분석, 금융 오픈 데이터 파이프라인 등 데이터 중심 프로젝트를 소개합니다.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
