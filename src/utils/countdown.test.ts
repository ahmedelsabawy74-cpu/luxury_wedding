import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTimeRemaining, padZero, WEDDING_DATE_ISO } from './countdown';

test('calculates correct time remaining for a known offset', () => {
  const base = new Date('2026-11-10T12:00:00Z');
  // 1 day, 2 hours, 3 minutes, 4 seconds later
  const future = new Date(base.getTime() + ((1 * 86400) + (2 * 3600) + (3 * 60) + 4) * 1000);

  const res = calculateTimeRemaining(future, base);
  assert.equal(res.days, 1);
  assert.equal(res.hours, 2);
  assert.equal(res.minutes, 3);
  assert.equal(res.seconds, 4);
  assert.equal(res.isPast, false);
});

test('handles past dates gracefully', () => {
  const base = new Date('2026-11-12T12:00:00Z');
  const past = new Date('2026-11-11T12:00:00Z');

  const res = calculateTimeRemaining(past, base);
  assert.equal(res.days, 0);
  assert.equal(res.hours, 0);
  assert.equal(res.minutes, 0);
  assert.equal(res.seconds, 0);
  assert.equal(res.isPast, true);
});

test('padZero formats numbers correctly', () => {
  assert.equal(padZero(5), '05');
  assert.equal(padZero(12), '12');
  assert.equal(padZero(0), '00');
});

test('wedding ISO string parses to valid date in 2026', () => {
  const weddingDate = new Date(WEDDING_DATE_ISO);
  assert.equal(weddingDate.getFullYear(), 2026);
  assert.equal(weddingDate.getMonth(), 10); // 0-indexed: 10 is November
  assert.equal(weddingDate.getDate(), 11);
});
