/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigation } from 'react-router-dom';

const customNavigate = () => {
    const navegate = useNavigation();
  
    
    navegate("/dashboard");

};

export default customNavigate;
