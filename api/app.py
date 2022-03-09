from distutils.log import debug
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return {"msg": "test"}

#TODO o co chodzi z tym ifem czy działa bez niego
#TODO lista endpointów
# 1. /images - daje wszystkie zdjęcie - To będzie potrzebne do wyboru zdjęć mikroskopu jakie jest dostępne
# 2. /images:id - zwraca konkretne zdjęcie - które już zwróci konkretne dane do wyświetlenia 3D
# 3. /upload - do wrzucania zdjęć oczywiście będzie walidacja, może jednak dodam typescript ale to na końcu już.
if __name__ == "__main__":
    app.run(debug=True)