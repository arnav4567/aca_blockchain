This assignment generates a public key-private key pair and uses them to encrypt and decrypt a message. The code for each of these operations is in separate files. The keys are present in .pem files in the 'keys' subfolder.

The encryption method used is RSA (with PSS Padding).

### INPUT 1: 
```
Enter public key path : C:\Users\arnav\Desktop\aca_blockchain\Keys\public.pem 
Enter the normal text : hello 
Enter the encrypted text : U4rIVnhS+7/OIkOzgJgSNZPxjOmeP+aReC3opGSYPZ8+MZx7pc0uJTXa9ZgUtTEfidFCi8q++HQmDy96sqBuApK0HRkyYOzGvmhcShxh1Z7cin0UouPFPR8i7iGIbY/4rZjmj1T9MEogXXuMEjJwY6HPqaagiJuYjSLgG5tEe08=
```
### OUTPUT : 
```
Verified !
```

### INPUT 2: 
```
Enter public key path : C:\Users\arnav\Desktop\aca_blockchain\Keys\public.pem 
Enter the normal text : hello 
Enter the encrypted text : wawd
```
### OUTPUT : 
```
Can't be decrypted !
```

### INPUT 3: 
```
Enter public key path : C:\Users\arnav\Desktop\aca_blockchain\Keys\public.pem 
Enter the normal text : complete 
Enter the encrypted text : U4rIVnhS+7/OIkOzgJgSNZPxjOmeP+aReC3opGSYPZ8+MZx7pc0uJTXa9ZgUtTEfidFCi8q++HQmDy96sqBuApK0HRkyYOzGvmhcShxh1Z7cin0UouPFPR8i7iGIbY/4rZjmj1T9MEogXXuMEjJwY6HPqaagiJuYjSLgG5tEe08=
```

### OUTPUT : 
```
Not verified
```

### NOTE: 
If the output is `Verified`, it means that the entered encrypted text is indeed the corresponding encrypted text for the normal text. If the output is `Not Verified`, this means that on decrypting the entered encrypted text, it was found to be not equal to the entered normal text. If the output is `Can't be decrypted !`, this means that our entered encrypted text is invalid and can't even be decrypted.