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
import { Hplc_report } from '../schemas/hplc_report.schema';
import { format } from 'date-fns';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Gc5_report.name) private Gc5_reportModel: Model<Gc5_report>,
    @InjectModel(Gc4_report.name) private Gc4_reportModel: Model<Gc4_report>,
    @InjectModel(Gc3_report.name) private Gc3_reportModel: Model<Gc3_report>,
    @InjectModel(Gc2_report.name) private Gc2_reportModel: Model<Gc2_report>,
    @InjectModel(Gc1_report.name) private Gc1_reportModel: Model<Gc1_report>,
    @InjectModel(Hplc_report.name) private Hplc_reportModel: Model<Hplc_report>,
    @InjectModel(Uv1800_report.name)
    private Uv1800_reportModel: Model<Uv1800_report>,
    @InjectModel(Uv2600_report.name)
    private Uv2600_reportModel: Model<Uv2600_report>,
    @InjectModel(Aas_report.name) private Aas_reportModel: Model<Aas_report>,
  ) {}

  async findAll(time: string, database: string) {
    let data = [];
    const databaseModel = await this.getDB(database);
    if (time) {
      const date = new Date(time);
      data = await databaseModel
        .find({
          date: {
            $gte: new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              0,
              0,
              0,
            ),
            $lt: new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate() + 1,
              0,
              0,
              0,
            ),
          },
        })
        .lean()
        .sort({ date: -1 })
        .exec();
    } else {
      data = await databaseModel.find().lean().sort({ date: -1 }).exec();
    }
    const result = data.map((item) => {
      if (item.date) {
        item.date = format(item.date, 'dd/MM/yyyy HH:mm:ss');
      }
      item.created_at = format(item.created_at, 'dd/MM/yyyy HH:mm:ss');
      item.updated_at = format(item.updated_at, 'dd/MM/yyyy HH:mm:ss');
      return item;
    });
    return {
      result: {
        data: result,
        count: result.length,
      },
      status: 200,
      success: true,
    };
  }
  private getDB(db: string): any {
    if (db === 'gc1') {
      return this.Gc1_reportModel;
    } else if (db === 'gc2') {
      return this.Gc2_reportModel;
    } else if (db === 'gc3') {
      return this.Gc3_reportModel;
    } else if (db === 'gc4') {
      return this.Gc4_reportModel;
    } else if (db === 'gc5') {
      return this.Gc5_reportModel;
    } else if (db === 'hplc') {
      return this.Hplc_reportModel;
    } else if (db === 'uv1800') {
      return this.Uv1800_reportModel;
    } else if (db === 'uv2600') {
      return this.Uv2600_reportModel;
    } else if (db === 'aas') {
      return this.Aas_reportModel;
    }
  }
}
