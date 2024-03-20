import { ReactNode } from "react";
import "./mainButton.css";

interface MainButtonProps {
  button_text: string;
  isLoading?: boolean;
  loaderComponent?: ReactNode;
}
export default function MainButton({
  button_text,
  isLoading,
  loaderComponent,
}: MainButtonProps) {
  return (
    <button type="submit" className="main-btn-component" disabled={isLoading}>
      {isLoading ? loaderComponent : button_text}
    </button>
  );
}
