import cls from './Main.module.css';
import env from '../env.json';

function Main() {
    return (
        <div className={cls.container}>
            <div>
                <button className={cls.btn} onClick={() => { window.location.href = env.lh + '/create' }}><a href="/create" className={cls.btn_a}>сreate note</a></button>
            </div>
            <div>
                <button className={cls.btn} onClick={() => { window.location.href = env.lh + '/note' }}><a href="/note" className={cls.btn_a}>view note</a></button>
            </div>
        </div >
    );
}

export default Main;
