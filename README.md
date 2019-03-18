```
docker build --build-arg tag=0.1.0 -t n3a1/one:0.1.0 .
```
 
```
docker run -d --name one -p 8080:8080 n3a1/one:0.1.0
```

```
docker push n3a1/one:0.1.0
```