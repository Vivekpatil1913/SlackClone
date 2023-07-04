import React from 'react'
import SEEK from "../assets/logo-seek.png";
import Xero from "../assets/logo-xero.png";
import REA from "../assets/rea.png";
import RMIT from "../assets/rmit.png";
import IBM from "../assets/logo-ibm.png";
import Deliveroo from "../assets/deliveroo.png";

const TrustedBy = () => {
  return (
    <section className='new_section trusted_by_section'>

    <p className='trusted_para'>
        Trusted by companies all over the world
    </p>

    <div className='container trusted_container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-6 logo_item'>
                        <img alt="SEEK" height="35" width="102" loading="lazy" class="lazyload" data-src={SEEK} data-srcset="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png 1x, https://a.slack-edge.com/ce51938/marketing/img/logos/company/_color/logo-seek@2x.png 2x" src={SEEK} srcset="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png 1x, https://a.slack-edge.com/ce51938/marketing/img/logos/company/_color/logo-seek@2x.png 2x"/>
                    </div>
                     <div className='col-lg-2 col-md-2 col-sm-6 logo_item'>
                     <img alt="Xero" height="35" width="50" loading="lazy" class="lazyload" data-src={Xero} data-srcset="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png 1x, https://a.slack-edge.com/ce51938/marketing/img/logos/company/_color/logo-xero@2x.png 2x" src={Xero} srcset="https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png 1x, https://a.slack-edge.com/ce51938/marketing/img/logos/company/_color/logo-xero@2x.png 2x"/>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 logo_item'>
                        <img alt="REA Group" height="35" width="154" loading="lazy" class="lazyload" data-src={REA} data-srcset="https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png 1x, https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea@2x.png 2x" src={REA} srcset="https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png 1x, https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea@2x.png 2x"/>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 logo_item'>
                        <img alt="RMIT Online" height="35" width="118" loading="lazy" class="lazyload" data-src={RMIT} data-srcset="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png 1x, https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit@2x.png 2x" src={RMIT} srcset="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png 1x, https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit@2x.png 2x"/>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 logo_item'>
                        <img alt="IBM" height="35" width="90" loading="lazy" class="lazyload" data-src={IBM} data-srcset="https://a.slack-edge.com/a121d33/marketing/img/digital-hq/logo-ibm.png 1x, https://a.slack-edge.com/a121d33/marketing/img/digital-hq/logo-ibm@2x.png 2x" src={IBM} srcset="https://a.slack-edge.com/a121d33/marketing/img/digital-hq/logo-ibm.png 1x, https://a.slack-edge.com/a121d33/marketing/img/digital-hq/logo-ibm@2x.png 2x"/>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-6 logo_item'>
                        <img alt="Deliveroo" height="35" width="143" loading="lazy" class="lazyload" data-src={Deliveroo} data-srcset="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png 1x, https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo@2x.png 2x" src={Deliveroo} srcset="https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png 1x, https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo@2x.png 2x"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </section>
  )
}

export default TrustedBy
