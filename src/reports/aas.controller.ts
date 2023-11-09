import { Controller, Delete, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('aas')
@ApiTags('Máy AAS')
export class AasController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllAas(@Query('time') time: string) {
    return this.reportsService.findAll(time, 'aas');
  }

  // @Delete('/aas')
  // deleteAllAas() {
  //   return this.reportsService.deleteAllAas();
  // }
}
