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
