import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AppLogger } from "src/service/logger.service";
import { EmployeeVehicleMappingService } from "./employee-vehicle-mapping.service";


@Controller("employee-vehicle")
@ApiTags("employee-vehicle")
export class EmployeeVehicleMappingController {
  public appLogger = new AppLogger();

  constructor(
    private readonly employeeVehicleMappingService: EmployeeVehicleMappingService
  ){}

  @Get("vehicle/:id")
  public async getByVehicleId(@Param("id") id: string){
    try {
      return await this.employeeVehicleMappingService.getByVehicleId(id);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }


  @Get("employee/:id")
  public async getByEmployeeId(@Param("id") id: string){
    try {
      return await this.employeeVehicleMappingService.getByEmployeeId(id);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Post()
  public async create(@Body() dto: any){
    try {
      return await this.employeeVehicleMappingService.create(dto);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Patch(":id")
  public async update(@Param("id") id: string, dto: any){
    try {
      return await this.employeeVehicleMappingService.update(id,dto);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Delete(":id")
  public async delete(@Param("id") id: string){
    try {
      return await this.employeeVehicleMappingService.delete(id);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

}