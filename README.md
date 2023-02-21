# Nebrasketball NCAA Tournament odds machine
*Tracking tournament odds for the Nebraska men's basketball team*

## Process
1. Scrapes data sources for rankings and record projections. (Done offline in Python with Requests, Selenium, BeautifulSoup)
2. Loads data from uploaded JSON file
    const response = await fetch('/data/data.js');
3. Calculates chance of making the tournament, assigns score based on each rating. (Educated guesswork, see below)
4. Assigns weighted average to scores. (Math)
    function FindScore(data) {}
5. Powers a needle gauge, a la #nytneedle from Election Night 2016. (Google Charts)

## Calculations

[Here's a collection](bracket-notes.md) of notes and links related to the selection committee's process and trends. These ideas are the basis for the odds machine's algorithm.
