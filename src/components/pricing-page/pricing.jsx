import React from "react";
import { useState } from "react";
import './pricing.css';
import faq from '../../assets/last2.jpg'
import explain from '../../assets/explain.png'
import price from '../../assets/pricing.png'

const faqs = [
  { id: 1, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 2, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 3, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 4, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 5, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('yearly');
    const [open, setOpen] = useState(null);
    const toggle = i => setOpen(open === i ? null : i);
  return (
    <div className="pricing-container">




        <div className="header">
            <div className="first-page">
                <div className="Company-Name">
                <p>Lavatar AI</p>
                </div>
                <div className="All-Pages">
                <p>Lavatar Studio</p>
                <p>How It Works</p>
                <p>Testimonials</p>
                <p>Pricing</p>
                <p>Contact Us</p>
                </div>
                <div className="Login-button">
                <button className="login">Login</button>
                <button className="sign">Sign Up</button>
                </div>
            </div>

        </div>
        <div className="pricing-wrapper">
            <h2 className="pricing-title">Simple <span>Pricing</span></h2>
            <p className="pricing-subtitle">Choose which Plan suits your organization best.</p>

            <div className="billing-toggle">
                <button
                className={billingCycle === 'monthly' ? 'active' : ''}
                onClick={() => setBillingCycle('monthly')}
                >
                Monthly
                </button>
                <button
                className={billingCycle === 'yearly' ? 'active' : ''}
                onClick={() => setBillingCycle('yearly')}
                >
                Yearly
                </button>
            </div>

            <div className="pricing-cards">
                {/* Free Plan */}
                <div className="card">
                <h3>Free Team Plan</h3>
                <p className="price">$0 <span>/ month / user</span></p>
                <ul>
                    <li>✔️ 5 videos per month</li>
                    <li>✔️ 720p export quality</li>
                    <li>✔️ Basic templates</li>
                    <li>✔️ Private Store</li>
                </ul>
                <button className="primary-button">Create Organization</button>
                </div>

                {/* Paid Plan */}
                <div className="card featured">
                <h3 className="highlight">Paid Team Plan</h3>
                <div className="price-with-badge">
                    <p className="price">$12</p>
                    <span>/ month / user</span>
                    <span className="discount-badge">-20%</span>
                </div>
                <p className="billed-note">$144 billed annually</p>
                <ul>
                    <li>✔️ Unlimited videos</li>
                    <li>✔️ 4K export quality</li>
                    <li>✔️ All templates</li>
                    <li>✔️ Advanced AI features</li>
                    <li>✔️ Private Store</li>
                </ul>
                <button className="secondary-button">Create Organization</button>
                </div>

                {/* Business Plan */}
                <div className="card">
                <h3>Business</h3>
                <p className="price">$79 <span>/ month / user</span></p>
                <ul>
                    <li>✔️ Up to 5 Shared Commands</li>
                    <li>✔️ Up to 30 Shared Quicklinks</li>
                    <li>✔️ Up to 30 Shared Snippets</li>
                    <li>✔️ Private Store</li>
                </ul>
                <button className="primary-button">Create Organization</button>
                </div>
            </div>
            </div>
            

            <div className="pricing-explain">
                <img src={explain} alt="" />
            </div>




            <div className="help-container">
                <div className="help-text">
                    <h2>Need help finding the <br />right <span>Lavatar plan </span>for your needs?</h2>
                    <p>Talk to our support team 24/7</p>
                    <button className="contact-button">Talk To Us</button>
                    <img src={price} alt="" />
                </div>
            </div>




            <div className="testimonials-wrapper">
                <h2 className="testimonials-heading">
                    People <span>❤️</span> Lavatar
                </h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <div className="user-icon">j</div>
                        <p className="quote">“</p>
                        <p className="testimonial-text">
                            Holy guacamole. <br />
                            This thing is kinda insane
                        </p>
                        <p className="username">jesus69420, Discord</p>
                    </div>

                    <div className="testimonial-card">
                        <div className="user-icon">g</div>
                        <p className="quote">“</p>
                        <p className="testimonial-text">
                            Looks really good, huge potential!
                        </p>
                        <p className="username">grandslam59, Discord</p>
                    </div>


                    <div className="testimonial-card">
                        <div className="user-icon">g</div>
                        <p className="quote">“</p>
                        <p className="testimonial-text">
                            Looks really good, huge potential!
                        </p>
                        <p className="username">grandslam59, Discord</p>
                    </div>
                </div>
            </div>






        <div className="faq-container-x">
            <div className="y1">
                <div className="y2">
                <h2>
                    FREQUENTLY<br/>ASK <span className="highlight">QUESTIONS</span>
                </h2>
                {faqs.map((f, i) => (
                    <div key={f.id} className="box">
                    <div onClick={() => toggle(i)} className="btn">
                        {f.id}. {f.q}
                        <span className="icon">{open === i ? '-' : '+'}</span>
                    </div>
                    {open === i && <div className="answer">{f.a}</div>}
                    </div>
                ))}
                </div>
                <div className="y3">
                <img src={faq} alt="FAQ" />
                </div>
            </div>
        </div>


        <div className="pre-footer">
            <div className='final-container'>
                <p className='final1'>Ready to Transform Your Video <br/>Content?</p>
                <p className='final2'>Join thousands of creators who have already revolutionized their <br />content creation process.</p>
                <button className='final3'>Get Started Free</button>
                <p className='final4'>No credit card required. Cancel anytime.</p>

                <div className='closing'>
                <div className='closing1'>
                    <p>Create stunning videos</p>
                    <p>With the power of AI</p>
                </div>
                <div className='closing2'>
                    <div>
                    <p>Product</p>
                    <div className='you'>
                        <p>Feature</p>
                        <p>Template</p>
                        <p>Pricing</p>
                        <p>Tesmonals</p>
                    </div>
                    </div>
                    <div>
                    <p>Resources</p>
                    <div className='you'>
                        <p>Feature</p>
                        <p>Template</p>
                        <p>Pricing</p>
                        <p>Tesmonals</p>
                    </div>
                    </div>
                    <div>
                    <p>Company</p>
                    <div className='you'>
                        <p>Feature</p>
                        <p>Template</p>
                        <p>Pricing</p>
                        <p>Tesmonals</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className='line'></div>
            </div>
        </div>








        <div className="footer">
            <div className='Complete'>
            <p>Lavatar AI</p>
            <div className="social-container">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="social-icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" className="social-icon" />
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="social-icon" />
            </div>
            </div>    
        </div>

    </div>









    




    
  );
};

export default Pricing;
