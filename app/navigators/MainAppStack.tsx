import * as Screens from "@/screens"
import { useAppTheme } from "@/utils/useAppTheme"
import { Stack } from "./navigations"

const MainAppStack = () => {
  const {
    theme: { colors },
  } = useAppTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default MainAppStack
