import { useNavigation, useRoute } from "@react-navigation/native"
import { AppStackNavigationType, AppStackParamList, AppStackRouteType } from "./navTypes"

export const useAppStack = <T extends keyof AppStackParamList>() => {
  const navigation = useNavigation<AppStackNavigationType>()
  const route = useRoute<AppStackRouteType<T>>()
  return { navigation, route }
}
export const useNativeAppStack = <T extends keyof AppStackParamList>() => {
  const navigation = useNavigation<AppStackNavigationType>()
  const route = useRoute<AppStackRouteType<T>>()
  return { navigation, route }
}
