import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeeEntity } from "src/entity/employee.entity";
import { ObjectId, Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/employee.dto";
import { AppLogger } from "src/service/logger.service";

@Injectable()
export class EmployeeService{
  public appLogger = new AppLogger();
  constructor(
    @InjectRepository(EmployeeEntity)
    private employee: Repository<EmployeeEntity>
  ){}

  public async create(dto: CreateEmployeeDto) {
    try {
      const newEmployee = this.employee.create(dto);
      return await this.employee.save(newEmployee);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async updateEmployee(id: string, dto: CreateEmployeeDto){
    try {
      const employee = await this.employee.findOne({
        where:{
          _id : new ObjectId(id)
        }
      });

      if(!employee){
        throw new NotFoundException(`Employee not found.`);
      }

      Object.assign(employee, dto); 

      return await this.employee.save(dto);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async getAll(){
    try {
      return await this.employee.find();
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async getById(id: string){
    try {
      const employee =  await this.employee.findOne({
        where:{
          _id : new ObjectId(id)
        }
      });
  
      if(!employee){
        throw new NotFoundException(`Employee not found.`);
      }
  
      return employee;
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  public async delete(id: string){
    try {
      await this.employee.softDelete({
        _id: new ObjectId(id)
      });

      return { message : "Employee Deleted Successfully" };
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }


}