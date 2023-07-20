import { VacationRequestInterface } from 'interfaces/vacation-request';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  vacation_balance?: number;
  payroll_information: string;
  user_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  vacation_request?: VacationRequestInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    vacation_request?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  payroll_information?: string;
  user_id?: string;
  company_id?: string;
}
