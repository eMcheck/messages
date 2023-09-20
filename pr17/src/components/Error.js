import cls from './Error.module.css';

function Error() {
    return (
        <div className={cls.container}>
            <div className={cls.form}>
                <div className={cls.form_err}>
                    <h3>ERROR</h3>
                    <h1>404</h1>
                </div>
                <div className={cls.form_page}>
                    <h3>Page not found</h3>
                </div>
            </div>
        </div>
    );
}

export default Error;
