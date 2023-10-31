import { Controller, Delete, Get } from '@nestjs/common';
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

  // @Delete('/gc1')
  // deleteAllGc1() {
  //   return this.reportsService.deleteAllGc1();
  // }

  @Get('/gc2')
  findAllGc2() {
    return this.reportsService.findAllGc2();
  }

  // @Delete('/gc2')
  // deleteAllGc2() {
  //   return this.reportsService.deleteAllGc2();
  // }

  @Get('/gc3')
  findAllGc3() {
    return this.reportsService.findAllGc3();
  }

  // @Delete('/gc3')
  // deleteAllGc3() {
  //   return this.reportsService.deleteAllGc3();
  // }

  @Get('/gc4')
  findAllGc4() {
    return this.reportsService.findAllGc4();
  }

  // @Delete('/gc4')
  // deleteAllGc4() {
  //   return this.reportsService.deleteAllGc4();
  // }

  @Get('/gc5')
  findAllGc5() {
    return this.reportsService.findAllGc5();
  }

  // @Delete('/gc5')
  // deleteAllGc5() {
  //   return this.reportsService.deleteAllGc5();
  // }

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

  @Get('/aas')
  findAllAas() {
    return this.reportsService.findAllAas();
  }

  // @Delete('/aas')
  // deleteAllAas() {
  //   return this.reportsService.deleteAllAas();
  // }
}
