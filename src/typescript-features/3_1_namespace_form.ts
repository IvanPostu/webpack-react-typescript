import { Form } from './3_namespace';

class MyForm {
  private type: Form.FormType = 'inline';
  private state: Form.FormState = 'active';

  constructor(public email: string) {}

  getInfo(): Form.FormInfo {
    return {
      type: this.type,
      state: this.state,
    };
  }
}
