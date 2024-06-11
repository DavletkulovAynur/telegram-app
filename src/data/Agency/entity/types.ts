export interface IAgencyEntity {
  id: ID;
  name: string;
  phones?: string[];
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface IAgencyResponseDTO extends IAgencyEntity {}
