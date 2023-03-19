FROM amazoncorretto:11-alpine-jdk //de que imagen partimos
MAINTAINER guido //quien es el dueño
COPY target /web-0.0.1-SNAPSHOT.jar web-app.jar //va a copiar el empaquetado a github
ENTRYPOINT ["java","-jar","/web-app.jar"] //es la instruccion que se va a ejecutar primero