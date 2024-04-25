function loadContent() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('app').innerHTML = xhr.responseText;
            } else {
                document.getElementById('app').innerHTML = '<h1>404 Not Found</h1><p>Page not found.</p>';
            }
        }
    };
    xhr.open('GET', '/src/views/home.html', true);
    xhr.send();
}

window.onload = loadContent;
