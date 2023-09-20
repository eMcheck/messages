import { useState, createRef } from "react";
import cls from './Create.module.css';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState(['hide']);
    const [formClass, setFormClass] = useState([cls.form]);

    const refUrl = createRef();


    const sendData = (obj) => {
        setFormClass([...formClass, 'hide']);
        setLineClass([cls.out]);

        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        }).then(response => response.json())
            .then(response => {
                if (response.result) {
                    setUrl(`${env.url}/${response.url}`);
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();

        let note = event.target.elements.note.value;

        note = note.trim();
        if (note === '') {
            alert('Заполните поле');
            return false;
        }
        sendData({ 'note': note });
    }

    const classAdd = (arr) => {
        let temp = '';
        arr.map(e => {
            temp += e + ' ';
        });
        return temp;
    }



    const hendlerCopy = () => {
        navigator.clipboard.writeText(url);
        refUrl.current.style.color = `black`;
        setTimeout(() => {
            refUrl.current.style.color = `white`;
        }, 500);
    }

    return (
        <div className={cls.container}>
            <form onSubmit={loadDataFromForm} className={classAdd(formClass)}>
                <label htmlFor="" className={cls.lbl}>Enter a note</label>
                <textarea name="note" id="note" className={cls.txar} autoFocus={true}></textarea>
                <button type="submit" className={cls.btn_form}>Create</button>
            </form>
            <div className={classAdd(lineClass)}>
                <div>
                    <h2 ref={refUrl} className={cls.url}>{url}</h2>
                </div>
                <div className={cls.btn_wrap}>
                    <button onClick={() => window.location.reload()} className={cls.btn_out}>New note</button>
                    <button onClick={hendlerCopy} className={cls.btn_out}>Copy</button>
                </div>
            </div>
        </div>
    );
}

export default Create;
