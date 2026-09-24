import express from 'express';
import cors from 'cors';
import { CreateExpenseSchema, ExpenseStatus } from '@repo/shared';
import { db } from '@repo/db';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/expenses', async (req, res) => {
  const result = CreateExpenseSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }

  // Example database usage
  const users = await db.user.findMany();

  return res.json({ 
    message: 'Expense received', 
    status: ExpenseStatus.PENDING, 
    data: result.data,
    usersCount: users.length 
  });
});

app.listen(4000, () => {
  console.log('API running on http://localhost:4000');
});