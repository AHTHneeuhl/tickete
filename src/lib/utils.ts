import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  if (value >= 1000) {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(value) / 3);
    const shortValue = value / Math.pow(1000, suffixIndex);
    return shortValue.toFixed(0) + suffixes[suffixIndex];
  } else {
    return value.toString();
  }
}
