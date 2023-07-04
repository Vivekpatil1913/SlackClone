import React from 'react'
import Connectedness from "../assets/connectedness.mp4";

const BringTeam = () => {
  return (
    <section className='new_section'>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 mt-6'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 move_video'>

                        <video title="A connected team discussing work in multiple channels in the Slack app" role="img" data-js-id="connectedness" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.IN.webm" type="video/webm"/><source src={Connectedness} type="video/mp4"/></video>

                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-5 mt-5'>
                            <div className='container move_side_section'>
                                <h2 className='move_text'>
                                    Bring your team together
                                </h2>
                                <p className='move_para'>
                                    At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
                                </p>
                            </div>
                            <a href="https://slack.com/intl/en-in/integrations" className='move_anchor' data-clog-click="" data-clog-ui-element="link_integrations">Learn more about channels</a>

                        </div>
                        <div className='col-lg-1 col-md-1 col-sm-1 mt-5'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default BringTeam
