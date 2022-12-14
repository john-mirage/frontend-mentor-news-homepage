import { clsx } from "clsx";
import classes from "./IconButton.module.css";

interface Props {
  className?: string;
  label: string;
  iconShape: string;
  iconSize: string;
  onClick: () => void;
}

const IconButton = ({
  className,
  label,
  iconShape,
  iconSize,
  onClick,
}: Props) => {
  return (
    <button
      className={clsx(className, classes.container)}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <svg
        className={classes.icon}
        width={iconSize}
        height={iconSize}
        fill="currentColor"
      >
        <use href={iconShape} />
      </svg>
    </button>
  );
};

export default IconButton;
