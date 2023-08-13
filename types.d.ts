declare namespace JSX {
  /**
   * Represents an HTML tag with special attributes.
   */
  // type router = "/" | "/one";
  interface HtmlTag {
      /**
       * Description: Boosts or removes progressive enhancement for links and forms.
       */
      _?: string;
      
      /**
       * Description: Issues a GET request to the specified URL.
       */
      'hx-get'?: string;
      
      /**
       * Description: Issues a POST request to the specified URL.
       */
      'hx-post'?: string;
      
      /**
       * Description: Handles any event with a script inline.
       */
      'hx-on'?: string;
      
      /**
       * Description: Pushes the URL into the browser location bar, creating a new history entry.
       */
      'hx-push-url'?: string;
      
      /**
       * Description: Selects content to swap in from a response.
       */
      'hx-select'?: string;
      
      /**
       * Description: Selects content to swap in from a response, out of band (somewhere other than the target).
       */
      'hx-select-oob'?: string;
      
      /**
       * Description: Controls how content is swapped in (outerHTML, beforeend, afterend, ...).
       */
      'hx-swap'?: string;
      
      /**
       * Description: Marks content in a response to be out of band (should swap in somewhere other than the target).
       */
      'hx-swap-oob'?: string;
      
      /**
       * Description: Specifies the target element to be swapped.
       */
      'hx-target'?: string;
      
      /**
       * Description: Specifies the event that triggers the request.
       */
      'hx-trigger'?: string;
      
      /**
       * Description: Adds values to the parameters to submit with the request (JSON-formatted).
       */
      'hx-vals'?: string;

      // Add the new attributes and descriptions below
      
      /**
       * Description: Shows a confirm() dialog before issuing a request.
       */
      'hx-confirm'?: string;
      
      /**
       * Description: Issues a DELETE request to the specified URL.
       */
      'hx-delete'?: string;
      
      /**
       * Description: Disables htmx processing for the given node and any children nodes.
       */
      'hx-disable'?: string;
      
      /**
       * Description: Controls and disables automatic attribute inheritance for child nodes.
       */
      'hx-disinherit'?: string;
      
      /**
       * Description: Changes the request encoding type.
       */
      'hx-encoding'?: string;
      
      /**
       * Description: Extensions to use for this element.
       */
      'hx-ext'?: string;
      
      /**
       * Description: Adds to the headers that will be submitted with the request.
       */
      'hx-headers'?: string;
      
      /**
       * Description: Prevents sensitive data from being saved to the history cache.
       */
      'hx-history'?: string;
      
      /**
       * Description: The element to snapshot and restore during history navigation.
       */
      'hx-history-elt'?: string;
      
      /**
       * Description: Include additional data in requests.
       */
      'hx-include'?: string;
      
      /**
       * Description: The element to put the htmx-request class on during the request.
       */
      'hx-indicator'?: string;
      
      /**
       * Description: Filters the parameters that will be submitted with a request.
       */
      'hx-params'?: string;
      
      /**
       * Description: Issues a PATCH request to the specified URL.
       */
      'hx-patch'?: string;
      
      /**
       * Description: Specifies elements to keep unchanged between requests.
       */
      'hx-preserve'?: string;
      
      /**
       * Description: Shows a prompt() before submitting a request.
       */
      'hx-prompt'?: string;
      
      /**
       * Description: Issues a PUT request to the specified URL.
       */
      'hx-put'?: string;
      
      /**
       * Description: Replace the URL in the browser location bar.
       */
      'hx-replace-url'?: string;
      
      /**
       * Description: Configures various aspects of the request.
       */
      'hx-request'?: string;
      
      /**
       * Description: Has been moved to an extension. Documentation for older versions.
       */
      'hx-sse'?: string;
      
      /**
       * Description: Control how requests made by different elements are synchronized.
       */
      'hx-sync'?: string;
      
      /**
       * Description: Force elements to validate themselves before a request.
       */
      'hx-validate'?: string;
      
      /**
       * Description: Adds values dynamically to the parameters to submit with the request (deprecated, please use hx-vals).
       */
      'hx-vars'?: string;
      
      /**
       * Description: Has been moved to an extension. Documentation for older versions.
       */
      'hx-ws'?: string;
  }
}
