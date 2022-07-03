import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <img 
            className='footer_albumLogo'
            src='https://cdn.shopify.com/s/files/1/0013/2802/1548/products/Maneskin---Beggin-Ableton-Remake_580x.png?v=1627671637'
            alt=''/>
            <div className='footer_songInfo'>
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
        </div>
        <div className='footer_center'>
            <ShuffleIcon className='footer_green'/>
            <SkipNextIcon className='footer_icon'/>
            <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
            <SkipPreviousIcon className='footer_icon'/>
            <RepeatIcon className='footer_green'/>
        </div>
        <div className='footer_right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs >
                    <Slider/>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer