import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gc5_report, Gc5_reportSchema } from '../schemas/gc5_report.schema';
import { Gc4_report, Gc4_reportSchema } from '../schemas/gc4_report.schema';
import { Gc2_report, Gc2_reportSchema } from '../schemas/gc2_report.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Gc5_report.name,
        schema: Gc5_reportSchema,
      },
      {
        name: Gc4_report.name,
        schema: Gc4_reportSchema,
      },
      {
        name: Gc2_report.name,
        schema: Gc2_reportSchema,
      },
    ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
