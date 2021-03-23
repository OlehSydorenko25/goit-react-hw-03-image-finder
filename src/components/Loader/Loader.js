import React from 'react';
import Loader from "react-loader-spinner";
import styles from './Loder.module.css'


const Spiner = () => {
  return (
    <div className={styles.Loader}>
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
      </div>
  );
}
 
export default Spiner;