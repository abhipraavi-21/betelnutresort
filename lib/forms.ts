import { z } from 'zod';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const enquirySchema = z
  .object({
    type: z.enum(['stay', 'contact', 'career']),
    name: z.string().min(2, 'Please enter your name.').max(100),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().min(7, 'Please enter a phone number.').max(20),
    checkIn: z.string().optional(),
    checkOut: z.string().optional(),
    adults: z.coerce.number().int().min(1).max(20).optional(),
    children: z.coerce.number().int().min(0).max(20).optional(),
    cottages: z.coerce.number().int().min(1).max(12).optional(),
    position: z.string().max(120).optional(),
    message: z.string().max(1600).optional(),
    company: z.string().max(0).optional()
  })
  .superRefine((data, ctx) => {
    if (data.type === 'stay') {
      if (!data.checkIn) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['checkIn'], message: 'Please choose a check-in date.' });
      }
      if (!data.checkOut) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['checkOut'], message: 'Please choose a check-out date.' });
      }
      if (data.checkIn && data.checkOut) {
        const checkIn = new Date(data.checkIn);
        const checkOut = new Date(data.checkOut);
        if (checkIn < today) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['checkIn'], message: 'Check-in cannot be in the past.' });
        }
        if (checkOut <= checkIn) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['checkOut'], message: 'Check-out must be after check-in.' });
        }
      }
    }
    if (data.type === 'career' && !data.position) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['position'], message: 'Please enter the position you are applying for.' });
    }
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;
