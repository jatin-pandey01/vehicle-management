import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeVehiclesMappingEntity } from "src/entity/employee-vehicles-mapping.entity";
import { EmployeeVehicleMappingService } from "./employee-vehicle-mapping.service";
import { EmployeeVehicleMappingController } from "./employee-vehicle-mapping.controller";

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeVehiclesMappingEntity])],
  providers: [EmployeeVehicleMappingService],
  controllers: [EmployeeVehicleMappingController],
  exports: [EmployeeVehicleMappingService]
})

export class EmployeeVehicleModule{}