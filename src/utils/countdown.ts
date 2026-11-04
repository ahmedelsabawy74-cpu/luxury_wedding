/**
 * Wedding countdown calculation logic
 * Wedding Date: Thursday, November 11, 2026, 18:00 (Cairo Time)
 */

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  isPast: boolean;
}

export const WEDDING_DATE_ISO = '2026-11-11T18:00:00+02:00';

export function calculateTimeRemaining(
  targetDate: Date | string | number,
  nowDate: Date | string | number = new Date()
): CountdownResult {
  const target = new Date(targetDate).getTime();
  const now = new Date(nowDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMilliseconds: 0,
      isPast: true,
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds: diff,
    isPast: false,
  };
}

export function padZero(num: number): string {
  return num.toString().padStart(2, '0');
}
