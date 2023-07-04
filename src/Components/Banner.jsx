import React from 'react'

const Banner = () => {
  return (
    <section className='banner_section'>

        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 mt-5 mb-5'>
                            <h1 className='banner_title'>
                            Made for people. <br/>
                            <span class="u-text--yellow">Built for productivity.</span>
                            </h1>
                            <p className='banner_paragarph'>
                            Connect the right people, find anything that you need and automate the rest. That’s work in Slack, your productivity platform.
                            </p>
                            <div className='btn_group'>
                            <button type="button" class="btn email_btn">Sign up with email address</button>
                            <button type="button" class="btn sign_btn"><svg className='google_img' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                            <span className='google_btn_txt'>Sign up with Google</span></button>
                            <p className='banner_para'>
                            <strong>Slack is free to try</strong> for as long as you like
                            </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 mt-4 mb-5'>
                            <div className='video_section'>
                            <video className='video_tag' title="Team discussing work in the Slack app" role="img" data-js-id="hero" loop="" muted="" playsinline="" poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.IN.jpg"><source src="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.en-IN.webm" type="video/webm"/><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.IN.mp4" type="video/mp4"/>
                            </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Banner
