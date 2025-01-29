import { useThemeProvider } from "@/utils/useAppTheme"
import { NavigationContainer } from "@react-navigation/native"
import Config from "../config"
import MainAppStack from "./MainAppStack"
import { NavigationProps } from "./navTypes"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

const exitRoutes = Config.exitRoutes

export const AppNavigator = (props: NavigationProps) => {
  const { themeScheme, navigationTheme, setThemeContextOverride, ThemeProvider } =
    useThemeProvider()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <ThemeProvider value={{ themeScheme, setThemeContextOverride }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme} {...props}>
        <MainAppStack />
      </NavigationContainer>
    </ThemeProvider>
  )
}
