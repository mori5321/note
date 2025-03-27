# Serialzation
outside our bounded context
- message queue
- web request
- and so on...



## Persistence vs. Serialization

## Designing for Serialization
Any kind of domain-specific validation (such as validating integer bounds for an OrderQty or checking that a ProductCode is valid) should be done in the DTO-to-domain-type conversion process,

=> 逆にDomain SpecificでないValidationはDTO Layerでやってもいい。
- 単純なschema checkとか

## DTOs as a Contract Between Bounded Contexts
Bounded Context 間の契約としてのDTO
ただしContext間の密結合を避けたいため、緩い契約にはなる。

=> Catalystは事前条件のチェックをDTO Layerでやっている。(IDの形式)

## Working with Multiple Versions of Serialized Type

https://leanpub.com/esversioning/read

## How to Translate Domain -> DTOs

## Wrapup
- bounded context の外とやりとりするときの中間層としてのDTO
