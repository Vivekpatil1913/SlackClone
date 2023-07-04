import React from 'react'

const Teams = () => {
  return (
    <section>

        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='team_slack_h1 mt-5'>
                        Teams large and small rely on Slack
                    </h1>
                    <p className='team_slack_p mt-4'>
                        Slack securely scales up to support collaboration at the world’s biggest companies.
                    </p>
                    <div className='btn_slack_grp'>
                        <button type="button" class="btn sales_btn">Meet Slack for Enterprise</button>
                        <button type="button" class="btn email_btn talk_s_btn">Talk to sales</button>
                    </div>

                    <div className='container mt-6'>
                        <div className='row text-center'>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                    <h1 className='paercent_count'>
                                        85%
                                    </h1>
                                    <p>
                                    of users say that Slack has improved communication*
                                    </p>
                                    </div>
                                    <div className='col-md-4'>
                                    <h1 className='paercent_count'>
                                        86%
                                    </h1>
                                    <p>
                                    feel that their ability to work remotely has improved*
                                    </p>
                                    </div>
                                    <div className='col-md-4'>
                                    <h1 className='paercent_count'>
                                        88%
                                    </h1>
                                    <p>
                                    feel more connected to their teams*
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Teams
