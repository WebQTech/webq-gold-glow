import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Home, Zap } from "lucide-react";
import { GoBackButton } from "@/components/GoBackButton";
import { Footer } from "@/components/Footer";
import { getTechnologyBySlug, technologiesData } from "@/data/technologiesData";
import { CodeTypingAnimation } from "@/components/CodeTypingAnimation";

const springBootSnippets = [
  {
    title: "SecurityConfig.java",
    language: "Java",
    badge: "🔒 Secure Code",
    badgeColor: "#f38ba8",
    description: "OAuth2 + JWT authentication with role-based route protection. At WebQ, we enforce zero-trust security from day one — every API ships with token validation, scoped permissions, and OWASP-compliant configurations.",
    lines: [
      '@Configuration',
      'public class SecurityConfig {',
      '',
      '    @Bean',
      '    public SecurityFilterChain filterChain(',
      '            HttpSecurity http) throws Exception {',
      '        http.csrf().disable()',
      '            .authorizeHttpRequests(auth ->',
      '                auth.requestMatchers("/api/public/**")',
      '                    .permitAll()',
      '                    .anyRequest()',
      '                    .authenticated())',
      '            .oauth2ResourceServer()',
      '            .jwt();',
      '        return http.build();',
      '    }',
      '}',
    ],
  },
  {
    title: "UserService.java",
    language: "Java",
    badge: "⚡ Performance",
    badgeColor: "#f9e2af",
    description: "Cacheable queries with Spring's @Cacheable reduce DB hits. Pagination via Pageable prevents full-table scans on large datasets.",
    lines: [
      '@Service',
      'public class UserService {',
      '',
      '    @Autowired',
      '    private UserRepository repo;',
      '',
      '    @Cacheable("users")',
      '    public User findById(Long id) {',
      '        return repo.findById(id)',
      '            .orElseThrow(() ->',
      '                new ResourceNotFoundException(',
      '                    "User not found: " + id));',
      '    }',
      '',
      '    public Page<User> findAll(Pageable page) {',
      '        return repo.findAll(page);',
      '    }',
      '}',
    ],
  },
  {
    title: "UserController.java",
    language: "Java",
    badge: "🧑‍💻 User-Friendly API",
    badgeColor: "#a6e3a1",
    description: "Clean REST endpoints with proper HTTP status codes, validated request bodies, and paginated responses — making the API intuitive for frontend consumers.",
    lines: [
      '@RestController',
      '@RequestMapping("/api/users")',
      'public class UserController {',
      '',
      '    @Autowired',
      '    private UserService userService;',
      '',
      '    @GetMapping("/{id}")',
      '    public ResponseEntity<User> getUser(',
      '            @PathVariable Long id) {',
      '        return ResponseEntity.ok(',
      '            userService.findById(id));',
      '    }',
      '',
      '    @PostMapping',
      '    public ResponseEntity<User> create(',
      '            @Valid @RequestBody UserDto dto) {',
      '        return ResponseEntity.status(201)',
      '            .body(userService.create(dto));',
      '    }',
      '}',
    ],
  },
  {
    title: "User.java",
    language: "Java",
    badge: "📐 Best Practice",
    badgeColor: "#89b4fa",
    description: "JPA entity with proper constraints — non-nullable fields, unique indexes, and auto-generated IDs. Clean separation of persistence logic from business rules.",
    lines: [
      '@Entity',
      '@Table(name = "users")',
      'public class User {',
      '',
      '    @Id',
      '    @GeneratedValue',
      '    private Long id;',
      '',
      '    @Column(nullable = false)',
      '    private String name;',
      '',
      '    @Column(unique = true)',
      '    private String email;',
      '',
      '    @CreatedDate',
      '    private LocalDateTime createdAt;',
      '',
      '    // getters and setters',
      '}',
    ],
  },
  {
    title: "application.yml",
    language: "YAML",
    badge: "🛠️ Production Config",
    badgeColor: "#cba6f7",
    description: "Environment-driven configuration with externalized secrets, Hibernate validation mode (no auto-DDL), and Actuator health/metrics endpoints for observability.",
    lines: [
      'spring:',
      '  datasource:',
      '    url: jdbc:postgresql://localhost:5432/mydb',
      '    username: ${DB_USER}',
      '    password: ${DB_PASS}',
      '  jpa:',
      '    hibernate:',
      '      ddl-auto: validate',
      '    show-sql: false',
      '',
      'server:',
      '  port: 8080',
      '',
      'management:',
      '  endpoints:',
      '    web:',
      '      exposure:',
      '        include: health,metrics',
    ],
  },
  {
    title: "GlobalExceptionHandler.java",
    language: "Java",
    badge: "🛡️ Error Handling",
    badgeColor: "#eba0ac",
    description: "Centralized exception handling with @ControllerAdvice. Returns consistent JSON error responses with proper HTTP status codes — no raw stack traces leak to clients.",
    lines: [
      '@ControllerAdvice',
      'public class GlobalExceptionHandler {',
      '',
      '    @ExceptionHandler(ResourceNotFoundException.class)',
      '    public ResponseEntity<ErrorResponse> handleNotFound(',
      '            ResourceNotFoundException ex) {',
      '        ErrorResponse error = new ErrorResponse(',
      '            404, ex.getMessage());',
      '        return ResponseEntity.status(404)',
      '            .body(error);',
      '    }',
      '',
      '    @ExceptionHandler(Exception.class)',
      '    public ResponseEntity<ErrorResponse> handleGeneral(',
      '            Exception ex) {',
      '        log.error("Unexpected error", ex);',
      '        return ResponseEntity.status(500)',
      '            .body(new ErrorResponse(',
      '                500, "Internal server error"));',
      '    }',
      '}',
    ],
  },
  {
    title: "UserServiceTest.java",
    language: "Java",
    badge: "🧪 Testing",
    badgeColor: "#94e2d5",
    description: "Integration test with @SpringBootTest and MockMvc. Verifies API contracts, response status codes, and JSON structure — ensuring reliable deployments.",
    lines: [
      '@SpringBootTest',
      '@AutoConfigureMockMvc',
      'public class UserServiceTest {',
      '',
      '    @Autowired',
      '    private MockMvc mockMvc;',
      '',
      '    @Test',
      '    void shouldReturnUser() throws Exception {',
      '        mockMvc.perform(',
      '            get("/api/users/1")',
      '                .contentType(MediaType.APPLICATION_JSON))',
      '            .andExpect(status().isOk())',
      '            .andExpect(jsonPath("$.name")',
      '                .value("John Doe"))',
      '            .andExpect(jsonPath("$.email")',
      '                .exists());',
      '    }',
      '}',
    ],
  },
  {
    title: "LoggingAspect.java",
    language: "Java",
    badge: "📊 Logging",
    badgeColor: "#74c7ec",
    description: "AOP-based structured logging with MDC correlation IDs. Captures method entry/exit, execution time, and request tracing — essential for debugging in production.",
    lines: [
      '@Aspect',
      '@Component',
      'public class LoggingAspect {',
      '',
      '    private static final Logger log =',
      '        LoggerFactory.getLogger(LoggingAspect.class);',
      '',
      '    @Around("@within(RestController)")',
      '    public Object logRequests(ProceedingJoinPoint jp)',
      '            throws Throwable {',
      '        String method = jp.getSignature().getName();',
      '        MDC.put("traceId", UUID.randomUUID()',
      '            .toString().substring(0, 8));',
      '        log.info(">> {} started", method);',
      '        long start = System.currentTimeMillis();',
      '        Object result = jp.proceed();',
      '        log.info("<< {} completed in {}ms",',
      '            method, System.currentTimeMillis() - start);',
      '        MDC.clear();',
      '        return result;',
      '    }',
      '}',
    ],
  },
  {
    title: "UserEventPublisher.java",
    language: "Java",
    badge: "📡 Event-Driven",
    badgeColor: "#fab387",
    description: "Decoupled architecture using Spring's ApplicationEventPublisher. Domain events trigger async listeners for email, audit, and analytics — keeping services loosely coupled.",
    lines: [
      '@Service',
      'public class UserEventPublisher {',
      '',
      '    @Autowired',
      '    private ApplicationEventPublisher publisher;',
      '',
      '    public void onUserCreated(User user) {',
      '        publisher.publishEvent(',
      '            new UserCreatedEvent(user));',
      '    }',
      '}',
      '',
      '@Component',
      'public class UserEventListener {',
      '',
      '    @Async',
      '    @EventListener',
      '    public void handle(UserCreatedEvent event) {',
      '        log.info("New user: {}",',
      '            event.getUser().getEmail());',
      '        // send welcome email, audit log...',
      '    }',
      '}',
    ],
  },
];

const TechnologyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tech = slug ? getTechnologyBySlug(slug) : undefined;

  if (!tech) {
    return <Navigate to="/technologies" replace />;
  }

  const Icon = tech.icon;
  const currentIndex = technologiesData.findIndex(t => t.slug === slug);
  const prevTech = currentIndex > 0 ? technologiesData[currentIndex - 1] : null;
  const nextTech = currentIndex < technologiesData.length - 1 ? technologiesData[currentIndex + 1] : null;

  // Related technologies
  const related = tech.relatedTechnologies
    .map(name => technologiesData.find(t => t.name === name))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
        <section className="py-10 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                    <Home className="w-3.5 h-3.5" />Home
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li>
                  <Link to="/technologies" className="hover:text-primary transition-colors">Technologies</Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">{tech.name}</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={slug === "spring-boot" ? "grid lg:grid-cols-2 gap-10 items-start" : "max-w-3xl"}
            >
              <div>
                <span className="text-xs font-black tracking-widest text-primary uppercase">{tech.category}</span>
                <div className="flex items-center gap-4 mt-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{tech.name}</h1>
                </div>
                <p className="mt-6 text-lg text-muted-foreground">{tech.fullDescription}</p>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {slug === "spring-boot" && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <CodeTypingAnimation snippets={springBootSnippets} />
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Use Cases & Features */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Use Cases
                </h2>
                <ul className="space-y-3">
                  {tech.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{uc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Capabilities</h2>
                <ul className="space-y-3">
                  {tech.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Related Technologies */}
                {related.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Related Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {related.map(r => (
                        <Link
                          key={r!.slug}
                          to={`/technologies/${r!.slug}`}
                          className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                        >
                          {r!.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Need Help with {tech.name}?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Our experts can help you implement, optimize, or migrate {tech.name} solutions tailored to your business.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 btn-primary">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevTech ? (
                <Link to={`/technologies/${prevTech.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{prevTech.name}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : <div />}
              {nextTech ? (
                <Link to={`/technologies/${nextTech.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <span className="hidden sm:inline">{nextTech.name}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyDetail;
