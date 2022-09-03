import GitHub from '../assets/icons/github.svg';
import Instagram from '../assets/icons/instagram.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Download from '../assets/icons/download.svg';

import Styles from '../styles/components/Profile.module.css';
import { Button } from './Button';

export function Profile() {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <img className={Styles.img} src="https://github.com/JulianaVelasques.png" alt="Profile image" />
        <div className={Styles.profileInfo}>
          <h1>Juliana Velasques</h1>
          <p>Software Engineer</p>
          <div>
            <a href="https://github.com/JulianaVelasques" target="_blank">
              <img src={GitHub} alt="Github icon" />
            </a>
            <a href="https://www.instagram.com/ju.velasquesb/" target="_blank" className={Styles.space}>
              <img src={Instagram} alt="linkedIn icon" />
            </a>
            <a href="https://www.linkedin.com/in/julianavelasquesbalta/" target="_blank" className={Styles.space}>
              <img src={LinkedIn} alt="linkedIn icon" />
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.btn}>
        <Button hasIcon={true} icon={Download} color={'#E02F6B'}>
          Download
        </Button>
        <Button color={'#FFFFFF'}>Contact me</Button>
      </div>
    </div>
  );
}
