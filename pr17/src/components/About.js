import cls from './About.module.css';

function About() {
    return (
        <div className={cls.container}>
            <dir><a href="https://www.instagram.com/emcheck/" target='_blank'><img src="./eMcheck.png" alt="eMcheck" className={cls.img} /></a></dir>
            <dir className={cls.wrapp_about}>
                <h2>Vladyslav Myloserdnyi</h2>
                <p>
                    As part of the <a href="https://www.itgid.info/ua" target="_blanck">ItGid</a> course, a project was implemented to transmit encrypted messages using React technology. The server part was developed by <a href="https://www.itgid.info/ua" target="_blanck">ItGid</a>.
                </p>
            </dir>
        </div>
    );
}

export default About;
