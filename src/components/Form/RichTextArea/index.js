import React, { Component } from 'react';

const CKEDITOR = window.CKEDITOR;

class RichTextArea extends Component {
  componentDidMount() {
    CKEDITOR.replace(this.richTextArea);
  }
  render() {
    return (
      <textarea ref={(item) => { this.richTextArea = item; }} rows="10" cols="80">
          This is my textarea to be replaced with CKEditor.
      </textarea>
    );
  }
}

export default RichTextArea;
