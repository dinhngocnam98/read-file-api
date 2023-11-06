import { Controller, Delete, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('aas')
@ApiTags('Máy AAS')
export class AasController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/aas')
  findAllAas() {
    return this.reportsService.findAllAas();
  }

  // @Delete('/aas')
  // deleteAllAas() {
  //   return this.reportsService.deleteAllAas();
  // }
}
