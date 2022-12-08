import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DefaultProps{
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}


export const useUserStatusStore = create(
  persist(
    devtools(
      (set: (arg0: { userStatus: string }) => any) => ({
        userStatus: "",
        setUserStatus: (status: string) => set({ userStatus: status }),
      }),
      {
        name: "userStatus",
      }
    )
  )
);

// This code creates a store for the triggers component.
// The store contains an array of triggers and functions to add and remove triggers.
const TriggersStore = create<{
  triggers: DefaultProps[];
  addTrigger: (trigger: DefaultProps) => void;
  removeTrigger: (trigger: DefaultProps) => void;
}>( (set) => ({
  triggers: [],
  addTrigger: (trigger) =>
    set((state) => ({
      triggers: [...state.triggers, trigger],
    })),
  removeTrigger: (trigger) =>
    set((state) => ({
      triggers: state.triggers.filter((t) => t !== trigger),
    })),
}));


// Creates a store and persists it to local storage
export const useTriggersStore = create(
  persist(
    devtools( TriggersStore, {
      name: "triggers",
    })
  )
);
