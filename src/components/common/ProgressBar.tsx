interface ProgressBarProps {
  value: number; // 0-100
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden border">
      <div
        className="h-full bg-accent rounded-full transition-all"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        aria-valuenow={value}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
