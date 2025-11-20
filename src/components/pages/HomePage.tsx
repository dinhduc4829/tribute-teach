import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Volume2, VolumeX, Code2, Terminal, Braces, Binary, Cpu, CircuitBoard, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Cấu trúc 3 phần như một quyển sách
const bookStructure = {
  // Phần 1: Bìa mở đầu
  frontCover: {
    id: 0,
    type: 'cover',
    title: "20.11 – Lời tri ân gửi thầy",
    subtitle: "Từ ba học trò đội tuyển tin học",
    content: "",
  },
  
  // Phần 2: Nội dung chính (8 slides kể chuyện)
  mainContent: [
    {
      id: 1,
      title: "Ngày đầu tiên",
      subtitle: "Khi logic C++ mở ra một thế giới mới",
      content: "Còn nhớ buổi đầu tiên bước vào lớp đội tuyển, ánh mắt chúng em còn lạ lẫm với những dòng code phức tạp. Thầy đã nói: 'C++ không chỉ là ngôn ngữ lập trình, nó là ngôn ngữ của tư duy logic.' Từng câu lệnh, từng vòng lặp, thầy kiên nhẫn giải thích như đang kể một câu chuyện. Thầy dạy chúng em rằng, mỗi dòng code đều có linh hồn của người viết ra nó. Và từ đó, chúng em bắt đầu yêu thích sự chính xác, yêu thích cách mà logic có thể giải quyết mọi vấn đề.",
    },
    {
      id: 2,
      title: "Những ngày sau Tết",
      subtitle: "Cà phê, code và triết lý sống",
      content: "Mùa xuân năm ấy, thầy bắt đầu dạy chúng em về cấu trúc dữ liệu. Stack, Queue, Tree... những khái niệm trừu tượng dần trở nên cụ thể qua từng ví dụ thực tế. Những buổi chiều, mùi cà phê lan tỏa trong phòng máy, thầy vừa nhấp một ngụm vừa nói: 'Muốn giỏi tin học, các em phải sống cùng nó. Code không chỉ là công việc, nó là cách suy nghĩ, là cách nhìn nhận thế giới.' Chúng em ngập trong biển code, nhưng lạ thay, chúng em cảm thấy hạnh phúc. Vì có thầy, người luôn tin tưởng vào tiềm năng của từng học trò.",
    },
    {
      id: 3,
      title: "Những bài toán nhỏ",
      subtitle: "Từng bước, từng dòng code",
      content: "Mỗi bài toán là một thử thách mới. Có những đêm chúng em ngồi đến 2-3 giờ sáng vẫn chưa tìm ra lời giải. Nhưng sáng hôm sau, thầy lại kiên nhẫn ngồi cùng, phân tích từng trường hợp, từng edge case. 'Đừng vội kết luận, hãy suy nghĩ kỹ hơn,' thầy thường nói. Thầy dạy chúng em cách debug, cách tư duy từ đơn giản đến phức tạp, cách tối ưu từng dòng code. Những bài toán nhỏ ấy không chỉ rèn luyện kỹ năng, mà còn rèn luyện sự kiên nhẫn, sự tỉ mỉ - những phẩm chất quý báu mà thầy đã truyền cho chúng em.",
    },
    {
      id: 4,
      title: "Ngày đầu làm đề thật",
      subtitle: "Thất bại và bài học đầu tiên",
      content: "Lần đầu tiên cầm đề HSGQG trên tay, chúng em tự tin. Nhưng 3 tiếng sau, màn hình vẫn trống rỗng, chỉ có vài dòng code lủng củng. Cảm giác thất vọng tràn ngập, chúng em nghĩ mình không đủ năng lực. Nhưng thầy đã nói: 'Thất bại là bước đầu tiên của thành công. Các em đã dám thử, đó là điều quan trọng nhất.' Thầy ngồi xuống, cùng chúng em phân tích từng câu hỏi, chỉ ra những gì còn thiếu, những gì cần học thêm. Ánh mắt thầy không có sự trách móc, chỉ có niềm tin và sự động viên. Và chúng em hiểu, con đường phía trước còn dài, nhưng có thầy đồng hành, chúng em sẽ vượt qua.",
    },
    {
      id: 5,
      title: "Những đêm khuya",
      subtitle: "Ánh đèn và những dòng feedback",
      content: "Đã bao nhiêu đêm, khi thành phố chìm vào giấc ngủ, thầy vẫn thức để sửa code cho chúng em. Những dòng comment chi tiết, những gợi ý tinh tế, những lời động viên ấm áp xuất hiện trong từng file code. 'Em đã làm tốt phần này, nhưng hãy thử tối ưu thêm ở đây,' thầy viết. Mỗi lần nhận được feedback từ thầy, chúng em lại cảm thấy biết ơn vô cùng. Thầy không chỉ dạy code, thầy dạy chúng em cách làm việc chuyên nghiệp, cách tôn trọng từng dòng lệnh, từng thuật toán. Những đêm khuya ấy, ánh đèn phòng thầy là ngọn hải đăng dẫn lối cho chúng em.",
    },
    {
      id: 6,
      title: "Tài liệu và thuật toán quý",
      subtitle: "Mở rộng chân trời tri thức",
      content: "Thầy luôn tìm kiếm những tài liệu hay nhất, những thuật toán mới nhất để chia sẻ với chúng em. Từ Dijkstra đến Segment Tree, từ Dynamic Programming đến Graph Theory - thế giới thuật toán mở ra rộng lớn và kỳ diệu. Thầy không chỉ dạy công thức, thầy dạy cách tư duy đằng sau mỗi thuật toán, lịch sử ra đời của chúng, ứng dụng thực tế. 'Thuật toán là nghệ thuật,' thầy nói, 'và các em là những nghệ sĩ đang học cách sáng tạo.' Mỗi tài liệu thầy gửi đều là một món quà tri thức, mở rộng tầm nhìn và khơi dậy đam mê trong chúng em.",
    },
    {
      id: 7,
      title: "Những lần thi thử",
      subtitle: "Điểm số và bài học trưởng thành",
      content: "Thi thử lần một: 120 điểm. Thi thử lần hai: 150 điểm. Thi thử lần ba: 100 điểm. Con số lên xuống thất thường, nhưng thầy luôn bình tĩnh phân tích. 'Điểm số chỉ là con số, quan trọng là các em học được gì từ mỗi lần thi,' thầy nhắc nhở. Mỗi bài thi thử, thầy đều ngồi chấm kỹ càng, chỉ ra từng lỗi sai, từng cách tối ưu hơn. Thầy dạy chúng em cách đối mặt với áp lực, cách giữ bình tĩnh khi gặp bài khó, cách phân bổ thời gian hợp lý. Những lần thi thử ấy không chỉ là bài kiểm tra kiến thức, mà là bài học về sự trưởng thành, về cách vượt qua chính mình.",
    },
    {
      id: 8,
      title: "Còn gần 1 tháng nữa thôi",
      subtitle: "Nỗ lực cuối cùng, quyết tâm không lùi bước",
      content: "Thời gian trôi nhanh, kỳ thi HSGQG đã cận kề. Mỗi ngày, chúng em code từ sáng đến tối, giải hàng chục bài toán, ôn lại từng thuật toán. Áp lực ngày càng lớn, nhưng động lực cũng ngày càng mạnh mẽ. Chúng em không muốn phụ lòng thầy, người đã dành cả trái tim và tâm huyết cho đội tuyển. 'Các em đã cố gắng rất nhiều, thầy tự hào về các em,' thầy nói trong buổi học cuối cùng trước kỳ thi. Những lời động viên ấy như tiếp thêm sức mạnh, khiến chúng em tin rằng, dù kết quả thế nào, chúng em đã làm hết sức mình, đã không phụ lòng người thầy tận tâm.",
    }
  ],
  
  // Phần 3: Bìa sau
  backCover: {
    id: 9,
    type: 'cover',
    title: "Lời cuối",
    subtitle: "Tri ân và lời hứa",
    content: "Thưa thầy, những dòng code chúng em viết hôm nay đều mang dấu ấn của thầy. Mỗi thuật toán chúng em giải được đều có công sức của thầy. Thầy không chỉ dạy chúng em lập trình, thầy dạy chúng em cách sống, cách đối mặt với thử thách, cách không bao giờ bỏ cuộc. Chúng em hứa sẽ chiến đấu đến dòng code cuối cùng, sẽ cố gắng hết mình trong kỳ thi sắp tới. Dù kết quả thế nào, chúng em sẽ luôn nhớ những bài học quý báu thầy đã truyền đạt. Chúc thầy luôn mạnh khỏe, giữ mãi ngọn lửa đam mê, tiếp tục truyền cảm hứng cho những thế hệ học trò sau này. Trân trọng,\n\nBa học trò đội tuyển tin học",
  }
};

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState<'front' | 'main' | 'back'>('front');
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showFireworks, setShowFireworks] = useState(false);

  const totalSlides = 1 + bookStructure.mainContent.length + 1; // front + main + back
  const currentAbsoluteIndex = 
    currentSection === 'front' ? 0 :
    currentSection === 'main' ? 1 + currentMainSlide :
    totalSlides - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 15000);

    return () => clearTimeout(timer);
  }, [currentSection, currentMainSlide]);

  const handleNext = () => {
    if (currentSection === 'front') {
      setDirection(1);
      setCurrentSection('main');
      setCurrentMainSlide(0);
    } else if (currentSection === 'main') {
      if (currentMainSlide < bookStructure.mainContent.length - 1) {
        setDirection(1);
        setCurrentMainSlide(prev => prev + 1);
      } else {
        setDirection(1);
        setCurrentSection('back');
        setShowFireworks(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentSection === 'back') {
      setDirection(-1);
      setCurrentSection('main');
      setCurrentMainSlide(bookStructure.mainContent.length - 1);
      setShowFireworks(false);
    } else if (currentSection === 'main') {
      if (currentMainSlide > 0) {
        setDirection(-1);
        setCurrentMainSlide(prev => prev - 1);
      } else {
        setDirection(-1);
        setCurrentSection('front');
      }
    }
  };

  const goToSlide = (index: number) => {
    if (index === 0) {
      setDirection(index > currentAbsoluteIndex ? 1 : -1);
      setCurrentSection('front');
      setShowFireworks(false);
    } else if (index === totalSlides - 1) {
      setDirection(index > currentAbsoluteIndex ? 1 : -1);
      setCurrentSection('back');
      setShowFireworks(true);
    } else {
      setDirection(index > currentAbsoluteIndex ? 1 : -1);
      setCurrentSection('main');
      setCurrentMainSlide(index - 1);
      setShowFireworks(false);
    }
  };

  // Page flip animation - Hiệu ứng lật trang sách
  const pageFlipVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Code Rain Background */}
      <CodeRain />

      {/* Book Container - Khung sách cố định */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:p-12">
        
        {/* Phần 1: Bìa mở đầu */}
        {currentSection === 'front' && (
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key="front-cover"
              custom={direction}
              variants={pageFlipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              style={{ perspective: 1200 }}
              className="w-full h-full flex items-center justify-center"
            >
              <FrontCover data={bookStructure.frontCover} />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Phần 2: Nội dung chính - Khung cố định, nội dung thay đổi */}
        {currentSection === 'main' && (
          <MainContentBook 
            slides={bookStructure.mainContent}
            currentSlide={currentMainSlide}
            direction={direction}
          />
        )}

        {/* Phần 3: Bìa sau */}
        {currentSection === 'back' && (
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key="back-cover"
              custom={direction}
              variants={pageFlipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              style={{ perspective: 1200 }}
              className="w-full h-full flex items-center justify-center"
            >
              <BackCover data={bookStructure.backCover} showFireworks={showFireworks} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-20">
        <Button
          onClick={handlePrev}
          disabled={currentSection === 'front'}
          variant="outline"
          size="icon"
          className="bg-primary/80 hover:bg-primary border-light-gold/30 text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentAbsoluteIndex
                  ? 'w-8 bg-light-gold'
                  : 'w-2 bg-secondary/50 hover:bg-secondary'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={currentSection === 'back'}
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
      <div className="absolute top-8 left-8 font-paragraph text-secondary z-20 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-light-gold" />
        <span className="text-light-gold text-xl">{currentAbsoluteIndex + 1}</span>
        <span className="text-secondary/50 mx-1">/</span>
        <span className="text-secondary/70">{totalSlides}</span>
      </div>
    </div>
  );
}

// Front Cover Component - Bìa mở đầu
function FrontCover({ data }: { data: typeof bookStructure.frontCover }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative max-w-[90rem] w-full mx-auto h-full flex items-center justify-center"
    >
      {/* Outer decorative border */}
      <div className="absolute -inset-4 bg-gradient-to-br from-light-gold/40 via-light-gold/20 to-light-gold/40 rounded-2xl blur-2xl" />
      
      {/* Main cover card */}
      <div className="relative bg-gradient-to-br from-primary/50 via-black/95 to-primary/50 rounded-xl border-2 border-light-gold/50 shadow-2xl backdrop-blur-sm w-full max-w-5xl">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-light-gold/70 rounded-tl-xl">
          <Code2 className="absolute top-3 left-3 w-6 h-6 text-light-gold/80" />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-light-gold/70 rounded-tr-xl">
          <Terminal className="absolute top-3 right-3 w-6 h-6 text-light-gold/80" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-light-gold/70 rounded-bl-xl">
          <Braces className="absolute bottom-3 left-3 w-6 h-6 text-light-gold/80" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-light-gold/70 rounded-br-xl">
          <Cpu className="absolute bottom-3 right-3 w-6 h-6 text-light-gold/80" />
        </div>

        {/* Content */}
        <div className="relative px-12 py-20 md:px-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <BookOpen className="w-16 h-16 text-light-gold mx-auto mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 tracking-tight"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-paragraph text-xl md:text-2xl lg:text-3xl text-light-gold"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Content Book - Khung cố định, nội dung thay đổi bên trong
function MainContentBook({ 
  slides, 
  currentSlide, 
  direction 
}: { 
  slides: typeof bookStructure.mainContent;
  currentSlide: number;
  direction: number;
}) {
  // Content change animation - chỉ nội dung bên trong thay đổi
  const contentVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction < 0 ? 50 : -50,
      scale: 0.95,
    }),
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative max-w-[90rem] w-full mx-auto h-full flex items-center justify-center"
    >
      {/* Outer decorative border - CỐ ĐỊNH */}
      <div className="absolute -inset-4 bg-gradient-to-br from-light-gold/30 via-light-gold/10 to-light-gold/30 rounded-2xl blur-xl" />
      
      {/* Code Pattern Background - CỐ ĐỊNH */}
      <div className="absolute inset-0 opacity-5 pointer-events-none rounded-xl overflow-hidden">
        <CodePatternBackground />
      </div>
      
      {/* Main card container - KHUNG CỐ ĐỊNH */}
      <div className="relative bg-gradient-to-br from-primary/40 via-black/95 to-primary/40 rounded-xl border-2 border-light-gold/40 shadow-2xl backdrop-blur-sm w-full">
        {/* Tech decorative borders - CỐ ĐỊNH */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gold/30 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-light-gold/30 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-light-gold/30 to-transparent" />
        
        {/* Inner decorative corners with icons - CỐ ĐỊNH */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-light-gold/60 rounded-tl-xl">
          <Code2 className="absolute top-2 left-2 w-5 h-5 text-light-gold/70" />
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-light-gold/60 rounded-tr-xl">
          <Terminal className="absolute top-2 right-2 w-5 h-5 text-light-gold/70" />
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-light-gold/60 rounded-bl-xl">
          <Braces className="absolute bottom-2 left-2 w-5 h-5 text-light-gold/70" />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-light-gold/60 rounded-br-xl">
          <Cpu className="absolute bottom-2 right-2 w-5 h-5 text-light-gold/70" />
        </div>
        
        {/* Side decorative tech icons - CỐ ĐỊNH */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
          <Binary className="w-4 h-4 text-light-gold/40" />
          <CircuitBoard className="w-4 h-4 text-light-gold/40" />
          <Code2 className="w-4 h-4 text-light-gold/40" />
        </div>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
          <Terminal className="w-4 h-4 text-light-gold/40" />
          <Cpu className="w-4 h-4 text-light-gold/40" />
          <Braces className="w-4 h-4 text-light-gold/40" />
        </div>
        
        {/* Content area - NỘI DUNG THAY ĐỔI */}
        <div className="relative px-8 py-12 md:px-16 md:py-16 lg:px-24 lg:py-20 text-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.5 },
                y: { type: "spring", stiffness: 300, damping: 30 },
                scale: { duration: 0.4 },
              }}
            >
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="font-paragraph text-lg md:text-xl lg:text-2xl text-light-gold mb-10">
                {slides[currentSlide].subtitle}
              </p>

              {slides[currentSlide].content && (
                <div className="max-w-4xl mx-auto">
                  <p className="font-paragraph text-sm md:text-base lg:text-lg text-secondary/90 leading-relaxed whitespace-pre-line">
                    {slides[currentSlide].content}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Subtle inner glow - CỐ ĐỊNH */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-light-gold/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

// Back Cover Component - Bìa sau
function BackCover({ 
  data, 
  showFireworks 
}: { 
  data: typeof bookStructure.backCover;
  showFireworks: boolean;
}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative max-w-[90rem] w-full mx-auto h-full flex items-center justify-center"
    >
      {/* Outer decorative border */}
      <div className="absolute -inset-4 bg-gradient-to-br from-light-gold/40 via-light-gold/20 to-light-gold/40 rounded-2xl blur-2xl" />
      
      {/* Main cover card */}
      <div className="relative bg-gradient-to-br from-light-gold/20 via-black/95 to-light-gold/20 rounded-xl border-2 border-light-gold/60 shadow-2xl backdrop-blur-sm w-full max-w-5xl">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-light-gold/70 rounded-tl-xl">
          <Code2 className="absolute top-3 left-3 w-6 h-6 text-light-gold/80" />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-light-gold/70 rounded-tr-xl">
          <Terminal className="absolute top-3 right-3 w-6 h-6 text-light-gold/80" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-light-gold/70 rounded-bl-xl">
          <Braces className="absolute bottom-3 left-3 w-6 h-6 text-light-gold/80" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-light-gold/70 rounded-br-xl">
          <Cpu className="absolute bottom-3 right-3 w-6 h-6 text-light-gold/80" />
        </div>

        {/* Content */}
        <div className="relative px-12 py-20 md:px-20 md:py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-paragraph text-xl md:text-2xl lg:text-3xl text-light-gold mb-10"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-paragraph text-sm md:text-base lg:text-lg text-secondary/90 leading-relaxed whitespace-pre-line">
              {data.content}
            </p>
          </motion.div>

          {showFireworks && <Fireworks />}
        </div>
      </div>
    </motion.div>
  );
}

// ... keep existing code (CodeRain, CodePatternBackground, Fireworks)
function CodeRain() {
  const codeSymbols = [
    '01', '{}', '[]', '()', '<>', '//', '/*', '*/', '++', '--', 
    '==', '!=', '<=', '>=', '&&', '||', 'if', 'for', 'int', 'void',
    'class', 'return', '#include', 'std::', 'cout', 'cin', 'vector',
    'map', 'set', 'queue', 'stack', 'algorithm', 'namespace',
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
  ];
  
  const [drops, setDrops] = useState<Array<{ x: number; speed: number; chars: string[] }>>([]);

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 25);
    const newDrops = Array.from({ length: columns }, (_, i) => ({
      x: i * 25,
      speed: Math.random() * 2 + 1,
      chars: Array.from({ length: 15 }, () => 
        codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
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
          className="absolute font-mono text-light-gold text-xs"
          style={{ left: drop.x }}
        >
          {drop.chars.map((char, j) => (
            <div key={j} className="opacity-40 mb-1">
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Code Pattern Background - Subtle tech pattern for card background
function CodePatternBackground() {
  const patterns = [
    '{ }', '[ ]', '< >', '( )', '//', '++', '--', '==', '!=', 
    'if', 'for', 'int', 'void', 'class', 'return', '#include',
    'std::', 'cout', 'cin', 'vector', 'map', 'algorithm'
  ];

  return (
    <div className="w-full h-full grid grid-cols-12 gap-4 p-8">
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          className="font-mono text-light-gold text-xs flex items-center justify-center"
        >
          {patterns[Math.floor(Math.random() * patterns.length)]}
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
