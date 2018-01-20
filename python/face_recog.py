import face_recognition
import os
# import scipy.misc
import config as config
def check_images(filename, emp_id):
    image = face_recognition.load_image_file(os.path.join(os.path.join(config.PHOTOS_UPLOAD_FOLDER + '/' + emp_id + '/register'), emp_id + '.png'))
    someone = face_recognition.load_image_file(os.path.join(config.PHOTOS_UPLOAD_FOLDER + '/' + emp_id, filename))
    # known_face_encoding = face_recognition.face_encodings(image1)[0]
    # unknown_face_encodings = face_recognition.face_encodings(image2)
    # image = scipy.misc.imread(image1, mode='RGB')
    # someone = scipy.misc.imread(image2, mode='RGB')

    known_face_encoding = face_recognition.face_encodings(image)[0]
    unknown_face_encodings = face_recognition.face_encodings(someone)
    for encoding in unknown_face_encodings:
        results = face_recognition.compare_faces([known_face_encoding], encoding)
        for result in results:
            if result == True:
                return True
    return False
