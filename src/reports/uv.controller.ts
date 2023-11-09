import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('')
@ApiTags('Máy UV')
export class UvController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/uv1800')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllUv1800(@Query('time') time: string) {
    return this.reportsService.findAll(time, 'uv1800');
  }

  // @Delete('/uv1800')
  // deleteAllUv1800() {
  //   return this.reportsService.deleteAllUv1800();
  // }

  @Get('/uv2600')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllUv2600(@Query('time') time: string) {
    return this.reportsService.findAll(time, 'uv2600');
  }

  // @Delete('/uv2600')
  // deleteAllUv2600() {
  //   return this.reportsService.deleteAllUv2600();
  // }
}
