import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { OnlyTeacherProfileGuard } from '../profiles/guards/only-teacher.guard';
import { Profile } from '../profiles/profiles.model';
import { ProfilesModule } from '../profiles/profiles.module';
import { ProfilesService } from '../profiles/profiles.service';
import { GradesController } from './grades.controller';
import { Grades } from './grades.model';
import { GradesService } from './grades.service';

@Module({
  controllers: [GradesController],
  providers: [GradesService],
  imports: [
    SequelizeModule.forFeature([Grades, Profile]),
    AuthModule,
    ProfilesModule
  ],
  exports: [
    GradesService,
  ]
})
export class GradesModule { }
