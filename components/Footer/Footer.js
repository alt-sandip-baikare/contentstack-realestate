import Link from 'next/link'
import React from 'react'
import Facebook from '../Icons/Facebook'
import Github from '../Icons/Github'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import Styles from './Footer.module.scss'

function Footer() {
  return (
    <>
    <footer className={ Styles.footer + " pt-5 pb-3 mt-auto bg-gray-800"}>
        <div className="container px-5">
            <div className="row gx-5">
                <div className="col-lg-3">
                    <span className="footer-brand">Real Estate</span>
                    <p className="mb-3 text-color">See your Dream with us!</p>
                    <div className="icon-list-social mb-5 d-flex">
                        <Link className={Styles.socialIcon} href="#!">
                            <Instagram />
                        </Link>
                        <Link className={Styles.socialIcon} href="#!">
                            <Facebook />
                        </Link>
                        <Link className={Styles.socialIcon} href="#!">
                            <Github />
                        </Link>
                        <Link className={Styles.socialIcon} href="#!">
                            <Twitter />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-5">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <h4 className="text-uppercase-expanded text-xs mb-4">Product</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Landing</Link></li>
                                <li className="mb-2"><Link href="#!">Pages</Link></li>
                                <li className="mb-2"><Link href="#!">Sections</Link></li>
                                <li className="mb-2"><Link href="#!">Documentation</Link></li>
                                <li><Link href="#!">Changelog</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <h4 className="text-uppercase-expanded text-xs mb-4">Technical</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Documentation</Link></li>
                                <li className="mb-2"><Link href="#!">Changelog</Link></li>
                                <li className="mb-2"><Link href="#!">Theme Customizer</Link></li>
                                <li><Link href="#!">UI Kit</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <h4 className="text-uppercase-expanded text-xs mb-4">Includes</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Utilities</Link></li>
                                <li className="mb-2"><Link href="#!">Components</Link></li>
                                <li className="mb-2"><Link href="#!">Layouts</Link></li>
                                <li className="mb-2"><Link href="#!">Code Samples</Link></li>
                                <li className="mb-2"><Link href="#!">Products</Link></li>
                                <li className="mb-2"><Link href="#!">Affiliates</Link></li>
                                <li><Link href="#!">Updates</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-uppercase-expanded text-xs mb-4">Legal</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><Link href="#!">Privacy Policy</Link></li>
                                <li className="mb-2"><Link href="#!">Terms and Conditions</Link></li>
                                <li><Link href="#!">License</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-3 border-light" />
            <div className="row gx-5 align-items-center">
                <span className="col-md-6 small">Copyright © Your Website 2023</span>
                <div className="col-md-6 text-md-end small">
                    <Link href="#!">Privacy Policy</Link>
                     | 
                    <Link href="#!">Terms &amp; Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer