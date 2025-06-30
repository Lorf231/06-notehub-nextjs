export interface Note {
  id: number;
  title: string;
  content: string;
  tag: string;
  createAt: string;
  updateAt: string;
}

export interface NoteFormData {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shoping";
}
