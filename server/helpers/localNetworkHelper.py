from subprocess import Popen
from subprocess import PIPE
import nmap
import pandas as pd

class LocalNetworkHelper:
    @staticmethod
    def getDataFromLocalNetwork():
        proc = Popen('sudo arp-scan --interface=eth0 --localnet', shell=True, stdout=PIPE, )
        scan_str = str(proc.communicate()[0])
        list_scan = scan_str.replace("\\t", "\t").replace("\\n", "\n").split('\n')

        ips = []
        for ip in list_scan:
            ips.append(ip)
        
        del ips[0:2]
        del ips[-4:]

        i=0        
        for element in ips:
            ips[i] = element.split('\t')
            i=i+1

        ip_dict = []
        keys = ['IP', 'MAC', 'NAME']

        for i in range(len(ips)):
            for value in ips[i]:
                res = dict(zip(keys, ips[i]))
            ip_dict.append(res)

        return ip_dict

    @staticmethod
    def getPortsOpen():
        data_ip = LocalNetworkHelper().getDataFromLocalNetwork()
        ipList = []
        for d in data_ip:
            ipList.append((d['IP']))

        ip_ports = []
        nm = nmap.PortScanner()
        for ip in ipList:
            ip_ports.append(nm.scan(ip, '22-443'))
        
        df_ip = pd.DataFrame(ip_ports)
        return df_ip