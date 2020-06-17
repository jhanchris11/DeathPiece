from subprocess import Popen
from subprocess import PIPE

class LocalNetworkHelper:
    @staticmethod
    def getIpsFromLocalNetwork():
        proc = Popen('sudo arp-scan --interface=eth0 --localnet', shell=True, stdout=PIPE, )
        output = str(proc.communicate()[0])
        output = output.replace("\\t", "\t").replace("\\n", "\n")
        list_output = output.split('\n')

        ips = []
        for ip in list_output:
            ips.append(ip)

        del ips[0:2]
        return ips

