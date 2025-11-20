import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "20.11 – Lời tri ân gửi thầy",
    subtitle: "Từ ba học trò đội tuyển tin học",
    content: "",
    bgColor: "bg-black"
  },
  {
    id: 2,
    title: "Ngày đầu tiên",
    subtitle: "Khi logic C++ mở ra một thế giới mới",
    content: "Còn nhớ buổi đầu tiên bước vào lớp đội tuyển, ánh mắt chúng em còn lạ lẫm với những dòng code phức tạp. Thầy đã nói: 'C++ không chỉ là ngôn ngữ lập trình, nó là ngôn ngữ của tư duy logic.' Từng câu lệnh, từng vòng lặp, thầy kiên nhẫn giải thích như đang kể một câu chuyện. Thầy dạy chúng em rằng, mỗi dòng code đều có linh hồn của người viết ra nó. Và từ đó, chúng em bắt đầu yêu thích sự chính xác, yêu thích cách mà logic có thể giải quyết mọi vấn đề.",
    bgColor: "bg-gradient-to-br from-black via-primary/20 to-black"
  },
  {
    id: 3,
    title: "Những ngày sau Tết",
    subtitle: "Cà phê, code và triết lý sống",
    content: "Mùa xuân năm ấy, thầy bắt đầu dạy chúng em về cấu trúc dữ liệu. Stack, Queue, Tree... những khái niệm trừu tượng dần trở nên cụ thể qua từng ví dụ thực tế. Những buổi chiều, mùi cà phê lan tỏa trong phòng máy, thầy vừa nhấp một ngụm vừa nói: 'Muốn giỏi tin học, các em phải sống cùng nó. Code không chỉ là công việc, nó là cách suy nghĩ, là cách nhìn nhận thế giới.' Chúng em ngập trong biển code, nhưng lạ thay, chúng em cảm thấy hạnh phúc. Vì có thầy, người luôn tin tưởng vào tiềm năng của từng học trò.",
    bgColor: "bg-gradient-to-br from-black via-primary/30 to-black"
  },
  {
    id: 4,
    title: "Những bài toán nhỏ",
    subtitle: "Từng bước, từng dòng code",
    content: "Mỗi bài toán là một thử thách mới. Có những đêm chúng em ngồi đến 2-3 giờ sáng vẫn chưa tìm ra lời giải. Nhưng sáng hôm sau, thầy lại kiên nhẫn ngồi cùng, phân tích từng trường hợp, từng edge case. 'Đừng vội kết luận, hãy suy nghĩ kỹ hơn,' thầy thường nói. Thầy dạy chúng em cách debug, cách tư duy từ đơn giản đến phức tạp, cách tối ưu từng dòng code. Những bài toán nhỏ ấy không chỉ rèn luyện kỹ năng, mà còn rèn luyện sự kiên nhẫn, sự tỉ mỉ - những phẩm chất quý báu mà thầy đã truyền cho chúng em.",
    bgColor: "bg-gradient-to-br from-black via-secondary/20 to-black"
  },
  {
    id: 5,
    title: "Ngày đầu làm đề thật",
    subtitle: "Thất bại và bài học đầu tiên",
    content: "Lần đầu tiên cầm đề HSGQG trên tay, chúng em tự tin. Nhưng 3 tiếng sau, màn hình vẫn trống rỗng, chỉ có vài dòng code lủng củng. Cảm giác thất vọng tràn ngập, chúng em nghĩ mình không đủ năng lực. Nhưng thầy đã nói: 'Thất bại là bước đầu tiên của thành công. Các em đã dám thử, đó là điều quan trọng nhất.' Thầy ngồi xuống, cùng chúng em phân tích từng câu hỏi, chỉ ra những gì còn thiếu, những gì cần học thêm. Ánh mắt thầy không có sự trách móc, chỉ có niềm tin và sự động viên. Và chúng em hiểu, con đường phía trước còn dài, nhưng có thầy đồng hành, chúng em sẽ vượt qua.",
    bgColor: "bg-gradient-to-br from-black via-primary/25 to-black"
  },
  {
    id: 6,
    title: "Những đêm khuya",
    subtitle: "Ánh đèn và những dòng feedback",
    content: "Đã bao nhiêu đêm, khi thành phố chìm vào giấc ngủ, thầy vẫn thức để sửa code cho chúng em. Những dòng comment chi tiết, những gợi ý tinh tế, những lời động viên ấm áp xuất hiện trong từng file code. 'Em đã làm tốt phần này, nhưng hãy thử tối ưu thêm ở đây,' thầy viết. Mỗi lần nhận được feedback từ thầy, chúng em lại cảm thấy biết ơn vô cùng. Thầy không chỉ dạy code, thầy dạy chúng em cách làm việc chuyên nghiệp, cách tôn trọng từng dòng lệnh, từng thuật toán. Những đêm khuya ấy, ánh đèn phòng thầy là ngọn hải đăng dẫn lối cho chúng em.",
    bgColor: "bg-gradient-to-br from-black via-primary/20 to-black"
  },
  {
    id: 7,
    title: "Tài liệu và thuật toán quý",
    subtitle: "Mở rộng chân trời tri thức",
    content: "Thầy luôn tìm kiếm những tài liệu hay nhất, những thuật toán mới nhất để chia sẻ với chúng em. Từ Dijkstra đến Segment Tree, từ Dynamic Programming đến Graph Theory - thế giới thuật toán mở ra rộng lớn và kỳ diệu. Thầy không chỉ dạy công thức, thầy dạy cách tư duy đằng sau mỗi thuật toán, lịch sử ra đời của chúng, ứng dụng thực tế. 'Thuật toán là nghệ thuật,' thầy nói, 'và các em là những nghệ sĩ đang học cách sáng tạo.' Mỗi tài liệu thầy gửi đều là một món quà tri thức, mở rộng tầm nhìn và khơi dậy đam mê trong chúng em.",
    bgColor: "bg-gradient-to-br from-black via-secondary/25 to-black"
  },
  {
    id: 8,
    title: "Những lần thi thử",
    subtitle: "Điểm số và bài học trưởng thành",
    content: "Thi thử lần một: 120 điểm. Thi thử lần hai: 150 điểm. Thi thử lần ba: 100 điểm. Con số lên xuống thất thường, nhưng thầy luôn bình tĩnh phân tích. 'Điểm số chỉ là con số, quan trọng là các em học được gì từ mỗi lần thi,' thầy nhắc nhở. Mỗi bài thi thử, thầy đều ngồi chấm kỹ càng, chỉ ra từng lỗi sai, từng cách tối ưu hơn. Thầy dạy chúng em cách đối mặt với áp lực, cách giữ bình tĩnh khi gặp bài khó, cách phân bổ thời gian hợp lý. Những lần thi thử ấy không chỉ là bài kiểm tra kiến thức, mà là bài học về sự trưởng thành, về cách vượt qua chính mình.",
    bgColor: "bg-gradient-to-br from-black via-primary/30 to-black"
  },
  {
    id: 9,
    title: "Còn gần 1 tháng nữa thôi",
    subtitle: "Nỗ lực cuối cùng, quyết tâm không lùi bước",
    content: "Thời gian trôi nhanh, kỳ thi HSGQG đã cận kề. Mỗi ngày, chúng em code từ sáng đến tối, giải hàng chục bài toán, ôn lại từng thuật toán. Áp lực ngày càng lớn, nhưng động lực cũng ngày càng mạnh mẽ. Chúng em không muốn phụ lòng thầy, người đã dành cả trái tim và tâm huyết cho đội tuyển. 'Các em đã cố gắng rất nhiều, thầy tự hào về các em,' thầy nói trong buổi học cuối cùng trước kỳ thi. Những lời động viên ấy như tiếp thêm sức mạnh, khiến chúng em tin rằng, dù kết quả thế nào, chúng em đã làm hết sức mình, đã không phụ lòng người thầy tận tâm.",
    bgColor: "bg-gradient-to-br from-black via-primary/35 to-black"
  },
  {
    id: 10,
    title: "Lời cuối",
    subtitle: "Tri ân và lời hứa",
    content: "Thưa thầy, những dòng code chúng em viết hôm nay đều mang dấu ấn của thầy. Mỗi thuật toán chúng em giải được đều có công sức của thầy. Thầy không chỉ dạy chúng em lập trình, thầy dạy chúng em cách sống, cách đối mặt với thử thách, cách không bao giờ bỏ cuộc. Chúng em hứa sẽ chiến đấu đến dòng code cuối cùng, sẽ cố gắng hết mình trong kỳ thi sắp tới. Dù kết quả thế nào, chúng em sẽ luôn nhớ những bài học quý báu thầy đã truyền đạt. Chúc thầy luôn mạnh khỏe, giữ mãi ngọn lửa đam mê, tiếp tục truyền cảm hứng cho những thế hệ học trò sau này. Trân trọng,\n\nBa học trò đội tuyển tin học",
    bgColor: "bg-gradient-to-br from-black via-light-gold/20 to-black",
    isLast: true
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        handleNext();
      } else {
        setShowFireworks(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Code Rain Background */}
      <CodeRain />

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className={`absolute inset-0 flex items-center justify-center ${slides[currentSlide].bgColor}`}
        >
          <div className="max-w-[100rem] mx-auto px-8 md:px-16 lg:px-24 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="font-paragraph text-xl md:text-2xl text-light-gold mb-12"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {slides[currentSlide].content && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <p className="font-paragraph text-base md:text-lg text-secondary leading-relaxed whitespace-pre-line">
                  {slides[currentSlide].content}
                </p>
              </motion.div>
            )}

            {slides[currentSlide].isLast && showFireworks && (
              <Fireworks />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-20">
        <Button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          variant="outline"
          size="icon"
          className="bg-primary/80 hover:bg-primary border-light-gold/30 text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-light-gold'
                  : 'w-2 bg-secondary/50 hover:bg-secondary'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="icon"
          className="bg-primary/80 hover:bg-primary border-light-gold/30 text-foreground disabled:opacity-30"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Audio Control */}
      <Button
        onClick={() => setIsMuted(!isMuted)}
        variant="outline"
        size="icon"
        className="absolute top-8 right-8 bg-primary/80 hover:bg-primary border-light-gold/30 text-foreground z-20"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>

      {/* Slide Counter */}
      <div className="absolute top-8 left-8 font-paragraph text-secondary z-20">
        <span className="text-light-gold text-xl">{currentSlide + 1}</span>
        <span className="text-secondary/50 mx-2">/</span>
        <span className="text-secondary/70">{slides.length}</span>
      </div>
    </div>
  );
}

// Code Rain Component
function CodeRain() {
  const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const [drops, setDrops] = useState<Array<{ x: number; speed: number; chars: string[] }>>([]);

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const newDrops = Array.from({ length: columns }, (_, i) => ({
      x: i * 20,
      speed: Math.random() * 2 + 1,
      chars: Array.from({ length: 20 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      )
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {drops.map((drop, i) => (
        <motion.div
          key={i}
          initial={{ y: -400 }}
          animate={{ y: window.innerHeight + 400 }}
          transition={{
            duration: 10 / drop.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute font-mono text-light-gold text-sm"
          style={{ left: drop.x }}
        >
          {drop.chars.map((char, j) => (
            <div key={j} className="opacity-50">
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Fireworks Component
function Fireworks() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 50,
    distance: Math.random() * 200 + 100
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
            y: Math.sin((particle.angle * Math.PI) / 180) * particle.distance,
            opacity: 0,
            scale: 0
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-light-gold"
        />
      ))}
    </div>
  );
}
