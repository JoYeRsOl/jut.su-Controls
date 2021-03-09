
chrome.tabs.onUpdated.addListener(function()
    { 
        chrome.tabs.executeScript(
            { 
                file: 'inject.js' 
            }) 
    })

