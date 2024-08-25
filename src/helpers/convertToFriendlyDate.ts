export const convertToFriendlyDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  const formatter = new Intl.DateTimeFormat(navigator.language, options);
  const parts = formatter.formatToParts(date);

  const formattedParts = parts.map((part) => {
    if (part.type === "day") {
      const day = parseInt(part.value);
      const suffix = getOrdinalSuffix(day);
      return `${day}${suffix}`;
    }
    return part.value;
  });

  // Join all parts and replace the comma before time with " at "
  return formattedParts.join("").replace(", ", " at ");
};

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
