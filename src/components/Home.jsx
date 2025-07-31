import React from 'react'
// import profileIcon from '../images/logo.png';
import profileIcon from '/images/profile.svg';


function Home() {
    return (
        <div className="home-container w-full py-16 flex items-center justify-center">
            <div className='home-content w-[60%] flex flex-col gap-10'>

                <div className='home-top-content flex items-center justify-center'>
                    <p className='intro-name text-2xl'>Hello! I Am
                        <span className='text-textPurple'> Ibrahim</span></p>
                </div>

                <div className='home-bottom-content flex items-center justify-around gap-[100px]'>
                    <div className='profile-img w-[20%]' >
                        <img src={profileIcon} alt="Icon" className='w-full h-full object-contain'/>
                    </div>
                    <div className='intro-content w-[40%]'>
                        <p>A Designer who <br /><span className='text-large'>Judges a book
                            by its <span className='text-textPurple'>cover</span> ...</span></p>
                        <p>Because if the cover does not impress you what else can?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home