export interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

export interface LoginProps {
  username: string;
  password: string;
}
