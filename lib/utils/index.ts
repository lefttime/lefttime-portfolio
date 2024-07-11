import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomNumbers = (n: number): number[] => {
  const numbers: number[] = Array.from({ length: Math.max(n, 10) }, (_, i) => (i < 10 ? i : getRandomInt(1234, 987654321)) % 10)

  shuffle(numbers)

  return numbers.slice(0, n)
}

const shuffle = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}