# Nebrasketball NCAA Tournament odds machine
*Tracking tournament odds for the Nebraska men's basketball team*

## Process
1. Scrapes data sources for rankings and record projections. (Done offline in Python with Requests, Selenium, BeautifulSoup, Undetected Chromedriver)
2. Loads data from uploaded JSON file 
	- `const response = await fetch('/data/data.js');`
3. Calculates chance of making the tournament, assigns score based on each rating.
	- `function FindScore(data) {}`
4. Assigns weighted average to scores.
    - Resume metrics worth slightly more than predictive ones
5. Powers a needle gauge, a la #nytneedle from Election Night 2016. (Google Charts)
6. D3 dot plot to show the range of rankings. (Shout out to ChatGPT for the code cleanup.)
7. Captures gauge screenshots with Selenium, resizes them, uploads to /icons
	- `element = browser.find_element('id', 'chart_div')`
	- `element.screenshot('app-icon.png')`

## Calculations

The odds machine calculates the *current* odds of getting an at-large selection. `Is this team likely to get a bid right now?` 

*We're* not doing extensive simulation to predict the season's remaining games, but there's plenty of that built into the existing metrics.

[Here's a collection](bracket-notes.md) of notes and links related to the selection committee's process and trends. These ideas are the basis for the odds machine's algorithm. 

That list is also probably the best roundup of the analysis on how the NCAA selection committee has made decisions in recent years. The internet has plenty of "Which bracketologist got more picks correct?" recaps, but not much for grading whether the "bubble teams" actually got picked.