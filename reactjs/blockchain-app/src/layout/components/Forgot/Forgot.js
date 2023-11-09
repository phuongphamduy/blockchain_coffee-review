import React, { useState } from 'react';
import styles from './Forgot.module.scss';

const Forgot = () => {
 const [email, setEmail] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
 };

 return (
    <div className={styles['forgot-container']}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
 );
};

export default Forgot;