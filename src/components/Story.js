import React from 'react'
// import storyImage from '../assets/images/story.jpg'
import storyImage from '../assets/images/OurStory3.jpg'
function Story() {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              {/* <div
                className='story-img-2 story-wedding'
              ></div> */}
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
            They’ve been in some dark places and been down some bad roads, yet, in the 
            middle of an ordinary life, they had found a fairy tale. God gave them an affirmation. 
            An affirmation that in a blink of an eye, their whole life and future changed. 
            </p>
            <p>
              It all happened on a Sunday night when she was playing. 
              And out of nowhere and in a way completely unexpected, unbelievable and unanticipated. 
              She came face to face with a man who seemed..familiar. 
            </p>
            <p>
              He was playing and he always tends to look on his profile to see who has viewed it. 
              There he saw her. And for him, after meeting her, all the doubts and insecurities 
              melted away, as if they had never even existed. His ‘nevers’ transformed into ‘always’ 
              his ‘not nows’ changed into ‘forever.’
            </p>
            <h4>On September 03, 2021, She Said Yes!</h4>
            <p>
              We're so excited for you to join us as we say "I do" at our destination wedding in July of 2022. See you soon!

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
