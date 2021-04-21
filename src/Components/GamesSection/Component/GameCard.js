import React, {useState} from 'react';
import './gamecard.scss'
import {Modal, Button} from '@material-ui/core';
import GameDetails from './GameDetails';

export default function GameCard({name, image, id, genres, ss, rating, platforms, released}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
  
    const handleClose = () => {
        setOpen(false);
      };

    const body = (
        <div className="modal-r-r">
            <Button id="close-btn-m" variant="contained" color="secondary" onClick={handleClose}>Close</Button>
            <GameDetails name={name} image={image} id={id} genres={genres} ss={ss} rating={rating} platforms={platforms} released={released}/>
        </div>
    )

    return(
        <div className="game-card">
            <div className="game-image">
                <img src={image} alt="bacDrop" onClick={handleOpen} />
            </div>
            <div className="game-title">
                {name}
            </div>
            <Modal
                id="game-modal-id"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
    )
}
