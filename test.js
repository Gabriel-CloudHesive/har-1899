const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });
var connect = new AWS.Connect();

function makeCall() {
  var params = {
    ContactFlowId: "5a3c4db6-b929-4573-a08b-50f43901600e",
    DestinationPhoneNumber: "+13054912981",
    InstanceId: "05525573-df90-4169-a1a2-9161646b2414",
    QueueId: "766f3755-ac91-4d4d-81d2-f1374e69a206",
    SourcePhoneNumber: "+18335941560",
  };

  connect.startOutboundVoiceContact(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else {
      const input = {
        ContactId: data.ContactId,
        InstanceId: "05525573-df90-4169-a1a2-9161646b2414",
      };

      setTimeout(() => {
        connect.stopContact(input, function (err, data) {
          if (err) console.log(err, err.stack);
          else console.log(data);
        });
        console.log("Time out");
      }, 8000);
      console.log(data);
    }
  });
}

makeCall();
