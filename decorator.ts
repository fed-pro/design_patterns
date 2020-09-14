// extract methods to be decorated
interface Modal {
  show(content: string): void;
  hide(): void;
}

// default modal implantation
class DefaultModal implements Modal{
  open: boolean;

  constructor() {
    this.open = false;
  }

  show(content: string): void {
    console.log('content of the modal', content);
    this.open = true;
  }

  hide(): void {
    console.log('you hide me!');
    this.open = false;
  }
}

// Base modal decorator
class ModalDecorator implements Modal {
  private _modal: Modal;

  constructor(modal: Modal) {
    this._modal = modal;
  }

  hide(): void {
    this._modal.hide()
  }

  show(content: string): void {
    this._modal.show(content);
  }

}

/************************
 *   contract decorators
 ************************/
class Dialog extends ModalDecorator {

  hide() {
    console.log('sure you want to hide?')
    super.hide();
  }
}

class ReportingModal extends ModalDecorator {

  show(content: string) {
    console.log('modal open with: ', content);
    super.show(content);
  }
}

/************************
 *   runtime
 ************************/
const modal = new DefaultModal();

modal.show('hi there!')
modal.hide()

const dialog = new Dialog(modal);

dialog.show('show me!')
dialog.hide()

