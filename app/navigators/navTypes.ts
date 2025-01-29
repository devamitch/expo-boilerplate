import { NavigationContainer, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { StackNavigationProp } from "@react-navigation/stack"
import { ComponentProps } from "react"

// Tab Navigation Param List (Top-level Tabs)
export type TopTabsParamList = {
  DashboardScreen: undefined
  SearchScreen: undefined
  NotificationsScreen: undefined
  ProfileScreen: undefined
  SettingsScreen: undefined
  // Add any other top-level screens
}

// Drawer Navigation Param List (Nested Drawer inside the Stack)
export type AppDrawerParamList = {
  HomeDrawerScreen: undefined
  SearchDrawerScreen: undefined
  NotificationsDrawerScreen: undefined
  ProfileDrawerScreen: undefined
  EditProfileDrawerScreen: undefined
  HelpDrawerScreen: undefined
  GuidesDrawerScreen: undefined
  TermsDrawerScreen: undefined
  PrivacyDrawerScreen: undefined
  LogoutDrawerScreen: undefined
  TopTabsScreen: TopTabsParamList // Nested Tabs within the Drawer
  NestedStackScreen: NestedStackParamList // Nested Stack inside Drawer
}

// Nested Stack Param List (For deeply nested stacks within Drawer)
export type NestedStackParamList = {
  HomeNestedStackScreen: undefined
  NotificationsNestedStackScreen: undefined
  ProfileNestedStackScreen: undefined
  SettingsNestedStackScreen: undefined
  EditProfileNestedStackScreen: undefined
  // Add more nested screens here
}

// Main Stack Param List (Top-level parent stack)
export type MainStackParamList = {
  WelcomeMainStackScreen: undefined
  LoginMainStackScreen: undefined
  RegisterMainStackScreen: undefined
  ForgotPasswordMainStackScreen: undefined
  ResetPasswordMainStackScreen: undefined
  TermsMainStackScreen: undefined
  PrivacyMainStackScreen: undefined
  ProfileMainStackScreen: undefined
  AppDrawerScreen: AppDrawerParamList // Drawer inside Main Stack
}

// Native Stack Param List (Top-level app navigation)
export type AppStackParamList = {
  Welcome: undefined
  LoginNativeStackScreen: undefined
  RegisterNativeStackScreen: undefined
  ForgotPasswordNativeStackScreen: undefined
  ResetPasswordNativeStackScreen: undefined
  TermsNativeStackScreen: undefined
  PrivacyNativeStackScreen: undefined
  ProfileNativeStackScreen: undefined
  MainStackScreen: MainStackParamList // Main stack nested inside native stack
  // Other deeply nested screens
}

// Native Stack Navigation Props
export type AppNativeStackNavType = NativeStackScreenProps<AppStackParamList>

// Main Stack Navigation Props
export type MainStackNavType = NativeStackScreenProps<MainStackParamList>

// Drawer Navigation Props
export type AppDrawerNavType = StackNavigationProp<AppDrawerParamList>

// Nested Stack Navigation Props
export type NestedStackNavType = StackNavigationProp<NestedStackParamList>

// Tab Navigation Props
export type TabNavType = StackNavigationProp<TopTabsParamList>

// Route Types for MainStack
export type MainStackRouteType<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>

// Route Types for Drawer
export type AppDrawerRouteType<T extends keyof AppDrawerParamList> = RouteProp<
  AppDrawerParamList,
  T
>

// Route Types for Nested Stack
export type NestedStackRouteType<T extends keyof NestedStackParamList> = RouteProp<
  NestedStackParamList,
  T
>

// Route Types for Tabs
export type TopTabsRouteType<T extends keyof TopTabsParamList> = RouteProp<TopTabsParamList, T>

// Navigation Container Props
export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

// Custom Hooks for Navigators

// App Native Stack Navigation Hook
export const useAppNativeStackNavigation = () => {
  return useNavigation<AppNativeStackNavType>()
}

// Main Stack Navigation Hook
export const useMainStackNavigation = () => {
  return useNavigation<MainStackNavType>()
}

// App Drawer Navigation Hook
export const useAppDrawerNavigation = () => {
  return useNavigation<AppDrawerNavType>()
}

// Nested Stack Navigation Hook
export const useNestedStackNavigation = () => {
  return useNavigation<NestedStackNavType>()
}

// Tab Navigation Hook
export const useTabNavigation = () => {
  return useNavigation<TabNavType>()
}

// Custom Hooks for Routes

// App Native Stack Route Hook
// export const useAppNativeStackRoute = <T extends keyof AppStackParamList>() => {
//   return useRoute<AppNativeStackNavType<T>>()
// }

// Main Stack Route Hook
export const useMainStackRoute = <T extends keyof MainStackParamList>() => {
  return useRoute<MainStackRouteType<T>>()
}

// App Drawer Route Hook
export const useAppDrawerRoute = <T extends keyof AppDrawerParamList>() => {
  return useRoute<AppDrawerRouteType<T>>()
}

// Nested Stack Route Hook
export const useNestedStackRoute = <T extends keyof NestedStackParamList>() => {
  return useRoute<NestedStackRouteType<T>>()
}

// Tab Route Hook
export const useTabRoute = <T extends keyof TopTabsParamList>() => {
  return useRoute<TopTabsRouteType<T>>()
}
