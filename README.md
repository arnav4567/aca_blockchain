# Blocks and Chains - ACA
This project was offered by Association for Computing Activities (ACA), IIT Kanpur. 

### [Assignment 1](./assignment_1)
This assignment was about **finding the nonce** for a given string i.e. it tries to find a positive number x such that when x is appended to the end of the given input, the SHA256 hash is less than the target. 
It contains the following file:
+ [Assg1.js](./assignment_1/Assg1.js): The `crypto-js` module is used in the program.


### [Assignment 2](./assignment_2)
This assignment was about **verifying signatures**.

It contains three files:
+ [assg2_key_pair_gen.js](./assignment_2/assg2_key_pair_gen.js) - To generate a public key-private key pair.
+ [assg2_text_encrypt.js](./assignment_2/assg2_text_encrypt.js) - To sign a message with the private key.
+ [assg2_text_decrypt.js](./assignment_2/assg2_text_decrypt.js) - To check if a given encrypted message decrypted with public key is the same as the message before signing with the private key. 



### [Assignment 3](./assignment_3)
This assignment converts transaction data into a **binary file (.dat)**. Each input consists of the transaction ID, the signature, number of outputs(recipients), the number of coins for each output (64 bit) and the public key of sender. We also use the timestamp of the time of transaction. It has the following file : 

+ [assg3_data_to_binary.js](./assignment_3/assg3_data_to_binary.js) 

### [Assignment 4](./assignment_4)
This does the opposite of assignment 3. It takes input in binary format and outputs transaction data in readable form. A sample output is also included. This assignment outputs all the details of the transaction given the binary .dat file. (The format of these details is stated in the previous assignment). It has one file :

+ [assg4_binary_to_data.js](./assignment_4/assg4_binary_to_data.js)


### [Assignment 5](./assignment_5)
Given a transaction block, this assignment deals with finding out the header for that block. A sample `.dat` binary file is included as transaction data. A detailed description is also included in the [assignment_5](./assignment_5) directory.
Some sample outputs are also included. The only `.js` file is : 

+ [assg5_block_header.js](./assignment_5/assg5_block_header.js).

### [Assignment 6](./assignment_6)
This code implements a basic local web server using `Express.js`. We send a POST request which contains JSON encoded data in the format - {"data":"some string"}. The endpoint calculates the SHA-256 hash of the given string(in hexadecimal) and returns it as JSON encoded data.

+ [assg6_web_server.js](./assignment_6/assg6_web_server.js)