import logo1 from "@/assets/logo-option1.png";
import logo2 from "@/assets/logo-option2.png";
import logo3 from "@/assets/logo-option3.png";
import logoEarth1 from "@/assets/logo-earth1.png";
import logoEarth2 from "@/assets/logo-earth2.png";
import logoEarth3 from "@/assets/logo-earth3.png";
import currentLogo from "@/assets/logo.png";

const LogoPreview = () => {
  const options = [
    { src: currentLogo, label: "Current Logo" },
    { src: logo1, label: "Option 1 – Geometric WQ" },
    { src: logo2, label: "Option 2 – Hexagonal Q" },
    { src: logo3, label: "Option 3 – Node Network W" },
    { src: logoEarth1, label: "Earth 1 – Terracotta WQ" },
    { src: logoEarth2, label: "Earth 2 – Forest Hex" },
    { src: logoEarth3, label: "Earth 3 – Organic Nodes" },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-12">Logo Options</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((opt) => (
            <div key={opt.label} className="flex flex-col items-center gap-4">
              <div className="w-full aspect-square bg-white rounded-xl border border-border shadow-sm flex items-center justify-center p-6">
                <img src={opt.src} alt={opt.label} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-sm font-semibold text-foreground text-center">{opt.label}</p>
              {/* Preview in navbar context */}
              <div className="w-full bg-background border border-border rounded-lg p-4 flex items-center gap-3">
                <img src={opt.src} alt="" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="font-montserrat text-base font-bold tracking-tight leading-tight">
                    WebQ <span className="text-primary">Technologies</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground">Innovate. Transform. Succeed.</span>
                </div>
              </div>
              {/* Dark preview */}
              <div className="w-full bg-[hsl(215,50%,8%)] rounded-lg p-4 flex items-center gap-3">
                <img src={opt.src} alt="" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="font-montserrat text-base font-bold text-white tracking-tight leading-tight">
                    WebQ <span className="text-primary">Technologies</span>
                  </span>
                  <span className="text-[10px] text-white/50">Innovate. Transform. Succeed.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
