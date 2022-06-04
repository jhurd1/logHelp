from flask_restful import Api, Resource, reqparse

class Manage(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Hello Api manager!"
      }

  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument('fpath', action='append', location='form', type=str, required=True, help='fpath must be a file path or the json isn\'t working')
    parser.add_argument('searchStrings', action='append', location='form', type=str, required=True, help='the searchStrings must be strings or the json isn\t working')
    parser.add_argument('anonymize', type=bool, help='Did you remember to select anonymize?')
    {
        "message":
        {
            "fpath": "This app requires a file path.",
            "searchStrings":"This app requires search strings."
        }
    }
    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_type = args['type']
    request_json = args['message']
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    ret_status = request_type
    ret_msg = request_json

    if ret_msg:
      message = "Your Message Requested: {}".format(ret_msg)
    else:
      message = "No Msg"
    
    final_ret = {"status": "Success", "message": message}

    return final_ret