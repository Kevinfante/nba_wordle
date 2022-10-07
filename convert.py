import json
import csv

with open("nbaData.csv", "r") as f:
  reader = csv.reader(f)
  next(reader)
  data = {"names": []}
  for row in reader:
    currName = row[1]
    data["names"].append(currName)
    currObj = {
      "Team" : row[0],
      "Pos": row[2],
      "Ht": row[3],
      "Wt": row[4],
      "Bday": row[5],
      "Nat": row[6],
      "Exp": row[7],
      "Pic": row[9]}
    data[currName] = currObj

with open ("data.json", "w") as f:
  json.dump(data,f,indent = 4)