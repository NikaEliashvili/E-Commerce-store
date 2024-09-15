import React from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CloseIconButtonProps {
  onClose?: () => void;
  className?: string;
}

const CloseIconButton: React.FC<CloseIconButtonProps> = ({
  onClose = () => {},
  className,
}) => {
  return (
    <IconButton
      icon={<X size={20} />}
      onClick={onClose}
      className={cn(
        "shadow-none bg-gray-100 border-none rounded-md",
        className
      )}
    />
  );
};

export default CloseIconButton;
