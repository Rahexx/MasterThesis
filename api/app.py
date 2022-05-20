import os
import csv
import random
import json
from distutils.log import debug
from flask import Flask, request, url_for
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './static/upload'
ABSOLUTE_PATH_UPLOAD_FOLDER = os.getcwd() + '/upload'
ALLOWED_EXTENSIONS = {'json', 'csv'}
app = Flask(__name__)

# config
app.config.update(
    TESTING=True,
    SECRET_KEY='=^o\xe0}\xe3o\x7f\xd2\xe2\x10]\xdf\xc5\xc9(\xfb\x1d\xc0\x82w\x8e\x9e\x9a',
    UPLOAD_FOLDER =  UPLOAD_FOLDER,
    CLIENT_UPLOAD_FOLDER = ABSOLUTE_PATH_UPLOAD_FOLDER,
)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    msg = ""
    if request.method == 'POST':
        print('Request', request.files)
        if 'file' not in request.files:
            msg = "No file part"
            return {"msg": msg}
        file = request.files['file']
        if file.filename == '':
            msg = "No selected file"
            return {"msg": msg}
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            msg = "File was saved " + filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return  {"msg": msg}
    return {"msg": msg}

@app.route('/fetchImages', methods=['GET'])
def download_file():
    files = os.listdir('./static/upload')
    filesPathList = []
    for file in files:
        fullPath = "static/upload/" + file
        filesPathList.append({'filename': file, 'path': fullPath})
    return {"filesList": filesPathList}

@app.route('/deleteImage/<filename>')
def delete_image(filename):
    files = os.listdir('./static/upload')
    if filename not in files:
        return {'msg': 'File not found'}
    os.remove(os.path.join('./static/upload/', filename))
    return {'msg': 'File removed'}

class Trace:
    xPosition = []
    yPosition = []
    zPosition = []
    def __init__(self, color):
        self.color = color

def getRandomColor():
    rColor = str(random.randint(0, 255))
    gColor = str(random.randint(0, 255))
    bColor = str(random.randint(0, 255))
    separator = ','
    joinColor = separator.join([rColor, gColor, bColor])
    return 'rgba(' + joinColor + ')'

def getDataFromJson(children):
    data = []
    groupCount = 0

    for i in children:
        if len(i["children"]) != 1 :
            for child in i["children"]:
                if len(data) > 0:
                    groupCount += 1
                color = getRandomColor()
                newTrace = {
                    'xPosition': [],
                    'yPosition': [],
                    'zPosition': [],
                    'color': color
                }
                data.append(newTrace)

                for childrenData in child["children"]:
                    data[groupCount]['xPosition'].append(childrenData[0])
                    data[groupCount]['yPosition'].append(childrenData[1])
                    data[groupCount]['zPosition'].append(childrenData[2])
    return data

@app.route('/fetchData/<filename>')
def fetchh_data(filename):
    files = os.listdir('./static/upload')

    if filename not in files:
        return {'msg': 'File not found'}
    pathToFail = os.path.join('./static/upload/', filename)

    if filename.endswith('.csv'):
        with open(pathToFail, newline='') as csvfile:
            csvReader = csv.reader(csvfile, delimiter=',')
            lineCount = 0
            groupCount = 0
            data = []
            for row in csvReader:
                if row[0] == 'group' or lineCount == 0:
                    if len(data) > 0:
                        groupCount += 1

                    color = getRandomColor()
                    newTrace = {
                        'xPosition': [],
                        'yPosition': [],
                        'zPosition': [],
                        'color': color
                    }
                    data.append(newTrace)
                elif lineCount > 0:
                    data[groupCount]['xPosition'].append(float(row[0]))
                    data[groupCount]['yPosition'].append(float(row[1]))
                    data[groupCount]['zPosition'].append(float(row[2]))
                lineCount += 1
    elif filename.endswith('.json'):
        f = open(pathToFail)
        file = json.load(f)
        for i in file:
            data = getDataFromJson(i["children"])

    print(len(data))
    return {'listOfTraces': data}

@app.route("/")
def hello_world():
    return {"msg": "daj obrazek"}


if __name__ == "__main__":
    app.run(debug=True)