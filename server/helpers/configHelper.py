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
            return config._sections
        except FileExistsError as error:
            return error
    @staticmethod
    def putDataToConfigFile(data):
        full_path = os.path.dirname(os.path.abspath(__file__))
        deep_exploit_path = os.path.join(full_path,'../','../','DeepExploit')
        new_path = os.path.join(deep_exploit_path, 'config.ini')
        config = configparser.ConfigParser()

        for field in data.keys():
            config.add_section(field)
            for subfield in data[field].keys():
                config.set(field,subfield,data[field][subfield])
        print(config._sections)
        try:
            with open( new_path , 'w') as file:
                config.write(file)
            return 'File updated successfully'
        except FileExistsError as error:
            return error
