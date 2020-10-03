import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Font from '@ckeditor/ckeditor5-font/src/font';

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

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    config = {{
                        plugins: [ Font, Essentials, Paragraph, Bold, Italic ],
                        toolbar: [ 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor','undo','redo', 'clipboard', '|', 'bold', 'italic']
                    }}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default App;