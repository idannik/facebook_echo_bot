const MessageController = ({
  SendApiHelper,
  GraphApiController
}) => ({
// Incoming events handling
receivedMessage: (event) =>  {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var message = event.message;
  
    console.log("Received message for user %d and page %d at %d with message:", 
      senderID, recipientID, timeOfMessage);
    console.log(JSON.stringify(message));
  
    var messageId = message.mid;
  
    var messageText = message.text;
    var messageAttachments = message.attachments; 
  
    if (messageText) {
      // If we receive a text message, check to see if it matches a keyword
      // and send back the template example. Otherwise, just echo the text we received.
      switch (messageText) {
        case 'generic':
          SendApiHelper.sendGenericMessage(senderID);
          break;
        case "location":
          SendApiHelper.sendLocationQuickReply(senderID);
          break;
        case "api_test":
          GraphApiController.Search('pizza');
          break;
        default:
        SendApiHelper.sendTextMessage(senderID, messageText);
      }
    } else if (messageAttachments) {
      messageAttachments.forEach( (attachment)=>{
        let msg =`type is ${ attachment.type}`
        console.log(attachment)
        if (attachment.type=="location") {
          console.log("detected location")   
          let lat = attachment.payload.coordinates.lat
          let lng = attachment.payload.coordinates.long
          msg = `received location 😎, lat = ${lat}, lng = ${lng}`
          console.log(msg)
          GraphApiController.SearchPlaceByLocation({
            queryTerm:'burger', 
            distance:5000, 
            lat, 
            lng, 
            fields: "location, link, is_verified,hours,parking,price_range,single_line_address,website"})
          .then(element => console.log(element))
          .catch(err => {console.log(lat, lng, err)})
        }
        SendApiHelper.sendTextMessage(senderID, msg);
      })
    }
  },
  
  receivedPostback: (event) => {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfPostback = event.timestamp;
  
    // The 'payload' param is a developer-defined field which is set in a postback 
    // button for Structured Messages. 
    var payload = event.postback.payload;
  
    console.log("Received postback for user %d and page %d with payload '%s' " + 
      "at %d", senderID, recipientID, payload, timeOfPostback);
  
    // When a postback is called, we'll send a message back to the sender to 
    // let them know it was successful
    SendApiHelper.sendTextMessage(senderID, "Postback called");
  }
})

module.exports = MessageController