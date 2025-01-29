import { ConfigContext, ExpoConfig } from "@expo/config"
import * as dotenv from "dotenv"

// Load environment variables from .env file
dotenv.config()

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require("ts-node/register")

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 *
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const existingPlugins = config.plugins ?? []

  return {
    ...config,
    // Add environment variables to config
    extra: {
      ...config.extra,
      PACKAGE_NAME: process.env.PACKAGE_NAME,
      APP_VERSION: process.env.APP_VERSION,
      ITUNES_ID: process.env.ITUNES_ID,
      TERMSPAGE: process.env.TERMSPAGE,
      PRIVACY_PAGE: process.env.PRIVACY_PAGE,
      RAZOR_PAY_KEY: process.env.RAZOR_PAY_KEY,
      GOOGLE_ANDROID_KEY: process.env.GOOGLE_ANDROID_KEY,
      TWITTER_KEY: process.env.TWITTER_KEY,
      GOOGLE_IOS_KEY: process.env.GOOGLE_IOS_KEY,
      GOOGLE_WEB_CLIENT_ID: process.env.GOOGLE_WEB_CLIENT_ID,
      GOOGLE_WEB_CLIENT_SECRET: process.env.GOOGLE_WEB_CLIENT_SECRET,
      TWITTER_SECRET: process.env.TWITTER_SECRET,
      TWITTER_URL: process.env.TWITTER_URL,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      OAuth0ClientId: process.env.OAuth0ClientId,
      OAuth0Domain: process.env.OAuth0Domain,
      ISDARK_MODE: process.env.ISDARK_MODE === "true",
      SHOULD_DARK_HEADER: process.env.SHOULD_DARK_HEADER === "true",
    },
    plugins: [...existingPlugins, require("./plugins/withSplashScreen").withSplashScreen],
  }
}
