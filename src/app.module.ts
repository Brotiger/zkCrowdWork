import { CacheModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { OneTimeCodeModule } from './one-time-code/one-time-code.module';
import { AuthModule } from './auth/auth.module';
import { CheckCodeService } from './check-code/check-code.service';
import { CheckCodeModule } from './check-code/check-code.module';
import { SmsService } from './sms/sms.service';
import { SmsModule } from './sms/sms.module';
import { configuration } from './config/configuration';
import { IssueModule } from './issue/issue.module';
import { UploadFile } from './upload-file/upload-file.entity';
import { UserTypeModule } from './user-type/user-type.module';

@Module({
  imports: [
    CacheModule.register(),
    ConfigModule.forRoot({
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      isGlobal: true
    }),

    TypeOrmModule.forRoot(),
    UserModule,
    OneTimeCodeModule,
    AuthModule,
    CheckCodeModule,
    SmsModule,
    IssueModule,
    UploadFile,
    UserTypeModule
  ],
  providers: [CheckCodeService, SmsService]
})
export class AppModule { }
