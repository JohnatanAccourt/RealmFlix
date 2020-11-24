import React, { useEffect, useState } from 'react';
import '../styles/mainSection.css';
import yoda from '../images/bbyoda.jpg';

import PlayArrow from '@material-ui/icons/PlayArrow';
import Add from '@material-ui/icons/Add';

import YouTube from 'react-youtube';


export default function MainSection(){
    const [banner, setBanner] = useState(true);

    const opts = {
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1
        },
      };

    useEffect(() => {
        setTimeout(() => {
            setBanner(false);
        }, 1500)
    }, [])

    function onEndVideo(){
        setBanner(true);
    }

    return (
        <section className="MainSection__container">
            {banner ? 
                <img className="MainSection__coverIMG" src={yoda} alt="img cover"/>
                :
                <YouTube 
                    videoId="aOC8E8z_ifw" 
                    opts={opts} 
                    onEnd={() => onEndVideo()} 
                    className="MainSection__coverIMG" 
                    containerClassName="MainSection__coverIMG"
                />
            }
            <div className="MainSection__wrapperInformations">
                <h1 className="MainSection__movieTitle">Mandalorian</h1>
                <div className="MainSection__innerOptions">
                    <button className="MainSection__watchMovie">
                        <PlayArrow style={{color: "#E3D9FF", fontSize: 30 }}/>
                        <p className="MainSection__btnText">Assistir</p>
                    </button>
                    <button className="MainSection__listMovie">
                        <Add style={{color: "#E3D9FF", fontSize: 30 }}/>
                        <p className="MainSection__btnText">Minha Lista</p>
                    </button>

                </div>
                <h5 className="MainSection__movieDesc">
                    Um atirador solitário explora os confins da galáxia, longe da autoridade da Nova República.
                </h5>
                <div className="MainSection__innerInformations">
                    <div className="MainSection__classification">
                        <div>
                            <p>15</p>
                        </div>
                        <p>Para maiores de 15 anos</p>
                    </div>

                    <div className="MainSection__watched">
                        <div>
                            <p>100k</p>
                        </div>
                        <p>Mais de 100 mil assistiram</p>
                    </div>

                    <div className="MainSection__watched">
                        <div>
                            <p>+10k</p>
                        </div>
                        <p>Estão assistindo agora</p>
                    </div>
                </div>
            </div>
        </section>
    )
}