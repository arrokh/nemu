'use strict';
// Depending on the URL argument, render as LTR or RTL.
var rtl = (document.location.search == '?rtl');
var workspace = null;
start();

function start() {
    workspace = Blockly.inject(document.getElementById('blocklyDiv'), {
        path: './',
        toolbox: document.getElementById('toolbox'),
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        }
    });
    Blockly.addChangeListener(renderContent);
    Blockly.Blocks.CreateMainBlock();
}
//==========================
//======= IframeComm =======
//==========================

// function bindEvent(element, eventName, eventHandler) {
//     if (element.addEventListener) {
//         element.addEventListener(eventName, eventHandler, false);
//     } else if (element.attachEvent) {
//         element.attachEvent('on' + eventName, eventHandler);
//     }
// }

// // Send a message to the parent
// var sendMessage = function (msg) {
//     // Make sure you are sending a string, and to stringify JSON
//     window.parent.postMessage(msg, '*');
// };

// var results = document.getElementById('results'),
//     messageButton = document.getElementById('message_button');

// // Listen to messages from parent window
// bindEvent(window, 'message', function (e) {
//     results.innerHTML = e.data;
// });

// // Send random message data on every button click
// bindEvent(messageButton, 'click', function (e) {
//     var random = Math.random();
//     sendMessage('' + random);
// });

//==========================
//==========================

function renderContent() {
    var data = {
        code: Blockly.cake.workspaceToCode()
    };
    window.parent.postMessage(data, '*');
}

function saveToClient(name, type) {
    var content = document.getElementById('code');
    var dlbtn = document.getElementById("dlbtn");
    var file = new Blob([content.innerText], { type: type });
    dlbtn.href = URL.createObjectURL(file);
    dlbtn.download = name;
}



function saveToServerPrompt() {
    M.Modal.getInstance($('#saveToServerModal')).open();
}

function saveToServer() {
    M.toast({ html: 'Uploading', classes: 'rounded' });
    // console.log(M.toast({html: 'Uploading', classes: 'rounded'}));
    $.ajax({
        type: "POST",
        url: "../src/webconsole/rw-access/",
        data: Blockly.cake.workspaceToCode(),
        contentType: 'text/plain'
    }).done(function (data) {
        M.toast({ html: 'Successfully updated', classes: 'toast-blue' });
    }).fail(function (data) {
        M.toast({ html: 'Failed to update', classes: 'toast-red' });
    }).always(function () {
        M.Modal.getInstance($('#saveToServerModal')).close();
    });
}