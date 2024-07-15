import { z } from "zod";

const AgencyOfferSchema = z.object({
  name: z.string(),
  phone: z.string(),
  description: z.string().optional(),
});

export type IAgencyOffer = z.infer<typeof AgencyOfferSchema>;
