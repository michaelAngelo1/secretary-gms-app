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

export interface ChurchProps {
  id_regional: string;
  street: string;
  city: string;
  province: string;
  postal_code: string;
  country: string;
  phone: string;
  phone_2: string;
  email: string;
  fax: string;
  name: string;
  description: string;
  gms_site: string;
  active: string;
}

export interface UnverifiedUsersProps {
  company?: string;
  department?: string;
  division?: string;
  email: string;
  firstname: string;
  fullname: string;
  id_regional?: string;
  lastname: string;
  nickname: string;
  
  status: string;
  title?: string;
  username: string;
}

export interface UserDetailProps {
  email: string;
  firstname: string;
  lastname: string;
  fullname: string;
  username: string;
  nickname: string;
  status: string;
  title?: string;
  division?: string;
  department?: string;
  company?: string;
  id_regional?: string;
}

export interface SpeakerProps {
  id_gms_local: string;
  title: string;
  service_type: string;
  salutation: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile_phone: string;
  speaker_type: string;
  address: string;
  description: string;
  nij: string;
  birth_date: string;
  schedule_off: string;
  meals: string;
  transport_restriction: string;
}
