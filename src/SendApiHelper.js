const SendApiHelper = ({
  CallSendAPI
}) => ({
sendLocationQuickReply : (recipientId) => {
    console.log(`sending a location quick reply to ${recipientId}`)
    var messageData = {
      recipient: {
        id: recipientId
      },
      message: {      
        text: "please send us your location",
        "quick_replies":[
          {
            "content_type":"location"
          }]
      }
    };
  
    CallSendAPI(messageData);
},

sendTextMessage: (recipientId, messageText) => {
    var messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        text: messageText
      }
    };
    CallSendAPI(messageData);
},
  
sendGenericMessage: recipientId => {
    var messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "generic",
            elements: [{
              title: "rift",
              subtitle: "Next-generation virtual reality",
              item_url: "https://www.oculus.com/en-us/rift/",               
              image_url: "http://messengerdemo.parseapp.com/img/rift.png",
              buttons: [{
                type: "web_url",
                url: "https://www.oculus.com/en-us/rift/",
                title: "Open Web URL"
              }, {
                type: "postback",
                title: "Call Postback",
                payload: "Payload for first bubble",
              }],
            }, {
              title: "touch",
              subtitle: "Your Hands, Now in VR",
              item_url: "https://www.oculus.com/en-us/touch/",               
              image_url: "http://messengerdemo.parseapp.com/img/touch.png",
              buttons: [{
                type: "web_url",
                url: "https://www.oculus.com/en-us/touch/",
                title: "Open Web URL"
              }, {
                type: "postback",
                title: "Call Postback",
                payload: "Payload for second bubble",
              }]
            }]
          }
        }
      }
    };  
  
    CallSendAPI(messageData);
  },
  

})

module.exports = SendApiHelper