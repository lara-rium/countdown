# countdown

tiny static page that counts down to a date and shows completion progress between a start date and an end date

[example for january 1 2026 to january 1 2030](https://countdown.lara.lv/?start=2026-01-01&end=2030-01-01)

## usage

used completely with query parameters:

| parameter | description                                          | required                                                          |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------------- |
| `start`   | start date, used for the progress (see format below) | yes                                                               |
| `end`     | end date the countdown runs to (see format below)    | yes                                                               |
| `lang`    | language of the website (`en` or `tr`)               | no (default: `tr` if browser language is turkish, otherwise `en`) |

## date format

format used for `start` and `end` parameters described above

dates can optionally include time (hour and minutes)

`Europe/Istanbul` time zone used

### date only

simply `YYYY-MM-DD`, zero padded

example: `2026-01-01`

### date and time

`YYYY-MM-DDTHH:mm`, so the same date format + a literal `T` to separate + the hour and minutes in 24-hour format

example: `2026-01-01T20:01`

## full example

```text
https://countdown.lara.lv/?start=2026-09-01T18:00&end=2026-09-02T18:00&lang=tr
```

counts down to september 2 2026 6pm, using september 1 2026 6pm as start date for progress so at september 2 2026 6am progress would be 50%. forces website to be turkish
