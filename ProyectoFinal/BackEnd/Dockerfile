FROM amazoncorretto:11-alpine-jdk
MAINTAINER guido
COPY target/web-0.0.1-SNAPSHOT.jar  web-app.jar
ENTRYPOINT ["java","-jar","/web-app.jar"]