import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill'; // Import React Quill

const RichTextEditor = () => {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: {
            container: "#toolbar",
            handlers: {
                // Custom handlers if needed
            }
        }
    };

    const formats = [
        'header', 'font', 'list', 'bullet',
        'bold', 'italic', 'underline',
        'color', 'background',
        'align', 'link', 'image',
        'blockquote', 'code-block',
    ];

    return (
        <div>
            <div id="toolbar">
                <span className="ql-formats">
                    <button className="ql-bold" title="Bold"></button>
                    <button className="ql-italic" title="Italic"></button>
                    <button className="ql-underline" title="Underline"></button>
                </span>
                <span className="ql-formats">
                    <select className="ql-header" title="Header">
                        <option value="1" title="Heading 1"></option>
                        <option value="2" title="Heading 2"></option>
                        <option value="" title="Normal"></option>
                    </select>
                </span>
                <span className="ql-formats">
                    <button className="ql-list" value="ordered" title="Ordered List"></button>
                    <button className="ql-list" value="bullet" title="Unordered List"></button>
                </span>
                <span className="ql-formats">
                    <button className="ql-link" title="Link"></button>
                    <button className="ql-image" title="Image"></button>
                </span>
                <span className="ql-formats">
                    <select className="ql-align" title="Align">
                        <option defaultValue title="Left"></option>
                        <option value="center" title="Center"></option>
                        <option value="right" title="Right"></option>
                        <option value="justify" title="Justify"></option>
                    </select>
                </span>
                <span className="ql-formats">
                    <button className="ql-blockquote" title="Blockquote"></button>
                    <button className="ql-code-block" title="Code Block"></button>
                </span>
                <span className="ql-formats">
                    <button className="ql-clean" title="Remove Formatting"></button>
                </span>
            </div>
            <ReactQuill 
                value={value} 
                onChange={setValue} 
                formats={formats}
                modules={modules}
                placeholder="Write your message..."
                style={{ height: '200px', marginBottom: '20px' }}
            />
        </div>
    );
};

export default RichTextEditor;