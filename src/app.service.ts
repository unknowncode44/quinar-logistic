import { Injectable } from '@nestjs/common';

// los servicios se encargan de la logica del negocio

@Injectable() // con este decorador definimos que el servicio con su logica sera inyectado en el controlador.
export class AppService {

  /* Dentro de la clase de los servicios van los metodos que seran llamados desde el controlador */

  getHello(): string {
    return 'Hello World!';
  }
}
