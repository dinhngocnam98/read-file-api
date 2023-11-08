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

  async findAllGc1(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      console.log(date);
      data = await this.Gc1_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Gc1_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllGc2(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      console.log(date);
      data = await this.Gc2_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Gc2_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllGc3(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      console.log(date);
      data = await this.Gc3_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Gc3_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllGc4(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      console.log(date);
      data = await this.Gc4_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Gc4_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllGc5(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      data = await this.Gc5_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Gc5_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllUv1800(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      data = await this.Uv1800_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Uv1800_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllUv2600(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      data = await this.Uv2600_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Uv2600_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllHplc(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      console.log(date);
      data = await this.Hplc_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Hplc_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }

  async findAllAas(time: string) {
    let data = [];
    if (time) {
      const date = new Date(time);
      console.log(date);
      data = await this.Aas_reportModel.find({
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
        .sort({ date: -1 })
        .exec();
    } else {
      data = await this.Aas_reportModel.find().sort({ date: -1 }).exec();
    }

    return {
      result: {
        data: data,
        count: data.length,
      },
      status: 200,
      success: true,
    };
  }
}
