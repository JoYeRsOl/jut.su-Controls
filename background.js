
chrome.tabs.onUpdated.addListener(function(){
    chrome.tabs.executeScript({
        file: 'inject.js'
    })
})
chrome.commands.onCommand.addListener(function (command) {
    switch (command) {
        case "play":
            break;
        case "next":
            document. 
            break;
        default: 
            alert("Recieved bad command")
    }
})

