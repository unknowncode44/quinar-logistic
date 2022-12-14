import { Controller, Get } from '@nestjs/common';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {

    constructor(private ms: MaterialsService){}

    @Get() 
    findAll() {
        return this.ms.findAll()
    }
}
