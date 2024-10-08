export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  
  export const initialUsers: User[] = [
    {
      id: 1,
      name: "Novan Ad Ristiawan",
      email: "novan.ristiawan@malifax.net",
      role: "Super Admin",
    },
    {
      id: 2,
      name: "Muh Tamzis Novian",
      email: "tamzisn@malifax.net",
      role: "Visitor",
    },
    {
        id: 3,
        name: "Diandra Farel Shadeva",
        email: "diandrafs@malifax.net",
        role: "Visitor",
    },
  ];
  