import Style from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <img src="https://github.com/JulianaVelasques.png" alt="Profile image" />
        <div>
          <h1>Juliana Velasques</h1>
          <p>Software Engineer</p>
          <div>
            <a href="">F</a>
            <a href="">T</a>
            <a href="">I</a>
          </div>
        </div>
      </div>
    </div>
  );
}
