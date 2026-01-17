import { Quote } from "lucide-react";


/* =========================
   DATA
========================= */
const sections = [
  {
    layout: "split-right",
    title: "Vấn đề độc lập dân tộc",
    subtitle: "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm",
    images: [
      "https://i.ytimg.com/vi/F1OY2SGOgts/hqdefault.jpg",
      "https://tiengphapthuvi.fr/wp-content/uploads/2021/07/tuyenngon-1024x576.jpg"
    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Điểm xuất phát: Không chỉ dừng lại ở quyền con người (tự do, bình đẳng), Người đã nâng tầm thành quyền dân tộc.",
      "Lập luận: Người khéo léo viện dẫn Tuyên ngôn Độc lập của Mỹ (1776) và Pháp (1789) để khẳng định tính chính nghĩa của dân tộc Việt Nam.",
      "Chân lý thời đại: Khẳng định quyết tâm sắt đá qua khẩu hiệu:",
      "“Không có gì quý hơn độc lập, tự do”."
    ],
  },

  {
    layout: "split-left",
    title: "Vấn đề độc lập dân tộc",
    subtitle: "Độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân",
    images: [
      "https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2021/6/5/3-mjh07-1622854082908764515676-26-0-401-600-crop-1622854087816427114882-0-10-369-600-crop-1622859121110400429340.jpg"
    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Độc lập gắn với Tự do: Nếu nước độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập cũng chẳng có nghĩa lý gì.",
      "Tính thiết thực: Độc lập phải đi đôi với cải thiện đời sống: Dân phải có cơm ăn, áo mặc, được học hành và có chỗ ở.",
    ]
  },

  {
    layout: "split-right",
    title: "Vấn đề độc lập dân tộc",
    subtitle: "Độc lập thật sự, hoàn toàn và triệt để, gắn liền với thống nhất và toàn vẹn lãnh thổ",
    images: [
      "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/022024/2_20240202165920.jpg?width=600&height=-&type=resize",

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Không phải là sự \"ban ơn\" hay độc lập giả hiệu.",
      "Phải đảm bảo độc lập trên mọi lĩnh vực: Chính trị, kinh tế, văn hóa, ngoại giao và toàn vẹn lãnh thổ.",
      "Hồ Chí Minh khẳng định: \"Nước Việt Nam là một, dân tộc Việt Nam là một\".",
      "Sức mạnh ý chí: Dù phải gian khổ đến đâu, Tổ quốc nhất định phải thống nhất, Nam Bắc nhất định phải sum họp một nhà (Di chúc)."
    ],
  },

  {
    layout: "center",
    title: "Vấn đề cách mạng giải phóng dân tộc",
    subtitle: "Con đường giải phóng dân tộc ở Việt Nam",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.7Prp7KSQO9CnQnrilFYFCwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://24h68.com/wp-content/uploads/2021/06/24hhoc.edu_.vn-tai-sao-ho-chi-minh-khang-dinh-cach-mang-giai-phong-dan-toc-muon-thang-loi-thi-phai-di-theo-con-duong-cach-mang-vo-san.png"
    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Đi theo con đường cách mạng vô sản",
      "Phải do Đảng Cộng sản lãnh đạo,",
      "dựa trên sức mạnh đại đoàn kết toàn dân tộc nòng cốt: Lấy liên minh Công nhân - Nông dân làm nền tảng (cái gốc của cách mạng)",
      "Tính chủ động, sáng tạo và khả năng thắng lợi trước chính quốc",
      "tiến hành bằng phương pháp bạo lực cách mạng kẻ thù dùng bạo lực phản cách mạng để cai trị thì ta phải dùng bạo lực cách mạng để đáp trả.",
    ]
  },

  {
    layout: "center",
    title: "Tư tưởng Hồ Chí Minh về CNXH & xây dựng CNXH ở Việt Nam",
    subtitle: "Hồ Chí Minh hiểu Chủ nghĩa xã hội là gì?",
    images: [
      "https://i.pinimg.com/736x/f3/ca/a5/f3caa54211b7d02be4209d887d0a234f.jpg",
      "https://i.pinimg.com/736x/be/7e/b1/be7eb1417dd292771292d634ce43e19b.jpg"
    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Hồ Chí Minh không nói CNXH bằng lý thuyết khô khan mà bắt đầu từ đời sống nhân dân. Theo Người, CNXH trước hết phải giúp con người thoát nghèo, có việc làm, ấm no và hạnh phúc. CNXH vì vậy mang tính nhân văn rất rõ: làm cách mạng không chỉ để thay đổi chế độ mà để đổi đời cho dân",
    ]
  },

  {
    layout: "split-left",
    title: "Tư tưởng Hồ Chí Minh về CNXH & xây dựng CNXH ở Việt Nam",
    subtitle: "Vì sao Việt Nam nhất định phải đi lên CNXH?",
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.m3b9UOQmgY8l897LFz7KigHaFP?rs=1&pid=ImgDetMain&o=7&rm=3",

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Phù hợp xu thế thời đại.",
      "Đúng nguyện vọng của nhân dân lao động.",
      "Bảo vệ thành quả cách mạng.",
      "Do đó, đi lên CNXH là tất yếu khách quan, không phải lựa chọn cảm tính."
    ]
  },

  {
    layout: "split-right",
    title: "Tư tưởng Hồ Chí Minh về CNXH & xây dựng CNXH ở Việt Nam",
    subtitle: "Đặc trưng cơ bản của xã hội XHCN",
    images: [
      "https://i.pinimg.com/1200x/d9/6b/da/d96bdae18b705563e0072a4555129fe3.jpg",
    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Nhân dân làm chủ.",
      "Kinh tế phát triển dựa trên lực lượng sản xuất hiện đại và công hữu TLSX chủ yếu.",
      "Văn hoá – đạo đức phát triển, quan hệ xã hội công bằng, hợp lý.",
      "Là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng Cộng sản."
    ],
  },

  {
    layout: "split-left",
    title: "Tư tưởng Hồ Chí Minh về CNXH & xây dựng CNXH ở Việt Nam",
    subtitle: "Mục tiêu xây dựng CNXH ở Việt Nam",
    images: [
      "https://th.bing.com/th/id/R.64aa82bd5e7cbad962f800d39831b618?rik=RlZuxgCbQcPSpA&riu=http%3a%2f%2fredsvn.net%2fwp-content%2fuploads%2f2019%2f04%2fTranh-co-dong.jpg&ehk=x3ps3DhBy9UERYo0iwLjGGFMKo5RwXdoopgDwEnUnQg%3d&risl=&pid=ImgRaw&r=0",

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Chính trị: xây chế độ dân chủ, Nhà nước “của dân”, đồng thời bảo vệ nhân dân trước kẻ thù.",
      "Kinh tế: phát triển công – nông nghiệp, KHKT, tăng năng suất, nâng đời sống nhân dân.",
      "Văn hóa: xoá mù chữ, nâng dân trí, xây nếp sống mới, loại bỏ hủ tục, mê tín.",
      "Quan hệ xã hội: thực hiện “dân làm chủ – dân là chủ”, quyền tự do dân chủ phải đi cùng trách nhiệm, không bị lợi dụng gây hại xã hội."
    ]
  },

  {
    layout: "grid",
    title: "Động lực để xây dựng CNXH",
    subtitle: "CNXH muốn thành công phải có động lực mạnh, trong đó quan trọng nhất là:",
    images: [

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Lợi ích của nhân dân (cái gì lợi cho dân phải làm)",
      "Dân chủ (dân chủ XHCN là quý báu nhất).",
      "Đại đoàn kết toàn dân.",
      "Vai trò lãnh đạo của Đảng và hệ thống tổ chức xã hội.",
      "Đặc biệt là con người XHCN: muốn xây CNXH phải xây con người mới trước",
    ]
  },

  {
    layout: "center",
    title: "Thời kỳ quá độ lên CNXH ở Việt Nam",
    subtitle: "Thời kỳ quá độ là gì và có ý nghĩa gì?",
    images: [
      "https://i.pinimg.com/1200x/26/70/0a/26700aae9e858482506f1d2cf27fbb9b.jpg",
      "https://i.pinimg.com/1200x/61/9f/6d/619f6d853dafaa445e4cf95324fd3788.jpg"
    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Sau khi giành độc lập, Việt Nam không thể “bước sang CNXH ngay lập tức” mà phải trải qua giai đoạn chuyển tiếp gọi là thời kỳ quá độ. Hồ Chí Minh nhấn mạnh đây là giai đoạn cải biến sâu sắc nhưng rất phức tạp, kéo dài, gian khổ. Điều này cho thấy tư tưởng của Người rất thực tế: cách mạng là việc lớn, không được nóng vội.",

    ]
  },

  {
    layout: "split-right",
    title: "Đặc điểm quá độ ở Việt Nam",
    subtitle: "Đặc điểm nổi bật nhất:",
    images: [
      "https://i.pinimg.com/736x/77/ff/ee/77ffeeca2e7c187a5790b18bbd33b5d1.jpg"
    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Việt Nam đi lên CNXH từ một nước nông nghiệp lạc hậu và tiến thẳng lên CNXH, không qua tư bản chủ nghĩa.",
      "Vì vậy, quá độ ở Việt Nam vừa mang tính cách mạng vừa mang tính xây dựng lâu dài, phải làm nhiều việc cùng lúc."
    ]
  },

  {
    layout: "split-left",
    title: "Nhiệm vụ trong thời kỳ quá độ",
    subtitle: "Nhiệm vụ chung là xoá tàn tích xã hội cũ và xây xã hội mới trên mọi lĩnh vực.",
    images: [
      "https://i.pinimg.com/736x/90/1a/f6/901af6afc03a14cfe2fab16601215679.jpg"
    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Chính trị: xây dựng dân chủ vì dân chủ là bản chất CNXH.",
      "Kinh tế: cải tạo cái cũ, xây kinh tế mới hiện đại.",
      "Văn hóa: xoá ảnh hưởng thuộc địa, chống văn hóa nô dịch, kế thừa truyền thống + tiếp thu tinh hoa thế giới",
      "Quan hệ xã hội: đổi mới quan hệ xã hội, thói quen sống, hướng tới dân chủ – công bằng – văn minh"
    ]
  },

  {
    layout: "split-right",
    title: "Nguyên tắc xây dựng CNXH trong thời kỳ quá độ",
    subtitle: "Hồ Chí Minh đưa ra 4 nguyên tắc “xương sống”:",
    images: [
      "https://i.pinimg.com/1200x/6c/b7/ab/6cb7ab93540889bd4ba0bb52ff1fc7db.jpg"
    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Dựa trên chủ nghĩa Mác – Lênin.",
      "Giữ vững độc lập dân tộc.",
      "Đoàn kết và học tập kinh nghiệm quốc tế.",
      "Đoàn kết và học tập kinh nghiệm quốc tế.",
      "Xây đi đôi với chống (xây cái mới, chống cái xấu, cái lạc hậu)."
    ]
  },

  {
    layout: "grid",
    title: "Mối quan hệ giữa Độc lập dân tộc và CNXH",
    subtitle: "",
    images: [
      "https://i.pinimg.com/736x/e4/e3/56/e4e356041937396d25db09ecd858ae85.jpg",
      "https://i.pinimg.com/736x/b6/19/90/b6199063472220a34fc731d1d75aa050.jpg",
      "https://i.pinimg.com/736x/31/c9/53/31c953cde34adc8220f3e4fa40cd477a.jpg",
      "https://i.pinimg.com/1200x/e0/49/39/e049394d85dbd2074531ac054285acbe.jpg",

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Phương hướng chiến lược: Độc lập dân tộc -> CNXH, CN cộng sản.",
      "Độc lập dân tộc → tiền đề cho CNXH",
      "CNXH → điều kiện bảo đảm độc lập vững chắc",
      "Quan điểm của CN Mác: Đây là 2 giai đoạn của một quá trình cách mạng không ngừng.",
      "Quan điểm Hồ Chí Minh: Cách mạng giải phóng dân tộc là tiền đề để tiến hành cách mạng XHCN. Cách mạng XHCN là cơ sở để bảo vệ thành quả cách mạng giải phóng dân tộc.",

    ]
  },

  {
    layout: "grid",
    title: "Nguyên tắc bảo đảm",
    subtitle: "",
    images: [

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Vai trò lãnh đạo tuyệt đối của Đảng (mang tính nguyên tắc định hướng xây dựng XHCN).",
      "Khối đại đoàn kết dân tộc nền tảng là khối công – nông – trí (mang tính ý nghĩa chiến lược, quyết định thành công).",
      "Gắn bó với cách mạng thế giới (tạo nên sức mạnh tổng hợp, góp phần cho nền hoà bình, độc lập, dân chủ và CNXH trên thế giới).",

    ]
  },

  {
    layout: "split-right",
    title: "Kiên định mục tiêu và con đường cách mạng",
    subtitle: "",
    images: [

    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Đây là sự lựa chọn đúng đắn của Hồ Chí Minh và sự khẳng định của Cộng sản Việt Nam.",
      "Nắm vững ngọn cờ độc lập dân tộc và chủ nghĩa xã hội.",

    ]
  },

  {
    layout: "split-left",
    title: "Phát huy dân chủ XHCN",
    subtitle: "",
    images: [

    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Phát huy bản chất ưu việt của chế độ xã hội chủ nghĩa.",
      "Hoàn thiện pháp luật, bảo vệ quyền con người.",
      "Đề cao trách nhiệm công dân và đạo đức xã hội.",

    ]
  },

  {
    layout: "split-right",
    title: "Củng cố hệ thống chính trị",
    subtitle: "",
    images: [

    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Nhất nguyên, thống nhất dưới sự lãnh đạo của Đảng.",
      "Nhân dân thực hiện quyền làm chủ thông qua hoạt động của Nhà nước, của cả hệ thống chính trị và các hình thức dân chủ trực tiếp, dân chủ đại diện.",

    ]
  },

  {
    layout: "split-left",
    title: "Đấu tranh chống suy thoái, “tự diễn biến”",
    subtitle: "",
    images: [

    ],
    bgColor: "#0b0f14",
    titleColor: "#e0c36a",
    textColor: "#d4d4d8",
    content: [
      "Tích cực thực hiện vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc và CNXH.",

    ]
  },

  {
    layout: "grid",
    title: "Tại sao \"trước hết cần có những con người xã hội chủ nghĩa\"?",
    subtitle: "Đây là luận điểm quan trọng nhất trong chủ đề của bạn. Bạn cần làm rõ 3 lý do:",
    images: [

    ],
    bgColor: "#3b1a12",
    titleColor: "#e3b089",
    textColor: "#ffedd5",
    content: [
      "Con người là chủ thể của mọi hoạt động: Mọi chính sách, máy móc hay công nghệ dù hiện đại đến đâu cũng chỉ là vật chất thụ động. Chính con người là người vận hành và hiện thực hóa những lý tưởng đó.",
      "Để đối đầu với lực cản từ \"xã hội cũ\": Xây dựng CNXH là một cuộc chiến chống lại những thói quen lạc hậu, tư tưởng ích kỷ, tham ô, lãng phí. Muốn thắng \"giặc nội xâm\" này, phải có những con người có tư tưởng mới.",
      "Mối quan hệ \"đi trước một bước\": Hồ Chí Minh khẳng định: “Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa”. Nghĩa là công tác đào tạo con người phải đi trước, chuẩn bị sẵn sàng nguồn lực để gánh vác sự nghiệp xây dựng đất nước.",
    ]
  },

];

/* =========================
   COMPONENT
========================= */
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 px-24 max-w-6xl">
          <h1 className="text-7xl font-extrabold text-[#e0c36a] mb-8">
            Tư tưởng Hồ Chí Minh
            <br />
            <span className="text-white">về độc lập dân tộc</span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      {sections.map((s, i) => (
        <section
          key={i}
          className="py-16 px-24"
          style={{ backgroundColor: s.bgColor }}
        >

          {/* SPLIT */}
          {(s.layout === "split-left" || s.layout === "split-right") && (
            <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

              {/* IMAGE LEFT */}
              {s.layout === "split-left" && (
                <div className={`grid gap-6 ${s.images.length > 1 ? "grid-cols-2" : ""}`}>
                  {s.images.map((img, k) => (
                    <img
                      key={k}
                      src={img}
                      className="h-[420px] w-full object-cover rounded-2xl shadow-2xl"
                    />
                  ))}
                </div>
              )}

              {/* TEXT */}
              <div>
                <h2 className="text-4xl font-bold mb-3" style={{ color: s.titleColor }}>
                  {s.title}
                </h2>

                <h3 className="text-xl italic mb-8 opacity-90" style={{ color: s.textColor }}>
                  {s.subtitle}
                </h3>

                <ul className="list-disc pl-6 space-y-4 text-lg" style={{ color: s.textColor }}>
                  {s.content.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* IMAGE RIGHT */}
              {s.layout === "split-right" && (
                <div className="grid gap-6">
                  {s.images.map((img, k) => (
                    <img
                      key={k}
                      src={img}
                      className={`w-full object-cover rounded-2xl shadow-2xl ${s.images.length > 1 ? "h-[300px]" : "h-[420px]"
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* CENTER */}
          {s.layout === "center" && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="grid grid-cols-2 gap-6 mb-12">
                {s.images.map((img, k) => (
                  <img
                    key={k}
                    src={img}
                    className="h-[320px] w-full object-cover rounded-2xl shadow-2xl"
                  />
                ))}
              </div>

              <h2 className="text-4xl font-bold mb-3" style={{ color: s.titleColor }}>
                {s.title}
              </h2>

              <h3 className="text-xl italic mb-8 opacity-90" style={{ color: s.textColor }}>
                {s.subtitle}
              </h3>

              <p className="text-lg" style={{ color: s.textColor }}>
                {s.content.join(" ")}
              </p>
            </div>
          )}

          {/* GRID */}
          {s.layout === "grid" && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-3" style={{ color: s.titleColor }}>
                {s.title}
              </h2>

              <h3 className="text-xl italic mb-10 opacity-90" style={{ color: s.textColor }}>
                {s.subtitle}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {s.images.map((img, k) => (
                  <img
                    key={k}
                    src={img}
                    className="h-[200px] w-full object-cover rounded-xl shadow-xl"
                  />
                ))}
              </div>

              <ul className="list-disc pl-6 space-y-4 text-lg" style={{ color: s.textColor }}>
                {s.content.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}

      {/* AI USAGE */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#444 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-[#e0c36a] mb-6">
            Về việc sử dụng Trí tuệ Nhân tạo (AI)
          </h2>

          <div className="mx-auto mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl text-left">
            <p className="text-lg text-neutral-200 mb-6">
              Trong quá trình thực hiện học phần này, người học có sử dụng các công cụ{" "}
              <span className="text-[#e0c36a] font-semibold">
                Trí tuệ Nhân tạo (AI)
              </span>{" "}
              với mục đích hỗ trợ học tập và phát triển sản phẩm, bao gồm:
            </p>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li>• Gợi ý bố cục và cải tiến giao diện người dùng (UI/UX)</li>
              <li>• Hỗ trợ viết, chỉnh sửa và tối ưu mã nguồn React</li>
              <li>• Tìm kiếm, tóm tắt và hệ thống hóa nội dung học tập</li>
              <li>• Tạo và lựa chọn hình ảnh minh họa phù hợp với nội dung</li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 text-sm italic text-neutral-400 text-center">
              Việc sử dụng AI mang tính chất hỗ trợ kỹ thuật. Nội dung học tập, cách
              trình bày và kết quả cuối cùng do người học chủ động chỉnh sửa và chịu
              trách nhiệm.
            </div>
          </div>
        </div>
      </section>


      {/* QUOTE */}
      <section className="py-32 bg-gradient-to-b from-black to-[#240000] text-center">
        <Quote className="w-14 h-14 mx-auto mb-10 text-[#e0c36a]" />
        <blockquote className="text-4xl text-white">
          “Không có gì quý hơn độc lập, tự do.”
        </blockquote>
        <p className="mt-8 text-neutral-400">– Hồ Chí Minh</p>
      </section>
    </main>
  );
}
