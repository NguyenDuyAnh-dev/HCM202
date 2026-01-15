import { Quote } from "lucide-react";
import sucManhCachMang from "../assets/sucmanhcachmang.jpg";

const sections = [
  {
    layout: "split-right",
    title: "3.1.1. Vấn đề độc lập dân tộc",
    image:
      "https://tuyengiao.hagiang.gov.vn/upload/64711/20230905/grab17519thinhvuongvietnamcom702092023085344.jpg",
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Hồ Chí Minh nâng quyền con người thành quyền của cả dân tộc.",
      "Viện dẫn Tuyên ngôn Mỹ (1776) và Pháp (1789).",
      "Chân lý thời đại: “Không có gì quý hơn độc lập, tự do”."
    ]
  },
  {
    layout: "split-left",
    title: "3.1.1. Độc lập gắn liền với hạnh phúc nhân dân",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.JMTHj2TPX0DFDxsmGOvYmQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Độc lập không có ý nghĩa nếu nhân dân không hạnh phúc.",
      "Phải bảo đảm cơm ăn, áo mặc, học hành và chỗ ở."
    ]
  },
  {
    layout: "center",
    title: "3.1.2. Cách mạng giải phóng dân tộc",
    image:
      "https://cdn.tgdd.vn/Files/2022/07/26/1450679/nguon-goc-y-nghia-ngay-cach-mang-thang-tam-thanh-cong-202207262209323836.jpg",
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được dân tộc bị áp bức.",
      "Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội."
    ]
  },
  {
    layout: "grid",
    title: "3.1.2. Sức mạnh cách mạng",
    image: sucManhCachMang,
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Cách mạng là sự nghiệp của quần chúng nhân dân.",
      "Liên minh công – nông là nền tảng.",
      "Đoàn kết, đoàn kết, đại đoàn kết."
    ]
  }
];

export default function TheorySection() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnJqMzcwdGwzdnMzendlZWYxc2UxcjExdWh4cDAxZTJreW85Yjh0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nu4rCTNx3Xqqk34l9M/giphy.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70" />
        <div className="relative z-10 px-10 md:px-24 max-w-6xl">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-[#e0c36a] leading-tight">
            Tư tưởng Hồ Chí Minh
            <br />
            <span className="text-neutral-100">về độc lập dân tộc</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Hệ tư tưởng kết tinh từ lịch sử đấu tranh, khát vọng tự do và
            con đường cách mạng Việt Nam.
          </p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((s, i) => (
        <section
          key={i}
          className="relative py-32 px-8 md:px-24"
          style={{ backgroundColor: s.bgColor }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "22px 22px"
            }}
          />

          {/* SPLIT RIGHT */}
          {s.layout === "split-right" && (
            <div className="relative grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <div>
                <h2
                  className="text-4xl font-bold mb-8"
                  style={{ color: s.titleColor }}
                >
                  {s.title}
                </h2>
                <ul
                  className="list-disc pl-6 space-y-4 text-lg"
                  style={{ color: s.textColor }}
                >
                  {s.content.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <img src={s.image} className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* SPLIT LEFT */}
          {s.layout === "split-left" && (
            <div className="relative grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <div className="h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <img src={s.image} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2
                  className="text-4xl font-bold mb-8"
                  style={{ color: s.titleColor }}
                >
                  {s.title}
                </h2>
                <ul
                  className="list-disc pl-6 space-y-4 text-lg"
                  style={{ color: s.textColor }}
                >
                  {s.content.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* CENTER */}
          {s.layout === "center" && (
            <div className="relative max-w-4xl mx-auto text-center">
              <div className="h-[420px] mb-14 rounded-2xl overflow-hidden shadow-2xl">
                <img src={s.image} className="w-full h-full object-cover" />
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: s.titleColor }}
              >
                {s.title}
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: s.textColor }}
              >
                {s.content.join(" ")}
              </p>
            </div>
          )}

          {/* GRID */}
          {s.layout === "grid" && (
            <div className="relative max-w-6xl mx-auto">
              <h2
                className="text-4xl font-bold mb-12"
                style={{ color: s.titleColor }}
              >
                {s.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={s.image} className="w-full h-full object-cover" />
                </div>
                <ul
                  className="list-disc pl-6 space-y-4 text-lg"
                  style={{ color: s.textColor }}
                >
                  {s.content.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* AI ACKNOWLEDGEMENT */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/10">
        {/* subtle grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative max-w-5xl mx-auto px-8 md:px-24">
          {/* Title */}
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-[#e0c36a] mb-4">
              Về việc sử dụng Trí tuệ Nhân tạo (AI)
            </h3>
            <div className="w-20 h-[2px] bg-[#e0c36a] mx-auto opacity-70" />
          </div>

          {/* Content card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 shadow-xl">
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              Trong quá trình thực hiện học phần này, người học có sử dụng các công cụ
              <span className="text-[#e0c36a] font-medium">
                {" "}Trí tuệ Nhân tạo (AI)
              </span>{" "}
              với mục đích hỗ trợ học tập và phát triển sản phẩm, bao gồm:
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-[#e0c36a] text-xl">▸</span>
                <span>Gợi ý bố cục và cải tiến giao diện người dùng (UI/UX)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e0c36a] text-xl">▸</span>
                <span>Hỗ trợ viết, chỉnh sửa và tối ưu mã nguồn React</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e0c36a] text-xl">▸</span>
                <span>Tìm kiếm, tóm tắt và hệ thống hóa nội dung học tập</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e0c36a] text-xl">▸</span>
                <span>Tạo và lựa chọn hình ảnh minh họa phù hợp với nội dung</span>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-neutral-400 text-base italic text-center">
                Việc sử dụng AI mang tính chất hỗ trợ kỹ thuật.
                Nội dung học tập, cách trình bày và kết quả cuối cùng
                do người học chủ động chỉnh sửa và chịu trách nhiệm.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* QUOTE */}
      <section className="py-32 bg-gradient-to-b from-black to-[#240000] text-center">
        <Quote className="w-14 h-14 mx-auto mb-10 text-[#e0c36a]" />
        <blockquote className="text-4xl md:text-5xl text-neutral-100 font-medium">
          “Không có gì quý hơn độc lập, tự do.”
        </blockquote>
        <p className="mt-8 text-neutral-400 text-lg">– Hồ Chí Minh</p>
      </section>

    </main>
  );
}
