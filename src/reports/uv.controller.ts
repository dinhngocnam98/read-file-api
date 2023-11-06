import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('uv')
@ApiTags('Máy UV')
export class UvController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/uv1800')
  findAllUv1800() {
    return this.reportsService.findAllUv1800();
  }

  // @Delete('/uv1800')
  // deleteAllUv1800() {
  //   return this.reportsService.deleteAllUv1800();
  // }

  @Get('/uv2600')
  findAllUv2600() {
    return this.reportsService.findAllUv2600();
  }

  // @Delete('/uv2600')
  // deleteAllUv2600() {
  //   return this.reportsService.deleteAllUv2600();
  // }
}
