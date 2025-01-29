import { Linking } from "react-native"

/**
 * Helper for opening a give URL in an external browser.
 */
export function openLinkInBrowser<T extends string>(url: T) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}
