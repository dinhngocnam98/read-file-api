import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gc5_report } from '../schemas/gc5_report.schema';
import { Model } from 'mongoose';
import { Gc4_report } from '../schemas/gc4_report.schema';
import { Gc2_report } from '../schemas/gc2_report.schema';
import { Gc3_report } from '../schemas/gc3_report.schema';
import { Uv1800_report } from '../schemas/uv1800_report.schema';
import { Uv2600_report } from '../schemas/uv2600_report.schema';
import { Gc1_report } from '../schemas/gc1_report.schema';
import { Aas_report } from '../schemas/aas_report.schema';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Gc5_report.name) private Gc5_reportModel: Model<Gc5_report>,
    @InjectModel(Gc4_report.name) private Gc4_reportModel: Model<Gc4_report>,
    @InjectModel(Gc3_report.name) private Gc3_reportModel: Model<Gc3_report>,
    @InjectModel(Gc2_report.name) private Gc2_reportModel: Model<Gc2_report>,
    @InjectModel(Gc1_report.name) private Gc1_reportModel: Model<Gc1_report>,
    @InjectModel(Uv1800_report.name)
    private Uv1800_reportModel: Model<Uv1800_report>,
    @InjectModel(Uv2600_report.name)
    private Uv2600_reportModel: Model<Uv2600_report>,
    @InjectModel(Aas_report.name) private Aas_reportModel: Model<Aas_report>,
  ) {}

  findAllGc1() {
    return this.Gc1_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllGc2() {
    return this.Gc2_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllGc3() {
    return this.Gc3_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllGc4() {
    return this.Gc4_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllGc5() {
    return this.Gc5_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllUv1800() {
    return this.Uv1800_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllUv2600() {
    return this.Uv2600_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllAas() {
    return this.Aas_reportModel.find().sort({ created_at: -1 }).exec();
  }
}
