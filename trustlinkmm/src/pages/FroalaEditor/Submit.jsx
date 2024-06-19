import React from 'react';

const processHtmlContent = (htmlContent) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent;

    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent;
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'IMG') {
                return <img src={node.src} alt={node.alt || 'image'} style={{ maxWidth: '100%', height: 'auto' }} />;
            }

            if (node.tagName === 'A') {
                if (node.href.endsWith('.pdf') || node.href.endsWith('.doc') || node.href.endsWith('.docx') || node.href.endsWith('.xls') || node.href.endsWith('.xlsx')) {
                    return <a href={node.href} target="_blank" rel="noopener noreferrer" download>{node.textContent || node.href}</a>;
                }
                return <a href={node.href} target="_blank" rel="noopener noreferrer">{node.textContent}</a>;
            }

            return React.createElement(
                node.tagName.toLowerCase(),
                {},
                Array.from(node.childNodes).map(processNode)
            );
        }

        return null;
    };

    return Array.from(tempElement.childNodes).map(processNode);
};

export default processHtmlContent;


// const descriptionHtml = froalaEditorRef.current.editor.html.get();

{/* <FroalaEditor
tag='textarea'
config={{
    placeholderText: 'Write your message...',
    charCounterCount: false,
    toolbarButtons: [
        'bold', 'italic', 'underline', 'strikeThrough',
        'insertLink', 'insertImage', 'insertFile', 'formatOL', 'formatUL',
        'quote', 'html', 'paragraphFormat', 'fontSize'
    ],
    paragraphFormat: {
        N: 'Normal',
        H1: 'Heading 1',
        H2: 'Heading 2',
        H3: 'Heading 3',
        H4: 'Heading 4',
        H5: 'Heading 5',
        H6: 'Heading 6'
    },
    fontSize: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72'],
    imageUpload: true,
    imageUploadURL: false,
    imageUploadToS3: false,
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    events: {
        'file.beforeUpload': function (files) {
            console.log("File before upload:", files);
            handleFileUpload(files);
            return false; // Stop default upload
        },
        'image.beforeUpload': function (files) {
            if (files.length) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const result = e.target.result;
                    froalaEditorRef.current.editor.image.insert(result, null, null, froalaEditorRef.current.editor.image.get());
                };
                reader.readAsDataURL(files[0]);
            }
            return false; // Prevent default upload
        }
    }
}}
model={editorContent}
onModelChange={setEditorContent}
ref={froalaEditorRef}
/> */}



// import React from 'react';

// const processHtmlContent = (htmlContent) => {
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = htmlContent;

//     const processNode = (node) => {
//         if (node.nodeType === Node.TEXT_NODE) {
//             return node.textContent;
//         }

//         if (node.nodeType === Node.ELEMENT_NODE) {
//             if (node.tagName === 'IMG') {
//                 return <img src={node.src} alt={node.alt || 'image'} style={{ maxWidth: '100%', height: 'auto' }} />;
//             }

//             if (node.tagName === 'A') {
//                 if (node.href.endsWith('.pdf') || node.href.endsWith('.doc') || node.href.endsWith('.docx') || node.href.endsWith('.xls') || node.href.endsWith('.xlsx')) {
//                     return <a href={node.href} target="_blank" rel="noopener noreferrer" download>{node.textContent || node.href}</a>;
//                 }
//                 return <a href={node.href} target="_blank" rel="noopener noreferrer">{node.textContent}</a>;
//             }

//             return React.createElement(
//                 node.tagName.toLowerCase(),
//                 {},
//                 Array.from(node.childNodes).map(processNode)
//             );
//         }

//         return null;
//     };

//     return Array.from(tempElement.childNodes).map(processNode);
// };

// export default processHtmlContent;
