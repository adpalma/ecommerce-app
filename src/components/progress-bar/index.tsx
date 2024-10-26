import './index.css';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const percentage = `${progress * 100}%`;
  return (
    <div className="progress-bar-rail">
      <div
        className="progress-bar-track"
        style={{ '--progress-width': percentage } as React.CSSProperties}
      />
    </div>
  );
};
