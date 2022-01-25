Given below is a sample transaction. Assignment 3 deals with converting this to a binary .dat file while assignment 4 converts this data back to readable form. Both of these operations are performed here.

Each input consists of the transaction ID, the signature, number of outputs(recipients), the number of coins for each output (64 bit) and the public key of sender. We also use the timestamp of the time of transaction.

The data below is converted to a binary file, the code for which is present in assignment 3.

```
PS C:\Users\arnav\Desktop\duplicate\assignment_3> node assig_3_final.js
Enter the number of inputs : 2
Input  1 :       
Transaction ID : e312
Appending zeroes to the end since signature is not of length 64
Index : 12345
Length of signature : 4
Signature : e43a127b
Input  2 :
Transaction ID : eba28475
Appending zeroes to the end since signature is not of length 64
Index : 4
Length of signature : 2
Signature : eeee
Enter the number of outputs : 1
Output  1 :
Number of coins : 6755423
Length of public key : 278
Public key path : C:\Users\arnav\Desktop\duplicate\assignment_2\Keys\public.pem
Data written to :  30c3cd3caffeddba392bf96ba71d02d8e16f531093e2f8380672d2aff84596f1.dat
```

The data has been written. Now we verify the process by performing the reverse operation. The code for this process is present in assignment 4.

```
PS C:\Users\arnav\Desktop\duplicate\assignment_3> cd.. 
PS C:\Users\arnav\Desktop\duplicate> cd assignment_4
PS C:\Users\arnav\Desktop\duplicate\assignment_4> node assig4.js
Binary data file path : C:\Users\arnav\Desktop\duplicate\assignment_3\30c3cd3caffeddba392bf96ba71d02d8e16f531093e2f8380672d2aff84596f1.dat
Transaction ID :  30c3cd3caffeddba392bf96ba71d02d8e16f531093e2f8380672d2aff84596f1
Timestamp :  1624946047128595600n
Number of inputs :  2
Input  1 :
Transaction ID :  e312000000000000000000000000000000000000000000000000000000000000
Index :  12345
Length of signature :  4
Signature :  e43a127b
Input  2 :
Transaction ID :  eba2847500000000000000000000000000000000000000000000000000000000
Index :  4
Length of signature :  2
Signature :  eeee
Number of outputs :  1
Output  1 :
Number of coins :  6755423n
Length of public key :  278
Public Key :  ``-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCq4/Mm/gHVivTFEtbR0InNtXnl
mr8HGR5LYVAnY3T2I5bk9gIm+b3amn47n8xSXwkLrg6AfvGneY2QY3cXhpStBV9j
M6Yr64a9IeYxEHYsZU4/uAFA8sJjPcDapqCpv6lVhkpbz2HhcW8OcRteHSio3eft
NtDyN509M7XtJBwtbQIDAQAB
-----END PUBLIC KEY-----
```
This is the same as the data that we had given. Also, incase the ID is not 64-bit, our code automatically pads it with zeroes so as to prevent inconsistencies.
