```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: the spa HTML document
    deactivate server   
    Note right of browser: the browser load the html file causing 2 more GET requests
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    Note right of browser: the browser execute the JavaScript file that trigger a new GET request for the JSON data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the JSON data as a string: [{"content":"Warriors!!!!!","date":"2025-03-23T23:05:10.435Z"},...]
    deactivate server
    Note right of browser: the browser execute the callback function that parse the JSON string and render the notes
```
