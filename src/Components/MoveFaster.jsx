import React from 'react'
import Speed from "../assets/speed.mp4";

const MoveFaster = () => {
  return (
    <section className='new_section'>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 move_video'>

                            <video data-js-id="speed" title="Using the Workday integration to quickly file an expense report in the Slack app" role="img" loop="" muted="" autoPlay playsinline=""><source src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/speed.IN.webm" type="video/webm"/><source src={Speed} type="video/mp4"/></video>

                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-5 mt-5'>
                            <div className='container move_side_section'>
                                <h2 className='move_text'>
                                Move faster with your tools in one place
                                </h2>
                                <p className='move_para'>
                                    Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack.
                                </p>
                            </div>
                            <a href="https://slack.com/intl/en-in/integrations" className='move_anchor' data-clog-click="" data-clog-ui-element="link_integrations">Learn more about the Slack platform</a>

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

export default MoveFaster
