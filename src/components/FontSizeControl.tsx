import { Minus, Plus, RotateCcw } from "lucide-react";
import { useFontSize, FontSize } from "@/hooks/useFontSize";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const fontSizeLabels: Record<FontSize, string> = {
  small: "Small",
  medium: "Medium",
  large: "Large",
  xlarge: "Extra Large",
};

export const FontSizeControl = () => {
  const { fontSize, increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();

  const isMin = fontSize === "small";
  const isMax = fontSize === "xlarge";
  const isDefault = fontSize === "medium";

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1" role="group" aria-label="Font size controls">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={decreaseFontSize}
              disabled={isMin}
              className={`p-1.5 rounded-md transition-colors duration-200 ${
                isMin
                  ? "text-foreground/30 cursor-not-allowed"
                  : "text-foreground/60 hover:text-primary hover:bg-muted"
              }`}
              aria-label="Decrease font size"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Decrease text size</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={resetFontSize}
              disabled={isDefault}
              className={`px-2 py-1 text-xs font-medium rounded-md transition-colors duration-200 min-w-[2rem] ${
                isDefault
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/60 hover:text-primary hover:bg-muted"
              }`}
              aria-label={`Current font size: ${fontSizeLabels[fontSize]}. Click to reset to medium.`}
            >
              <span className="sr-only">Font size: </span>
              A<span className="text-[0.65rem]">a</span>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Current: {fontSizeLabels[fontSize]}{!isDefault && " (click to reset)"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={increaseFontSize}
              disabled={isMax}
              className={`p-1.5 rounded-md transition-colors duration-200 ${
                isMax
                  ? "text-foreground/30 cursor-not-allowed"
                  : "text-foreground/60 hover:text-primary hover:bg-muted"
              }`}
              aria-label="Increase font size"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Increase text size</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
