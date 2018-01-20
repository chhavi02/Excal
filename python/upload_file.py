import os
import datetime as datetime
from werkzeug.utils import secure_filename
import config as config

def allowed_photo(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in config.ALLOWED_PHOTO_EXTENTIONS

# def allowed_document(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in config.ALLOWED_DOCUMENT_EXTENTIONS

def upload_file(file, emp_id):
    if file.filename == '':
        return {
            'status':'BAD REQUEST',
            'message':'NO FILE SELECTED'
        }
    if allowed_photo(file.filename):
        filename = secure_filename(file.filename)
        upload_time = datetime.datetime.timestamp(datetime.datetime.now())
        filename = str(upload_time) + '_' + filename
        # if(file_type == 'IMG'):
        file.save(os.path.join(os.path.join(config.PHOTOS_UPLOAD_FOLDER,emp_id), filename))
        # else:
        #     file.save(os.path.join(config.DOCUMENTS_UPLOAD_FOLDER, filename))
        return {
            'status':'OK',
            'message':'FILE SAVED',
            'filename':filename,
            'upload_time':upload_time
        }
    else:
        return {
            'status':'BAD REQUEST',
            'message':'INVALID FILE'
        }
