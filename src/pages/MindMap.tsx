import React from "react";

const MindCard = ({ title, items }: any) => (
  <div style={{
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    width: 320,
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)"
  }}>
    <h4 style={{ color: "#12559c", marginBottom: 12 }}>{title}</h4>
    <ul>
      {items.map((i: string, idx: number) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  </div>
);

const MindMap: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Sơ đồ tư duy tổng quan</h2>
      <div style={{ display: "flex", gap: 32 }}>
        <MindCard
          title="Vấn đề độc lập dân tộc"
          items={[
            "Quyền thiêng liêng",
            "Gắn tự do – hạnh phúc",
            "Độc lập toàn diện",
            "Thống nhất lãnh thổ"
          ]}
        />
        <MindCard
          title="Cách mạng giải phóng dân tộc"
          items={[
            "Con đường vô sản",
            "Đảng lãnh đạo",
            "Đại đoàn kết",
            "Bạo lực cách mạng"
          ]}
        />
      </div>
    </div>
  );
};

export default MindMap;
