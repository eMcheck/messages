import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cls from './Note.module.css';
import env from '../env.json';

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {

        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    } else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }

    }, []);

    const getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поле');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url
    }

    const searchNote = () => {
        window.location.href = env.url
    }

    return (
        <div className={cls.container}>
            <div className={lineClass}>
                <div className={cls.note_wrapp}>
                    <h3>Note:</h3>
                    <p>{noteText}</p>
                    <button onClick={searchNote} className={cls.btn_note}>View another note</button>

                </div>
            </div>

            <div className={errorClass}>
                <div className={cls.note_error}>
                    <h3>Not found</h3>
                    <button onClick={searchNote} className={cls.btn_error}>back</button>
                </div>
            </div>

            <div className={formClass}>
                <form onSubmit={getNote} className={cls.form}>
                    <label htmlFor="url" className={cls.lbl}>Enter note hash</label>
                    <input type="text" name='url' id='url' className={cls.inp} autoFocus={true} />
                    <button type="submit" className={cls.btn_form} >search note</button>
                </form>
            </div>

        </div>
    );
}

export default Note;
