import { BaseRecord } from '../common/type';

export interface ExpenseRecord extends BaseRecord {
  useType: string,
  outstandingExpense?: number;
  outstandingReason?: string;
}
