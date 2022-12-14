import { Injectable } from '@nestjs/common';

@Injectable()
export class MaterialsService {

    findAll(): any {
        return 'Material Funcionando'
    }
}
