import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReportsModule } from './reports/reports.module';
import Config from './common/config';
import { MongoDbConfig } from './common/config.interface';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<MongoDbConfig>('mongodb').databaseUrl,
      }),
      inject: [ConfigService],
    }),
    ReportsModule,
  ],
})
export class AppModule {}
