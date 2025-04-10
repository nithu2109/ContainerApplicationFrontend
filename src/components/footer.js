import React from 'react'

function Footer() {
  return (
    <>
        <footer className="footer py-4  ">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-4 mb-lg-0 mb-4">
                    <div className="copyright text-center text-sm text-muted text-lg-start">
                      © , made with ❤️ <i className="fa fa-heart" /> by &nbsp;
                      <a
                        // href="https://www.google.com/"
                        // className="font-weight-bold"
                        // target="_blank"
                      >
                        Bandi Niraali &nbsp;
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                      <li className="nav-item">
                        <a
                          href="https://www.google.com/"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          TAMUCC
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.tamucc.edu/"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.google.com/"
                          className="nav-link text-muted"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.google.com/"
                          className="nav-link pe-0 text-muted"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
    </>
  )
}

export default Footer