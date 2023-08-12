import React from 'react'

import scss from './Article.module.scss'

export const Article: React.FunctionComponent = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.featured_image}>
        <img
          src="https://images.unsplash.com/photo-1612447733386-a93717f1fb2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
          alt="Featured image"
        />
      </div>
      <div className={scss.container}>
        <div className={scss.inner}>
          <div className={scss.content}>
            <div className={scss.content_head}>
              <span className={scss.preheader}>SMB Solutions</span>
              <h2 className={scss.headline}>The Best Phone Systems for Small Businesses</h2>
              <p className={scss.subheadline}>
                A business phone system is a multiline phone system that often includes such features as unlimited
                calling, automated menus, ring groups to call multiple employees simultaneously, voicemail-to-email
                functionality and call recording.
              </p>
            </div>
            <div className={scss.content_body}>
              <p>
                There are multiple factors to consider when choosing a business phone system. First, you want to ensure
                the system has all the functions and features your business needs. Can it support the number of
                employees who need the service? Does it have all of the tools your business relies on or would benefit
                from?
              </p>
              <p>
                While some businesses need only standard calling features like caller ID and voicemail, others want
                added functions like ring groups, an automated attendant and on-hold music. Also consider any other
                communication tools your business needs. Are you strictly looking for a system that allows you to talk
                over the phone, or are you in the market for a unified communications platform that adds functions like
                video conferencing and instant messaging? Your answer to this question will guide you in your search for
                a new business phone system.
              </p>
              <p>
                Another factor to consider is a business phone system’s reliability. A phone system is no use if it
                isn’t up and running when you need it. This is especially important for a cloud-hosted solution. Ask
                each provider what its annual uptime percentage is. If it isn’t 99.999 percent, find out what the
                company is doing to correct service issues and increase its reliability. Also ask about its
                service-level agreements and if contracts have any uptime-related clauses. Many business phone system
                providers will reimburse users if the system doesn’t meet a certain uptime percentage.
              </p>
              <p>
                If cloud-hosted systems aren’t a good fit for your business, you need a phone provider that offers
                on-premises solutions. With an on-premises system, your business houses all the equipment on-site
                instead of via cloud-hosted PBX. These setups have higher upfront costs, but not many of the ongoing
                monthly fees that cloud-based systems have.
              </p>
              <p>
                Very small businesses may want to consider whether they need a true phone system with onsite desk
                phones. Businesses that can get by with mobile phones may want to look into a virtual phone system
                instead. These connect a main business number to employees’ mobile phones. When someone calls the main
                business number, they are greeted by an automated attendant that can transfer them to a specific
                employee or department, but the call is transferred to the appropriate employee’s cell phone instead of
                a traditional office phone. In addition to being well suited for very small businesses, a virtual phone
                system is also a great fit for businesses with large remote workforces as well as solo entrepreneurs.
              </p>
              <p>
                Finally, consider what types of customer support the phone company offers. If you don’t have a full-time
                IT manager for your business or employees who can handle technical issues, you’ll want a business phone
                system provider that will be available to answer questions when you have them, preferably through
                multiple channels (like over the phone and via live chat) and online resources (such as knowledge bases
                and webinars).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
