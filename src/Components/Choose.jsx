import React from 'react'
import Flexibility from "../assets/flexibility.mp4";

const Choose = () => {
  return (
    <section className='new_section'>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 mt-6'>
                    <div className='row'>

                        <div className='col-lg-5 col-md-5 col-sm-5 mt-5'>
                            <div className='container move_side_section'>
                                <h2 className='move_text w-90'>
                                Choose how you want to work
                                </h2>
                                <p className='move_para w-90'>
                                In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.
                                </p>
                            </div>
                            <a href="https://slack.com/intl/en-in/integrations" className='move_anchor' data-clog-click="" data-clog-ui-element="link_integrations">Learn more about flexible communication</a>

                        </div>
                        <div className='col-lg-1 col-md-1 col-sm-1'>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 flexibility_video'>
                            <video data-js-id="flexibility" title="A user starting a huddle and recording a video clip with the Slack app" role="img" loop="" muted="" playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.IN.webm" type="video/webm"/><source src={Flexibility} type="video/mp4"/></video>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Choose
