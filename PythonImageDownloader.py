from google_images_download import google_images_download
import json
import csv

response = google_images_download.googleimagesdownload()
totalImages = 0
totalPercent = 0

with open('config.json') as json_data:
    data = json.load(json_data)

for currentLimit in data['Records']:
    totalImages = totalImages + currentLimit['limit']

percentincrement = float(1)/totalImages

print 'Total images: ' + str(totalImages)

with open('imageIndex.csv', mode = 'w') as imageIndexFile:
    imageIndexFile = csv.writer(imageIndexFile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for playerImageQuery in data['Records']:
        imageIndexFile.writerow([playerImageQuery['keywords']])
        print 'Percent done: ' + str(totalPercent*100)

        images = response.download(playerImageQuery)
        length = len(images[playerImageQuery['keywords']])

        for i in range(length):
            imageIndexFile.writerow([i, images[playerImageQuery['keywords']][i]])
            totalPercent = totalPercent + percentincrement

print 'Percent done: ' + str(totalPercent*100)
