import os
import asyncio
from flask import Flask
from controller import app as controller_app

app = Flask(__name__)

if __name__ == '__main__':
    if os.name == 'nt':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

    controller_app.run(debug=True)
