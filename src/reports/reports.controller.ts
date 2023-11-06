import { Controller, Delete, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('reports')
@ApiTags('Máy GC1,GC2,GC3,GC4,GC5,HPLC')
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

  @Get('/hplc')
  findAllUv1800() {
    return this.reportsService.findAllHplc();
  }

  // @Delete('/hplc')
  // deleteAllHplc() {
  //   return this.reportsService.deleteAllHplc();
  // }
}
