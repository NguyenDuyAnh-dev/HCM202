import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Trophy, Home } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Khẩu hiệu nổi tiếng của Hồ Chí Minh về độc lập dân tộc là gì?',
    options: [
      'Tổ quốc trên hết',
      'Không có gì quý hơn độc lập, tự do',
      'Đoàn kết là sức mạnh',
      'Đất nước trọn vẹn, non sông xanh tốt'
    ],
    correct: 1,
    explanation: 'Đây là khẩu hiệu nổi tiếng nhất thể hiện tư tưởng của Hồ Chí Minh về độc lập dân tộc, khẳng định giá trị cao nhất của độc lập và tự do.'
  },
  {
    id: 2,
    question: 'Theo Hồ Chí Minh, độc lập dân tộc phải gắn liền với điều gì?',
    options: [
      'Chỉ cần độc lập về chính trị',
      'Độc lập về kinh tế',
      'Tự do và hạnh phúc của nhân dân',
      'Phát triển quân sự'
    ],
    correct: 2,
    explanation: 'Hồ Chí Minh khẳng định: "Nếu nước độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập cũng chẳng có nghĩa lý gì".'
  },
  {
    id: 3,
    question: 'Con đường cách mạng mà Hồ Chí Minh lựa chọn cho Việt Nam là gì?',
    options: [
      'Cách mạng tư sản',
      'Cải cách từ từ',
      'Cách mạng vô sản',
      'Đàm phán hòa bình'
    ],
    correct: 2,
    explanation: 'Sau khi nghiên cứu các mô hình cách mạng, Người kết luận: "Chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng được các dân tộc bị áp bức".'
  },
  {
    id: 4,
    question: 'Theo Hồ Chí Minh, ai là nhân tố quyết định thành bại của cách mạng?',
    options: [
      'Quân đội',
      'Đảng Cộng sản',
      'Nước ngoài',
      'Trí thức'
    ],
    correct: 1,
    explanation: 'Hồ Chí Minh khẳng định Đảng Cộng sản là nhân tố quyết định thành bại, là đội tiên phong của giai cấp công nhân và là Đảng của cả dân tộc.'
  },
  {
    id: 5,
    question: 'Nền tảng của sức mạnh đại đoàn kết toàn dân tộc là gì?',
    options: [
      'Liên minh với nước ngoài',
      'Liên minh Công nhân - Nông dân',
      'Quân đội mạnh',
      'Kinh tế phát triển'
    ],
    correct: 1,
    explanation: 'Hồ Chí Minh xác định liên minh Công nhân - Nông dân làm nền tảng, là cái gốc của cách mạng trong khối đại đoàn kết toàn dân tộc.'
  },
  {
    id: 6,
    question: 'Theo Hồ Chí Minh, độc lập phải đảm bảo trên những lĩnh vực nào?',
    options: [
      'Chỉ chính trị',
      'Chính trị và quân sự',
      'Chính trị, kinh tế, văn hóa',
      'Chính trị, kinh tế, văn hóa, ngoại giao và toàn vẹn lãnh thổ'
    ],
    correct: 3,
    explanation: 'Độc lập phải thật sự, hoàn toàn và triệt để trên mọi lĩnh vực: chính trị, kinh tế, văn hóa, ngoại giao và toàn vẹn lãnh thổ.'
  },
  {
    id: 7,
    question: 'Phương châm về đoàn kết của Hồ Chí Minh là gì?',
    options: [
      'Đoàn kết để chiến thắng',
      'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công',
      'Đoàn kết là sức mạnh',
      'Cùng nhau đoàn kết'
    ],
    correct: 1,
    explanation: 'Đây là phương châm nổi tiếng của Hồ Chí Minh về đại đoàn kết dân tộc, nhấn mạnh tầm quan trọng của sự đoàn kết đối với thành công.'
  },
  {
    id: 8,
    question: 'Luận điểm sáng tạo của Hồ Chí Minh về khả năng thắng lợi của thuộc địa là gì?',
    options: [
      'Phải chờ chính quốc cách mạng trước',
      'Phụ thuộc vào sự giúp đỡ nước ngoài',
      'Thuộc địa có thể giành thắng lợi trước chính quốc',
      'Không thể thắng nếu chính quốc không cách mạng'
    ],
    correct: 2,
    explanation: 'Đây là luận điểm sáng tạo, khác với quan điểm truyền thống. Hồ Chí Minh khẳng định thuộc địa có thể giành thắng lợi trước vì là "nguồn sống" của đế quốc.'
  }
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(optionIndex);
    setShowResult(true);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newUserAnswers);

    if (optionIndex === questions[currentQuestion].correct) {
      if (userAnswers[currentQuestion] === null) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setQuizCompleted(false);
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Trang kết quả tổng kết
  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    let grade = '';
    let gradeColor = '';
    let message = '';

    if (percentage >= 90) {
      grade = 'Xuất sắc';
      gradeColor = 'text-green-600';
      message = 'Bạn đã nắm vững kiến thức về tư tưởng Hồ Chí Minh!';
    } else if (percentage >= 70) {
      grade = 'Giỏi';
      gradeColor = 'text-blue-600';
      message = 'Bạn hiểu khá tốt về tư tưởng Hồ Chí Minh!';
    } else if (percentage >= 50) {
      grade = 'Khá';
      gradeColor = 'text-yellow-600';
      message = 'Bạn cần ôn lại một số nội dung quan trọng.';
    } else {
      grade = 'Cần cố gắng';
      gradeColor = 'text-red-600';
      message = 'Hãy xem lại phần lý thuyết và thử lại nhé!';
    }

    return (
      <div className="max-w-4xl mx-auto">
        {/* Header kết quả */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg p-8 mb-6 text-center">
          <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-2">🎉 Hoàn thành bài kiểm tra!</h2>
          <p className="text-red-100 text-lg">Xem kết quả chi tiết bên dưới</p>
        </div>

        {/* Điểm số tổng quan */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-red-100 to-yellow-100 mb-4">
              <span className="text-5xl font-bold text-red-600">{score}/{questions.length}</span>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              Điểm số: <span className="text-red-600">{percentage}%</span>
            </div>
            <div className={`text-3xl font-bold ${gradeColor} mb-2`}>
              {grade}
            </div>
            <p className="text-gray-600 text-lg">{message}</p>
          </div>

          {/* Thanh tiến độ */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tỷ lệ đúng</span>
              <span>{percentage}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${
                  percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Thống kê */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-600">Câu đúng</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
              <XCircle className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
              <div className="text-sm text-gray-600">Câu sai</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">{questions.length}</div>
              <div className="text-sm text-gray-600">Tổng câu hỏi</div>
            </div>
          </div>
        </div>

        {/* Chi tiết từng câu */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Chi tiết từng câu hỏi</h3>
          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrectAnswer = userAnswer === q.correct;
              
              return (
                <div 
                  key={q.id} 
                  className={`p-4 rounded-lg border-l-4 ${
                    isCorrectAnswer 
                      ? 'bg-green-50 border-green-500' 
                      : 'bg-red-50 border-red-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isCorrectAnswer ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 mb-2">
                        Câu {idx + 1}: {q.question}
                      </div>
                      <div className="text-sm space-y-1">
                        <div className={isCorrectAnswer ? 'text-green-700' : 'text-red-700'}>
                          <span className="font-medium">Bạn chọn:</span> {userAnswer !== null ? q.options[userAnswer] : 'Chưa trả lời'}
                        </div>
                        {!isCorrectAnswer && (
                          <div className="text-green-700">
                            <span className="font-medium">Đáp án đúng:</span> {q.options[q.correct]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={resetQuiz}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-medium flex items-center gap-2 shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Làm lại bài kiểm tra
          </button>
        </div>
      </div>
    );
  }

  // Giao diện làm quiz
  return (
    <div className="max-w-4xl mx-auto">
      {/* Score Card */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              📝 Kiểm Tra Kiến Thức
            </h2>
            <p className="text-red-100">
              Hãy kiểm tra sự hiểu biết của bạn về tư tưởng Hồ Chí Minh
            </p>
          </div>
          <div className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">{score}</div>
            <div className="text-sm text-red-100">/ {questions.length}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-red-100 mb-2">
            <span>Tiến độ</span>
            <span>{currentQuestion + 1} / {questions.length}</span>
          </div>
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="mb-6">
          <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Câu hỏi {currentQuestion + 1}
          </span>
          <h3 className="text-2xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all ';
            
            if (showResult) {
              if (index === question.correct) {
                buttonClass += 'border-green-500 bg-green-50 text-green-900';
              } else if (index === selectedAnswer) {
                buttonClass += 'border-red-500 bg-red-50 text-red-900';
              } else {
                buttonClass += 'border-gray-200 bg-gray-50 text-gray-500';
              }
            } else {
              buttonClass += selectedAnswer === index
                ? 'border-red-600 bg-red-50 text-red-900'
                : 'border-gray-200 hover:border-red-300 hover:bg-red-50';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showResult && index === question.correct && (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={`p-4 rounded-lg border-l-4 ${
            isCorrect 
              ? 'bg-green-50 border-green-500' 
              : 'bg-red-50 border-red-500'
          }`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div>
                <p className={`font-medium mb-2 ${
                  isCorrect ? 'text-green-900' : 'text-red-900'
                }`}>
                  {isCorrect ? 'Chính xác! 🎉' : 'Chưa chính xác'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          ← Câu trước
        </button>

        <button
          onClick={resetQuiz}
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Làm lại
        </button>

        <button
          onClick={nextQuestion}
          disabled={!showResult}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {currentQuestion === questions.length - 1 ? 'Xem kết quả →' : 'Câu tiếp →'}
        </button>
      </div>
    </div>
  );
}
