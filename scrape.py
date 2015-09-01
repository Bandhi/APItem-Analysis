from __future__ import division
import json
import urllib
import time
import random

patch = "5.14"
game = "NORMAL_5X5"
region = "TR"

f = open('items.txt','w')

with open(patch + '/' + game + '/' + region + '.json') as data_file:    
    data = json.load(data_file)
    
APitems = #the file is stored at APitem.json
itemSet = set(["3001","3113","1052","3003","3504","3174","3060",
         "1026","1056","3708","3716","3720","3724","3108",
         "3092","3098","3124","3136","3146","3145","3025",
         "3151","3100","3285","3041","3165","3115","1058",
         "3198","3089","3027","3116","3191","3040","3057",
         "3303","3196","3197","3078","3023","3135","3152",
         "3050","3157","3200"])

api = 'apikey';
res = []
stream = []
k = 1000

for i in range(0,10000):
    stream.append(i)

for i in range(0,k):
    res.append(i)

for i in range(0,10000):
    j = random.randint(0,i)
    if j < k:
        res[j] = stream[i]

tmp = ""
for i in range(0,k):
    url = 'https://' + region.lower() + '.api.pvp.net/api/lol/' + region.lower() + '/v2.2/match/' + str(data[res[i]]) + '?api_key=' + api
    
    if i % 100 == 0:
        print i
    html = urllib.urlopen(url)
    while html.getcode() == 429:
        time.sleep(5)
        url = 'https://' + region.lower() + '.api.pvp.net/api/lol/' + region.lower() + '/v2.2/match/' + str(data[res[i]]) + '?api_key=' + api[cycle % len(api)]
        html = urllib.urlopen(url)
    match = json.load(html)
    
    for j in range(0,9):
        for k in range(0,6):
            tmp = str(match['participants'][j]['stats']['item' + str(k)])
            if tmp in itemSet:
                APitems[tmp][patch][game]['goldSpent'].append(match['participants'][j]['stats']['goldSpent'])
                APitems[tmp][patch][game]['magicDamageDealt'].append(match['participants'][j]['stats']['magicDamageDealt'])
                if match['participants'][j]['stats']['deaths'] == 0:
                    APitems[tmp][patch][game]['kd'].append(match['participants'][j]['stats']['kills'])
                else:
                    APitems[tmp][patch][game]['kd'].append(match['participants'][j]['stats']['kills']/match['participants'][j]['stats']['deaths'])
f.write(str(APitems) + "\n")
f.close()
