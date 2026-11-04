/**
 * Wedding Calendar Link and ICS Generator
 * Event: Karim & Radwaa's Wedding Celebration
 * Date: Thursday, November 11, 2026
 * Venue: Helwan Hall, Al-Maasara, Helwan, Cairo, Egypt
 */

export const WEDDING_EVENT = {
  title: "حفل زفاف كريم & رضوى",
  description: "معاً بمباركة عائلتيهما الكريمتين، يسر كريم ورضوى دعوتكم لمشاركتهما فرحة العمر في حفل زفافهما المبارك. المكان: قاعة حلوان، المعصرة، القاهرة، مصر.",
  location: "قاعة حلوان، المعصرة، حلوان، القاهرة، مصر",
  // Start: Nov 11, 2026 at 18:00 (Cairo UTC+2 -> 16:00 UTC)
  startDateUTC: "20261111T160000Z",
  endDateUTC: "20261111T220000Z",
};

export function getGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: WEDDING_EVENT.title,
    dates: `${WEDDING_EVENT.startDateUTC}/${WEDDING_EVENT.endDateUTC}`,
    details: WEDDING_EVENT.description,
    location: WEDDING_EVENT.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Karim & Radwaa Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${WEDDING_EVENT.title}`,
    `DESCRIPTION:${WEDDING_EVENT.description}`,
    `LOCATION:${WEDDING_EVENT.location}`,
    `DTSTART:${WEDDING_EVENT.startDateUTC}`,
    `DTEND:${WEDDING_EVENT.endDateUTC}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "karim-and-radwaa-wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
