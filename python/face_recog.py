import face_recognition
import os
# import scipy.misc
import config as config
# image = face_recognition.load_image_file('1997_1.png')
# someone = face_recognition.load_image_file('1997_1.png')
# known_face_encoding = face_recognition.face_encodings(image)[0]
# unknown_face_encodings = face_recognition.face_encodings(someone)
# results = face_recognition.compare_faces([unknown_face_encodings], known_face_encoding)
#
# for result in results:
#     if result.any() == False:
#         print('mismatch')
#     else:
#         print('match')
def check_images(filename, emp_id):
    image = face_recognition.load_image_file('images/' + emp_id + '/register/' + emp_id +'.png')
    # known_face_encoding = face_recognition.face_encodings(image1)[0]
    # unknown_face_encodings = face_recognition.face_encodings(image2)
    # image = scipy.misc.imread(image1, mode='RGB')
    # someone = scipy.misc.imread(image2, mode='RGB')
    # image = face_recognition.load_image_file('images/1997/register/1997.png')
    string = '12345'
    for a in string:
        someone = face_recognition.load_image_file('images/' + emp_id +'/' + emp_id + '_' + a + '.png')
        known_face_encoding = face_recognition.face_encodings(image)[0]
        unknown_face_encodings = face_recognition.face_encodings(someone)
        results = face_recognition.compare_faces([unknown_face_encodings], known_face_encoding)

        for result in results:
            if result.any() == False:
                return False
    # for encoding in unknown_face_encodings:
        # someone = face_recognition.load_image_file('images/' + emp_id + '/' +)
    return True
