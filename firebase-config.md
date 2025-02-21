To make the google-services.json config values accessible to Firebase SDKs, you need the Google services Gradle plugin.

Kotlin DSL (build.gradle.kts)

Groovy (build.gradle)
Add the plugin as a dependency to your project-level build.gradle file:

Root-level (project-level) Gradle file (<project>/build.gradle):
plugins {
// ...

// Add the dependency for the Google services Gradle plugin
id 'com.google.gms.google-services' version '4.3.15' apply false
}
Then, in your module (app-level) build.gradle file, add both the google-services plugin and any Firebase SDKs that you want to use in your app:

Kotlin

Java
Module (app-level) Gradle file (<project>/<app-module>/build.gradle):
plugins {
id 'com.android.application'
// Add the Google services Gradle plugin
id 'com.google.gms.google-services'
...
}

dependencies {
// Import the Firebase BoM
implementation platform('com.google.firebase:firebase-bom:32.2.3')

// TODO: Add the dependencies for Firebase products you want to use
// When using the BoM, don't specify versions in Firebase dependencies
implementation 'com.google.firebase:firebase-analytics'

// Add the dependencies for any other desired Firebase products
// <https://firebase.google.com/docs/android/setup#available-libraries>
}
By using the Firebase Android BoM, your app will always use compatible Firebase library versions. Learn more
After adding the plugin and the desired SDKs, sync your Android project with Gradle files.
