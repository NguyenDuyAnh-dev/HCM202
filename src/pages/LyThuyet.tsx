import React, { type ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => (
  <div
    style={{
      background: "#fff",
      padding: 24,
      borderRadius: 14,
      marginBottom: 24,
      boxShadow: "0 4px 14px rgba(0,0,0,0.06)"
    }}
  >
    <h3 style={{ color: "#12559c", marginBottom: 12 }}>{title}</h3>
    <div style={{ lineHeight: 1.7 }}>{children}</div>
  </div>
);

const LyThuyet: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 24 }}>
        TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC
      </h1>

      <Card title="a. Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm">
        <p>
          Hồ Chí Minh không chỉ dừng lại ở quyền con người mà nâng lên thành
          <b> quyền của cả một dân tộc</b>.
        </p>
        <blockquote
          style={{
            marginTop: 12,
            paddingLeft: 12,
            borderLeft: "4px solid #12559c",
            fontStyle: "italic"
          }}
        >
          “Không có gì quý hơn độc lập, tự do.”
        </blockquote>
      </Card>

      <Card title="b. Độc lập gắn liền với tự do, hạnh phúc của nhân dân">
        <p>
          Nếu nước được độc lập mà nhân dân không được hưởng hạnh phúc, tự do
          thì độc lập cũng không có ý nghĩa.
        </p>
      </Card>

      <Card title="c. Độc lập thật sự, hoàn toàn và triệt để">
        <p>
          Độc lập không phải sự ban phát mà phải đảm bảo trên mọi lĩnh vực:
          chính trị, kinh tế, văn hóa, ngoại giao và toàn vẹn lãnh thổ.
        </p>
      </Card>

      <Card title="d. Gắn liền với thống nhất và toàn vẹn lãnh thổ">
        <blockquote
          style={{
            paddingLeft: 12,
            borderLeft: "4px solid #12559c",
            fontStyle: "italic"
          }}
        >
          “Nước Việt Nam là một, dân tộc Việt Nam là một.”
        </blockquote>
      </Card>
    </div>
  );
};

export default LyThuyet;
