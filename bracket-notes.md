# Bracketology calculations, reminders and helpers

A collection of links and notes to demystify the NCAA basketball tournament selection committee decisions for at-large teams. These ideas help form the algorithm for the [Nebrasketball NCAA Tournament Odds Machine](https://nebrasketball.info). Email bvankat [ at ] gmail with additions, corrections and feedback.

## Calculations Notes

*If you're Team A with metrics X, Y, Z — Will you get an at-large bid?*

- Question: "Who should get a bid?" Answer: Use *results-based* metrics - KPI and SOR. 
- Question: "What seed will they get? Who wins head-to-head?" Answer: Use *predictive* metrics.
- Approx. 500 at-large bids from 2008-2022. Only five at-large teams with NET over 70: All 10 or 11 seeds. 20 at large bids with NET/RPI above 60 
- NET rank in the 60s/70s = Not good enough. Only two at large bids above 60 in 2021 or 2022. MSU had NET 70 in 2021. Miami was a 10-seed in 2022, NET 62. ([#](https://twitter.com/JohnGasaway/status/1620824438974418952))
- Highest NET ranking to get bid: 77 in 2022, Highest RPI: 74 in 1999
- 2022: Last 4 In: Wyoming (NET 50), Rutgers (77), Indiana (38), Notre Dame (53)
- 2022: First 4 Out: Dayton (NET 58), SMU (NET 45), Texas A&M (NET 43) 
- 2019: Lowest ranked at-large team in each metric: NET: 73, SOR: 55, KPI: 62, BPI: 72, KenPom: 78, Sagarin: 68 ([#](https://twitter.com/KevinPauga/status/1364564183853973506?s=20))
- "The committee’s approach can be assessed — at least to some extent — using a model that projects NCAA Tournament seeds by averaging each team’s resume and quality metrics and weighting them evenly." ([#](https://heatcheckcbb.com/bracketology-analyzing-impact-of-metrics-in-ncaa-tournament-selection-seeding/))


## Team Sheet basics

*NCAA Selection committee has six metrics on the team sheets used to compare teams in the runup to Selection Sunday*

#### NET
- NCAA's proprietary combination of metrics. Seems to lean predictive rather than resume-based.
- Started in 2018, replacing the RPI. Rankings (but not precise formula) made public in 2021. ([#](https://www.ncaa.com/news/basketball-men/article/2022-12-05/college-basketballs-net-rankings-explained))
- Release date: Late November or early December (12/5/22), but recreated and available early on other sites
- [LINK](https://www.ncaa.com/rankings/basketball-men/d1/ncaa-mens-basketball-net-rankings)

#### ESPN's BPI
- Predictive
- Release date: Early November, a couple days before season's first games
- [LINK](https://www.espn.com/mens-college-basketball/bpi)

#### ESPN's SOR
- Resume
- Release date: *same as BPI above*
- [LINK](https://www.espn.com/mens-college-basketball/bpi)

#### KPI
- Resume
- Release date: Early December (12/5/22)
- [LINK](https://faktorsports.com/)

#### Kenpom
- Predictive
- Doesn't measure accomplishment. Aims to predict results going forward. ([#](https://twitter.com/kenpomeroy/status/1229504597716160512))
- Records back to 2002
- [LINK](https://kenpom.com/)

#### Sagarin
- Predictive
- Release date: First week of November
- [LINK](http://sagarin.com/sports/cbsend.htm)


## Quadrants

> Using the quadrant system the quality of wins and losses will be organized based on game location and the opponent's NET ranking. The number of Quadrant 1 wins and Quadrant 3/4 losses will be incredibly important when it comes time for NCAA tournament selection and seeding." ([#](https://www.ncaa.com/news/basketball-men/article/2022-12-05/college-basketballs-net-rankings-explained))

- Quadrant 1: Home 1-30, Neutral 1-50, Away 1-75
- Quadrant 2: Home 31-75, Neutral 51-100, Away 76-135
- Quadrant 3: Home 76-160, Neutral 101-200, Away 135-240
- Quadrant 4: Home 161-353, Neutral 201-353, Away 241-353

> "The NET is designed to define the quadrants, not to choose or seed teams. It's not a tiebreaker or anything like that. Teams are not compared by NET or other computer rankings." ([#](https://www.cbssports.com/college-basketball/news/bracketology-explaining-the-team-sheets-the-selection-committee-uses-to-compare-ncaa-tournament-resumes/))



## Sources

- https://fivethirtyeight.com/features/on-the-ncaa-bubble-heres-the-number-to-watch/
- http://thesportsdaily.com/ncaa/analyzing-the-rpi-for-at-large-teams-2/
- http://www.kpisports.net/2017/03/14/comparing-advanced-metrics-to-ncaa-1-68-seed-list-2017-edition/
- https://www.cbssports.com/college-basketball/news/bracketolgy-ncaa-tournament-rpi-numbers-to-know-through-the-years/
- https://www.sbnation.com/college-basketball/2019/3/18/18270907/ncaa-tournament-2019-bracket-march-madness-selection-net-rpi-analytics-kenpom
- [538 Touranment Predictions model](https://fivethirtyeight.com/methodology/how-our-march-madness-predictions-work-2)
- https://twitter.com/KevinPauga/status/1207300776781066240
- https://twitter.com/KevinPauga/status/1364564183853973506?s=20
- https://twitter.com/KevinPauga/status/1234524830063448064?s=20
- https://barttorvik.com/resume-compare-all.php
- https://heatcheckcbb.com/bracketology-analyzing-impact-of-metrics-in-ncaa-tournament-selection-seeding

