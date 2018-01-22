# Nebrasketball
Tracking tournament odds for the Nebraska basketball team

- Scrapes a few data sources for RPI and record projections. (Requests, Selenium, BeautifulSoup)
- Pulls them into an HTML table. (.getJSON())
- Calculates percentage change of making the tournament based on each ranking. (Guesswork)
- Averages the rankings. (Math)
- Powers a needle gauge, a la #nytneedle from Election Night 2016. (Google Charts)
- Updates self automatically. (crontab)
