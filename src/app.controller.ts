import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*
El controlador se encargara de recibir las solicitudes HTTP y gestionara la respuesta 
aplicando llamando a los servicios necesarios para ejectutar los metodos para responder
*/ 

@Controller() // el decorador indica que es un controlador
export class AppController {

  /* Los servicios que usaremos se inyectan en el constructor */
  constructor(private readonly appService: AppService) {}

  @Get() // decorador que indica el tipo de peticion
  getHello(): string { // metodo que resolvera la peticion
    return this.appService.getHello(); // invocacion del metodo alojado en el servicio inyectado
  }
}
