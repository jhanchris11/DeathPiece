from flask_restful import Resource, reqparse
from helpers.configHelper import ConfigHelper

from webargs.flaskparser import use_args
from webargs import fields

class ConfigFile(Resource):
    configRequest = {
        'config': fields.Dict(required=True)
    }

    def get(self):
        dataConfigFile = ConfigHelper.getDataFromConfigFile()
        return {"config": dataConfigFile }

    @use_args(configRequest)
    def put(self,request):
        messageResult = ConfigHelper.putDataToConfigFile(request['config'])
        return { "message": messageResult }