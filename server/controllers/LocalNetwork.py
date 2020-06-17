from flask_restful import Resource, reqparse

from server.helpers.localNetworkHelper import LocalNetworkHelper

class LocalNetwork(Resource):
    def get(self):
        ipsLocalNetwork = LocalNetworkHelper.getIpsFromLocalNetwork()
        return {"ips": ipsLocalNetwork}