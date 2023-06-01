<h1>Class Diagram</h1>

```puml
@startuml FOOD ORDERING SYSTEM AT ARKED ANGKASA, UTM

class User {
  -id: int
  -name: string
  -email: string
  -password: string
  +login()
  +logout()
  +searchItems()
  +placeOrder()
  +viewOrderHistory()
}

class Item {
  -id: int
  -name: string
  -description: string
  -price: float
  -availability: boolean
  +checkAvailability()
}

class Order {
  -id: int
  -userId: int
  -items: list<Item>
  -status: string
  -totalPrice: float
  +getTotalPrice()
  +cancelOrder()
  +trackOrderStatus()
}

class Payment {
  -id: int
  -orderId: int
  -amount: float
  -timestamp: datetime
  -status: string
  +makePayment()
  +cancelPayment()
  +updatePaymentStatus()
}

class Administrator {
  -id: int
  -name: string
  -email: string
  -password: string
  +login()
  +logout()
  +addNewItem()
  +updateItemAvailability()
  +viewOrders()
}

class Staff {
  -id: int
  -name: string
  -email: string
  -password: string
  +login()
  +logout()
  +prepareOrder()
 
}

User -> Order
Item -> Order
Order -> Payment
Administrator -> Item
Administrator -> Order
Staff -> Order

@enduml
```
<p align="center">
<img src="https://www.planttext.com/api/plantuml/png/jPJ9Ri8m48RlUGeVMr5U8AeGaQ0K8HQn77eSx85QU8di2GXLVVVQ2L2dLEgfD_-_FSutYzFt18ughTZBV3vWy-LWk1pFHcprjbeFfwnOis8v6GvOCHjDYbNnn3RhQPPn1TwpZKV7FZB6kbBaJ1gAImCQS-R9IREF6ZL8bHfb23rP9nAle-nUceV7oz9MrAmzWkFlOqBj6wDKm77k1Bf67oMUQlagFLbt3kxdbIw6_Kadq7CdIvBMj1YTvE7SJbcem-0Oae2jL9BEETjQgn1C1E3lo0z5ifiIr6Ht25MeslXRofXTpbH8u3aYzw8PcaALJud84gX56wkpHrhV_AOY70n7bPI87F13hLVrfIdW0iuQ3TqXsdWyOGHjAqD9FKXg38owp9a0mYX_nUveEE3bAobVowhAUCV5keSiX9OcLCT1wF2_ZXi8CSDJR48A5lMF3gUJrs8DzBlTlpAM3ajmwHiGgEGHtTK9BFMxxFQQ-SlgTt1JpKm6UQbtrYvls8Zdxzqckidl9hC-6X7-7TaN" height="280" />
</p>
<p>In this diagram, the User class represents a user of the system, who can login, logout, search for items, place orders, and view their order history. 
  The Administrator class represents an administrator of the system, who can login, logout, add new items to the system, update item availability, and view orders.
  The Item class represents a food item that can be ordered, with a name, description, price, and availability status. 
  The Order class represents an order placed by a user, containing a list of items, a status (e.g. pending, cancelled), and a total price. 
  The Payment class represents a payment made for an order, containing the order ID, amount, timestamp, and status.
  The Staff class represents an operational staff member, who can login, logout and prepare orders.</p>
