import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-wysiwyg',
  standalone: true,
  imports: [EditorModule, FormsModule],
  templateUrl: './wysiwyg.component.html',
  styleUrl: './wysiwyg.component.scss'
})
export class WysiwygComponent {
  content = `
    <h2>Welkom bij TinyMCE met custom skin!</h2>
    <h3>Welkom bij TinyMCE met custom skin!</h3>
    <h4>Welkom bij TinyMCE met custom skin!</h4>
    <p>Lorem Ipsum is <a href="https://google.be" title="Dit is een link naar Google" target="_blank" rel="noopener">simply dummy text of the printing</a> and typesetting industry.</p>
    <ul>
      <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
      <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
      <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
    </ul>
    <p>It was popularised in the <em><strong>1960s with the release of Letraset</strong></em> sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  `;

  apiKey = 'hh176fkqoc5rn3a597dwmj2diq13sfxf13deyazfnj7t81yv';

  editorConfig = {
    base_url: '/assets/tinymce', // pad waar TinyMCE-bestanden staan
    suffix: '.min',
    readonly: false,
    height: 500,
    menubar: false,
    theme: 'silver',
    skin: 'vdab',
    content_css: 'vdab',
    valid_elements: '*[*]',
    block_formats:
      'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Preformatted=pre',
    style_formats: [
      { title: 'Paragraph', block: 'p' },
      { title: 'Heading 1', block: 'h1' },
      { title: 'Heading 2', block: 'h2' },
      { title: 'Heading 3', block: 'h3' },
      { title: 'Heading 4', block: 'h4' },
      { title: 'Preformatted', block: 'pre' }
    ],
    plugins: 'advlist autolink lists link image charmap preview anchor ' +
      'searchreplace visualblocks code fullscreen ' +
      'insertdatetime media table code help wordcount',
    toolbar:
      'undo redo | formatselect | bold italic underline | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | link removeformat | help'
  };
}
