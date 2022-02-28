import { faAngleDoubleRight, faCancel, faDownload, faFileLines, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { storage } from '../../Firebase/firebase.js'
import documentData from '../../Json_files/law_docs.js'
import './CSS/LawDoc.css'
const LawDoc = () => {
  //upload file logic 
  const [upFileLink, setupFileLink] = useState("");
  const uploadForm = (e) => {
    e.preventDefault();
    console.log(e.target[1].files[0]);
    const file = e.target[1].files[0];
    console.log(file);
    uploadFiles(file);
    console.log(upFileLink);
  }

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/lawFiles/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      console.log(prog);
    }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            setupFileLink(url);
            console.log(url);
          })
      })
  }

  //upload container logic
  const [up, setUp] = useState("close");

  const upload = () => {
    const uploadContainer = document.getElementById('up_container');
    if (up === 'close') {
      uploadContainer.classList.add("active");
      setUp("open");
    }
    else {
      uploadContainer.classList.remove("active");
      setUp("close");
    }
  }
  return (
    <div>
      <div className="law_docs">
        <div className="upload_docs">
          <div className="upload_docs_head" id="upload_conatiner" onClick={upload}>
            <h3 className="upload_head" >Upload your document Here</h3>
          </div>
          <div className="upload_docs_body" id='up_container'>
            <div className="upload_body">
              <form onSubmit={uploadForm} className='upload_form'>
                <div className="upload_col">
                  <input type="text" className='upload_doc_name' placeholder='Document Name' />
                </div>
                <div className="upload_col">
                  <div className="upload_column">
                    <div className="upload_row">
                      <input type="file" name="" id="uploadFile" hidden />
                      <label htmlFor="uploadFile" className="uploadFileicon">
                        <FontAwesomeIcon icon={faFileUpload} />
                      </label>
                    </div>
                    <div className="upload_row">
                      <div className="upload_opts">
                        <div className="upload_btn">
                          <div className='btn_s btn' onClick={upload}>
                            <FontAwesomeIcon icon={faCancel} /> Cancel
                          </div>
                        </div>
                        <div className="upload_btn btn_submit">
                          <button type='submit' className="btn_s btn">
                            <FontAwesomeIcon icon={faAngleDoubleRight} /> Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="docs_available">
          <h3>Uploaded / Available Documents</h3>
          <div className="available_doc">
            {documentData.map((document) => (
              <div className="doc_card card" key={document._id}>
                <div className="doc_left">
                  <div className="doc_logo">
                    <div className="logo_doc">
                      <FontAwesomeIcon icon={faFileLines} />
                    </div>
                  </div>
                  <div className="doc_name">
                    <h4>{document.docName}</h4>
                  </div>
                </div>
                <div className="doc_right">
                  <div className="more_info">
                    <div className="issuer">
                      <h5>{document.uploadName}</h5>
                    </div>
                    <div className="issue_date">
                      <h6>{document.day}, {document.date}</h6>
                    </div>
                  </div>
                  <div className="down_logo">
                    <div className="logo_down">
                      {/* <img className="logo_img" src={downloadLogo} alt="" /> */}
                      <FontAwesomeIcon icon={faDownload} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LawDoc