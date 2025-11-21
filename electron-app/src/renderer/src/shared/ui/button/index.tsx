import { Button as UiButton } from "@/components/ui/button";

export interface SharedButtonProps
  extends React.ComponentProps<typeof UiButton> {}

export const SharedButton = (props: SharedButtonProps) => {
  return <UiButton {...props} />;
};

