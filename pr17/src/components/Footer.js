import cls from './Footer.module.css';

function Footer() {
    return (
        <div className={cls.container}>
            The project was developed according to the <a href="https://www.itgid.info/ua" target="_blanck">ItGid</a> course. Student Vladyslav Myloserdnyi.
        </div>
    );
}

export default Footer;
