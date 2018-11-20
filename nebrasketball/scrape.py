#!/usr/bin/python

import sys

from bs4 import BeautifulSoup
from selenium import webdriver

import json
import requests

from datetime import datetime, timedelta

options = webdriver.ChromeOptions()
options.add_argument('headless')



all_data = {}


#Kenpom
browser2 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
browser2.get("https://kenpom.com/")
kenpom_page = browser2.page_source
browser2.close()
print("Scraping Kenpom ...")

soup2 = BeautifulSoup(kenpom_page, "html.parser")

data = soup2.find("a", string="Nebraska")
row = data.find_parent("tr")
cells = row.find_all("td")

rating = cells[0].text.strip()
sos = cells[14].text.strip()
        
kenpom = { 'rating': rating, 'sos': sos }
        
print(kenpom)
        
all_data['kenpom'] = kenpom
        


#TeamRankings.com
browser4 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
browser4.get("https://www.teamrankings.com/ncaa-basketball/team/nebraska-cornhuskers/bracketology")

browser = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
browser.get("https://www.teamrankings.com/ncb/")

browser5 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
browser5.get("https://www.teamrankings.com/ncaa-basketball/team/nebraska-cornhuskers/rankings")

teamrankings_page = browser4.page_source
teamrankings_power = browser.page_source
teamrankings_sos = browser5.page_source

browser4.close()
browser.close()
browser5.close()

print("Scraping TeamRankings.com ...")

soup4 = BeautifulSoup(teamrankings_page, "html.parser")
soup = BeautifulSoup(teamrankings_power, "html.parser")
soup5 = BeautifulSoup(teamrankings_sos, "html.parser")

stats = soup4.select("table.team-blockup p")
make_tournament = stats[0].text.strip()
most_likely_seed = stats[3].text.strip()

nebraska = soup.find("a", string="Nebraska")
row = nebraska.find_parent("tr")
cells = row.find_all("td")
rank = cells[0].text.strip()
projected_wins = cells[3].text.strip()
projected_losses = cells[4].text.strip()

teamrankings = { 'make_tournament': make_tournament, 'most_likely_seed': most_likely_seed, 'rank': rank, 'projected_wins': projected_wins, 'projected_losses': projected_losses }
    
print(teamrankings)

all_data['teamrankings'] = teamrankings        
 
 
#ESPN BPI API 

feed = "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/bpi/season?lang=en&region=us&contentorigin=espn&sort=bpirank:asc,bpi:asc&limit=100&groups=50"

response = requests.get(feed)

data = json.loads(response.text)

print("Found the ESPN feed ...")

for team in data["statistics"]["teams"]:
    if team["team"]["id"] == "158":
        bpi = team["statistics"]["bpirank"]["displayValue"]
        seven_day_change = team["statistics"]["bpisevendaychangerank"]["displayValue"]
        proj_tourney_seed = team["statistics"]["projectedtournamentseed"]["displayValue"]
        proj_win_loss_overall = team["statistics"]['projovrwinpct']['displayValue']
        proj_win_loss_conf = team["statistics"]['projovrconfwinpct']['displayValue']
        sor = team["statistics"]['sorrank']['displayValue']
        sos = team["statistics"]['sospastrank']['displayValue']
        
        espnapi = { 'bpi': bpi, 'seven_day_change': seven_day_change, 'proj_tourney_seed': proj_tourney_seed, 'proj_win_loss_overall': proj_win_loss_overall, 'proj_win_loss_conf': proj_win_loss_conf, 'sor': sor, 'sos': sos }

        print(espnapi)
 
        all_data['espn'] = espnapi
 
 
#Warren Nolan
browser6 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
browser7 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)

browser6.get("http://warrennolan.com/basketball/2019/rpi-live")
browser7.get("http://warrennolan.com/basketball/2019/schedule/Nebraska")

warrennolan_page = browser6.page_source
warrennolan_forecast = browser7.page_source

print("Scraping Warren Nolan ...")

browser6.close()
browser7.close()

soup6 = BeautifulSoup(warrennolan_page, "html.parser")
soup7 = BeautifulSoup(warrennolan_forecast, "html.parser")

data = soup6.find("a", string="Nebraska")
row = data.find_parent("tr")
cells = row.find_all("td")

rpi = cells[0].text.strip()
sos = cells[5].text.strip()
group1 = cells[12].text.strip()
group2 = cells[13].text.strip()
group3 = cells[14].text.strip()
group4 = cells[15].text.strip()


data2 = soup7.find(id="page-menu-middle")
spans = data2.find_all("span")
wl = spans[1].text.strip()
wl = wl[wl.find("(")+1:wl.find(")")]
cwl = spans[3].text.strip()

warrennolan = { 'rpi': rpi, 'sos': sos, 'group1': group1, 'group2': group2, 'group3': group3, 'group4': group4, 'wl': wl, 'cwl': cwl }

print(warrennolan)

all_data['warrennolan'] = warrennolan


############### TRank ################

#browser8 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
#browser8.get("http://barttorvik.com/teamsheets.php?conlimit=B10&sort=9")
#trank = browser8.page_source
#print("Scraping T-Rank ...")
#browser8.close()
#
#soup8 = BeautifulSoup(trank, "html.parser")
#
#data = soup8.find("a", string="Nebraska")
#row = data.find_parent("tr")
#cells = row.find_all("td")
#
#trank = cells[0].text.strip()
#kpi = cells[3].text.strip()
#sagarin = cells[8].text.strip()
#
        
#browser9 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
#browser9.get("http://barttorvik.com/team.php?team=Nebraska") 
#trank_team = browser9.page_source
#browser9.close()
#
#soup9 = BeautifulSoup(trank_team, "html.parser")
#
#current_wl = soup9.h1.span.text.strip()
#current_wl = current_wl[current_wl.find("(")+1:current_wl.find(")")]
#current_cwl = soup9.h3.text.strip()
#current_cwl = current_cwl[current_cwl.find("(")+1:current_cwl.find(")")]
#
#cell = soup9.find(string="Projected Record: ")
#text = cell.text.strip()
#proj = text.replace("Projected Record: ", "")
#
#
#trank = { 'current_wl': current_wl, 'current_cwl': current_cwl, 'proj': proj }
#print(trank)
#
#all_data['trank'] = trank


####################### LRMC ####################
#
#browser10 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
#browser10.get("https://www2.isye.gatech.edu/~jsokol/lrmc/TEAMS/2018/Nebraska.lrmc.sort0.php") 
#lrmc = browser10.page_source
#print("Scraping LRMC ...")
#browser10.close()
#
#soup10 = BeautifulSoup(lrmc, "html.parser")
#
#data = soup10.find(id="columnPrimary")
#bs = data.find_all("b")
#rank = bs[1].text.strip()
#rank = rank.replace("Overall rank = ", "")
#
#lrmc = { 'rank': rank }
#
#all_data['lrmc'] = lrmc
#
#print(lrmc)


################ BRACKET PROJECT ####################

browser11 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
browser11.get("http://bracketmatrix.com/") 
bracket = browser11.page_source
print("Scraping Bracket Project ...")
browser11.close()

soup11 = BeautifulSoup(bracket, "html.parser")

data = soup11.find("td", string="Nebraska")

if data:
    row = data.find_parent("tr")
    cells = row.find_all("td")

    matrix_count = cells[4].text.strip()
else:
    matrix_count = 0

bracketproject = { 'matrix_count': matrix_count }
all_data['bracketproject'] = bracketproject
 
print(bracketproject)



###################### MASSEY RATINGS ################
#
#browser12 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
#browser12.get("https://www.masseyratings.com/cb/comp.htm")
#massey_data = browser12.page_source
#print("Scraping Massey Ratings ...")
#browser12.close()
#
#soup12 = BeautifulSoup(massey_data, "html.parser")
#
#table_data = soup12.find("a", string="Nebraska")
#row = table_data.find_parent("tr")
#cells = row.find_all("td")
#
#composite = cells[0].text.strip()
#
#massey = { 'composite': composite }
#all_data['massey'] = massey 
#
#print(massey)
 
 
 
 
##############  BUBBLE GAMES ###############

#browser13 = webdriver.Chrome(executable_path='/Users/Ben/Desktop/nebrasketball/nebrasketball/bin/chromedriver', chrome_options=options)
#browser13.get("https://www.cbssports.com/college-basketball/bracketology/")
#bubble_data = browser13.page_source
#print("Getting CBS bubble games ...")
#browser13.close()
#
#
#soup13 = BeautifulSoup(bubble_data, "html.parser")
#
#bubble_data = soup13.select("section.table-base-bubble table tbody tr")
#todays_games = []
#
#for row in bubble_data:
#    cells = row.select("td")
#    team = cells[1].a.text.strip()
#    rpi = cells[4].text.strip()
#    next_game = cells[11].text.strip().replace(" ET", " 2018")
#    if next_game != "No Games Scheduled":
#        next_game_object = datetime.strptime(next_game, '%b %d, %I:%M%p %Y') - timedelta(hours=1)
#    next_opponent = cells[12].text.strip().replace("\n\n\n    ", " ")
#    if next_game_object.date() == datetime.today().date():
#        time = next_game_object.strftime("%l:%M %p")
#        game = { 'team': team, 'rpi': rpi, 'next_opponent': next_opponent, 'time': time }    
#        todays_games.append(game)
#        print(team + " (" + rpi + ") " + next_opponent + ", " + time)
#        
#all_data['todays_games'] = todays_games

 
##################### update time ###################
 
update_time = datetime.now()
time = update_time.strftime("%b %d, %l:%M %p")
print("Updated: " + time)
updated = { 'time': time, }

all_data['time'] = updated
 
        
with open('../data.js', 'w') as outfile:
    json.dump(all_data, outfile, sort_keys=True, indent=4, separators=(',', ': '))