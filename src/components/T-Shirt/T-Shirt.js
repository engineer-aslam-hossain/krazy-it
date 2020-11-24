import React, { useRef } from 'react';
import useDraggable from './Draggable';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import './T-Shirt.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const TShirt = ({ children }) => {
  let leftPx = 155;

  const left = () => {
    const pic = document.getElementById('pic');
    leftPx = leftPx - 10;
    pic.style.left = `${leftPx}px`;
  };

  const right = () => {
    const pic = document.getElementById('pic');
    leftPx = leftPx + 10;
    pic.style.left = `${leftPx}px`;
  };

  const cardRef = useRef(null);
  useDraggable(cardRef);

  const handleChange = e => {
    const tshirtText = document.getElementById('tshirt').value;
    document.getElementById('pic').innerText = tshirtText;
    document.getElementById('tshirt').value = '';
  };

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3' className='text-dark'>
        Write Your Text
      </Popover.Title>
      <Popover.Content>
        <input id='tshirt' type='text' className='mb-3 text-dark' />
        <button onClick={handleChange} className='btn btn-success mb-3'>
          Submit
        </button>

        <div className='d-flex justify-content-around'>
          <button onClick={left} className='btn btn-primary'>
            left
          </button>
          <button onClick={right} className='btn btn-primary'>
            Right
          </button>
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <section className='tShirt'>
      <Header />
      <div className='d-flex flex-column bd-highlight mb-3 align-items-center'>
        <img
          style={{ width: '30%', height: '30%' }}
          src={
            'https://tse1.mm.bing.net/th?id=OIP.8Mo6M1kYCqDMFy7bxXLuegHaHa&pid=Api&P=0&w=300&h=300'
          }
          alt=''
        />
        <OverlayTrigger trigger='click' placement='top' overlay={popover}>
          <Button style={{ width: '30%', height: '15%' }} variant='warning'>
            Add Text
          </Button>
        </OverlayTrigger>
        <div id='pic' className='pict' ref={cardRef}>
          {children}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TShirt;
