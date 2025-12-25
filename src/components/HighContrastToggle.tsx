import { Contrast } from "lucide-react";
import { useHighContrast } from "@/hooks/useHighContrast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const HighContrastToggle = () => {
  const { isHighContrast, toggleHighContrast } = useHighContrast();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleHighContrast}
            className={`p-2 rounded-md transition-colors duration-200 ${
              isHighContrast
                ? "bg-primary text-primary-foreground"
                : "text-foreground/60 hover:text-primary hover:bg-muted"
            }`}
            aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
            aria-pressed={isHighContrast}
          >
            <Contrast className="w-4 h-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isHighContrast ? "Disable" : "Enable"} high contrast mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
