import React, { useEffect, useState } from 'react';
import './SecondPage.css';
import Image1 from '../../assets/bar1.png';
import Image2 from '../../assets/bar2.png';
import Image3 from '../../assets/bar3.png';
import Image4 from '../../assets/bar4.png';
import Im1 from '../../assets/img1.png';
import Im2 from '../../assets/img2.png';
import Im3 from '../../assets/img3.png';
import Im4 from '../../assets/img4.png';
import linklogo from '../../assets/linklogo.png';
import pictu1 from '../../assets/pictu1.jpg';
import pictu2 from '../../assets/pictu2.jpg';
import pictu3 from '../../assets/pictu3.jpg';
import pictu4 from '../../assets/pictu4.jpg';
import video1 from '../../assets/Timeline 1.mp4';
import stack1 from '../../assets/stack1.mp4';
import stack2 from '../../assets/stack2.mp4';
import stack3 from '../../assets/stack3.mp4';
import stack5 from '../../assets/stack5.mp4';
import stack6 from '../../assets/stack6.mp4';
import stack7 from '../../assets/stack7.mp4';
import stack8 from '../../assets/stack8.mp4';
import stack9 from '../../assets/stack9.mp4';
import stack10 from '../../assets/stack10.mp4';
import vid1 from '../../assets/coloumnvideo1.mp4';
import vid2 from '../../assets/coloumnvideo2.mp4';
import vid3 from '../../assets/coloumnvideo3.mp4';
import vid4 from '../../assets/coloumnvideo4.mp4';
import vid5 from '../../assets/coloumnvideo5.mp4';


const images = [Image1, Image2, Image3, Image4];
const ima = [Im1, Im2, Im3, Im4];
const videoo = [{src: stack1, name: "Template"}, {src: stack2, name: "Titles"}, {src: stack3, name: "Stickers"}, {src: stack5, name: "Stocks"}, {src: stack6, name: "Effects"}, {src: stack7, name: "Sounds"}, {src: stack8, name: "Filters"}, {src: stack9, name: "Transition"}, {src: stack10, name: "Plugins"}];
const faqs = [
  { id: 1, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 2, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 3, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 4, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 5, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
];

const FeaturesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 2000); 

      return () => clearInterval(interval);
    }, []);
  return (
    <div className="Features-Section">
        <img src={images[currentIndex]} alt="Bar" className="bar-image" />
              <img src={ima[currentIndex]} alt="Bar-photo" className="bar-image2" />
              <div className='text-first'>
                <p>Unleash Your <span>Creativity</span> in <span>AI</span> generator</p>
              </div>
              <p className='tixt'>Turn Pro to harness the power of AI, make Raycast your own with custom themes,keep your Macs in sync and more.</p>
              <video className='video1'loop autoPlay muted>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className='toxt1'>When Creativity Pops out</p>
              <p className='toxt2'>Various Styles, Countless Assets</p>
              <p className='toxt3'>Everything you need to create professional videos without the learning curve</p>
        
        
            <div className="video-container">
              {videoo.map((video, index) => (
                <div className="video-wrapper" key={index}>
                  <video
                    className="video-item"
                    src={video.src}
                    autoPlay
                    muted
                    loop
                  />
                  <p className="video-name">{video.name}</p>
                </div>
              ))}
            </div>
        
        
        
            
        
        
            <div className='allphotolinks'>
              <div className='photolinkdes'>
                <div className='description1'>
                  <p className='photo1'>🔗</p>
                  <p className='text1'>AI Video Generator</p>
                </div>
                <p className='des1'>Craft Stunning Videos from Just a Prompt</p>
                <p className='des2'>Turn simple text into fully rendered, studio-quality videos—automatically. Our AI handles direction, visuals, voiceovers, and timing so you can create pro-level content without lifting a finger.</p>
                <p className='des3'>With Shared Quicklinks, it’s easy to get everyone on the same page.</p>
                <p className='des4'>Learn about Quicklinks <span>→</span></p>
              </div>
              <div className='linkphoto'>
                <img src={pictu1} alt="Image 1" className='photo2' />
              </div>
            </div>
        
        
        
        
            <div className='allphotolinks'>
              <div className='linkphoto'>
                <img src={pictu2} alt="Image 1" className='photo2' />
              </div>
              <div className='photolinkdes'>
                <div className='description1'>
                  <p className='photo1'>🔗</p>
                  <p className='text1'>AI Video Generator</p>
                </div>
                <p className='des1'>Craft Stunning Videos from Just a Prompt</p>
                <p className='des2'>Turn simple text into fully rendered, studio-quality videos—automatically. Our AI handles direction, visuals, voiceovers, and timing so you can create pro-level content without lifting a finger.</p>
                <p className='des3'>With Shared Quicklinks, it’s easy to get everyone on the same page.</p>
                <p className='des4'>Learn about Quicklinks <span>→</span></p>
              </div>
            </div>
        
        
        
            <div className='allphotolinks'>
              <div className='photolinkdes'>
                <div className='description1'>
                  <p className='photo1'>🔗</p>
                  <p className='text1'>AI Video Generator</p>
                </div>
                <p className='des1'>Craft Stunning Videos from Just a Prompt</p>
                <p className='des2'>Turn simple text into fully rendered, studio-quality videos—automatically. Our AI handles direction, visuals, voiceovers, and timing so you can create pro-level content without lifting a finger.</p>
                <p className='des3'>With Shared Quicklinks, it’s easy to get everyone on the same page.</p>
                <p className='des4'>Learn about Quicklinks <span>→</span></p>
              </div>
              <div className='linkphoto'>
                <img src={pictu3} alt="Image 1" className='photo2' />
              </div>
            </div>
        
        
        
        
            <div className='allphotolinks'>
              <div className='linkphoto'>
                <img src={pictu4} alt="Image 1" className='photo2' />
              </div>
              <div className='photolinkdes'>
                <div className='description1'>
                  <p className='photo1'>🔗</p>
                  <p className='text1'>AI Video Generator</p>
                </div>
                <p className='des1'>Craft Stunning Videos from Just a Prompt</p>
                <p className='des2'>Turn simple text into fully rendered, studio-quality videos—automatically. Our AI handles direction, visuals, voiceovers, and timing so you can create pro-level content without lifting a finger.</p>
                <p className='des3'>With Shared Quicklinks, it’s easy to get everyone on the same page.</p>
                <p className='des4'>Learn about Quicklinks <span>→</span></p>
              </div>
            </div>
        
        
              <div className='columns5'>
                <div className='columns-head'>
                  <p className='headtext1'>Feature of</p>
                  <p className='headtext2'>AI video generator</p>
                  <p className='headtext3'>Everything you need to create professional videos without the </p>
                  <p className='headtext4'>learning curve</p>
                </div>
                <div className='columnspicture'>
                  <div className='coloumnphoto2'>
                    <div className='dimag'>
                        <video
                        className="vid1"
                        src={vid1}
                        autoPlay
                        muted
                        loop
                      />
                      <p className='million'>Online AI video generator</p>
                    </div>
                    <div className='dimag'>
                        <video
                        className="vid2"
                        src={vid2}
                        autoPlay
                        muted
                        loop
                      />
                      <p>16 million+ stock photos</p>
                      </div>
                      
                    </div>
                  
                  <div className='coloumnphoto1'>
                        <video
                        className="vid3"
                        src={vid3}
                        autoPlay
                        muted
                        loop
                      />
                      <p className='mill'>AI video generator</p>
                  
        
                  </div>
                  <div className='coloumnphoto2'>
                    <div className='dimag'>
                        <video
                        className="vid4"
                        src={vid4}
                        autoPlay
                        muted
                        loop
                      />
                      <p className='millionn'>Human-sounding voiceovers</p>
                    </div>
                    <div className='dimag'>
                        <video
                        className="vid5"
                        src={vid5}
                        autoPlay
                        muted
                        loop
                      />
                      <p className='millionn'>Collaborate in real-time with multiplayer editing</p>
                    </div>
                  
        
                  </div>
                </div>
              </div>
    </div>
  );
};

export default FeaturesSection;