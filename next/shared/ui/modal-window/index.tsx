"use client";
import { DialogContent, DialogTrigger, Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { SharedButton } from "@/shared/ui/button";

export interface ModalWindowProps {
  children: ReactNode;
  textOpenWindow: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
export const ModalWindow = ({
  children,
  textOpenWindow,
  open,
  onOpenChange,
}: ModalWindowProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <SharedButton variant="outline">{textOpenWindow}</SharedButton>
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
