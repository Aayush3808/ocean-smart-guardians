import mark from "@/assets/swamn-mark.png";

interface LogoProps {
  size?: number;
  variant?: "default" | "light";
  withWordmark?: boolean;
  className?: string;
}

export const Logo = ({ size = 32, variant = "default", withWordmark = true, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={mark}
        alt="SWAMN"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain select-none"
        draggable={false}
      />
      {withWordmark && (
        <span
          className={`h-display text-[1.05rem] tracking-[0.22em] ${
            variant === "light" ? "text-primary-foreground" : "text-navy"
          }`}
        >
          SWAMN
        </span>
      )}
    </div>
  );
};
