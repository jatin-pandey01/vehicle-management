import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { EmployeeService } from "./employee.service";
import { ObjectId } from "typeorm";
import { CreateEmployeeDto } from "./dto/employee.dto";
import { AppLogger } from "src/service/logger.service";

@ApiTags('employee')
@Controller('employee')
export class EmployeeController{
  public appLogger = new AppLogger();

  constructor(
    private readonly employeeService: EmployeeService
  ){}

  @Post()
  public async createEmployee(@Body() dto: CreateEmployeeDto){
    try {
      return await this.employeeService.create(dto);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Patch(":id")
  public async updateEmployee(@Param("id") id:string, @Body() dto: CreateEmployeeDto){
    try {
      return await this.employeeService.updateEmployee(id,dto);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Get()
  public async findAll(){
    try {
      return await this.employeeService.getAll();
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Get(":id")
  public async findById(@Param("id") id: string){
    try {
      return await this.employeeService.getById(id);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

  @Delete(":id")
  public async delete(@Param("id") id: string){
    try {
      await this.employeeService.delete(id);
    } catch (error) {
      this.appLogger.error(error);
      throw error;
    }
  }

}