import { faDownload, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import documentData from '../../Json_files/law_docs.js'
import './CSS/LawDoc.css'
const LawDoc = () => {
  return (
    <div>
      <div className="law_docs">
      <div className="upload_docs">

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