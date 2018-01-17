from flask import Blueprint, request, render_template
from face_recog import check_images
# from PIL import Image
from upload_file import upload_file
my_routes = Blueprint('route', __name__)

@my_routes.route('/', methods=['GET', 'POST'])
def check():
    if request.method == 'POST':
        emp_id = request.data['emp_id']
        emp_image = request.files['emp_image']
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
