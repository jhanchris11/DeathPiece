from subprocess import Popen
from subprocess import PIPE


class LocalNetworkHelper:
    @staticmethod
    def getIpsFromLocalNetwork():
        proc = Popen('sudo arp-scan --interface=eth0 --localnet', shell=True, stdout=PIPE, )
        scan_str = str(proc.communicate()[0])
        scan_str = scan_str.replace("\\t", "\t").replace("\\n", "\n")
        list_scan = scan_str.split('\n')

        ips = []
        for ip in list_scan:
            ips.append(ip)
        
        del ips[0:2]
        del ips[-4:]

        i=0        
        for element in ips:
            ips[i] = element.split('\t')
            i=i+1
        
        key_list = []
        for i in range(len(ips)):
            
            key_list.append(i)
         
        ip_dict = {}
        
        for key in key_list:
            for ip_elements in ips:
                ip_dict[key] = ip_elements

        
        return ip_dict

    
    def getPortsOpen():

        ips = LocalNetworkHelper().getIpsFromLocalNetwork()
        ports = []
        for i in range(len(ips)):
            ip = ips[i][0]
            proc = Popen('sudo nmap -O '+ip, shell=True, stdout=PIPE, )
            scan_ports = str(proc.communicate()[0])
            #scan_ports = scan_ports.replace("\\n", "\n")
            list_scan = scan_ports.split('\\n')
            ports.append(list_scan)

        return ports
