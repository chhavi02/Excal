<<<<<<< HEAD
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

@my_routes.route('/', methods=['GET', 'POST'])
def check():
    if request.method == 'POST':
        emp_id = request.data['emp_id']
        # emp_image = request.files['emp_image']
        attendance_image = request.files['attendance_image']

        result = upload_file(attendance_image, emp_id)
        if result['status'] == 'OK':
            if check_images(result['filename'], emp_id):
                return {
                    'status': 200,
                    'message': 'MATCH'
                }
            else:
                return {
                    'status': 400,
                    'message': 'MISMATCH'
                }
        else:
            return {
                'status': 400,
                'message': 'BAD REQUEST'
            }


        # emp_image = Image.open(emp_image)
        # print(emp_image.format, emp_image.mode)
        # attendance_image = Image.open(attendance_image)

        # if check_images(emp_image, attendance_image):
        #     return {
        #         'status': 200,
        #         'message': 'MATCH'
        #     }
        # else:
        #     return {
        #         'status': 400,
        #         'message': 'MISMATCH'
        #     }
        # return 'badumbum'
    else:
        return render_template('test.html')
=======
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

@my_routes.route('/', methods=['GET', 'POST'])
def check():
    if request.method == 'POST':
        emp_id = request.data['emp_id']
        # emp_image = request.files['emp_image']
        attendance_image = request.files['attendance_image']

        result = upload_file(attendance_image, emp_id)
        if result['status'] == 'OK':
            if check_images(result['filename'], emp_id):
                return {
                    'status': 200,
                    'message': 'MATCH'
                }
            else:
                return {
                    'status': 400,
                    'message': 'MISMATCH'
                }
        else:
            return {
                'status': 400,
                'message': 'BAD REQUEST'
            }


        # emp_image = Image.open(emp_image)
        # print(emp_image.format, emp_image.mode)
        # attendance_image = Image.open(attendance_image)

        # if check_images(emp_image, attendance_image):
        #     return {
        #         'status': 200,
        #         'message': 'MATCH'
        #     }
        # else:
        #     return {
        #         'status': 400,
        #         'message': 'MISMATCH'
        #     }
        # return 'badumbum'
    else:
        return render_template('test.html')
>>>>>>> 2905068d253c8e37be94e62479d890d2b036083d
