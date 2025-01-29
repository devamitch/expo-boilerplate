import Constants from "expo-constants"
import { z } from "zod"

// Define schema for environment variables
const EnvSchema = z
  .object({
    PACKAGE_NAME: z.string().default("com.example.myapp"),
    APP_VERSION: z.string().default("1.0.0"),
    ITUNES_ID: z.string().optional(),
    TERMSPAGE: z.string().optional(),
    PRIVACY_PAGE: z.string().optional(),
    RAZOR_PAY_KEY: z.string().optional(),
    GOOGLE_ANDROID_KEY: z.string().optional(),
    GOOGLE_IOS_KEY: z.string().optional(),
    GOOGLE_WEB_CLIENT_ID: z.string().optional(),
    GOOGLE_WEB_CLIENT_SECRET: z.string().optional(),
    TWITTER_KEY: z.string().optional(),
    TWITTER_SECRET: z.string().optional(),
    TWITTER_URL: z.string().optional(),
    FIREBASE_API_KEY: z.string().optional(),
    OAuth0ClientId: z.string().optional(),
    OAuth0Domain: z.string().optional(),
    ISDARK_MODE: z.boolean().default(false),
    SHOULD_DARK_HEADER: z.boolean().default(false),
  })
  .partial()

// Extract environment variables from Expo Constants
const envConfig = Constants.expoConfig?.extra || {}

// Validate and parse the environment variables
export const env = EnvSchema.parse(envConfig)

// Export validated environment variables
export default env
