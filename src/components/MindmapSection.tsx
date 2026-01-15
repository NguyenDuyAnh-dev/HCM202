import { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  level: number;
  color: string;
  children?: Node[];
}

export function MindmapSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const rootNode: Node = {
    id: 'root',
    label: 'TƯ TƯỞNG HỒ CHÍ MINH\nĐỘC LẬP DÂN TỘC\n& CHỦ NGHĨA XÃ HỘI',
    x: 600,
    y: 400,
    level: 0,
    color: '#dc2626',
    children: [
      // ===== ĐỘC LẬP DÂN TỘC =====
      {
        id: 'doclap',
        label: 'ĐỘC LẬP DÂN TỘC',
        x: 250,
        y: 220,
        level: 1,
        color: '#ea580c',
        children: [
          {
            id: 'quyen',
            label: 'Quyền thiêng liêng\nbất khả xâm phạm',
            x: 80,
            y: 120,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'q1', label: 'Quyền sống', x: -80, y: 80, level: 3, color: '#fde68a' },
              { id: 'q2', label: 'Quyền tự do', x: -80, y: 120, level: 3, color: '#fde68a' },
              { id: 'q3', label: 'Quyền mưu cầu hạnh phúc', x: -80, y: 160, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'hanhphuc',
            label: 'Gắn với tự do\nhạnh phúc nhân dân',
            x: 80,
            y: 200,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'hp1', label: 'Có cơm ăn', x: -80, y: 200, level: 3, color: '#fde68a' },
              { id: 'hp2', label: 'Có áo mặc', x: -80, y: 240, level: 3, color: '#fde68a' },
              { id: 'hp3', label: 'Được học hành', x: -80, y: 280, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'trietde',
            label: 'Độc lập thật sự\nhoàn toàn – triệt để',
            x: 80,
            y: 280,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'td1', label: 'Chính trị', x: -80, y: 320, level: 3, color: '#fde68a' },
              { id: 'td2', label: 'Kinh tế', x: -80, y: 360, level: 3, color: '#fde68a' },
              { id: 'td3', label: 'Văn hóa', x: -80, y: 400, level: 3, color: '#fde68a' },
              { id: 'td4', label: 'Ngoại giao', x: -80, y: 440, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'thongnhat',
            label: 'Thống nhất &\nToàn vẹn lãnh thổ',
            x: 80,
            y: 360,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'tn1', label: 'Không chia cắt', x: -80, y: 480, level: 3, color: '#fde68a' },
              { id: 'tn2', label: 'Không phụ thuộc', x: -80, y: 520, level: 3, color: '#fde68a' }
            ]
          }
        ]
      },

      // ===== CÁCH MẠNG GIẢI PHÓNG DÂN TỘC =====
      {
        id: 'cmgpdn',
        label: 'CÁCH MẠNG\nGIẢI PHÓNG DÂN TỘC',
        x: 950,
        y: 220,
        level: 1,
        color: '#ea580c',
        children: [
          {
            id: 'vosan',
            label: 'Con đường\ncách mạng vô sản',
            x: 1120,
            y: 100,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'vs1', label: 'CN Mác – Lênin', x: 1250, y: 80, level: 3, color: '#fde68a' },
              { id: 'vs2', label: 'Không cải lương', x: 1250, y: 120, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'dang',
            label: 'Đảng Cộng sản\nlãnh đạo',
            x: 1120,
            y: 170,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'd1', label: 'Đội tiên phong', x: 1250, y: 160, level: 3, color: '#fde68a' },
              { id: 'd2', label: 'Đại diện lợi ích dân tộc', x: 1250, y: 200, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'doanket',
            label: 'Đại đoàn kết\ntoàn dân tộc',
            x: 1120,
            y: 240,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'dk1', label: 'Công – Nông – Trí', x: 1250, y: 240, level: 3, color: '#fde68a' },
              { id: 'dk2', label: 'Mặt trận dân tộc', x: 1250, y: 280, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'chudong',
            label: 'Chủ động – sáng tạo\nthắng trước chính quốc',
            x: 1120,
            y: 310,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'cd1', label: 'Thuộc địa có thể thắng trước', x: 1250, y: 320, level: 3, color: '#fde68a' }
            ]
          },
          {
            id: 'baoluc',
            label: 'Bạo lực\ncách mạng',
            x: 1120,
            y: 380,
            level: 2,
            color: '#f59e0b',
            children: [
              { id: 'bl1', label: 'Chính trị + vũ trang', x: 1250, y: 380, level: 3, color: '#fde68a' },
              { id: 'bl2', label: 'Ưu tiên hòa bình', x: 1250, y: 420, level: 3, color: '#fde68a' }
            ]
          }
        ]
      },

      // ===== CHỦ NGHĨA XÃ HỘI =====
      {
        id: 'cnxh',
        label: 'CHỦ NGHĨA XÃ HỘI',
        x: 400,
        y: 580,
        level: 1,
        color: '#16a34a',
        children: [
          {
            id: 'banchat',
            label: 'CNXH vì con người',
            x: 250,
            y: 520,
            level: 2,
            color: '#4ade80',
            children: [
              { id: 'bc1', label: 'Ấm no', x: 150, y: 500, level: 3, color: '#bbf7d0' },
              { id: 'bc2', label: 'Hạnh phúc', x: 150, y: 540, level: 3, color: '#bbf7d0' }
            ]
          },
          {
            id: 'dactrung',
            label: 'Đặc trưng XHCN',
            x: 250,
            y: 600,
            level: 2,
            color: '#4ade80',
            children: [
              { id: 'dt1', label: 'Nhân dân làm chủ', x: 150, y: 580, level: 3, color: '#bbf7d0' },
              { id: 'dt2', label: 'Kinh tế phát triển', x: 150, y: 620, level: 3, color: '#bbf7d0' },
              { id: 'dt3', label: 'Văn hóa tiến bộ', x: 150, y: 660, level: 3, color: '#bbf7d0' }
            ]
          }
        ]
      },

      // ===== THỜI KỲ QUÁ ĐỘ =====
      {
        id: 'quado',
        label: 'THỜI KỲ QUÁ ĐỘ\nLÊN CNXH',
        x: 800,
        y: 580,
        level: 1,
        color: '#2563eb',
        children: [
          {
            id: 'nhiemvu',
            label: 'Nhiệm vụ',
            x: 950,
            y: 600,
            level: 2,
            color: '#60a5fa',
            children: [
              { id: 'nv1', label: 'Xóa tàn dư cũ', x: 1100, y: 580, level: 3, color: '#bfdbfe' },
              { id: 'nv2', label: 'Xây xã hội mới', x: 1100, y: 620, level: 3, color: '#bfdbfe' }
            ]
          }
        ]
      }
    ]
  };



  const drawNode = (ctx: CanvasRenderingContext2D, node: Node) => {
    const lines = node.label.split('\n');
    const lineHeight = 22;
    const padding = 16;
    const width = Math.max(...lines.map(line => ctx.measureText(line).width)) + padding * 2;
    const height = lines.length * lineHeight + padding * 2;

    const x = (node.x + pan.x) * scale;
    const y = (node.y + pan.y) * scale;

    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 10 * scale;
    ctx.shadowOffsetX = 2 * scale;
    ctx.shadowOffsetY = 2 * scale;

    const radius = 8 * scale;
    ctx.fillStyle = node.color;
    ctx.beginPath();
    ctx.roundRect(x - width * scale / 2, y - height * scale / 2, width * scale, height * scale, radius);
    ctx.fill();

    ctx.shadowColor = 'transparent';

    ctx.fillStyle = node.level === 0 ? '#ffffff' : '#1f2937';
    ctx.font = `${node.level === 0 ? 'bold ' : ''}${14 * scale}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    lines.forEach((line, i) => {
      const offsetY = (i - (lines.length - 1) / 2) * lineHeight * scale;
      ctx.fillText(line, x, y + offsetY);
    });
  };

  const drawConnection = (ctx: CanvasRenderingContext2D, from: Node, to: Node) => {
    const x1 = (from.x + pan.x) * scale;
    const y1 = (from.y + pan.y) * scale;
    const x2 = (to.x + pan.x) * scale;
    const y2 = (to.y + pan.y) * scale;

    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.moveTo(x1, y1);

    const midX = (x1 + x2) / 2;
    ctx.bezierCurveTo(midX, y1, midX, y2, x2, y2);
    ctx.stroke();
  };

  const drawMindmap = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const drawConnections = (node: Node) => {
      if (node.children) {
        node.children.forEach(child => {
          drawConnection(ctx, node, child);
          drawConnections(child);
        });
      }
    };
    drawConnections(rootNode);

    const drawNodes = (node: Node) => {
      drawNode(ctx, node);
      if (node.children) {
        node.children.forEach(child => drawNodes(child));
      }
    };
    drawNodes(rootNode);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    drawMindmap();
  }, [scale, pan]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.min(Math.max(prev * delta, 0.3), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;

    setPan(prev => ({
      x: prev.x + dx / scale,
      y: prev.y + dy / scale
    }));

    setLastPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-2">
               Mindmap
            </h2>
            <p className="text-gray-600">
              Kéo để di chuyển, cuộn chuột để zoom
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setScale(prev => Math.min(prev * 1.2, 3))}
              className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              title="Phóng to"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={() => setScale(prev => Math.max(prev * 0.8, 0.3))}
              className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              title="Thu nhỏ"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={resetView}
              className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              title="Đặt lại"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg overflow-hidden border-2 border-gray-200">
          <canvas
            ref={canvasRef}
            className="w-full cursor-move"
            style={{ height: '600px' }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />

          <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md text-sm text-gray-600">
            Zoom: {Math.round(scale * 100)}%
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* LEVEL 0 */}
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="font-medium text-gray-800">Chủ đề chính</span>
            </div>
            <p className="text-sm text-gray-600">
              Ý tưởng trung tâm của toàn bộ tư tưởng
            </p>
          </div>

          {/* LEVEL 1 */}
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-orange-600 rounded"></div>
              <span className="font-medium text-gray-800">Mục lớn</span>
            </div>
            <p className="text-sm text-gray-600">
              Các vấn đề lớn trong tư tưởng Hồ Chí Minh
            </p>
          </div>

          {/* LEVEL 2 */}
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="font-medium text-gray-800">Chi tiết</span>
            </div>
            <p className="text-sm text-gray-600">
              Nội dung cụ thể của từng vấn đề
            </p>
          </div>

          {/* LEVEL 3 */}
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-amber-300 rounded"></div>
              <span className="font-medium text-gray-800">Nội dung nhỏ</span>
            </div>
            <p className="text-sm text-gray-600">
              Dẫn giải, ví dụ, ý triển khai cụ thể
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

