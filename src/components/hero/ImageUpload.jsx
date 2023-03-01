
import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import "./s.css"
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    if (selectedImages.length < 2) {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });

      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    }


    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  return (
    <section className='bx'>
      <div className='row'>
        <div className="col-md-12 col-sm-12 col-lg-12">
          {selectedImages.length < 2 && (
            <label className='img-label'>
              + Add Images
              <br />
              <span>up to 2 images</span>
              <input
                 id='img-input'
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
            </label>
          )}
        </div>
      </div>


      <div className="images" id='images'>

        {selectedImages &&
          selectedImages.map((item, index) => {
            return (

              <div key={item} className=" image" id='image'
                style={{
                  justifyContent: "center", gap: "10px"
                }}
              >
                <img
                  id='img'
                 src={item} height="300px" width={"300px"}
                  style={{
                    minWidth: "300px",
                    objectFit: "fill",
                    objectPosition: "100% 0"
                  }}
                  alt="upload" />
                <button onClick={() => deleteHandler(item)}>
                  <CancelIcon />
                </button>
              </div>
            );
          })}
      </div>
      
{selectedImages.length > 0 && (
        <button
          className="upload-btn"
          onClick={() => {
            console.log(selectedImages);
          }}
        >
          UPLOAD {selectedImages.length} IMAGE
          {selectedImages.length === 1 ? "" : "S"}
        </button>
)}
     
    </section>
  );
}

export default ImageUpload

