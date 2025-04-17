import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return <button className="bg-amber-500 p-6">{children}</button>;
}
