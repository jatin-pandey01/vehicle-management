import { Module, UsePipes } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleEntity } from './entity/vehicle.entity';
import { FuelEntity } from './entity/fuel.entity';
import { VehiclesModule } from './feature/vehicle/vehicle.module';
import { EmployeeModule } from './feature/employee/employee.module';
import { EmployeeVehicleModule } from './feature/employee-vehicle-mapping/employee-vehicle-mapping.module';
import { EmployeeEntity } from './entity/employee.entity';
import { EmployeeVehiclesMappingEntity } from './entity/employee-vehicles-mapping.entity';
import { BankDetailsEntity } from './entity/bank-details.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url: process.env.DATABASE_URL,
      entities:[VehicleEntity, EmployeeEntity, BankDetailsEntity, EmployeeVehiclesMappingEntity]
    }),
    VehiclesModule,
    EmployeeModule,
    EmployeeVehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
