import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Profile } from "../profiles.model";

@Injectable()
export class OnlyTeacherProfileGuard implements CanActivate {
    constructor(@InjectModel(Profile) private profileRepository: typeof Profile) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

        try {
            const profile_id = req.body.id;
            const profile = await this.profileRepository.findOne({ where: { id: profile_id }, include: { all: true } });

            if (!profile.group) {
                throw new HttpException("Not a teacher", HttpStatus.FORBIDDEN);
            }
        } catch (e) {
            console.log(e);
            return false;
        }

        return true;
    }
}