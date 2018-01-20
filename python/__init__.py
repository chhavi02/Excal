from flask_api import FlaskAPI
from routes import my_routes
import config as config

def run():
    app = FlaskAPI(__name__)
    app.register_blueprint(my_routes)
    app.run(host=config.HOST, port=config.PORT, threaded=False, processes=1, debug=True)

if __name__ == '__main__':
    run()
