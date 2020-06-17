import os
import configparser

class ConfigHelper:
    @staticmethod
    def getDataFromConfigFile():
        full_path = os.path.dirname(os.path.abspath(__file__))
        deep_exploit_path = os.path.join(full_path,'../','../','DeepExploit')
        config = configparser.ConfigParser()
        try:
            config.read(os.path.join(deep_exploit_path, 'config.ini'))
            return config
        except FileExistsError as error:
            return error
    @staticmethod
    def putDataToConfigFile(data):
        full_path = os.path.dirname(os.path.abspath(__file__))
        deep_exploit_path = os.path.join(full_path,'../','../','DeepExploit')
        config = configparser.ConfigParser()

        for field in data.keys():
            config.add_section(field)
            for subfield in data[field].keys():
                config.set(field,subfield,data[field][subfield])

        try:
            with open(deep_exploit_path, 'w') as file:
                config.write(file)
            return 'File updated successfully'
        except FileExistsError as error:
            return error
