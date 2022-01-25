#### Given a transaction block, this assignment deals with finding out the header for that block.
#### The block header we use is of 116 bytes. The structure is illustrated below:
##### The first 4 bytes represent an integer (index of the block).
##### The next 32 bytes represent the SHA256 hash of the parent block.
##### The next 32 bytes represent the SHA256 hash of the block body.
##### The next 32 bytes give the target value.
##### Next, we have the timestamp which takes up 8 bytes.
##### Finally, we have the nonce value given by a 64 bit integer.

#### This block header, along with the block body, constitutes a full block.
  
  
### INPUT
```
Index of the block : 7
Hash of the parent block : 41a82375fb23603aeb2129e6d05e2b4eb63b576db435f8e4ff2ad62ad4200fda
Target : 0000000f00000000000000000000000000000000000000000000000000000000 
Path of block body : C:\Users\arnav\Desktop\duplicate\assignment_5\sample.dat
```

### OUTPUT 1
```
Nonce value :  92289121
Timestamp :  1624642709543270300n
Hash obtained :  0000000ad6651d8bae36b4f807277fc2828f926d2e32cab084f5c36563456a1e
Time taken for the nonce to be calculated :  323044572400n
```
The time taken is close to 5 min 23 sec.


### OUTPUT 2
```
Nonce value :  180501494
Timestamp :  1624645717826047900n
Hash obtained :  000000057e39416164f2cf5f424decebcaa8e67e5b18d2e4d8afba337e2abbe5
Time taken for the nonce to be calculated :  699766559500n
```
Here the time taken is around 11 min 40 sec.


### OUTPUT 3
```
Nonce value :  268984229
Timestamp :  1625207549382646000n
Hash obtained :  0000000997be5d4660b7ae90206064ee492604adbe30a730f392c32fb0056c34
Time taken for the nonce to be calculated :  2576095173600n
```
The time taken is around 42 min 56 sec.
