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
const TriggersStore = (set: any) => ({
  triggers: [],
  addTrigger: (trigger: DefaultProps) =>
    set((state: any) => ({
      triggers: [...state.triggers, trigger],
    })),
  removeTrigger: (id: string) =>
    set((state: any) => ({
      triggers: state.triggers.filter((trigger: DefaultProps) => trigger.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const useTriggersStore = create(
  persist(
    devtools( TriggersStore, {
      name: "triggers",
    })
  )
);

// This code creates a store for the actions component.
// The store contains an array of actions and functions to add and remove actions.
const ActionsStore = (set: any) => ({
  actions: [],
  addAction: (action: DefaultProps) =>
    set((state: any) => ({
      actions: [...state.actions, action],
    })),
  removeAction: (id: string) =>
    set((state: any) => ({
      actions: state.actions.filter((action: DefaultProps) => action.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const useActionsStore = create(
  persist(
    devtools( ActionsStore, {
      name: "actions",
    })
  )
);

// This code creates a store for the actions of partner component.
// The store contains an array of actions and functions to add and remove actions.
const PartnerActionsStore = (set: any) => ({
  partnerActions: [],
  addPartnerAction: (action: DefaultProps) =>
    set((state: any) => ({
      partnerActions: [...state.partnerActions, action],
    })),
  removePartnerAction: (id: string) =>
    set((state: any) => ({
      partnerActions: state.partnerActions.filter((action: DefaultProps) => action.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const usePartnerActionsStore = create(
  persist(
    devtools( PartnerActionsStore, {
      name: "partnerActions",
    })
  )
);

// This code creates a store for the emotions component.
// The store contains an array of emotions and functions to add and remove emotions.
const EmotionsStore = (set: any) => ({
  emotions: [],
  addEmotion: (emotion: DefaultProps) =>
    set((state: any) => ({
      emotions: [...state.emotions, emotion],
    })),
  removeEmotion: (id: string) =>
    set((state: any) => ({
      emotions: state.emotions.filter((emotion: DefaultProps) => emotion.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const useEmotionsStore = create(
  persist(
    devtools( EmotionsStore, {
      name: "emotions",
    })
  )
);


// This code creates a store for the pain1 component.
// The store contains an array of pains under my reaction and functions to add and remove pains.
const pain1Store = (set: any) => ({
  pain1: [],
  addPain1: (pain1Input: string) =>
    set((state: any) => ({
      pain1: [...state.pain1, pain1Input],
    })),
  removePain1: (id: string) =>
    set((state: any) => ({
      pain1: state.pain1.filter((pain: DefaultProps) => pain.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const usePain1Store= create(
  persist(
    devtools( pain1Store, {
      name: "pain1",
    })
  )
);


// This code creates a store for the pain2 component.
// The store contains an array of answers of "Where do I hold that pain in my body?"" and functions to add and remove pains.
const pain2Store = (set: any) => ({
  pain2: [],
  addPain2: (pain2Input: string) =>
    set((state: any) => ({
      pain2: [...state.pain2, pain2Input],
    })),
  removePain2: (id: string) =>
    set((state: any) => ({
      pain2: state.pain2.filter((pain: DefaultProps) => pain.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const usePain2Store= create(
  persist(
    devtools( pain2Store, {
      name: "pain2",
    })
  )
);


// This code creates a store for the pain3 component.
// The store contains an array of answers of "If the pain had words, it would say..?"" and functions to add and remove pains.
const pain3Store = (set: any) => ({
  pain3: [],
  addPain3: (pain3Input: string) =>
    set((state: any) => ({
      pain3: [...state.pain3, pain3Input],
    })),
  removePain3: (id: string) =>
    set((state: any) => ({
      pain3: state.pain3.filter((pain: DefaultProps) => pain.id !== id),
    })),
});

// Creates a store and persists it to local storage
export const usePain3Store= create(
  persist(
    devtools( pain3Store, {
      name: "pain3",
    })
  )
);