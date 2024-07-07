function vsCode () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('go to vscode');
            alert('go to vscode');
            resolve();
        } ,5000);
    });
}
function htmlFile () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We create an HTML file');
            alert('We create an HTML file');
            resolve();
        } ,3000);
    });
}
function writeCodes () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We write the initial codes inside');
            alert('We write the initial codes inside');
            resolve();
        } ,3000);
    });
}
function javascriptFile () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Then we create a javascript file');
            alert('Then we create a javascript file');
            resolve();
        } ,3000);
    });
}
function filesLink () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We link the JavaScript file to the HTML file');
            alert('We link the JavaScript file to the HTML file');
            resolve();
        } ,3000);
    });
}
function cssFile () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We create a CSS file');
            alert('We create a CSS file');
            resolve();
        } ,3000);
    });
}
function filesLinkCssHtml () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We link the CSS file to the HTML file');
            alert('We link the CSS file to the HTML file');
            resolve();
        } ,3000);
    });
}
function end () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('The end finish');
            alert('The end finish');
            resolve();
        } ,3000);
    });
}
function byBy () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Good by');
            alert('Good by');
            resolve();
        } ,3000);
    });
}
vsCode()
    .then(() => htmlFile())
    .then(() => writeCodes())
    .then(() => javascriptFile())
    .then(() => filesLink())
    .then(() => cssFile())
    .then(() => filesLinkCssHtml())
    .then(() => end())
    .then(() => byBy())
    .catch();