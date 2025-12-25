import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Building2, DollarSign, FileText, Calendar, ArrowRight, Download, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const stockInfo = {
  symbol: "WEBQ",
  exchange: "NASDAQ",
  price: "$142.50",
  change: "+2.35",
  changePercent: "+1.68%",
  marketCap: "$18.5B",
  peRatio: "32.4",
  dividend: "$0.48",
};

const financialHighlights = [
  { label: "Annual Revenue", value: "$2.8B", change: "+24% YoY" },
  { label: "Net Income", value: "$485M", change: "+18% YoY" },
  { label: "Operating Margin", value: "22.4%", change: "+2.1 pts" },
  { label: "Free Cash Flow", value: "$620M", change: "+32% YoY" },
];

const recentReports = [
  {
    title: "Q3 2025 Earnings Report",
    date: "October 28, 2025",
    type: "Quarterly Report",
  },
  {
    title: "2024 Annual Report",
    date: "February 15, 2025",
    type: "Annual Report",
  },
  {
    title: "Q2 2025 Earnings Report",
    date: "July 25, 2025",
    type: "Quarterly Report",
  },
  {
    title: "Q1 2025 Earnings Report",
    date: "April 24, 2025",
    type: "Quarterly Report",
  },
];

const upcomingEvents = [
  {
    title: "Q4 2025 Earnings Call",
    date: "January 28, 2026",
    time: "4:30 PM EST",
  },
  {
    title: "Annual Shareholder Meeting",
    date: "May 15, 2026",
    time: "10:00 AM EST",
  },
  {
    title: "Investor Day 2026",
    date: "September 20, 2026",
    time: "9:00 AM EST",
  },
];

const governance = [
  {
    name: "Rajesh Kumar",
    role: "Chairman & CEO",
    since: "2010",
  },
  {
    name: "Dr. Amanda Foster",
    role: "Lead Independent Director",
    since: "2015",
  },
  {
    name: "James Chen",
    role: "Audit Committee Chair",
    since: "2018",
  },
  {
    name: "Patricia Williams",
    role: "Compensation Committee Chair",
    since: "2019",
  },
];

const investorResources = [
  { title: "SEC Filings", icon: FileText },
  { title: "Stock Information", icon: TrendingUp },
  { title: "Dividend History", icon: DollarSign },
  { title: "Corporate Governance", icon: Building2 },
];

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investors | WebQ Technologies - Financial Reports, Stock Information & Governance</title>
        <meta name="description" content="Access WebQ Technologies investor relations information including financial reports, stock data, SEC filings, and corporate governance." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main id="main-content">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Investors</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                  Investor <span className="text-primary">Relations</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Access financial reports, stock information, and corporate governance resources for WebQ Technologies.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stock Ticker */}
          <section className="py-8 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-sm opacity-80">NASDAQ:</span>
                    <span className="text-xl font-bold ml-2">{stockInfo.symbol}</span>
                  </div>
                  <div className="text-3xl font-bold">{stockInfo.price}</div>
                  <div className="text-green-300 font-semibold">
                    {stockInfo.change} ({stockInfo.changePercent})
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="opacity-80">Market Cap:</span>
                    <span className="font-semibold ml-2">{stockInfo.marketCap}</span>
                  </div>
                  <div>
                    <span className="opacity-80">P/E Ratio:</span>
                    <span className="font-semibold ml-2">{stockInfo.peRatio}</span>
                  </div>
                  <div>
                    <span className="opacity-80">Dividend:</span>
                    <span className="font-semibold ml-2">{stockInfo.dividend}/share</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Highlights */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-8">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Financial Highlights</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-8">FY 2025 Performance</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {financialHighlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                    <p className="text-3xl font-bold text-foreground mb-1">{item.value}</p>
                    <p className="text-sm text-green-500 font-medium">{item.change}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Reports & Events */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Financial Reports */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <FileText className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Financial Reports</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {recentReports.map((report, index) => (
                      <motion.div
                        key={report.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all group cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {report.title}
                          </p>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                            <span>{report.date}</span>
                            <span className="px-2 py-0.5 bg-secondary rounded text-xs">{report.type}</span>
                          </div>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <button className="mt-6 text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                    View All Reports <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Upcoming Events */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Upcoming Events</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={event.title}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all"
                      >
                        <p className="font-semibold text-foreground">{event.title}</p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <button className="mt-6 text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                    Add to Calendar <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Governance */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-8">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Governance</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Board of Directors</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {governance.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mt-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-2">Since {member.since}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Investor Resources */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Investor Resources</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {investorResources.map((resource, index) => (
                  <motion.a
                    key={resource.title}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all group flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </p>
                      <p className="text-xs text-muted-foreground">View details</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact IR */}
          <section className="py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Investor Relations Contact</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  For investor inquiries, please contact our Investor Relations team.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="mailto:ir@webqtech.com" className="btn-primary inline-flex items-center gap-2">
                    Contact IR Team
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    Email Alerts <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Investors;
