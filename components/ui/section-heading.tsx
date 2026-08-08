"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  badgeText?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  badgeText,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12",
        align === "center" ? "text-center items-center max-w-2xl mx-auto" : "text-left items-start",
        className
      )}
      {...props}
    >
      {badgeText && <Badge className="mb-1">{badgeText}</Badge>}
      <h2 className="text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-sm sm:text-base max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
