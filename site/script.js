import translate from "./translate.js";

const Temporal =
  globalThis.Temporal ??
  (await import("https://esm.sh/@js-temporal/polyfill@0.5.1")).Temporal;

const interval = 1000;
const percentagePrecision = 4;
const timeZone = "Europe/Istanbul";

const [start, end] = ["start", "end"].map((type) => {
  const date = new URLSearchParams(window.location.search).get(type);

  return date.includes("T")
    ? Temporal.PlainDateTime.from(date).toZonedDateTime(timeZone)
    : Temporal.PlainDate.from(date).toZonedDateTime(timeZone);
});

const differenceMilliseconds = (startDateTime, endDateTime) =>
  startDateTime.until(endDateTime, {
    largestUnit: "milliseconds",
  }).milliseconds;

const totalDifference = differenceMilliseconds(start, end);

const update = () => {
  const now = Temporal.Now.zonedDateTimeISO(timeZone);

  const diff = now.until(end, {
    largestUnit: "weeks",
  });

  for (const unit of ["weeks", "days", "hours", "minutes", "seconds"]) {
    let content = String(diff[unit]);

    if (!["weeks", "days"].includes(unit)) {
      // eslint-disable-next-line no-magic-numbers
      content = content.padStart(2, "0");
    }

    document.getElementById(unit).textContent = content;
  }

  const percent = (
    (differenceMilliseconds(start, now) / totalDifference) *
    // eslint-disable-next-line no-magic-numbers
    100
  ).toFixed(percentagePrecision);
  document.getElementById("percentage").textContent = percent;

  document.documentElement.style.setProperty("--progress", `${percent}%`);
};

setInterval(() => {
  update();
}, interval);

update();
translate();
