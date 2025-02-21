# Bracketology calculations, reminders and helpers

A collection of links and notes to demystify the NCAA basketball tournament selection committee decisions for at-large teams. These ideas help inform the algorithm for the [Nebrasketball NCAA Tournament Odds Machine](https://nebrasketball.info). Email bvankat [ at ] gmail with additions, corrections and feedback.

## Calculations Notes

*If you're Team A with metrics X, Y, Z — Will you get an at-large bid?*

- Question: "Who should get a bid?" Answer: Use *results-based* metrics - KPI and SOR. 
- Question: "What seed will they get? Who wins head-to-head?" Answer: Use *predictive* metrics.
- Approx. 500 at-large bids from 2008-2022. Only five at-large teams with NET over 70: All 10 or 11 seeds. 20 at large bids with NET/RPI above 60 
- NET rank in the 60s/70s = Not good enough. Only two at large bids above 60 in 2021 or 2022. MSU had NET 70 in 2021. Miami was a 10-seed in 2022, NET 62. ([#](https://twitter.com/JohnGasaway/status/1620824438974418952))
- "The committee’s approach can be assessed — at least to some extent — using a model that projects NCAA Tournament seeds by averaging each team’s resume and quality metrics and weighting them evenly." ([#](https://heatcheckcbb.com/bracketology-analyzing-impact-of-metrics-in-ncaa-tournament-selection-seeding/))
- No Power Six conference 24-win team has missed tournament. Only three 23-win teams have missed out: Florida (2009), Mississippi State, Virginia Tech (2010), Arizona (2012)
- Gotta have two Quad 1 wins - Only four teams have gotten at-large bids with 1 Q1 victory ([#](https://twitter.com/madeformarch/status/1761845837355688317?s=51))
- A bunch of NET bests/worsts that haven't been analyzed [here](https://x.com/JBRBracketology/status/1765459221171056988?s=20)



### Worst teams to get in

- Lowest-ranked at-large team in each metric 
    - __2019__ — NET: 73, SOR: 55, KPI: 62, BPI: 72, KenPom: 78, Sagarin: 68 ([#](https://twitter.com/KevinPauga/status/1364564183853973506?s=20))
    - __2020__ — No tournament
    - __2021__ — NET: 72, SOR: 66, KPI: 64, BPI: 97, KenPom: 74, Sagarin: 70 ([#](https://barttorvik.com/teamsheets.php?year=2021))
    - __2022__ — NET: 77, SOR: 52, KPI: 64, BPI: 74, KenPom: 74, Sagarin: 64 ([#](https://barttorvik.com/teamsheets.php?year=2022))
    - __2023__ — NET: 67, SOR: 54, KPI: 66, BPI: 72, KenPom: 77, Sagarin: 84 ([#](https://barttorvik.com/teamsheets.php?year=2023))
    - __2024__ — NET: 54, SOR: 61, KPI: 59, BPI: 71, KenPom: 54 ([#](https://barttorvik.com/teamsheets.php?year=2024))
- Since 2018 when NET started: Worst SOR/KPI average to get at-large bid was 57.5 (2022 Rutgers)
- Lowest NET ranking to get bid: 77 in 2022 (Rutgers), Lowest RPI: 74 in 1999
- 2022: Last 4 In: Wyoming (NET 50), Rutgers (77), Indiana (38), Notre Dame (53)
- Worst SOR to get in was 66 (2021 Utah State)
- Losing conference records (incomplete): 
    - __2024__ - Mississippi State (8-10)
    - __2023__ - Arkansas, Mississippi State, West Virginia (7-11) had 6 Quad 1 wins, #24 NET.
    - __2022__ - Iowa State (7-11) had 9 Quad 1 wins, #49 NET. Indiana (9-11)
    - __2021__ - Georgetown (7-9). Maryland and Michigan State (9-11)
    - __2019__ - Ohio State (8-12) had 4 Quad 1 wins and #55 NET; Oklahoma (7-11), St. Johns (8-10). 
    - __2018__ - Oklahoma (7-11), Alabama (8-10)

### Best Teams Left Out

*Compiling some data on teams that didn't make the tournament*

- Only 1 team with 6+ Q1 wins and < 15 losses has been left out — 2024 Providence. ([#](https://barttorvik.com/team.php?team=Providence&year=2024))([#](https://x.com/kerrancejames/status/1765372030629622000?s=20))

#### By Year
- __2021__ — Kenpom: Highest-ranked teams left out: 33 Duke, 35 Penn State, 38 Memphis, 43 Arizona, 46 Indiana ([#](https://twitter.com/TomFornelli/status/1371231719278456838))
- __2022__ — First Four Out, according to NCAA: Dayton (NET 58), Oklahoma (NET 40), SMU (NET 44 or 45?), Texas A&M (NET 43)
- __2023__ — First Four Out, according to NCAA: Oklahoma State, Rutgers, North Carolina Clemson

#### By Metric
- __RPI__ — 49 - Missouri (2014) highest in 68-team tournament era ([#](https://www.cbssports.com/college-basketball/news/bracketolgy-ncaa-tournament-rpi-numbers-to-know-through-the-years/))

## Team Sheet basics

*NCAA Selection committee has six metrics on the team sheets used to compare teams in the runup to Selection Sunday*

#### NET
- NCAA's proprietary combination of metrics. Seems to lean predictive rather than resume-based.
- Started in 2018, replacing the RPI. Rankings (but not precise formula) made public in 2021. ([#](https://www.ncaa.com/news/basketball-men/article/2022-12-05/college-basketballs-net-rankings-explained))
- Release date: Late November or early December (12/5/22 and 12/4/23), but recreated and available early on other sites
- [LINK](https://www.ncaa.com/rankings/basketball-men/d1/ncaa-mens-basketball-net-rankings)

#### ESPN's BPI
- Predictive
- Release date: Early November, a couple days before season's first games
- [LINK](https://www.espn.com/mens-college-basketball/bpi)

#### ESPN's SOR
- Results-based, resume metric
- Release date: *same as BPI above*
- Preaseason SOR for team is 1. So this metric takes a couple weeks to develop some reliability.
- [LINK](https://www.espn.com/mens-college-basketball/bpi)

#### KPI
- Results-based, resume metric
- Release date: Early December (12/5/22)
- [LINK](https://faktorsports.com/)

#### Kenpom
- Predictive
- Doesn't measure accomplishment. Aims to predict results going forward. ([#](https://twitter.com/kenpomeroy/status/1229504597716160512))
- Records back to 2002
- [LINK](https://kenpom.com/)

#### Bart Torvik
- Predictive
- How's it different from Kenpom? T-Rank has a wider spread between the top and bottom teams, partly because Kenpom caps margin of victory. T-Rank excludes garbage time by no longer adjusting the game efficiency scores when the outcome is assured. T-Rank has a slight recency bias and slightly discounts blowouts in extreme mismatches. ([Explainer](https://adamcwisports.blogspot.com/p/every-possession-counts.html))
- Added to team sheets for 2024-25 season to replace Sagarin ratings. (Sagarin retired after 2023 season)
- [LINK](https://barttorvik.com/)

#### Wins Above Bubble
- Results-based, resume metric
- "How much better is this team than an average bubble team?"
- Example: Team A wins a game at the best team in the country. The expected wins (i.e., win probability) in that matchup for an average bubble team on the road might be 20%. So take that actual 1.0 wins, subtract 0.20 expected wins, and get +0.80 Wins Above Bubble. Add up the number for all games to calculate WAB.
- Added to team sheets for 2024-25 season
- [LINK](https://barttorvik.com/)


## Quadrants

> "Using the quadrant system, the quality of wins and losses will be organized based on game location and the opponent's NET ranking. The number of Quadrant 1 wins and Quadrant 3/4 losses will be incredibly important when it comes time for NCAA tournament selection and seeding." ([#](https://www.ncaa.com/news/basketball-men/article/2022-12-05/college-basketballs-net-rankings-explained))

- Quadrant 1: Home 1-30, Neutral 1-50, Away 1-75
- Quadrant 2: Home 31-75, Neutral 51-100, Away 76-135
- Quadrant 3: Home 76-160, Neutral 101-200, Away 135-240
- Quadrant 4: Home 161-353, Neutral 201-353, Away 241-353

> "The NET is designed to define the quadrants, not to choose or seed teams. It's not a tiebreaker or anything like that. Teams are not compared by NET or other computer rankings." ([#](https://www.cbssports.com/college-basketball/news/bracketology-explaining-the-team-sheets-the-selection-committee-uses-to-compare-ncaa-tournament-resumes/))

> "Generally speaking, if that team went 2-1 (in Quad 1 games) compared to a team that went 5-10, that’s going to be looked at more favorably by the committee than just looking at the total number of Quad 1 wins." ([#](https://theathletic.com/5096436/2023/12/01/net-ncaa-basketball-tournament-rankings-selection/))



## Sources

- [538 SOR explainer](https://fivethirtyeight.com/features/on-the-ncaa-bubble-heres-the-number-to-watch/)
- http://thesportsdaily.com/ncaa/analyzing-the-rpi-for-at-large-teams-2/
- [KPI - Comparing metrics to seed list 2017](http://www.kpisports.net/2017/03/14/comparing-advanced-metrics-to-ncaa-1-68-seed-list-2017-edition/)
- [Jerry Palm - RPI numbers through the years](https://www.cbssports.com/college-basketball/news/bracketolgy-ncaa-tournament-rpi-numbers-to-know-through-the-years/)
- https://www.sbnation.com/college-basketball/2019/3/18/18270907/ncaa-tournament-2019-bracket-march-madness-selection-net-rpi-analytics-kenpom
- [538 Touranment Predictions model](https://fivethirtyeight.com/methodology/how-our-march-madness-predictions-work-2)
- https://twitter.com/KevinPauga/status/1207300776781066240
- https://twitter.com/KevinPauga/status/1364564183853973506?s=20
- https://twitter.com/KevinPauga/status/1234524830063448064?s=20
- [Bark Torvik Resume Comparison Tool](https://barttorvik.com/resume-compare-all.php)
- https://heatcheckcbb.com/bracketology-analyzing-impact-of-metrics-in-ncaa-tournament-selection-seeding

