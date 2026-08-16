"use client";

import * as React from "react";
import type { ToastProps } from "@/components/ui/toast";

type ToastItem = {
  id: number;
  description?: React.ReactNode;
  variant?: ToastProps["variant"];
};

// ponytail: single-slot store; radix auto-closes + unmounts after duration, no dismiss bookkeeping needed
let current: ToastItem | null = null;
const listeners = new Set<(toasts: ToastItem[]) => void>();

export function toast(props: Omit<ToastItem, "id">) {
  current = { ...props, id: Date.now() };
  listeners.forEach((l) => l([current!]));
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastItem[]>(
    current ? [current] : []
  );

  React.useEffect(() => {
    listeners.add(setToasts);
    return () => {
      listeners.delete(setToasts);
    };
  }, []);

  return { toasts, toast };
}
