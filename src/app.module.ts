import { Module } from '@nestjs/common';
import { ExcelToJsonService } from './excel-to-json.service';
import { ExcelToJsonCommand } from './excel-to-json.command';

@Module({
  imports: [],
  controllers: [],
  providers: [ExcelToJsonService, ExcelToJsonCommand],
})
export class AppModule {}
