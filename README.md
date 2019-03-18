```
docker build --build-arg tag=0.1.0 -t nea1/one:0.1.0 .
```
 
```
docker run -d --name one -p 8080:8080 nea1/one:0.1.0
```

```
docker push nea1/one:0.1.0
```