import os
import subprocess
from shlex import quote

def send(message):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    relative_path = 'osascript/send_message.js'
    path = f'{dir_path}/{relative_path}'
    cmd = f'osascript -l JavaScript {path} {quote(message)}'
    subprocess.call(cmd, shell=True)

    return True

