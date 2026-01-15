import React, { useState } from "react";

const questions = [
  {
    q: "Không có gì quý hơn độc lập và ______?",
    a: "tự do"
  },
  {
    q: "Cách mạng là sự nghiệp của?",
    a: "quần chúng nhân dân"
  }
];

const Quiz: React.FC = () => {
  const [ans, setAns] = useState<string[]>(Array(questions.length).fill(""));
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Quiz ôn tập</h2>

      {questions.map((q, i) => (
        <div key={i} style={{
          background: "#fff",
          padding: 20,
          borderRadius: 14,
          marginBottom: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
          <b>Câu {i + 1}: {q.q}</b>
          <input
            style={{ display: "block", marginTop: 8, padding: 6 }}
            value={ans[i]}
            onChange={e =>
              setAns(a => a.map((v, idx) => idx === i ? e.target.value : v))
            }
          />
          {show && (
            <div style={{ marginTop: 8 }}>
              {ans[i].toLowerCase().trim() === q.a
                ? <span style={{ color: "green" }}>Đúng</span>
                : <span style={{ color: "red" }}>Sai – {q.a}</span>}
            </div>
          )}
        </div>
      ))}

      <button
        onClick={() => setShow(true)}
        style={{
          padding: "10px 24px",
          background: "#02844f",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 600
        }}
      >
        Nộp bài
      </button>
    </div>
  );
};

export default Quiz;
