// const error_unless_ok = require('./error_unless_ok')

const callSendAPI = ({request}) => (messageData) => {
  return request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData

  })
}

module.exports = callSendAPI