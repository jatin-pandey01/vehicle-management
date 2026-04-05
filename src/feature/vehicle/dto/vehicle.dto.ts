import {IsDate, IsEnum, IsNumber, IsOptional, IsString} from 'class-validator';
import { VehicleStatus, VehicleType } from 'src/entity/vehicle.entity';

export class VehicleDto{
  @IsOptional()
  @IsString()
  vehicleNumber: string;

  @IsOptional()
  @IsEnum(VehicleType)
  vehicleType: VehicleType;

  @IsOptional()
  @IsString()
  vehicleBrand: string;

  @IsOptional()
  @IsString()
  vehicleModel: string;

  @IsOptional()
  @IsNumber()
  vehicleYear: number;

  @IsOptional()
  @IsNumber()
  status: VehicleStatus;

  @IsOptional()
  @IsDate()
  insuranceExpiryDate: Date;

  @IsOptional()
  @IsDate()
  registrationExpiryDate: Date;

  @IsOptional()
  @IsDate()
  pocExpiryDate: Date;
}