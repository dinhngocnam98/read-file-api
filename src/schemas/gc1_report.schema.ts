import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Gc1_report>;

@Schema()
export class Gc1_report {
  @Prop()
  folder_dir: string;

  @Prop()
  signal_1: object[];

  @Prop()
  signal_2: object[];

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now, set: (v: Date) => v || Date.now() })
  updated_at: Date;
}

export const Gc1_reportSchema = SchemaFactory.createForClass(Gc1_report);
