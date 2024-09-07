
let codeMirrorEditor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: "javascript",
    theme: "material-darker",
    lineNumbers: true,
    lineWrapping: true, // Enable line wrapping
    autoCloseBrackets: true,
    autoCloseTags: true,
    extraKeys: {"Ctrl-Space": "autocomplete"}
});


// Override console.log to capture log output
(function () {
    const oldLog = console.log;
    const outputContent = document.getElementById('outputContent');

    outputContent.innerHTML = 'Output will be shown here...';
    console.log = function (message) {
        if (typeof message === 'object') {
            outputContent.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message, undefined, 2) : message) + '<br>';
        } else {
            outputContent.innerHTML += message + '<br>';
        }
        oldLog.apply(console, arguments);
    };
})();

function runCode() {
    const code = codeMirrorEditor.getValue();
    const outputContent = document.getElementById('outputContent');
    outputContent.innerHTML = '';

    // Check if the code contains any line of code that is not a comment or alert statement
    const lines = code.trim().split('\n');
    const alertOnlyRegex = /^\s*alert\((.*?)\)\s*;?\s*$/;
    const isCommentOrAlertOnly = lines.every(line => {
        return line.trim().startsWith('//') || alertOnlyRegex.test(line.trim());
    });

    if (isCommentOrAlertOnly) {
        outputContent.textContent = "Output will be shown here...";
        try {
            eval(code);
        } catch (error) {
            outputContent.textContent = error;
        }
    } else {
        try {
            eval(code);
        } catch (error) {
            let output = ''
            const lineNumberMatch = error.stack.match(/<anonymous>:(\d+):\d+/);
            const lineNumber = lineNumberMatch ? lineNumberMatch[1] : 'unknown';
            
            output+=`Error on line ${lineNumber}: ${error.message}<br>`;
            outputContent.innerHTML = output
        }
    }
}

function onloadPage() {

    localStorage.clear()

    const initialCode = `
    // its an online js compiler
    // you can practice all the js problems here
    console.log("Welcome to js compiler")
    console.log("Ahsan allaj pk BCK-188")
    console.log("brototype")
    `;
    
    codeMirrorEditor.setValue(initialCode);
}

function clearOutPut() {
    const outputContent = document.getElementById('outputContent');
    outputContent.innerHTML = 'Output will be shown here...'
}


