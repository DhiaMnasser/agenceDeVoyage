# Description
## We have chosen as Subject "Travel agency". 

The idea is to transform a database in which there is information about the travel agency to a set of microservices. 

Distributed architecture or distributed computing refers to an information system or a network for which all the available resources are not located in the same place or on the same machine for this we used Docker. 

The frameworks are Spring Boot for the Backend and Angular as the Frontend. 

4 services are implemented: Customer, Reservation, Invoice and Hotel (NodeJs). 

The servers are: Eureka, Zuul and Config


# Overview
The architecture is composed by eight services:
Eureka: Service Discovery Server created with Eureka

zuul-server: API Gateway created with Zuul that uses the discovery-service to send the requests to the services. It uses Ribbon as a Load Balancer

Client: Simple REST service created with Spring Boot, Spring Data JPA, H2

Reservation: Simple REST service created with Spring Boot, Spring Data JPA, H2

Hotel: Simple REST service created with NodeJS,mongodb

Facture: Simple REST service created with Spring Boot, Spring Data JPA, H2

# Tools :
Maven 3.0+

IDE STS-3.4.9-RELEASE Eclipse Visual Studio.

H2, MongoDb

JDK 1.8+

Docker Desktop

#Microservice Running Process:
First we need to run Eureka

Second we need to run our MSs

Finally we need to run zuul-server, if we did run zuul-server before running the microservices then we have to wait approximately 10 second

## Eureka Service
Eureka Server is an application that holds the information about all client-service applications. Every Micro service will register into the Eureka server and Eureka server knows all the client applications running on each port and IP address. 

Eureka Server is also known as Discovery Server.

Implementing a Eureka Server for service registry is as easy as
we need to add @EnableEurekaServer annotation. 

The @EnableEurekaServer annotation is used to make your Spring Boot application acts as a Eureka Server.

@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication {

	public static void main(String[] args) {

		SpringApplication.run(EurekaApplication.class, args);
	}

}

we should make sure Spring cloud Eureka server dependency is added in our build configuration file. The code for Maven user dependency is shown below −

<dependency>
	<groupId>org.springframework.cloud</groupId>
	<artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
By default, the Eureka Server registers itself into the discovery. we added the below given configuration into our application.properties

## Give a name to the eureka server
spring.application.name=eureka-service
## default port for eureka server
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false



## eureka by default will register itself as a client. So, we need to set it to false.
## Client MS
eureka.client.register-with-eureka=true
eureka.client.fetch-registry=false
### API Gateway Service
A common problem, when building microservices, is to provide a unique gateway to the client applications of our system. The fact that our services are split into small microservices apps that shouldn’t be visible to users otherwise it may result in substantial development/maintenance efforts. Also there are scenarios when whole ecosystem network traffic may be passing through a single point which could impact the performance of the cluster.

### Zuul Components
Zuul has mainly four types of filters that enable us to intercept the traffic in different timeline of the request processing for any particular transaction. We can add any number of filters for a particular url pattern.

pre filters – are invoked before the request is routed.
post filters – are invoked after the request has been routed.
route filters – are used to route the request.
error filters – are invoked when an error occurs while handling the request.
Zull-filters

## Enable Zuul Service Proxy
Now add the @EnableZuulProxy and @EnableEurekaClient annotation on Spring boot application class present in src folder. With this annotation, this artifact will act like a Zuul service proxy and will enable all the features of a API gateway layer as described before. We will then add some filters and route configurations.

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
// @EnableFeignClients
public class ZuulServerApplication {

	public static void main(String[] args) {

		SpringApplication.run(ZuulServerApplication.class, args);
	}

	@Bean
	public PreFilter preFilter() {

		return new PreFilter();
	}

	@Bean
	public PostFilter postFilter() {

		return new PostFilter();
	}

	@Bean
	public ErrorFilter errorFilter() {

		return new ErrorFilter();
	}

	@Bean
	public RouteFilter routeFilter() {

		return new RouteFilter();
	}

}

Zuul routes configuration
Open application.properties and add below entries-

spring.application.name= zuul-service Will start the gateway server @8762
server.port= 8762
# eureka config
eureka.client.serviceUrl.defaultZone= http://discovery:8761/eureka/
#eureka.client.serviceUrl.defaultZone= ${EUREKA_URI:http://localhost:8761/eureka}

zuul.routes.candidats-endpoint.serviceId=reservation-service
zuul.routes.candidat-service.path=/reservation-service/*

zuul.routes.aero-endpoint.serviceId=facture-service
zuul.routes.aero-service.path=/facture-service/*

zuul.routes.clients-endpoint.serviceId=client-service
zuul.routes.clients-service.path=/client-service/*


eureka.instance.preferIpAddress=true
eureka.client.registerWithEureka=true
eureka.client.fetchRegistry=true

## Add Zuul Filters
We will now add few filters as we have already described, Zuul supports 4 types of filters namely route,error,post,pre. Here we will create each type of filters.

## route filter
public class RouteFilter extends ZuulFilter {

	@Override
	public String filterType() {
		return "route";
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() {
		System.out.println("Using Route Filter");
		return null;
	}

}
## Error filter
public class ErrorFilter extends ZuulFilter {

	@Override
	public String filterType() {
		return "error";
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() {
		System.out.println("Using Error Filter");
		return null;
	}

}
## Post filter
public class PostFilter extends ZuulFilter {

	@Override
	public String filterType() {
		return "post";
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	/*@Override
	public Object run() {
		System.out.println("Using Post Filter");

		return null;
	}*/

	
	@Override
	public Object run() {
		System.out.println("Using Post Filter");
		
		RequestContext context = RequestContext.getCurrentContext();
		HttpServletResponse servletResponse = context.getResponse();
		
		servletResponse.addHeader("X-Sample", UUID.randomUUID().toString());
		return null;
	}

}
## Pre filter
public class PreFilter extends ZuulFilter {

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();

		System.out.println(
				"Using Pre filter    Request Method : " + request.getMethod() + " Request URL : " + request.getRequestURL().toString());

		return null;
	}

}
## Micro Service Spring
Micro Service Facture, Client, Réservation :

( POST )- /api/../add => Ajouter 
( PUT ) - /api/../edit/{id} => Modifier
( DELETE ) - /api/../delete/{id} => Suprrimer 
( GET ) - /api/../list => Afficher la liste des données
( GET ) - /api/../get/{id} => Afficher les détails d'un seul donnée

## Micro Service Node 
Micro Service Hotel :

( POST )- /api/hotel => Ajouter 
( PUT ) - /api/hotel/{id} => Modifier 
( DELETE ) - /api/hotel/{id} => Suprrimer 
( GET ) - /api/hotel => Afficher la liste entières des Hôtels
( GET ) - /api/hotel/{id} => Afficher les détails d'un Hôtel

## Config Server
Config Served is used for all MS, already configured.

## Angular 
Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.

More than 15 componenets where used.



