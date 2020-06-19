from flask import Flask, render_template
from flask_restful import Resource,Api
from flask_cors import CORS

from controllers.LocalNetwork import LocalNetwork
from controllers.ConfigFile import ConfigFile

app = Flask(__name__)
api = Api(app)

api.add_resource(LocalNetwork,'/death-piece/local-network')
api.add_resource(ConfigFile,'/death-piece/config-file')
CORS(app)

if __name__ == "__main__":
    app.run(debug=True)