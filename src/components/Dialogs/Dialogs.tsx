import React from 'react';
import styleDialogs from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={styleDialogs.container}>
            <div className={styleDialogs.dialogsPerson}>
                <div className={styleDialogs.dialogsItem + ' ' + styleDialogs.active}>Kristina</div>
                <div className={styleDialogs.dialogsItem}>Dima</div>
                <div className={styleDialogs.dialogsItem}>Lina</div>
                <div className={styleDialogs.dialogsItem}>Bob</div>
                <div className={styleDialogs.dialogsItem}>Jan</div>
            </div>
            <div className={styleDialogs.litters}>
                <div className={styleDialogs.message}>
                    Hi!
                </div>
                <div className={styleDialogs.message}>
                    How are you?
                </div>
                <div className={styleDialogs.message}>
                    I'll call you back!
                </div>
            </div>
        </div>
    );
};

export default Dialogs;