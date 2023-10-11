import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Report } from '../schemas/report.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {}
  findAll() {
    return this.reportModel.find().sort({ created_at: -1 }).exec();
  }
}
