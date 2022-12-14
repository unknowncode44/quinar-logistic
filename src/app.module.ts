import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialsService } from './modules/materials/materials.service';
import { MaterialsController } from './modules/materials/materials.controller';

@Module({
  imports: [],
  controllers: [AppController, MaterialsController],
  providers: [AppService, MaterialsService],
})
export class AppModule {}
