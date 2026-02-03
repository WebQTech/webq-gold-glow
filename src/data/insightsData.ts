export interface InsightData {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  keyTakeaways: string[];
  relatedTopics: string[];
}

export const insightsData: InsightData[] = [
  {
    slug: "the-future-of-enterprise-ai-2025-and-beyond",
    title: "The Future of Enterprise AI: 2025 and Beyond",
    category: "Industry Reports",
    excerpt: "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics.",
    author: "Dr. Sarah Chen",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    content: [
      "Artificial intelligence has transitioned from a futuristic concept to a cornerstone of enterprise operations. As we look toward 2025 and beyond, the pace of AI adoption continues to accelerate, fundamentally transforming how businesses operate, compete, and deliver value to their customers.",
      "The integration of AI into enterprise systems is no longer limited to tech-forward companies. Organizations across industries—from healthcare to manufacturing, finance to retail—are leveraging AI to automate processes, enhance decision-making, and create new revenue streams.",
      "Predictive analytics has emerged as one of the most impactful applications of enterprise AI. By analyzing historical data patterns, businesses can now forecast demand, identify potential risks, and optimize resource allocation with unprecedented accuracy.",
      "The rise of generative AI has opened new frontiers in content creation, customer service, and product development. Enterprises are using these tools to draft reports, generate code, create marketing materials, and even design new products—all at a fraction of the traditional time and cost.",
      "Looking ahead, we anticipate several key trends shaping enterprise AI: increased focus on responsible AI practices, greater integration of AI with edge computing, and the emergence of industry-specific AI solutions tailored to unique business challenges."
    ],
    keyTakeaways: [
      "AI adoption is accelerating across all industries",
      "Predictive analytics delivers measurable ROI",
      "Generative AI is transforming content creation and development",
      "Responsible AI practices are becoming essential",
      "Industry-specific AI solutions are emerging"
    ],
    relatedTopics: ["Machine Learning", "Predictive Analytics", "Digital Transformation", "Automation"]
  },
  {
    slug: "cloud-migration-success-stories-fortune-500-companies",
    title: "Cloud Migration Success Stories: Fortune 500 Companies",
    category: "Case Studies",
    excerpt: "Learn from the experiences of leading enterprises that successfully migrated their infrastructure to the cloud.",
    author: "Michael Torres",
    date: "Dec 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    content: [
      "Cloud migration remains one of the most significant digital transformation initiatives for enterprises worldwide. The journey from on-premises infrastructure to cloud-based solutions presents both challenges and opportunities that can define an organization's competitive position.",
      "Through our research and partnerships, we've observed that successful cloud migrations share common characteristics: strong executive sponsorship, clear business objectives, and a phased approach that minimizes operational disruption.",
      "One manufacturing client reduced their infrastructure costs by a significant margin while improving system reliability. Their approach involved a careful assessment of workload requirements, followed by a lift-and-shift strategy for legacy applications and cloud-native development for new initiatives.",
      "Financial services organizations have found particular value in cloud platforms' security and compliance capabilities. By leveraging built-in security controls and compliance frameworks, these enterprises have actually strengthened their security posture while gaining agility.",
      "The lessons from these migrations are clear: success requires more than technology. It demands organizational change management, skills development, and a commitment to continuous improvement."
    ],
    keyTakeaways: [
      "Executive sponsorship is critical for migration success",
      "Phased approaches minimize operational risk",
      "Cloud can enhance rather than compromise security",
      "Skills development must accompany technology change",
      "Continuous improvement drives long-term value"
    ],
    relatedTopics: ["Cloud Computing", "Digital Transformation", "Infrastructure", "DevOps"]
  },
  {
    slug: "cybersecurity-best-practices-for-2025",
    title: "Cybersecurity Best Practices for 2025",
    category: "Whitepapers",
    excerpt: "A comprehensive guide to protecting your organization against emerging cyber threats and vulnerabilities.",
    author: "James Wilson",
    date: "Dec 15, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    content: [
      "The cybersecurity landscape continues to evolve at an unprecedented pace. As organizations embrace digital transformation, the attack surface expands, creating new vulnerabilities that threat actors are quick to exploit.",
      "Zero-trust architecture has moved from concept to necessity. The principle of 'never trust, always verify' provides a framework for securing modern, distributed environments where traditional perimeter-based security is no longer sufficient.",
      "Identity and access management (IAM) has emerged as the cornerstone of enterprise security. With remote work becoming permanent for many organizations, ensuring that the right people have the right access to the right resources is more critical than ever.",
      "AI-powered security tools are becoming essential for detecting and responding to threats at scale. These systems can analyze vast amounts of data in real-time, identifying patterns and anomalies that would be impossible for human analysts to catch.",
      "The human element remains both the greatest vulnerability and the strongest defense. Organizations that invest in security awareness training and create a culture of security consciousness are better positioned to prevent and respond to attacks."
    ],
    keyTakeaways: [
      "Zero-trust architecture is now essential",
      "Identity management is the new security perimeter",
      "AI enhances threat detection capabilities",
      "Employee training remains critical",
      "Security must be embedded in culture"
    ],
    relatedTopics: ["Cybersecurity", "Zero Trust", "Identity Management", "Risk Management"]
  },
  {
    slug: "generative-ai-in-healthcare-transforming-patient-care",
    title: "Generative AI in Healthcare: Transforming Patient Care",
    category: "Tech Trends",
    excerpt: "Discover how generative AI is revolutionizing diagnostics, treatment planning, and patient engagement.",
    author: "Dr. Emily Roberts",
    date: "Dec 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    content: [
      "Healthcare is experiencing a profound transformation driven by generative AI technologies. From accelerating drug discovery to enhancing diagnostic accuracy, these tools are creating new possibilities for improving patient outcomes.",
      "In medical imaging, AI systems are now capable of detecting subtle patterns that even experienced radiologists might miss. These tools serve as a second set of eyes, helping to catch early signs of disease and reduce diagnostic errors.",
      "Personalized treatment planning is becoming a reality through AI's ability to analyze patient data and recommend tailored interventions. By considering individual genetic profiles, medical histories, and lifestyle factors, AI can help clinicians develop more effective treatment strategies.",
      "Patient engagement is another area where generative AI is making an impact. AI-powered chatbots and virtual health assistants can provide 24/7 support, answer common questions, and help patients navigate their healthcare journey.",
      "As these technologies mature, the focus is shifting to responsible implementation. Ensuring that AI tools are equitable, transparent, and complementary to human expertise is essential for realizing their full potential in healthcare."
    ],
    keyTakeaways: [
      "AI is enhancing diagnostic accuracy",
      "Personalized treatment is becoming reality",
      "Virtual assistants improve patient engagement",
      "Responsible implementation is essential",
      "AI complements rather than replaces clinicians"
    ],
    relatedTopics: ["Healthcare AI", "Medical Imaging", "Patient Care", "Digital Health"]
  },
  {
    slug: "building-resilient-supply-chains-with-ai",
    title: "Building Resilient Supply Chains with AI",
    category: "Industry Reports",
    excerpt: "How AI-powered analytics can help organizations build more resilient and adaptive supply chain networks.",
    author: "David Park",
    date: "Dec 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    content: [
      "Global supply chains have faced unprecedented disruptions in recent years, exposing vulnerabilities that many organizations didn't know existed. AI is emerging as a powerful tool for building more resilient, adaptive supply chain networks.",
      "Predictive analytics enables organizations to anticipate disruptions before they occur. By analyzing data from multiple sources—weather patterns, geopolitical events, supplier health indicators—AI can provide early warning signals that allow for proactive response.",
      "Demand forecasting has been transformed by machine learning algorithms that can identify patterns and trends across vast datasets. More accurate forecasts lead to optimized inventory levels, reduced waste, and improved customer satisfaction.",
      "Supplier risk management is another area where AI delivers significant value. By continuously monitoring supplier performance and external risk factors, organizations can identify potential issues and diversify their supplier base before problems emerge.",
      "The most successful supply chain transformations combine AI capabilities with organizational agility. Technology alone is not enough—companies must also develop the processes and culture needed to act on AI-generated insights."
    ],
    keyTakeaways: [
      "AI enables proactive risk management",
      "Accurate demand forecasting reduces waste",
      "Continuous supplier monitoring is essential",
      "Organizational agility complements technology",
      "Data integration drives supply chain visibility"
    ],
    relatedTopics: ["Supply Chain", "Logistics", "Risk Management", "Predictive Analytics"]
  },
  {
    slug: "the-rise-of-agentic-ai-autonomous-systems-in-enterprise",
    title: "The Rise of Agentic AI: Autonomous Systems in Enterprise",
    category: "Tech Trends",
    excerpt: "Understanding how autonomous AI agents are changing the way businesses operate and make decisions.",
    author: "Lisa Zhang",
    date: "Dec 8, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
    content: [
      "The next frontier in enterprise AI is the emergence of agentic systems—AI that can act autonomously to accomplish complex goals. Unlike traditional AI that responds to specific prompts, agentic AI can plan, execute, and adapt without constant human guidance.",
      "These systems are particularly valuable in scenarios that require continuous monitoring and rapid response. From cybersecurity threat hunting to customer service escalation, agentic AI can handle routine tasks while escalating exceptional cases to human experts.",
      "The development of agentic AI has been enabled by advances in large language models, improved reasoning capabilities, and sophisticated planning algorithms. These systems can break down complex objectives into manageable steps and adjust their approach based on outcomes.",
      "Enterprise adoption of agentic AI requires careful consideration of governance and control mechanisms. Organizations must define clear boundaries for autonomous action and maintain human oversight for high-stakes decisions.",
      "Looking ahead, we expect agentic AI to become increasingly prevalent in enterprise environments. The organizations that learn to effectively deploy and manage these systems will gain significant competitive advantages in efficiency, responsiveness, and innovation."
    ],
    keyTakeaways: [
      "Agentic AI can act autonomously on complex goals",
      "Continuous monitoring scenarios benefit most",
      "Governance and control mechanisms are essential",
      "Human oversight remains critical for high-stakes decisions",
      "Early adopters will gain competitive advantages"
    ],
    relatedTopics: ["Agentic AI", "Automation", "Enterprise AI", "Machine Learning"]
  }
];

export const getInsightBySlug = (slug: string): InsightData | undefined => {
  return insightsData.find(insight => insight.slug === slug);
};

export const insightCategories = [
  { id: "reports", label: "Industry Reports", count: 24 },
  { id: "case-studies", label: "Case Studies", count: 18 },
  { id: "whitepapers", label: "Whitepapers", count: 12 },
  { id: "tech-trends", label: "Tech Trends", count: 36 },
  { id: "webinars", label: "Webinars", count: 8 },
  { id: "events", label: "Events", count: 5 },
];
