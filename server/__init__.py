from flask import Flask, render_template
from flask_restful import Resource,Api
from flask_cors import CORS

from server.controllers.LocalNetwork import LocalNetwork
from server.controllers.ConfigFile import ConfigFile

app = Flask(__name__)
api = Api(app)

api.add_resource(LocalNetwork,'/local-network')
api.add_resource(ConfigFile,'/config-file')
CORS(app)

if __name__ == "__main__":
    app.run(debug=True)