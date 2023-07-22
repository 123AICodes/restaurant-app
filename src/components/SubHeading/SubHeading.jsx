import React from 'react';
import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <div className='' style={{ marginBottom: 'rem' }}>
    <p style={{ color: 'var(--color-golden-alt)', marginBottom: '.5rem', textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>{title}</p>
    <img src={images.spoon} alt='spoon' className="spoon__img" />
  </div>
);

export default SubHeading;
