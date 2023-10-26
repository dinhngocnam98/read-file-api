import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('reports')
@ApiTags('Reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/gc1')
  findAllGc1() {
    return this.reportsService.findAllGc1();
  }

  @Get('/gc2')
  findAllGc2() {
    return this.reportsService.findAllGc2();
  }

  @Get('/gc3')
  findAllGc3() {
    return this.reportsService.findAllGc3();
  }

  @Get('/gc4')
  findAllGc4() {
    return this.reportsService.findAllGc4();
  }

  @Get('/gc5')
  findAllGc5() {
    return this.reportsService.findAllGc5();
  }

  @Get('/uv1800')
  findAllUv1800() {
    return this.reportsService.findAllUv1800();
  }

  @Get('/uv2600')
  findAllUv2600() {
    return this.reportsService.findAllUv2600();
  }

  @Get('/aas')
  findAllAas() {
    return this.reportsService.findAllAas();
  }
}
