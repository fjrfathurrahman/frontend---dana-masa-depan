export interface IStudent {
  id: number;
  name?: string;
  student_number?: number;
  class?: string;
  major?: string;
  gender?: string;
  address?: string;
  email?: string;
  phone?: number;
  photo?: string;
  balance?: number;
  created_at?: string;
  updated_at?: string;
}

export interface IAdmin {
  name?: string;
  email?: string;
  role?: string;
  photo?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IInfo {
  students_count?: number;
  admins_count?: number;
  transactions_count?: number;
  total_balance?: number;
  total_deposit?: number;
  total_withdrawal?: number;
}

// export interface ResponseTransaction {
//   status: string;
//   message: string;
//   data: {
//     id: number;
//     student_id: number;
//     student: {
//       id: number;
//       name: string;
//       class: string;
//       major: string;
//       photo: string;
//     }
//     admin_id: number;
//     admin: {
//       id: number;
//       name: string;
//       email: string;
//       photo: string;
//       role: string;
//     }
//     type: string;
//     amount: number;
//     created_at: string;
//     updated_at: string;
//   };
// }
