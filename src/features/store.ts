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

export const useEndOfCycleStore = create(
  persist(
    devtools(
      (set: (arg0: { endOfCycle: boolean }) => any) => ({
        endOfCycle: false,
        setEndOfCycle: (status: boolean) => set({ endOfCycle : status }),
      }),
      {
        name: "endOfCycle",
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
      addTrigger: (trigger: string) =>
        set((state: any) => ({
          // check if the trigger already exists and it's not empty
          triggers: state.triggers.includes(trigger) || trigger === "" ? state.triggers : [...state.triggers, trigger],
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
      addAction: (action: string) =>
        set((state: any) => ({
          // check if the action already exists and it's not empty
          actions: state.actions.includes(action) || action === "" ? state.actions : [...state.actions, action],
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
      addPartnerAction: (action: string) =>
        set((state: any) => ({
          partnerActions: state.partnerActions.includes(action) || action === "" ? state.partnerActions : [...state.partnerActions, action],
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
      addEmotion: (emotion: string) =>
        set((state: any) => ({
          // check if the emotion already exists and it's not empty
          emotions: state.emotions.includes(emotion) || emotion === "" ? state.emotions : [...state.emotions, emotion],
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
          // only add to the conflict object does not have empty values
          conflicts: Object.values(conflict).includes("") ? state.conflicts : [...state.conflicts, conflict],
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

// Creates a store and persists it to local storage
export const usePain1Store= create(
  persist(
    devtools( (set: any) => ({
      pain1: [],
      addPain1: (pain1Input: string) =>
        set((state: any) => ({
          // check if the pain already exists and it's not empty
          pain1: state.pain1.includes(pain1Input) || pain1Input === "" ? state.pain1 : [...state.pain1, pain1Input],
        })),
      removePain1: (id: string) =>
        set((state: any) => ({
          pain1: state.pain1.filter((pain: DefaultProps) => pain.id !== id),
        })),
    }), {
      name: "pain1",
    })
  )
);

// Creates a store and persists it to local storage
export const usePain2Store= create(
  persist(
    devtools( (set: any) => ({
      pain2: [],
      addPain2: (pain2Input: string) =>
        set((state: any) => ({
          // check if the pain already exists and it's not empty
          pain2: state.pain2.includes(pain2Input) || pain2Input === "" ? state.pain2 : [...state.pain2, pain2Input],
        })),
      removePain2: (id: string) =>
        set((state: any) => ({
          pain2: state.pain2.filter((pain: DefaultProps) => pain.id !== id),
        })),
    }), {
      name: "pain2",
    })
  )
);


// Creates a store and persists it to local storage
export const usePain3Store= create(
  persist(
    devtools( (set: any) => ({
      pain3: [],
      addPain3: (pain3Input: string) =>
        set((state: any) => ({
          // check if the pain already exists and it's not empty
          pain3: state.pain3.includes(pain3Input) || pain3Input === "" ? state.pain3 : [...state.pain3, pain3Input],
        })),
      removePain3: (id: string) =>
        set((state: any) => ({
          pain3: state.pain3.filter((pain: DefaultProps) => pain.id !== id),
        })),
    }), {
      name: "pain3",
    })
  )
);
