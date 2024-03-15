async function postAlertMessageToProject(){
    const bodyData = {
        projectID: projectID,
        alert_subject: $("#alertSubject").val(),
        main_message: $("#alertBody").val(),
        location: $("#alertLocation").val()+"alerts",
    };

    const headers = {
        'Authorization':"Bearer "+access_token,
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyData)
    };

    const apiUrl = "https://prod-19.uksouth.logic.azure.com:443/workflows/d8a3681ca36b4aa6bb5ebc54bd7752f5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7AhhQLNeqvq88waTXSoJntPLC5-ZXIWj9ieX0TxpY0I";
    //console.log(apiUrl)
    //console.log(requestOptions)
    responseData = await fetch(apiUrl,requestOptions)
        .then(response => response.json())
        .then(data => {
            const JSONdata = data
        //console.log(JSONdata)
        //console.log(JSONdata.uploadKey)
        //console.log(JSONdata.urls)
        return JSONdata
        })
        .catch(error => console.error('Error fetching data:', error));
    return responseData
    }

async function postAlertMessageToProject(){
    const bodyData = {
        projectID: projectID,
        subject: AlertSubject,
        message: AlertMessage
    };

    const headers = {
        'Authorization':"Bearer "+access_token,
    };

    const requestOptions = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify(bodyData)
    };

    const apiUrl = "https://prod-19.uksouth.logic.azure.com:443/workflows/d8a3681ca36b4aa6bb5ebc54bd7752f5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7AhhQLNeqvq88waTXSoJntPLC5-ZXIWj9ieX0TxpY0I";
    //console.log(apiUrl)
    //console.log(requestOptions)
    responseData = await fetch(apiUrl,requestOptions)
        .then(response => response.json())
        .then(data => {
            const JSONdata = data
        //console.log(JSONdata)
        //console.log(JSONdata.uploadKey)
        //console.log(JSONdata.urls)
        return JSONdata
        })
        .catch(error => console.error('Error fetching data:', error));
    return responseData
    }