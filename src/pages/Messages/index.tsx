import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMessageRefundRequestQuery } from '../../app/features/refund/refundApiSlice';
import { Chat, SEO } from '../../components';
import style from './index.module.scss';

const Messages: React.FC = () => {
  const params = useParams();
  const { data } = useGetMessageRefundRequestQuery(Number(params.id) || 0, {
    pollingInterval: 60000,
  });

  return (
    <>
      <SEO title={`Refund Messages`} description="Refund Messages page" />
      <div className={style.messages}>
        {data && (
          <Chat
            sender_id={3}
            data={data}
            isAction={
              data.refund_request_status[0].rejected_by_admin_at &&
              data.refund_request_status[0].accepted_by_buyer_at &&
              data.refund_request_status[0].rejected_by_buyer_at
                ? true
                : false
            }
          />
        )}
      </div>
    </>
  );
};

export default Messages;
