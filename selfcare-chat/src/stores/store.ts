import { create } from 'zustand';

interface User {
    id: number;
    name: string;
  }
  
  interface StoreState {
    users: User[];
  }
  
  const useStore = create<StoreState>(() => ({
    users: [
      { id: 1, name: 'Jane' },
      { id: 2, name: 'John' },
    ],
  }));
  
  export default useStore;