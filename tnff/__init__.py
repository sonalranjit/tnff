from os.path import join, isfile
from flask import Flask, render_template, make_response, jsonify

application = Flask(__name__)


from tnff import views
