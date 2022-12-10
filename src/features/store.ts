import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DefaultProps{
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ConflictProps{
  id?: string;
  name: string;
  conflictDate: string;
  conflictIntensity: string;
  createdAt?: string;
  updatedAt?: string;
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

// Creates a store and persists it to local storage
// The store contains an array of triggers and functions to add and remove triggers.
export const useTriggersStore = create(
  persist(
    devtools( (set: any) => ({
      triggers: [],
      addTrigger: (trigger: DefaultProps) =>
        set((state: any) => ({
          triggers: [...state.triggers, trigger],
        })),
      removeTrigger: (id: string) =>
        set((state: any) => ({
          triggers: state.triggers.filter((trigger: DefaultProps) => trigger.id !== id),
        })),
    }), {
      name: "triggers",
    })
  )
);

// Creates a store and persists it to local storage
// The store contains an array of actions and functions to add and remove actions.
export const useActionsStore = create(
  persist(
    devtools( (set: any) => ({
      actions: [],
      addAction: (action: DefaultProps) =>
        set((state: any) => ({
          actions: [...state.actions, action],
        })),
      removeAction: (id: string) =>
        set((state: any) => ({
          actions: state.actions.filter((action: DefaultProps) => action.id !== id),
        })),
    }), {
      name: "actions",
    })
  )
);


// Creates a store and persists it to local storage
// The store contains an array of actions and functions to add and remove actions.
export const usePartnerActionsStore = create(
  persist(
    devtools( (set: any) => ({
      partnerActions: [],
      addPartnerAction: (action: DefaultProps) =>
        set((state: any) => ({
          partnerActions: [...state.partnerActions, action],
        })),
      removePartnerAction: (id: string) =>
        set((state: any) => ({
          partnerActions: state.partnerActions.filter((action: DefaultProps) => action.id !== id),
        })),
    }), {
      name: "partnerActions",
    })
  )
);


// Creates a store and persists it to local storage
// The store contains an array of emotions and functions to add and remove emotions.
export const useEmotionsStore = create(
  persist(
    devtools( (set: any) => ({
      emotions: [],
      addEmotion: (emotion: DefaultProps) =>
        set((state: any) => ({
          emotions: [...state.emotions, emotion],
        })),
      removeEmotion: (id: string) =>
        set((state: any) => ({
          emotions: state.emotions.filter((emotion: DefaultProps) => emotion.id !== id),
        })),
    }), {
      name: "emotions",
    })
  )
);



// Creates a store and persists it to local storage
// The store contains an array of conflicts and functions to add and remove conflicts.
export const useConflictsStore = create(
  persist(
    devtools( (set: any) => ({
      conflicts: [],
      addConflict: (conflict: object) =>
        set((state: any) => ({
          conflicts: [...state.conflicts, conflict],
        })),
      removeConflict: (id: string) =>
        set((state: any) => ({
          conflicts: state.conflicts.filter((conflict: ConflictProps) => conflict.id !== id),
        })),
    }), {
      name: "conflicts",
    })
  )
);

