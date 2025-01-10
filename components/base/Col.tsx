import React, { ReactNode } from "react";

export default function Col({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ flex: "1 0", width: "100%", maxWidth: "100%" }}
      className={className ?? undefined}
    >
      {children}
    </div>
  );
}
