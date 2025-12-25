import { Accessibility, Contrast, Type, RotateCcw } from "lucide-react";
import { useHighContrast } from "@/hooks/useHighContrast";
import { useFontSize, FontSize } from "@/hooks/useFontSize";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const fontSizeOptions: { value: FontSize; label: string }[] = [
  { value: "small", label: "S" },
  { value: "medium", label: "M" },
  { value: "large", label: "L" },
  { value: "xlarge", label: "XL" },
];

export const AccessibilityPanel = () => {
  const { isHighContrast, toggleHighContrast } = useHighContrast();
  const { fontSize, setFontSize, resetFontSize } = useFontSize();

  const resetAll = () => {
    if (isHighContrast) toggleHighContrast();
    resetFontSize();
  };

  const hasCustomSettings = isHighContrast || fontSize !== "medium";

  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <button
                className={`p-2 rounded-md transition-colors duration-200 relative ${
                  hasCustomSettings
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/60 hover:text-primary hover:bg-muted"
                }`}
                aria-label="Accessibility settings"
              >
                <Accessibility className="w-4 h-4" />
                {hasCustomSettings && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full" />
                )}
              </button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Accessibility settings</p>
          </TooltipContent>
        </Tooltip>

        <PopoverContent 
          className="w-72 p-0 bg-background border border-border shadow-lg" 
          align="end"
          sideOffset={8}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-primary" />
                Accessibility
              </h3>
              {hasCustomSettings && (
                <button
                  onClick={resetAll}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  aria-label="Reset all accessibility settings"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {/* High Contrast Toggle */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                    <Contrast className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div>
                    <Label htmlFor="high-contrast" className="text-sm font-medium cursor-pointer">
                      High Contrast
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Increase color contrast
                    </p>
                  </div>
                </div>
                <Switch
                  id="high-contrast"
                  checked={isHighContrast}
                  onCheckedChange={toggleHighContrast}
                  aria-label="Toggle high contrast mode"
                />
              </div>

              <Separator />

              {/* Font Size Control */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                    <Type className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Text Size</Label>
                    <p className="text-xs text-muted-foreground">
                      Adjust text size for readability
                    </p>
                  </div>
                </div>

                <div 
                  className="flex items-center justify-between gap-1 p-1 bg-muted rounded-lg"
                  role="radiogroup"
                  aria-label="Font size options"
                >
                  {fontSizeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFontSize(option.value)}
                      className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                        fontSize === option.value
                          ? "bg-background text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      role="radio"
                      aria-checked={fontSize === option.value}
                      aria-label={`${option.label === "S" ? "Small" : option.label === "M" ? "Medium" : option.label === "L" ? "Large" : "Extra Large"} text size`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-muted/50 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Settings are saved automatically
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
};
