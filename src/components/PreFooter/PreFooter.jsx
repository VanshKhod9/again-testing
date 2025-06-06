import React from "react";
import './PreFooter.css';

const PreFooter = () => {
  return (
    <div className="pre-footer">
        <div className='final-container'>
            <p className='final1'>Ready to Transform Your Video <br/>Content?</p>
            <p className='final2'>Join thousands of creators who have already revolutionized their <br />content creation process.</p>
            <button className='final3'>Get Started Free</button>
            <p className='final4'>No credit card required. Cancel anytime.</p>

            <div className='closing'>
            <div className='closing1'>
                <p>Create stunning videos <br />With the power of AI</p>
                {/* <p>With the power of AI</p> */}
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
  );
};

export default PreFooter;
