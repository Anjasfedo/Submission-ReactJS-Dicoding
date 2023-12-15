import React, { useEffect, useState } from 'react'
import { getInitialData } from "./utils";

const NoteApp = () => {
  return (
    <>
        <div className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input type="text" placeholder='Cari catatan ...' />
            </div>
        </div>

        <div className="note-app__body">
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form action="">
                    <p className="note-input__title__char-limit">Sisa karakter: </p>
                    <input type="text" className="note-input__title" placeholder='Ini adalah judul ...' />
                    <textarea rows="5" className="note-input__body" placeholder='Tuliskan catatanmu di sini' />
                    <button>Buat</button>
                </form>
                </div>
                <h2>Catatan aktif</h2>
                <div className="notes-list">
                    <div className="note-item">
                        <div className="note-item__content">
                            <h3 className="note-item__title">a</h3>
                            <p className="note-item__date">ab</p>
                            <p className="note-item__body">abc</p>
                        </div>
                        <div className="note-item__action">
                            <button className="note-item__delete-button">Hapus</button>
                            <button className="note-item__archive-button">Arsipkan</button>
                        </div>
                    </div>
                </div>

                <h2>Arsipkan</h2>
                <p className='notes-list__empty-message'>Tidak ada catatan</p>
            
        </div>
    </>
  )
}

export default NoteApp