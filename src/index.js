

// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Font from '@ckeditor/ckeditor5-font/src/font';

// ClassicEditor
//     .create( document.querySelector( '#editor' ), {
//         plugins: [ Font, Essentials, Paragraph, Bold, Italic ],
//         toolbar: [ 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'bold', 'italic' ]
//     } )
//     .then( editor => {
//         console.log( 'Editor was initialized', editor );
//     } )
//     .catch( error => {
//         console.error( error.stack );
//     } );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

(function() {
    ReactDOM.render(<App />, document.getElementById('editor'));
})()