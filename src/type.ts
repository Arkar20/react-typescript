export type HeaderTypes = { title: string; message?: string };

export type GreetTypes = {
  greet: (event: React.MouseEvent<HTMLButtonElement>, number: number) => void;
};
export type BriefType = {
  children: React.ReactNode;
};
export type UserType = {
  name?: string;
  email?: string;
};
