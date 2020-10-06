import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import ReactHtmlParser from 'react-html-parser';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import ReactToPrint from 'react-to-print';
import Example from './text.js';
import Link from '@ckeditor/ckeditor5-link/src/link';
import UnlinkCommand from '@ckeditor/ckeditor5-link/src/unlinkcommand';
import LinkCommand from '@ckeditor/ckeditor5-link/src/linkcommand';//can use ctrl + k 
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import LinkEditing from '@ckeditor/ckeditor5-link/src/linkediting';

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           addData: '',
           addedData: 0,
          };
        this.setShowData=this.setShowData.bind(this);
       
      }
    handleChange(e, editor){
        const data = editor.getData();
        this.setState({
            addData: data
        })
    }
    setShowData(e){
        console.log('setShowData');
        var addedData = !this.state.addedData;
        this.setState({
            addedData:addedData
        });
    }
    render() {
        return (
            <div className="App" style={{textAlign: 'center'}}>
                <h2>Text Editor (using CKEditor)</h2>
                <div style={{ display:'inline-block', textAlign:'left'}}>
                    <div style={{width: '700px', display:'inline-block', marginBottom:'5px'}}>
                        <button onClick={this.setShowData}>{this.state.addedData ? 'Hide Content' : 'Show Content'}</button>
                        <br></br>
                    </div>
                    <br></br>
                    <CKEditor
                        style={{width: '100%', height: '10000px'}}
                        className='ck-editor__editable_inline'
                        editor={ ClassicEditor }
                        config = {{
                            plugins: [ Heading, 
                                Link, UnlinkCommand, LinkCommand, AutoLink, LinkEditing,
                                Autoformat, Alignment, 
                                Font, Essentials, Clipboard , 
                                Paragraph, 
                                Bold, Italic, Underline, StrikeThrough, Highlight, 
                                Image, ImageToolbar, ImageUpload,ImageCaption, ImageInsert,ImageUpload, 
                                PageBreak ],
                            toolbar: [ 
                                'heading',
                                'link', 
                                '|',
                                'alignment',
                                'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
                                'highlight',
                                'undo','redo','selectAll',         
                                'bold', 'italic', 'underline', 'strikethrough',
                                'imageInsert',
                                // 'imageUpload',
                                'pageBreak'
                            ],
                            
                        }}
                        data={this.state.addData}
                        onInit={ editor => {
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={this.handleChange.bind(this)}
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                    <br></br>
                    <div>Content to Print:
                        <div>
                            {this.state.addedData? <Example text={ReactHtmlParser(this.state.addData)}/>: ''}    
                        </div>
                                        
                </div>
                </div>                
                
                
            </div>
        );
    }
}

export default App;

