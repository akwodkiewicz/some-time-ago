/**
 * Tells you how long ago was `inputDate` in "x days/weeks/months ago" format using `Intl`
 * ({@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl docs}).
 * Automatically changes the resolution from days, to weeks, to months, to keeps things readable.
 * Returns the exact date if the `inputDate` happened very long time ago.
 *
 * Dates only, time is ignored.
 *
 * You can use `forcedLocale` to get the string in a specific locale, otherwise a browser locale
 * is used.
 */
function someTimeAgo(inputDate: Date, forcedLocale?: string) {
  // numeric: "auto" uses phrases like "yesterday" instead of "1 day ago"
  const rtf = new Intl.RelativeTimeFormat(forcedLocale, { numeric: "auto" });

  // this is only to return exact date as a fallback
  const dtf = new Intl.DateTimeFormat(forcedLocale);

  // thresholds are my own preference, you can define your own
  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  const DAYS_THRESHOLD = 14;
  const MILLISECONDS_IN_A_WEEK = 7 * MILLISECONDS_IN_A_DAY;
  const WEEKS_THRESHOLD = 4;
  const MILLISECONDS_IN_A_MONTH = 30 * MILLISECONDS_IN_A_DAY;
  const MONTHS_THRESHOLD = 12;

  const millisecondsAgo = new Date().getTime() - inputDate.getTime();

  switch (true) {
    case millisecondsAgo < DAYS_THRESHOLD * MILLISECONDS_IN_A_DAY:
      return rtf.format(
        -Math.round(millisecondsAgo / MILLISECONDS_IN_A_DAY),
        "day"
      );

    case millisecondsAgo < WEEKS_THRESHOLD * MILLISECONDS_IN_A_WEEK:
      return rtf.format(
        -Math.round(millisecondsAgo / MILLISECONDS_IN_A_WEEK),
        "week"
      );

    case millisecondsAgo < MONTHS_THRESHOLD * MILLISECONDS_IN_A_MONTH:
      return rtf.format(
        -Math.round(millisecondsAgo / MILLISECONDS_IN_A_MONTH),
        "month"
      );

    default:
      return dtf.format(inputDate);
  }
}

export { someTimeAgo };
