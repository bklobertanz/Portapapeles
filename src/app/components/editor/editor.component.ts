import { Component, ViewChild } from '@angular/core';

 @Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  template: `<ace-editor
  [(text)]="text"
   #editor style="height:25em;"></ace-editor>
  `
})
export class EditorComponent {
  @ViewChild('editor') editor;
    text = '';
    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        this.editor.setTheme('twilight');
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });
        this.editor.getEditor().commands.addCommand({
            name: 'showOtherCompletions',
            bindKey: 'Ctrl-.',
            exec: function (editor) {
            }
        });
    }
  constructor() {}
}
