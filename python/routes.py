from flask import Blueprint, request, render_template
from face_recog import check_images
# from PIL import Image
from upload_file import upload_file
my_routes = Blueprint('route', __name__)

'''
    TODO:
    remove get method from here
    somehow do the session wali chiz here too
    maybe get the path of the registeration-time-image instead of keeping it constant (this may have to be included in the database)
    atleast remove the static filename ending from the registration-image
'''

@my_routes.route('/<string:emp_id>', methods=['GET'])
def check(emp_id):
    string = '12345'
    for x in string:
        filename = emp_id + '_' + x +'.png'
        if check_images(filename, emp_id):
            print("MATCH")

        else:
            print("MISMATCH")
            return {
                'status': 400,
                'message': 'MISMATCH'
            }
    return {
        'status': 200,
        'message': 'MATCH'
    }
