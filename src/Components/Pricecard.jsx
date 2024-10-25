import './Pricecard.css'
function PriceCard(){
    const subscriptionplans =[
        {
        tier:"Free",
        price:"$0/month",
        user: "single user",
        Storage: "50GB",
        features:["Unlimited Public Projects","Commity Access","Unlimited Private Pojects","Dedicated phone support","Free subdomain","Monthly Status Reports"]
    },
    {
        tier:"PLUS",
        price:"$9/month",
        user: "5 users",
        Storage: "50GB",
        features:["Unlimited Public Projects","Commity Access","Unlimited Private Pojects","Dedicated phone support","Free subdomain","Monthly Status Reports"]
    },
    {
        tier:"Pro",
        price:"$49/month",
        user: "Unlimited users",
        Storage: "50GB",
        features:["Unlimited Public Projects","Commity Access","Unlimited Private Pojects","Dedicated phone support","Free subdomain","Monthly Status Reports"]
    }
]
    return(
        
        <div className="container">
            {
                subscriptionplans.map((plan)=>{ 
               return(
                <>
                <div className="subscription-container">
                    <h4>{plan.tier}</h4>
                    <h2>{plan.price}</h2>
                    <p>{plan.user}</p>
                    <p>{plan.Storage}</p>
                    <div>
                        {plan.features.map((features, index) =>(
                            <p key={index}>{features}</p>
                        ))}
                    </div>
                    <button>Button</button>
                            </div>
                </>
               )
                })
            }
        </div>
    )
         
}
export default PriceCard;