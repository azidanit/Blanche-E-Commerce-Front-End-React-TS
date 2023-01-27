import { Steps } from 'antd';
import React, { useState } from 'react';
import { Card } from '../../../atoms';
import FirstStep from './FisrtStep';
import style from './index.module.scss';
import SecondStep from './SecondStep';

const CardMerchantRegistration: React.FC = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <Card className={style.card__merchant__registration}>
      <h6>Merchant Register</h6>
      <Steps
        direction="vertical"
        size="default"
        current={step}
        items={[
          {
            title: 'Input Store Name and Domain',
            description: <FirstStep step={step} handleNext={handleNext} />,
          },
          {
            title: 'Set Store Address',
            description: (
              <SecondStep
                step={step}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            ),
          },
        ]}
      />
    </Card>
  );
};

export default CardMerchantRegistration;
