import { Optional } from "@nestjs/common";

export class CreateEmployeeDto{
  @Optional()
  employeeName: string;
 
  @Optional()
  mobileNumber: string;
 
  @Optional()
  dateOfBirth: string;
 
  @Optional()
  gender: string;
 
  @Optional()
  profilePhoto: string;
 
  @Optional()
  licenseNumber: string;
 
  @Optional()
  licenseExpiryDate: string;
 
  @Optional()
  licensePhoto: string;
 
  @Optional()
  aadharCard: string;
 
  @Optional()
  panCard: string;
}