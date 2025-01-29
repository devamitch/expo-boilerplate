import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParamList } from "./navTypes"

export const Stack = createNativeStackNavigator<AppStackParamList>()
