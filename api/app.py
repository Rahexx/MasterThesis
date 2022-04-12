import os
from distutils.log import debug
from flask import Flask, request, send_from_directory
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'upload'
ABSOLUTE_PATH_UPLOAD_FOLDER = os.getcwd() + '/upload'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
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
        # check if the post request has the file part
        if 'file' not in request.files:
            msg = "No file part"
            return {"msg": msg}
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
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
    files = os.listdir('./upload')
    filesPathList = []
    for file in files:
        fullPath = app.config["CLIENT_UPLOAD_FOLDER"] + "/" + file
        filesPathList.append(fullPath)
    return {"filesList": filesPathList}

@app.route("/")
def hello_world():
    return {"msg": "daj obrazek"}


if __name__ == "__main__":
    app.run(debug=True)