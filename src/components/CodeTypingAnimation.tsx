import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeSnippet {
  title: string;
  language: string;
  badge?: string;
  badgeColor?: string;
  description?: string;
  lines: string[];
}

interface CodeTypingAnimationProps {
  snippets: CodeSnippet[];
}

export const CodeTypingAnimation = ({ snippets }: CodeTypingAnimationProps) => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const codeAreaRef = useRef<HTMLDivElement>(null);

  const snippet = snippets[snippetIndex];
  const totalLines = snippet.lines.length;

  // Auto-scroll to bottom as new lines appear
  useEffect(() => {
    if (codeAreaRef.current) {
      codeAreaRef.current.scrollTop = codeAreaRef.current.scrollHeight;
    }
  }, [visibleLines, currentText]);

  const advanceSnippet = useCallback(() => {
    setIsTyping(false);
    setTimeout(() => {
      setSnippetIndex((prev) => (prev + 1) % snippets.length);
      setVisibleLines(0);
      setCurrentText("");
      setIsTyping(true);
    }, 1200);
  }, [snippets.length]);

  useEffect(() => {
    if (!isTyping) return;

    if (visibleLines >= totalLines) {
      const timeout = setTimeout(advanceSnippet, 2500);
      return () => clearTimeout(timeout);
    }

    const line = snippet.lines[visibleLines];
    if (currentText.length < line.length) {
      const speed = 18 + Math.random() * 22;
      const timeout = setTimeout(() => {
        setCurrentText(line.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        setCurrentText("");
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, currentText, isTyping, totalLines, snippet.lines, advanceSnippet]);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={snippetIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden border border-border bg-[#1e1e2e] shadow-2xl"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#181825] border-b border-[#313244]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f38ba8]" />
              <span className="w-3 h-3 rounded-full bg-[#f9e2af]" />
              <span className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
            </div>
            <span className="text-xs text-[#6c7086] font-mono">{snippet.title}</span>
            <span className="text-xs text-[#6c7086] font-mono">{snippet.language}</span>
          </div>

          {/* Badge + Description */}
          {snippet.badge && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="px-4 pt-2 pb-1.5 bg-[#1e1e2e] border-b border-[#313244]"
            >
              <div className="flex items-start gap-2">
                <span
                  className="shrink-0 px-2.5 py-0.5 rounded-md text-xs font-bold text-[#1e1e2e] whitespace-nowrap mt-0.5"
                  style={{ backgroundColor: snippet.badgeColor || "#9AB6CF" }}
                >
                  {snippet.badge}
                </span>
                <p className="text-xs text-[#a6adc8] leading-snug">
                  {highlightWebQ(snippet.description || "", snippet.badgeColor || "#9AB6CF")}
                </p>
              </div>
            </motion.div>
          )}

          {/* Code area */}
          <div ref={codeAreaRef} className="p-3 font-mono text-xs leading-relaxed max-h-[340px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#585b70] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#6c7086] [&::-webkit-scrollbar-track]:bg-[#252535]">
            {snippet.lines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="flex">
                <span className="text-[#6c7086] w-8 text-right mr-4 select-none text-xs leading-relaxed">
                  {i + 1}
                </span>
                <pre className="text-[#cdd6f4] whitespace-pre">
                  {colorize(line)}
                </pre>
              </div>
            ))}

            {visibleLines < totalLines && (
              <div className="flex">
                <span className="text-[#6c7086] w-8 text-right mr-4 select-none text-xs leading-relaxed">
                  {visibleLines + 1}
                </span>
                <pre className="text-[#cdd6f4] whitespace-pre">
                  {colorize(currentText)}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-[2px] h-[14px] bg-[#89b4fa] ml-[1px] align-middle"
                  />
                </pre>
              </div>
            )}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 pb-3">
            {snippets.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === snippetIndex ? "bg-[#89b4fa]" : "bg-[#313244]"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Simple syntax highlighting for Java/Spring Boot code
function colorize(text: string): React.ReactNode {
  if (!text.trim()) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  const patterns: [RegExp, string][] = [
    [/^(\/\/.*)/, "#6c7086"],           // comments
    [/^("(?:[^"\\]|\\.)*")/, "#a6e3a1"], // strings
    [/^(@\w+)/, "#f9e2af"],              // annotations
    [/^(import|package|public|private|class|interface|return|new|void|static|final|throws|if|else|try|catch)\b/, "#cba6f7"], // keywords
    [/^(String|int|long|boolean|List|Map|Optional|Page|Pageable|ResponseEntity|RestController|GetMapping|PostMapping|RequestBody|PathVariable|Autowired|Service|Repository|Entity|Id|GeneratedValue|Column|Table|Configuration|Bean|Valid|Cacheable|CreatedDate|LocalDateTime|SecurityFilterChain|HttpSecurity|ControllerAdvice|ExceptionHandler|ErrorResponse|ResourceNotFoundException|SpringBootTest|AutoConfigureMockMvc|MockMvc|Test|MediaType|Aspect|Component|Around|ProceedingJoinPoint|Logger|LoggerFactory|MDC|UUID)\b/, "#89b4fa"], // types
    [/^(\d+)/, "#fab387"],               // numbers
    [/^([{}()\[\];,.<>:=+\-*\/!&|])/, "#94e2d5"], // punctuation
    [/^(\w+)/, "#cdd6f4"],              // identifiers
    [/^(\s+)/, ""],                      // whitespace
  ];

  while (remaining.length > 0) {
    let matched = false;
    for (const [pattern, color] of patterns) {
      const match = remaining.match(pattern);
      if (match) {
        const value = match[1];
        if (color) {
          parts.push(<span key={key++} style={{ color }}>{value}</span>);
        } else {
          parts.push(<span key={key++}>{value}</span>);
        }
        remaining = remaining.slice(value.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      parts.push(<span key={key++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }
  }

  return <>{parts}</>;
}

function highlightWebQ(text: string, badgeColor: string): React.ReactNode {
  const regex = /(At WebQ)/g;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        part === "At WebQ" ? (
          <span
            key={i}
            className="inline-block px-1.5 py-0.5 rounded font-bold text-[#1e1e2e] mx-0.5"
            style={{ backgroundColor: badgeColor }}
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
