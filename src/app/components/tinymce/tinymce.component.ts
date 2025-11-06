import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-tinymce',
  standalone: true,
  imports: [EditorComponent, FormsModule],
  templateUrl: './tinymce.component.html',
  styleUrl: './tinymce.component.scss'
})
export class TinymceComponent {
content = `
    <h2>Dit is een h2 titel</h2>
    <p>Dit is prefilled tekst in de rich-text editor!</p>
  `;

  init: EditorComponent['init'] = {
    // Setup
    base_url: '/tinymce', // Pad waar gebundlede TinyMCE-bestanden staan (zie ook angular.json)
    suffix: '.min', // Suffix voor resources

    // Styling
    theme: 'silver',
    skin_url: '/assets/tinymce/ui', // Voor styling van de editor, mee gebundled in angular.json
    content_css: '/assets/tinymce/content/content.min.css', // Voor styling van tekst in de editor, mee gebundled in angular.json

    // Customization
    height: 500, // Zelf te wijzigen
    readonly: false,
    menubar: false,
    elementpath: false,
    branding: false,

    plugins: 'lists link help wordcount',
    toolbar:
      'undo redo | blocks | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | removeformat',
    block_formats:
      'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4',
    style_formats: [
      { title: 'Paragraph', block: 'p' },
      { title: 'Heading 2', block: 'h2' },
      { title: 'Heading 3', block: 'h3' },
      { title: 'Heading 4', block: 'h4' },
    ]
  };
}
