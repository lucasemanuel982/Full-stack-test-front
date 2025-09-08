export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface TableColumn {
  key: keyof User;
  label: string;
  width: string;
  className: string;
}
