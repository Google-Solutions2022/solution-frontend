import { faDownload, faFileArrowUp, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import documentData from '../../Json_files/law_docs.js'
import './CSS/LawDoc.css'
const LawDoc = () => {
  const [up, setUp] = useState("closed");
  function open() {
    const uploadC = document.getElementById("upload_container");
    const uploadB = document.getElementById("upload_body");
    if(up === "closed") {
      setUp("opened");
      uploadC.classList.remove("open");
      uploadB.classList.add("active");
    }
  }
  function close() {
    const uploadC = document.getElementById("upload_container");
    const uploadB = document.getElementById("upload_body");
    if(up === "opened") {
      setUp("opened");
      uploadC.classList.add("open");
      uploadB.classList.remove("active");
    }
  }
  return (
    <div>
      <div className="law_docs">
        <div className="upload_docs">
          <div className="upload_docs_head open" id="upload_conatiner">
            <h3 className="upload_head active" onClick={()=>open()}>Upload your document Here</h3>
            <div className="doc_upload" id="upload_body">
              <form action="../">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control updoc_name" id="floatingInput" placeholder="Document Name" />
                  {/* <label for="floatingInput">Document Name</label> */}
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control updoc_des" id="floatingInput" placeholder="Documnet Description" />
                  {/* <label for="floatingPassword">Password</label> */}
                </div>
                <div className="form_down">
                  <div className="upload_form">
                    <input type="file" id="uploadFile" hidden />
                    <label htmlFor="uploadFile">
                      <FontAwesomeIcon icon={faFileArrowUp} />
                    </label>
                  </div>
                  <div className="upload_act">
                    <button className="btn cancel_btn" onClick={close}>Cancel</button>
                    <button className="btn upload_btn">Upload</button>
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