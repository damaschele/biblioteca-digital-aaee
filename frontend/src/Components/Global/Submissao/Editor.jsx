/* eslint-disable react/prop-types */
import { saveAs } from 'file-saver';
import mammoth from 'mammoth';
import PDFViewer from 'pdf-viewer-reactjs';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ file, onClose }) => {
  const [content, setContent] = useState('');
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    if (file) {
      const handleFile = async (file) => {
        const type = file.type;
        setFileType(type);

        if (type === 'text/plain') {
          const reader = new FileReader();
          reader.onload = (e) => setContent(e.target.result);
          reader.readAsText(file);
        } else if (type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          const arrayBuffer = await file.arrayBuffer();
          const { value } = await mammoth.convertToHtml({ arrayBuffer });
          setContent(value);
        } else if (type === 'application/pdf') {
          const arrayBuffer = await file.arrayBuffer();
          const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          setContent(url);
        }
      };

      handleFile(file);
    }
  }, [file]);

  const handleSave = () => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'document.txt');
  };

  return (
    <div>
      {fileType === 'application/pdf' ? (
        <PDFViewer document={{ url: content }} />
      ) : (
        <ReactQuill value={content} onChange={setContent} />
      )}
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Editor;
