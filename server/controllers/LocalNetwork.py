from flask_restful import Resource, reqparse
from helpers.localNetworkHelper import LocalNetworkHelper

class LocalNetwork(Resource):
    def get(self):
        ipsLocalNetwork = LocalNetworkHelper.getDataFromLocalNetwork()
        
        return ipsLocalNetwork

    def getPorts(self):
        ipsPortsLocalNetwork = LocalNetworkHelper.getPortsOpen()
        
        return ipsPortsLocalNetwork


a= LocalNetwork().getPorts()
print(a)