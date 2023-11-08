import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Uv1800_report>;

@Schema()
export class Uv1800_report {
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

export const Uv1800_reportSchema = SchemaFactory.createForClass(Uv1800_report);
