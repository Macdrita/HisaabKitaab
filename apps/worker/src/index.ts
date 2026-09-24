import { Worker } from 'bullmq';
import { ExpenseStatus } from '@repo/shared';

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
};

console.log('Starting BullMQ Receipt & OCR Worker...');

const worker = new Worker(
  'ocr-processing-queue',
  async (job) => {
    console.log(`Processing Job ID: ${job.id} - Receipt Hash Analysis`);
    // Simulated receipt OCR and hashing work
    return { status: ExpenseStatus.APPROVED, hashMatch: false };
  },
  { connection }
);

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully.`);
});