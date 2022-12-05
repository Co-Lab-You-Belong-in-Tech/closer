import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStatusStore = (set: (arg0: { userStatus: string }) => any) => ({
  userStatus: "",
  setUserStatus: (status: string) => set({ userStatus: status }),
});

// const triggerStore = (
//   set: (arg0: {
//     (state: any): { triggers: any[] };
//     (state: any): { triggers: any };
//   }) => any
// ) => ({
//   triggers: [],
//   addTrigger: (trigger: any) =>
//     set((state: { triggers: any }) => ({
//       triggers: [...state.triggers, trigger],
//     })),
//   removeTrigger: (trigger: any) =>
//     set((state: { triggers: any[] }) => ({
//       triggers: state.triggers.filter((t: any) => t !== trigger),
//     })),
// });

export const useUserStatusStore = create(
  persist(
    devtools(userStatusStore, {
      name: "userStatus",
    })
  )
);

// export const useTriggersStore = create(
//   persist(
//     devtools(triggerStore, {
//       name: "triggers",
//     }
//   ),
//   )
// );