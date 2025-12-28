export interface User {
  email: string;
  password: string;
}

export interface Users {
  valid: User;
  invalid: User;
}

export const users: Users = {
  valid: {
      email: "valid@test.com",  
    password: "Test123!"        
  },
  invalid: {
    email: "invalid@test.com",
    password: "Wrong123!"
  }
};
