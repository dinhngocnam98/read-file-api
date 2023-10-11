import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gc5_report } from '../schemas/gc5_report.schema';
import { Model } from 'mongoose';
import { Gc4_report } from '../schemas/gc4_report.schema';
import { Gc2_report } from '../schemas/gc2_report.schema';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Gc5_report.name) private Gc5_reportModel: Model<Gc5_report>,
    @InjectModel(Gc4_report.name) private Gc4_reportModel: Model<Gc4_report>,
    @InjectModel(Gc2_report.name) private Gc2_reportModel: Model<Gc2_report>,
  ) {}
  findAllGc2() {
    return this.Gc2_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllGc4() {
    return this.Gc4_reportModel.find().sort({ created_at: -1 }).exec();
  }

  findAllGc5() {
    return this.Gc5_reportModel.find().sort({ created_at: -1 }).exec();
  }
}
