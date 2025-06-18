import React, { useState } from 'react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  weeklyPrice: string;
  features: string[];
  isActive?: boolean;
}

interface SubscriptionSectionProps {
  currentPlan?: string;
  planCost?: string;
  renewalDate?: string;
  onChangePlan?: (planId: string) => void;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'rookie',
    name: 'Rookie Plan',
    price: 'FREE',
    weeklyPrice: 'Rp0 / Week',
    features: [
      'Limited product access',
      '3x Skin Analysis/month',
      'No Outfit Simulation'
    ]
  },
  {
    id: 'muse',
    name: 'Muse Plan',
    price: 'Rp99.000',
    weeklyPrice: 'Rp24.750 / Week',
    features: [
      'Full catalog access',
      'Daily Outfit Simulations',
      'AI-based product tips'
    ]
  },
  {
    id: 'iconic',
    name: 'Iconic Plan',
    price: 'Rp169.000',
    weeklyPrice: 'Rp42.250 / Week',
    features: [
      '2 expert consults/month',
      'Body Fit & Lookbook',
      'Member deals'
    ],
    isActive: true
  }
];

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  currentPlan = "Iconic Plan",
  planCost = "Rp169.000",
  renewalDate = "Dec 25, 2025",
  onChangePlan
}) => {
  const [showChangePlan, setShowChangePlan] = useState(false);

  const handleChangePlan = (planId: string) => {
    if (onChangePlan) {
      onChangePlan(planId);
    }
    setShowChangePlan(false);
  };

  const handleChangePlanClick = () => {
    setShowChangePlan(true);
  };

  return (
    <section className="bg-white shadow-[3px_3px_4px_rgba(0,0,0,0.25)] border relative flex min-h-[720px] w-full max-w-[1362px] flex-col items-stretch mt-[45px] pt-[15px] pb-[45px] px-[52px] rounded-[20px] border-[rgba(74,59,48,0.7)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5" aria-label="Subscription information">
      <header className="text-[rgba(74,59,48,1)] text-[40px] font-normal text-center z-0 max-md:max-w-full">
        <h2>Subscription</h2>
      </header>
      
      <button
        onClick={handleChangePlanClick}
        className="absolute z-0 flex w-[200px] max-w-full flex-col text-lg text-[rgba(255,239,214,1)] font-bold h-[50px] right-[52px] top-5 hover:opacity-90 transition-opacity"
        aria-label="Change subscription plan"
      >
        <div className="bg-[rgba(74,59,48,1)] border flex items-stretch gap-[17px] px-[18px] py-2.5 rounded-[30px] border-[rgba(74,59,48,1)] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90016ebf48e46e352c8b583eeabc8c5f15ce7528?placeholderIfAbsent=true"
            alt=""
            className="aspect-[1] object-contain w-[30px] shrink-0 rounded-[20px]"
          />
          <span className="grow shrink w-[111px]">Change Plan</span>
        </div>
      </button>
      
      <div className="z-0 flex w-full gap-[40px_50px] justify-center flex-wrap mt-[30px] max-md:max-w-full">
        <article className="min-w-60 w-[300px]">
          <div className="bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] border flex items-stretch gap-[25px] pl-[15px] pr-[30px] py-[15px] rounded-[40px] border-[rgba(0,0,0,0.2)] border-solid max-md:pr-5">
            <div className="bg-[rgba(238,238,238,1)] flex w-[60px] shrink-0 h-[60px] rounded-[50%]" aria-hidden="true" />
            <div className="flex flex-col items-stretch mt-[5px]">
              <span className="text-[#4a3b30] text-[15px] font-medium">Subscription</span>
              <span className="text-[rgba(74,59,48,1)] text-xl font-bold">{currentPlan}</span>
            </div>
          </div>
        </article>
        
        <article className="min-w-60 w-[300px]">
          <div className="bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] border flex items-stretch gap-[25px] pl-[15px] pr-[30px] py-[15px] rounded-[40px] border-[rgba(0,0,0,0.2)] border-solid max-md:pr-5">
            <div className="bg-[rgba(238,238,238,1)] flex w-[60px] shrink-0 h-[60px] rounded-[50%]" aria-hidden="true" />
            <div className="flex flex-col items-stretch mt-[5px]">
              <span className="text-[#4a3b30] text-[15px] font-medium">Plan Cost</span>
              <span className="text-[rgba(74,59,48,1)] text-xl font-bold">{planCost}</span>
            </div>
          </div>
        </article>
        
        <article className="min-w-60 w-[300px]">
          <div className="bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.25)] border flex items-stretch gap-5 justify-between pl-[15px] pr-[30px] py-[15px] rounded-[40px] border-[rgba(0,0,0,0.2)] border-solid max-md:pr-5">
            <div className="bg-[rgba(238,238,238,1)] flex w-[60px] shrink-0 h-[60px] rounded-[50%]" aria-hidden="true" />
            <div className="flex flex-col items-stretch mt-[5px]">
              <span className="text-[#4a3b30] text-[15px] font-medium">Renewal Date</span>
              <span className="text-[rgba(74,59,48,1)] text-xl font-bold">{renewalDate}</span>
            </div>
          </div>
        </article>
      </div>
      
      <div className="z-0 flex min-h-[450px] w-full items-center gap-10 text-[rgba(74,59,48,1)] font-normal justify-center flex-wrap mt-[30px] max-md:max-w-full">
        {subscriptionPlans.map((plan) => (
          <article
            key={plan.id}
            className="bg-white shadow-[3px_3px_4px_rgba(0,0,0,0.25)] border self-stretch flex min-w-60 flex-col items-stretch w-[330px] my-auto pt-5 pb-8 px-[15px] rounded-[20px] border-[rgba(74,59,48,0.7)] border-solid"
          >
            <h3 className="text-3xl ml-[29px] max-md:ml-2.5">{plan.name}</h3>
            <div className="text-[35px] font-extrabold ml-[27px] max-md:ml-2.5">{plan.price}</div>
            <div className="text-[#4a3b30] text-[22px] ml-[29px] max-md:ml-2.5">{plan.weeklyPrice}</div>
            <hr className="border self-center w-[250px] shrink-0 h-px mt-7 border-[rgba(0,0,0,0.3)] border-solid" />
            <ul className="self-center w-[236px] max-w-full text-lg mt-[29px]" role="list">
              {plan.features.map((feature, index) => (
                <li key={index} className="w-full mt-[5px] px-6 py-0.5 max-md:px-5">
                  {feature}
                </li>
              ))}
            </ul>
            {plan.isActive ? (
              <div className="bg-[rgba(231,231,231,1)] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] border text-xl font-bold mt-[39px] px-[33px] py-5 rounded-[40px] border-[rgba(0,0,0,0.2)] border-solid max-md:px-5 text-center">
                My Subscription
              </div>
            ) : (
              <button
                onClick={() => handleChangePlan(plan.id)}
                className="bg-[rgba(241,225,199,1)] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] border text-xl font-bold mt-[39px] px-[33px] py-5 rounded-[40px] border-[rgba(0,0,0,0.2)] border-solid max-md:px-5 hover:bg-[rgba(241,225,199,0.8)] transition-colors"
                aria-label={`Change to ${plan.name}`}
              >
                Change Subscription
              </button>
            )}
          </article>
        ))}
      </div>
      
      {showChangePlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="change-plan-title">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 id="change-plan-title" className="text-xl font-bold mb-4 text-[rgba(74,59,48,1)]">Confirm Plan Change</h3>
            <p className="mb-4 text-gray-600">Are you sure you want to change your subscription plan?</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowChangePlan(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleChangePlan('new-plan')}
                className="flex-1 px-4 py-2 bg-[rgba(116,75,40,1)] text-white rounded hover:bg-[rgba(116,75,40,0.9)] transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
