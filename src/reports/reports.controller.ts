import {Controller, Delete, Get, Query} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('reports')
@ApiTags('Máy GC1,GC2,GC3,GC4,GC5,HPLC')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/gc1')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllGc1(@Query('time') time: string) {
    return this.reportsService.findAllGc1(time);
  }

  // @Delete('/gc1')
  // deleteAllGc1() {
  //   return this.reportsService.deleteAllGc1();
  // }

  @Get('/gc2')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllGc2(@Query('time') time: string) {
    return this.reportsService.findAllGc2(time);
  }

  // @Delete('/gc2')
  // deleteAllGc2() {
  //   return this.reportsService.deleteAllGc2();
  // }

  @Get('/gc3')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllGc3(@Query('time') time: string) {
    return this.reportsService.findAllGc3(time);
  }

  // @Delete('/gc3')
  // deleteAllGc3() {
  //   return this.reportsService.deleteAllGc3();
  // }

  @Get('/gc4')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllGc4(@Query('time') time: string) {
    return this.reportsService.findAllGc4(time);
  }

  // @Delete('/gc4')
  // deleteAllGc4() {
  //   return this.reportsService.deleteAllGc4();
  // }

  @Get('/gc5')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllGc5(@Query('time') time: string) {
    return this.reportsService.findAllGc5(time);
  }

  // @Delete('/gc5')
  // deleteAllGc5() {
  //   return this.reportsService.deleteAllGc5();
  // }

  @Get('/hplc')
  @ApiQuery({
    name: 'time',
    type: String,
    description: 'DD/MM/YYYY',
    required: false,
  })
  findAllUv1800(@Query('time') time: string) {
    return this.reportsService.findAllHplc(time);
  }

  // @Delete('/hplc')
  // deleteAllHplc() {
  //   return this.reportsService.deleteAllHplc();
  // }
}
