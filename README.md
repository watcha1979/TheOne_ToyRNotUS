# TheOne_ToyRNotUS

docker run --name hello-mariadb -v $(pwd)/mariadb:/var/lib/mysql -e MYSQL_DATABASE=Hello -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mariadb:10.3.5

docker container run -v /root/toyRNotUsBackend/target/toystore.jar:/xxx/toystore.jar openjdk:8-jre java -jar /xxx/toystore.jar
