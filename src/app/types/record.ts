export interface Record extends RecordSeed {
  id: string;
  title: string;
  date: string;
  avatar: string;
  condition: number;
  note: string;
}

/**
 * To create and update record.
 * This is type of form's model
 */
export interface RecordSeed {
  title: string;
  date: Date | string;
  condition: number;
  note: string;
}
