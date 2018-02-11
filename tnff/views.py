from flask import render_template, request, jsonify
from . import application


@application.route('/', methods=['GET'])
def index():
    return render_template('index.html')