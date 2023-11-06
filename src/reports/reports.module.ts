import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gc5_report, Gc5_reportSchema } from '../schemas/gc5_report.schema';
import { Gc4_report, Gc4_reportSchema } from '../schemas/gc4_report.schema';
import { Gc2_report, Gc2_reportSchema } from '../schemas/gc2_report.schema';
import { Gc3_report, Gc3_reportSchema } from '../schemas/gc3_report.schema';
import {
  Uv1800_report,
  Uv1800_reportSchema,
} from '../schemas/uv1800_report.schema';
import {
  Uv2600_report,
  Uv2600_reportSchema,
} from '../schemas/uv2600_report.schema';
import { Aas_report, Aas_reportSchema } from '../schemas/aas_report.schema';
import { Gc1_report, Gc1_reportSchema } from '../schemas/gc1_report.schema';
import { AasController } from './aas.controller';
import { UvController } from './uv.controller';
import { Hplc_report, Hplc_reportSchema } from '../schemas/hplc_report.schema';
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
        name: Gc3_report.name,
        schema: Gc3_reportSchema,
      },
      {
        name: Gc2_report.name,
        schema: Gc2_reportSchema,
      },

      {
        name: Gc1_report.name,
        schema: Gc1_reportSchema,
      },
      {
        name: Uv1800_report.name,
        schema: Uv1800_reportSchema,
      },
      {
        name: Uv2600_report.name,
        schema: Uv2600_reportSchema,
      },
      {
        name: Aas_report.name,
        schema: Aas_reportSchema,
      },
      {
        name: Hplc_report.name,
        schema: Hplc_reportSchema,
      },
    ]),
  ],
  controllers: [ReportsController, AasController, UvController],
  providers: [ReportsService],
})
export class ReportsModule {}
