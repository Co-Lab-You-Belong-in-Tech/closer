/* eslint-disable */

import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import ActionOfPartner from '../components/cycles/conflictDeEscalation/ActionOfPartner';

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

// Combine all stores into one store

export const useStore = create(
  persist(
    devtools(
      (set: any) => ({
        // endOfCycle
        endOfCycle: false,
        userStatus: "",
        triggers: [],
        actions: [],
        partnerActions: [],
        // ActionOfPartner: [],
        emotions: [],
        conflicts: [],
        firstTime: true,
        pain1: [],
        pain2: [],
        pain3: [],
        pain4: [],
        // functions
        setEndOfCycle: (status: boolean) => set({ endOfCycle : status }),
        // triggers
        addTrigger: (trigger: string) =>
          set((state: any) => ({
            // check if the trigger already exists and it's not empty
            triggers: state.triggers.includes(trigger) || trigger === "" ? state.triggers : [...state.triggers, trigger],
          })),

        removeTrigger: (id: string) =>
          set((state: any) => ({
            triggers: state.triggers.filter((trigger: DefaultProps) => trigger.id !== id),
          })),
        // actions
        addAction: (action: string) =>
          set((state: any) => ({
            // check if the action already exists and it's not empty
            actions: state.actions.includes(action) || action === "" ? state.actions : [...state.actions, action],
          })),
        removeAction: (id: string) =>
          set((state: any) => ({
            actions: state.actions.filter((action: DefaultProps) => action.id !== id),
          })),
        // partnerActions
        addPartnerAction: (action: string) =>
          set((state: any) => ({
            // check if the action already exists and it's not empty
            partnerActions: state.partnerActions.includes(action) || action === "" ? state.partnerActions : [...state.partnerActions, action],
          })),
        removePartnerAction: (id: string) =>
          set((state: any) => ({
            partnerActions: state.partnerActions.filter((action: DefaultProps) => action.id !== id),
          })),
        // emotions
        addEmotion: (emotion: string) =>
          set((state: any) => ({
            // check if the emotion already exists and it's not empty
            emotions: state.emotions.includes(emotion) || emotion === "" ? state.emotions : [...state.emotions, emotion],
          })),
        removeEmotion: (id: string) =>
          set((state: any) => ({
            emotions: state.emotions.filter((emotion: DefaultProps) => emotion.id !== id),
          })),
        // conflicts
        addConflict: (conflict: object) =>
          set((state: any) => ({
            // check if the conflict already exists and it's not empty
            conflicts: state.conflicts.includes("") ? state.conflicts : [...state.conflicts, conflict],
          })),
        removeConflict: (id: string) =>
          set((state: any) => ({
            conflicts: state.conflicts.filter((conflict: ConflictProps) => conflict.id !== id),
          })),
        // firstTime
        setFirstTime: (status: boolean) => set({ firstTime: status }),
        // pain1
        addPain1: (pain: string) =>
          set((state: any) => ({
            // check if the pain already exists and it's not empty
            pain1: state.pain1.includes(pain) || pain === "" ? state.pain1 : [...state.pain1, pain],
          })),
        removePain1: (id: string) =>
          set((state: any) => ({
            pain1: state.pain1.filter((pain: DefaultProps) => pain.id !== id),
          })),
        // pain2
        addPain2: (pain: string) =>
          set((state: any) => ({
            // check if the pain already exists and it's not empty
            pain2: state.pain2.includes(pain) || pain === "" ? state.pain2 : [...state.pain2, pain],
          })),
        removePain2: (id: string) =>
          set((state: any) => ({
            pain2: state.pain2.filter((pain: DefaultProps) => pain.id !== id),
          })),
        // pain3
        addPain3: (pain: string) =>
          set((state: any) => ({
            // check if the pain already exists and it's not empty
            pain3: state.pain3.includes(pain) || pain === "" ? state.pain3 : [...state.pain3, pain],
          })),
        removePain3: (id: string) =>
          set((state: any) => ({
            pain3: state.pain3.filter((pain: DefaultProps) => pain.id !== id),
          })),
        // pain4
        addPain4: (pain: string) =>
          set((state: any) => ({
            // check if the pain already exists and it's not empty
            pain4: state.pain4.includes(pain) || pain === "" ? state.pain4 : [...state.pain4, pain],
          })),
        removePain4: (id: string) =>
          set((state: any) => ({
            pain4: state.pain4.filter((pain: DefaultProps) => pain.id !== id),
          })),
          // userStatus
          setUserStatus: (status: string) => set({ userStatus: status }),
      }),
      {
        name: "store",
      }
    )
  )
);
