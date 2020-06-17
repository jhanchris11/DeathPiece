from flask import Flask, render_template
from subprocess import Popen
from subprocess import PIPE
import sys

app = Flask(__name__)

@app.route("/")
def home():
	proc=Popen('sudo arp-scan --interface=eth0 --localnet', shell=True, stdout=PIPE, )
	output=proc.communicate()[0]
	output = str(output)
	output = output.replace("\\t","\t")
	output = output.replace("\\n", "\n")

	list_output = output.split('\n')

	ips= []

	for ip in list_output:

		ips.append(ip)

	del ips[0:2]
	print(ips)
	
	


	return render_template("home.html", ip1=ips[0], ip2=ips[1])


#ips red 
proc=Popen('sudo arp-scan --interface=eth0 --localnet', shell=True, stdout=PIPE, )
output=proc.communicate()[0]
output = str(output)
output = output.replace("\\t","\t")
output = output.replace("\\n", "\n")

list_output = output.split('\n')

ips= []

for ip in list_output:
	ips.append(ip)
del ips[0:2]
print(ips)




if __name__ == "__main__":
    app.run(debug=True)