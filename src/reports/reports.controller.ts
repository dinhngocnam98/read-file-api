import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('reports')
@ApiTags('Reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}
  @Get('/gc2')
  findAllGc2() {
    return this.reportsService.findAllGc2();
  }

  @Get('/gc4')
  findAllGc4() {
    return this.reportsService.findAllGc4();
  }

  @Get('/gc5')
  findAllGc5() {
    return this.reportsService.findAllGc5();
  }
}
