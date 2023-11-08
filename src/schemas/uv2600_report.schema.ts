import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Uv2600_report>;

@Schema()
export class Uv2600_report {
  @Prop()
  folder_dir: string;

  @Prop()
  file_path: string;

  @Prop()
  data_lab: object[];

  @Prop()
  date: Date;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now, set: (date: Date) => date || Date.now() })
  updated_at: Date;
}

export const Uv2600_reportSchema = SchemaFactory.createForClass(Uv2600_report);
