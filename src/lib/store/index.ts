import { create } from 'zustand'

interface GlobalStore {
  isSidebarOpen: boolean
  toggleSidebarState: (state?: boolean) => void
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebarState: (state) =>
    set((store) => ({ isSidebarOpen: typeof state === 'boolean' ? state : !store.isSidebarOpen })),
}))
