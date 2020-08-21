# Get Checker

A simple application that calls a GET request against the desired web server every 5 minutes.

### Add A Server

To add a server to check, select the circular red plus button in the bottom right hand corner.

The server name field is used to indentify the server being checked.

The following line will be the address to check for a response from a GET request.

### Server Status

After the checker makes a GET request, it returns the response time, HTTP status text, and HTTP status code.

The refresh button will immediately call the GET requests for servers in the list regardless of the pause button being enabled. If refresh is pressed while paused, it will also refresh the pause time back to 0.

The pause button will immediately pause the timer. Upon unpause, the timer will resume at the paused time.

### State Persistence

All changes made will persist through closing and opening the app. For example if 3 servers are added, Dark theme is toggled on, and pause is enabled when closed, the application will re-open with all of these things remembered.
