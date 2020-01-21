const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    } else {
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const body = JSON.parse(xhr.responseText);
            callback(body)
        }
    };
    xhr.open('GET', url);
    xhr.send();
}


//на промисах
function makeGETRequest(url) {
    let xhr;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (window.XMLHttpRequest) {
                xhr = new window.XMLHttpRequest();
            } else {
                xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const body = JSON.parse(xhr.responseText);
                        resolve(body);
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
//            xhr.onerror = function(err) {
//                reject(err);
//            };

            xhr.open('GET', url);
            xhr.send();

        }, 2000);
    });
}

