import { useState } from "react";
import "./index.css";
import { BookOpen, Brain, ClipboardCheck } from "lucide-react";

import { MindmapSection } from "./components/MindmapSection";
import { QuizSection } from "./components/QuizSection";
import LyThuyet from "./components/TheorySection";

type Tab = "theory" | "mindmap" | "quiz";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("theory");

  // =======================
  // TAB STYLE HELPER
  // =======================
  const tabClass = (tab: Tab) =>
    activeTab === tab
      ? `
        flex items-center gap-2 px-6 py-4
        font-semibold text-red-800
        bg-amber-100
        border-b-2 border-red-700
        rounded-t-lg
      `
      : `
        flex items-center gap-2 px-6 py-4
        font-medium text-gray-700
        hover:text-red-700 hover:bg-amber-50
        rounded-t-lg transition
      `;

  /* =======================
     FULL PAGE: LÝ THUYẾT
     ======================= */
  if (activeTab === "theory") {
    return (
      <>
        {/* Header */}
        <header className="
          fixed top-0 left-0 w-full z-50
          bg-gradient-to-r from-red-700 via-red-800 to-amber-800
          shadow-lg
        ">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-center text-amber-50">
              Tư Tưởng Hồ Chí Minh
            </h1>
            <p className="text-center text-amber-200 text-sm">
              Về Độc Lập Dân Tộc
            </p>
          </div>

          {/* Tabs */}
          <div className="bg-amber-50/90 backdrop-blur border-t border-amber-200/60">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex space-x-2">
                <button onClick={() => setActiveTab("theory")} className={tabClass("theory")}>
                  <BookOpen className="w-5 h-5" />
                  Lý Thuyết
                </button>

                <button onClick={() => setActiveTab("mindmap")} className={tabClass("mindmap")}>
                  <Brain className="w-5 h-5" />
                  Mindmap
                </button>

                <button onClick={() => setActiveTab("quiz")} className={tabClass("quiz")}>
                  <ClipboardCheck className="w-5 h-5" />
                  Kiểm Tra
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="pt-[140px]">
          <LyThuyet />
        </div>
      </>
    );
  }

  /* =======================
     NORMAL PAGES
     ======================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 via-red-800 to-amber-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-amber-50 mb-2">
            Tư Tưởng Hồ Chí Minh
          </h1>
          <p className="text-center text-amber-200 text-lg">
            Về Độc Lập Dân Tộc
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-amber-50 shadow-md border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-2">
            <button onClick={() => setActiveTab("theory")} className={tabClass("theory")}>
              <BookOpen className="w-5 h-5" />
              Lý Thuyết
            </button>

            <button onClick={() => setActiveTab("mindmap")} className={tabClass("mindmap")}>
              <Brain className="w-5 h-5" />
              Mindmap
            </button>

            <button onClick={() => setActiveTab("quiz")} className={tabClass("quiz")}>
              <ClipboardCheck className="w-5 h-5" />
              Kiểm Tra
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "mindmap" && <MindmapSection />}
        {activeTab === "quiz" && <QuizSection />}
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-amber-100 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            “Không có gì quý hơn độc lập, tự do” – Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </footer>
    </div>
  );
}
