"use client";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger, Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";

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
        <Button variant="outline">{textOpenWindow}</Button>
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
