# Nebrasketball NCAA Tournament odds machine
Tracking tournament odds for the Nebraska basketball team

## Process
- Scrapes a few data sources for rankings and record projections. (Requests, Selenium, BeautifulSoup)
- Pulls them into an HTML table. (.getJSON())
- Calculates chance of making the tournament, assigns score based on each rating. (Educated guesswork, see below)
- Assigns weighted average to scores. (Math)
- Powers a needle gauge, a la #nytneedle from Election Night 2016. (Google Charts)
- Updates self automatically every couple hours. (cron)

## Calculations

[Here's a collection](bracket-notes.md) of notes and links related to the selection committee's process and trends. These ideas are the basis for the odds machine's algorithm.
