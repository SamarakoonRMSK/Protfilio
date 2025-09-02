import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TerminalCardProps = {
  title: string;
  children: React.ReactNode;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
};

export const TerminalCard = ({ title, children, badgeText, badgeVariant, className }: TerminalCardProps) => (
    <Card className={cn("bg-card/50 backdrop-blur-sm border-border/20 shadow-lg", className)}>
        <div className="flex items-center justify-between p-3 border-b border-border/20">
            <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <p className="text-xs text-muted-foreground">{title}</p>
            {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
        </div>
        <div className="p-4 md:p-6">
            {children}
        </div>
    </Card>
);
