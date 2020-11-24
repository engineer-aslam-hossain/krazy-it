import React, { useEffect } from 'react';
import FileUploadWithPreview from 'file-upload-with-preview';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';
import './ImagePreview.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ImagePreview = () => {
  useEffect(() => {
    const upload = new FileUploadWithPreview('myUniqueUploadId');
  }, []);

  return (
    <section className='imagePreview'>
      <Header />
      <div className='custom-file-container' data-upload-id='myUniqueUploadId'>
        <label className='custom-file-container__custom-file '>
          <input
            type='file'
            className='custom-file-container__custom-file__custom-file-input '
            accept='*'
            multiple
            aria-label='Choose File'
          />
          <input type='hidden' name='MAX_FILE_SIZE' value='10485760' />
          <span className='custom-file-container__custom-file__custom-file-control'></span>
        </label>
        <div className='custom-file-container__image-preview '></div>
        <label className='text-dark'>
          <a className='custom-file-container__image-clear' title='Clear Image'>
            &times; Clear all Image
          </a>
        </label>
      </div>
      <Footer />
    </section>
  );
};

export default ImagePreview;
