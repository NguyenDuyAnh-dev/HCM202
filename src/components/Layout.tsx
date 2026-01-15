import React, { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  page: string;
  setPage: (p: string) => void;
}

const btnStyle = (active: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "12px 20px",
  marginBottom: 10,
  border: "none",
  borderRadius: 10,
  background: active ? "#ffffff" : "transparent",
  color: active ? "#12559c" : "#eaf1ff",
  fontWeight: active ? 600 : 400,
  fontSize: 15,
  cursor: "pointer",
  textAlign: "left"
});

const Layout: React.FC<LayoutProps> = ({ children, page, setPage }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f7fb" }}>
      {/* SIDEBAR */}
      <aside style={{
        width: 250,
        background: "#12559c",
        padding: "24px 16px"
      }}>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 4 }}>
          TƯ TƯỞNG HCM
        </h2>
        <p style={{
          color: "#cfe2ff",
          textAlign: "center",
          fontSize: 13,
          marginBottom: 30
        }}>
          Học phần 3.1
        </p>

        <button style={btnStyle(page === "theory")} onClick={() => setPage("theory")}>
          📘 Lý thuyết
        </button>
        <button style={btnStyle(page === "mindmap")} onClick={() => setPage("mindmap")}>
          🧠 Mindmap
        </button>
        <button style={btnStyle(page === "quiz")} onClick={() => setPage("quiz")}>
          📝 Quiz ôn tập
        </button>
      </aside>

      {/* CONTENT */}
      <main style={{
        flex: 1,
        padding: page === "theory" ? 0 : 32,
        overflowX: "hidden"
      }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
