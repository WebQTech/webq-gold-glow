import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Home, Zap, TrendingUp, Users, Globe, BarChart3, Building2, Star } from "lucide-react";
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
    description: "Cacheable queries and paginated responses to minimize DB load. At WebQ, we profile every service layer — applying Redis-backed caching and lazy-loading strategies that cut response times by up to 60%.",
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
    description: "Clean REST endpoints with validation and proper status codes. At WebQ, we design APIs contract-first using OpenAPI specs — ensuring frontend and backend teams work in parallel with zero ambiguity.",
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
    description: "JPA entities with proper constraints and audit fields. At WebQ, every data model follows our engineering playbook — unique indexes, non-nullable fields, and Flyway-managed migrations for safe schema evolution.",
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
    description: "Environment-driven config with externalized secrets and Actuator endpoints. At WebQ, we templatize configs per environment (dev/staging/prod) with Vault-backed secrets and health checks wired into our monitoring stack.",
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
    description: "Centralized exception handling with structured error responses. At WebQ, we implement a standardized error contract across all microservices — consistent codes, messages, and traceability IDs that simplify debugging for clients.",
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
    description: "Integration tests verifying API contracts and JSON structure. At WebQ, we enforce 85%+ test coverage with CI-gated builds — every PR runs automated tests against staging databases before merge.",
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
    description: "AOP-based structured logging with correlation IDs. At WebQ, we pipe all logs into our ELK stack with distributed tracing — giving ops teams full request visibility across microservices in under 30 seconds.",
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
    description: "Decoupled architecture using domain events with async listeners. At WebQ, we design event-driven systems with Kafka/RabbitMQ backing — enabling independent scaling of notification, audit, and analytics pipelines.",
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
        <section className={`bg-gradient-to-b from-primary/5 to-background ${slug === "spring-boot" ? "py-2 lg:py-3" : "py-10 lg:py-16"}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className={slug === "spring-boot" ? "flex items-center gap-4 mb-1" : "mb-4"}>
              <GoBackButton />
              <nav aria-label="Breadcrumb">
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
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={slug === "spring-boot" ? "grid lg:grid-cols-2 gap-6 items-start" : "max-w-3xl"}
            >
              <div>
                <span className="text-xs font-black tracking-widest text-primary uppercase">{tech.category}</span>
                <div className="flex items-center gap-3 mt-1">
                  <div className={`bg-primary/10 rounded-xl flex items-center justify-center ${slug === "spring-boot" ? "w-9 h-9" : "w-14 h-14"}`}>
                    <Icon className={`text-primary ${slug === "spring-boot" ? "w-5 h-5" : "w-7 h-7"}`} />
                  </div>
                  <h1 className={`font-bold text-foreground ${slug === "spring-boot" ? "text-2xl lg:text-3xl" : "text-4xl lg:text-5xl"}`}>{tech.name}</h1>
                </div>
                <p className={`text-muted-foreground ${slug === "spring-boot" ? "mt-2 text-sm line-clamp-3" : "mt-6 text-lg"}`}>{tech.fullDescription}</p>
                <div className={slug === "spring-boot" ? "mt-3" : "mt-8"}>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm py-2 px-5">
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

        {/* Spring Boot Metrics & Industry Popularity */}
        {slug === "spring-boot" && (
          <>
            {/* Key Metrics */}
            <section className="py-10 lg:py-14 bg-primary/5">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10"
                >
                  Spring Boot by the Numbers
                </motion.h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: TrendingUp, value: "75%", label: "Java Developers Use It", detail: "Most popular Java framework" },
                    { icon: Globe, value: "1M+", label: "Apps in Production", detail: "Worldwide deployments" },
                    { icon: Star, value: "#1", label: "Stack Overflow Rank", detail: "Top Java framework since 2018" },
                    { icon: Users, value: "900+", label: "Contributors", detail: "Active open-source community" },
                    { icon: BarChart3, value: "58%", label: "Enterprise Adoption", detail: "Fortune 500 companies" },
                    { icon: Building2, value: "3.x", label: "Latest Major Version", detail: "GraalVM native support" },
                    { icon: Zap, value: "40ms", label: "Avg. Startup Time", detail: "With native compilation" },
                    { icon: Globe, value: "200K+", label: "GitHub Stars", detail: "Spring ecosystem total" },
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md transition-shadow"
                    >
                      <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-2xl lg:text-3xl font-bold text-foreground">{metric.value}</p>
                      <p className="text-sm font-semibold text-foreground/80 mt-1">{metric.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{metric.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Industry Popularity */}
            <section className="py-10 lg:py-14">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-3"
                >
                  Industry Adoption
                </motion.h2>
                <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Spring Boot powers mission-critical systems across every major industry vertical.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { industry: "Banking & Financial Services", adoption: 92, use: "Core banking platforms, payment gateways, risk engines, and regulatory reporting systems." },
                    { industry: "Healthcare & Life Sciences", adoption: 78, use: "EHR integrations, HIPAA-compliant APIs, clinical trial data pipelines, and telemedicine backends." },
                    { industry: "E-Commerce & Retail", adoption: 85, use: "Product catalogs, order management, inventory sync, and real-time pricing engines." },
                    { industry: "Insurance & FinTech", adoption: 80, use: "Claims processing, underwriting automation, KYC workflows, and fraud detection APIs." },
                    { industry: "Telecommunications", adoption: 73, use: "Subscriber management, billing microservices, network monitoring, and provisioning systems." },
                    { industry: "Government & Public Sector", adoption: 65, use: "Citizen portals, tax filing systems, inter-agency data exchange, and compliance platforms." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-foreground">{item.industry}</h3>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.adoption}% adoption
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.adoption}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.use}</p>
                    </motion.div>
                  ))}
                </div>

                {/* WebQ callout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 bg-card border-2 border-primary/20 rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">How WebQ Technologies Delivers with Spring Boot</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        At WebQ, Spring Boot is our go-to framework for building enterprise-grade microservices. We've deployed 50+ production Spring Boot applications across banking, healthcare, and e-commerce — with sub-100ms response times, 99.99% uptime SLAs, and fully automated CI/CD pipelines. Our engineering playbook includes security-first configurations, distributed tracing, and event-driven architectures that scale from startup MVPs to Fortune 500 workloads.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </>
        )}

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
