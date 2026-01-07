import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo.png";
import { RightArrow } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo"/>
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    Drop us a line sed id semper <br /> risus in hend rerit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li> <Link href="#">Blog</Link></li>
                    <li><Link href="#">Landing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link
                      href="#"
                      target="_blank"
                    >
                      PENDIDIKAN II, SADEWA GREEN MANSION 20, DENPASAR, BALI
                    </Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="https://wa.me/62881037074906" target="_blank" rel="noopener noreferrer">P: + 62 881 03707 4906</Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href="mailto:kaevnco@gmail.com">E: kaevnco@gmail.com</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow clr={whiteFooter?"currentcolor":'#F3F3F4'}/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © Kaev & Co
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <Link className="mb-10" href="#">Linkedin</Link>
                <Link className="mb-10" href="#">Twitter</Link>
                <Link className="mb-10" href="#">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
