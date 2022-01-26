import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { developmentModule } from './development/development.module';

@Module({
  imports: [developmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
