export class WindowRef {
  /**
   * Access the native window.
   * @returns {Window}
   */
  public get nativeWindow(): Window {
    return window;
  }
}
