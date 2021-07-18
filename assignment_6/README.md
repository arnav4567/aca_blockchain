This code implements a basic local web server using Express.js.

To execute it you need to send a POST request. This can be done by using -

1. Command prompt, with the command `curl -H "Content-Type: application/json" -X POST http://localhost:8787/hash -d "{\"data\": \"This is a string\"}".`
2. Some tool like 'Postman'. 


On executing the code and sending the post request given below, this output would be shown in the console-

CMD:
`curl -H "Content-Type: application/json" -X POST http://localhost:8787/hash -d "{\"data\": \"hello there\"}"`


CONSOLE : 

Server is at localhost:8787

Data is :  {"data":"hello there"}
{"hash":"12998c017066eb0d2a70b94e6ed3192985855ce390f321bbdb832022888bd251"} 
