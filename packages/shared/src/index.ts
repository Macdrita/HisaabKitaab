import { z } from 'zod';

// Shared Expense Claim Validation Schema
export const CreateExpenseSchema = z.object({
  amount: z.number().positive(),
  description: z.string().min(3),
  categoryId: z.string().uuid(),
  departmentId: z.string().uuid(),
  merchantName: z.string(),
});

export type CreateExpenseInput = z.infer<typeof CreateExpenseSchema>;

// Shared Status Enum
export enum ExpenseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PAID = 'PAID',
}