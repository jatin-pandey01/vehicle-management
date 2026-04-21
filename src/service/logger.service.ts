import { ConsoleLogger, Injectable, LoggerService } from "@nestjs/common";

@Injectable()
export class AppLogger extends ConsoleLogger implements LoggerService{
  constructor(context?: string){
    super();
    this.setLogLevels(['debug','log','warn','error']);
    this.setContext(context);
  }
}