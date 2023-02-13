import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md';

import style from './index.module.scss';
import classNames from 'classnames';

const TopupStatus: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const urlSearchParams = new URLSearchParams(location.search?.split('?')[1]);
  const urlSearchParamsObj = Object.fromEntries(urlSearchParams);
  const isSuccess = urlSearchParamsObj.status === 'TXN_PAID';

  useEffect(() => {
    if (window.self === window.top) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div className={style.ts}>
      {isSuccess ? (
        <MdCheckCircleOutline
          size={128}
          className={classNames(style.ts__icon, style.ts__icon__success)}
        />
      ) : (
        <MdOutlineCancel
          size={128}
          className={classNames(style.ts__icon, style.ts__icon__error)}
        />
      )}
      <h2 className={style.ts__title}>
        Top Up {isSuccess ? 'Success' : 'Failed'}
      </h2>
    </div>
  );
};

export default TopupStatus;
