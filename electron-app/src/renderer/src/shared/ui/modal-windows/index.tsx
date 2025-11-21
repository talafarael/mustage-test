import { DialogContent, DialogTrigger, Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { SharedButton } from "@/shared/ui/button";

export interface ModalWindowsProps {
  children: ReactNode;
  textOpenWindow: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
export const ModalWindows = ({
  children,
  textOpenWindow,
  open,
  onOpenChange,
}: ModalWindowsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <SharedButton variant="outline">{textOpenWindow}</SharedButton>
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

