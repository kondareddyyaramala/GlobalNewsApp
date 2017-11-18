import { Toast } from 'angular2-toaster';

export interface ToastInterface extends Toast {
  /**
   * Intended to be used as an object to push content into to
   * be displayed on the Template
   * The Component will need to enforce the documentation about what
   * the template can support
   */
  templatePayload?: ToastPayloadInterface,
  displayTimeout?: boolean // display the timeout progress bar treatment?
}

/**
 * Utilized within the Action as the interface for the Payload for Toasts
 */
export interface ToastPayloadInterface {
  type: string;
  message: string;
  title: string;
  orderNumber?: number;
  username?: string;
  confirmCallback?: Function;
  dismissCallback?: Function;
  timeoutOption?: number;
};
