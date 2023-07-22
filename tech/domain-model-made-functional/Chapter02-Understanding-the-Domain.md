# Chapter2 
Understanding the Domain

- Take one particular workflow, and try to understand it deeply
- careful listening is a key.
    - Don't impose your own mental model on the domain.

## Interview with a Domain Expert

Command/Events Approach
Pros: Can do it with a series of short interview (rather than 1 day workshop) because Domain Expert is busy.

1st Step: Focu only on the inputs and outputs of the workflow. 

Example Question
"What information do you need to start this process?"

押し付けたらいかんという実例
「fancyなプロダクトページをコチコチクリックしてたら遅いわ」「ユーザーはすでに自分が何が欲しいか理解しているからProduct Codeとamountを書くのよ」

Interview like an anthoropologist(人類学者), with no bias.

> For our customers, speed is less important than consistency

Typical Requirements for B2B application
- predictability
- robust data handling
- audit trail of everything


The output of a workflow should always be the events that it generates, the things that trigger actions in other bounded contexts. In our case, the output of the workflow would be something like an “OrderPlaced” event, which is then sent to the shipping and billing contexts. (How the event actually gets to those departments is a discussion for later; it’s not relevant to the design right now.)

Wlaschin, Scott. Domain Modeling Made Functional (p.54). Pragmatic Bookshelf. Kindle 版.


## Fighting the Impulse to Do Database-Driven-Design

## Fighting the Impulse to Do Class-Driven Design
OrderBase Class <- Distortion of the domain. 


While requirements  gathering phase. 
- We should forget everything about technical things. 
- Do not impose our own technical ideas on the domain.


## Documenting the Domain
Bounded context: Order-Taking

Workflow: "Place Order"
    triggered by:
        "Order form received" event (when Quote is not checked)
    primary input:
        An order form
    other input:
        Product Catalog
    output events:
        "Order Placed  Event"
    side-effects:
        An acknowledgement is sent to the customer, along with the placed order.


data UnvalidatedOrder =
    UnvalidatedCustomerInfo
    AND UnvalidatedShippingAddress
    AND UnvalidatedBillingAddress
    AND UnvalidatedOrderLine[]

data UnvalidatedOrderLine =
    UnvalidatedProductCode
    AND UnvalidatedOrderQuantity

data ValidatedOrder =
    ValidatedCustomerInfo
    AND ValidatedShippingAddress
    AND ValidatedBillingAddress
    AND ValidatedOrderLine[]

data PricedOrder = 
    ValidatedCustomerInfo
    AND ValidatedShippingAddress
    AND ValidatedBillingAddress
    AND PricedOrderLine[]
    AND AmountToBill

data PricedOrderLine
    = ValidatedOrderLine
    AND LinePrice

data PlacedOrderAcknowledgement =
    PricedOrder
    AND AcknowledgementLetter



    
data ValidatedOrderLine =
    ValidatedProductCode
    AND ValidatedOrderQuantity

data OrderLine =
    Product
    AND Quantity
    AND PRICE

data CustomerInfo = ???
data BillingAddress = ???

data WidgetCode = string starting with "W" then 4 digits
data GizmoCode string starting with "G" then 3 digits
data ProductCode = WidgetCode OR GizmoCode

data OrderQuantity = UnitQuantity OR KilogramQuantity
data UnitQuantity = integer between 1 and 1000
data KilogramQuantity decimal between 0.05 and 100.00


## Diving Deeper Into the Order-Taking Workflow
Order is more imporatant than Quote. Because order makes money, quote makes no money.

- incoming order forms
- incoming quotes 
- invalid order forms


detect "Importance of autonomy"

Floatという言葉すらユビキタス言語でなければ使ってはいけない。← 普通に会話でつかってるので省きたい。

