import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeeVehiclesMappingEntity } from "src/entity/employee-vehicles-mapping.entity";
import { AppLogger } from "src/service/logger.service";
import { ObjectId, Repository } from "typeorm";

@Injectable()
export class EmployeeVehicleMappingService { 
  public appLogger = new AppLogger();
  constructor(
    @InjectRepository(EmployeeVehiclesMappingEntity)
    private employeeVehicle: Repository<EmployeeVehiclesMappingEntity>
  ) {}

  public async getByVehicleId(id: string){
    try {
      return await this.employeeVehicle.find({
        relations:["employee", "vehicle"],
        where:{
          vehicleId: new ObjectId(id)
        }
      });
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async getByEmployeeId(id:string){
    try {
      return await this.employeeVehicle.find({
        relations:["employee", "vehicle"],
        where:{
          employeeId: new ObjectId(id)
        }
      });
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async create(dto: any){
    try {
      const newMapping = this.employeeVehicle.create(dto);
      return await this.employeeVehicle.save(newMapping);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async update(id: string, dto: any){
    try {
      const exist = await this.employeeVehicle.findOne({
        where:{
          _id: new ObjectId(id)
        }
      });
  
      if(!exist){
        throw new NotFoundException("Invalid id not found");
      }
  
      Object.assign(exist,dto);
  
      return await this.employeeVehicle.save(exist);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async delete(id: string){
    try {
      await this.employeeVehicle.softDelete({
        _id: new ObjectId(id)
      });
      return { message: "Deleted successfully"}
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

}