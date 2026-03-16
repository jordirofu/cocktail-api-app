import type { StateCreator } from "zustand";


type Notification = {
    text: string
    error: boolean
    show: boolean
}


export type NotificationsSliceType = {
    notification: Notification
    showNotification: (payload: Omit<Notification, 'show'>) => void
    hideNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificationsSliceType> = (set, get) => ({
    notification: {
        text: "",
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotification();
        }, 3000);
    },
    hideNotification: () => {
        set((state) => ({
            notification: { ...state.notification, show: false }
        }))
    }
})