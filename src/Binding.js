/*
 * Contains the Binding class.
 */

'use strict';

/**
 * A Binding associates a gesture with an element and a handler function that
 * will be called when the gesture is recognized.
 *
 * @private
 */
class Binding {
  /**
   * Constructor function for the Binding class.
   *
   * @param {Element} element - The element to which to associate the gesture.
   * @param {westures-core.Gesture} gesture - A instance of the Gesture type.
   * @param {Function} handler - The function handler to execute when a gesture
   *    is recognized on the associated element.
   */
  constructor(element, gesture, handler) {
    /**
     * The element to which to associate the gesture.
     *
     * @private
     * @type {Element}
     */
    this.element = element;

    /**
     * The gesture to associate with the given element.
     *
     * @private
     * @type {Gesture}
     */
    this.gesture = gesture;

    /**
     * The function handler to execute when the gesture is recognized on the
     * associated element.
     *
     * @private
     * @type {Function}
     */
    this.handler = handler;
  }

  /**
   * Evalutes the given gesture hook, and dispatches any data that is produced.
   *
   * @private
   *
   * @param {string} hook - which gesture hook to call, must be one of 'start',
   *    'move', or 'end'.
   * @param {State} state - The current State instance.
   */
  evaluateHook(hook, state) {
    const data = this.gesture[hook](state);
    if (data) {
      this.handler({
        centroid: state.centroid,
        event:    state.event,
        phase:    hook,
        radius:   state.radius,
        type:     this.gesture.type,
        target:   this.element,
        ...data,
      });
    }
  }
}

module.exports = Binding;

