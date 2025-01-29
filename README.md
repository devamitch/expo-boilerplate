
# **Welcome to your new React Native app!**

This is a boilerplate designed to provide a fast and scalable foundation for your React Native projects.

## Getting Started

```bash
yarn
yarn start
```

To make things work on your local simulator or phone, first run [EAS build](https://github.com/infinitered/ignite/blob/master/docs/expo/EAS.md). Here are some useful shortcuts in the `package.json`:

```bash
yarn build:ios:sim # build for iOS simulator
yarn build:ios:dev # build for iOS device
yarn build:ios:prod # build for iOS production device
```

### `./assets` directory

The `assets` directory is where you can organize and store your app's assets, such as icons and images:

```tree
assets
├── icons
└── images
```

**icons**
Store your icons here, which can be used for buttons, navigation elements, etc. The recommended format is PNG.

**images**
Store other images like background images, logos, etc. PNG, JPEG, and GIF are supported.

Usage example for assets:

```typescript
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('../assets/images/my_image.png')} />
  );
};
```

## Running End-to-End Tests with Maestro

Follow the [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) guide to run tests.

## Connect With Me

Feel free to connect with me if you have any questions, suggestions, or want to collaborate! I'm always happy to chat with fellow developers.

⭐️ [GitHub Profile](https://github.com/devamitch)
📧 Email: <amit@devamit.co.in> | <amit9ch@gmail.com>
💼 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/devamitch)
# expo-boilerplate
