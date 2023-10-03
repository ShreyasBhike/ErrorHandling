// var Danger = {
//     postMessage: function(statusData) {
//         // Implement the logic to handle Danger messages
//         console.log("Danger: " + statusData);
//         // Other code to handle Danger messages
//     }
// };

// var Success = {
//     postMessage: function(statusData) {
//         // Implement the logic to handle Danger messages
//         console.log("Success: " + statusData);
//         // Other code to handle Danger messages
//     }
// };

// var Warning = {
//     postMessage: function(statusData) {
//         // Implement the logic to handle Danger messages
//         console.log("Warning: " + statusData);
//         // Other code to handle Danger messages
//     }
// };


// var Info = {
//     postMessage: function(statusData) {
//         // Implement the logic to handle Danger messages
//         console.log("Info: " + statusData);
//         // Other code to handle Danger messages
//     }
// };

// var Default = {
//     postMessage: function(statusData) {
//         // Implement the logic to handle Danger messages
//         console.log("Default: " + statusData);
//         // Other code to handle Danger messages
//     }
// };








function SuccessCallback(status) {
    var statusData = JSON.stringify(status);
        console.log(statusData)
        Success.postMessage(statusData);
    }


function InfoCallback(status) {
    var statusData = JSON.stringify(status);
        console.log(statusData)
        Info.postMessage(statusData);
    }

function WarningCallback(status) {
     var statusData = JSON.stringify(status);
            console.log(statusData)
            Warning.postMessage(statusData);
     }

function DangerCallback(status) {
    var statusData = JSON.stringify(status);
            console.log(statusData)
            Danger.postMessage(statusData);
        }


function DefaultCallback(status) {
    var statusData = JSON.stringify(status);
             console.log(statusData)
             Default.postMessage(statusData);
         }


function handleSuccess() {
     SuccessCallback("Success");
 }

function handleInfo() {
    InfoCallback("Info");
}


function handleWarning() {
    WarningCallback("Warning");
}

function handleDanger() {
   DangerCallback("Danger");
}

function handleDefault() {
    DefaultCallback("Default");
 }









	
function CheckCallback(status) {
    var statusData = JSON.stringify(status);
        console.log(statusData)
        //messageHandler.postMessage(statusData);	
		messageHandler.callMessage(statusData);
    }
