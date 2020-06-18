from flask_restful import Resource, reqparse
from helpers.localNetworkHelper import LocalNetworkHelper

class LocalNetwork(Resource):
    def get(self):
        ipsLocalNetwork = LocalNetworkHelper.getIpsFromLocalNetwork()
        
        return ipsLocalNetwork

    def getPorts(self):
        ipsPortsLocalNetwork = LocalNetworkHelper.getPortsOpen()
        
        return ipsPortsLocalNetwork


data = LocalNetwork()
print(data.get())