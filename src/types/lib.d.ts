import React from "react"

export interface PersonalData{
  name?: string,
  title?: Array<string> | string,
  birthday?: string
}
export interface Settings {
  mode: string
}
export interface SettingsContextValue{
  settings?: Settings,
  saveSettings: (settings: PersonalData) => void
}

export interface SettingsContextProviderProps{
  children?: React.ReactNode
}