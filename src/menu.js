export function makeMenu() {
    const menu = document.createElement("p")
    menu.setAttribute('style', 'white-space: pre;')
    menu.textContent = `Coffee & Tea\r\n
Hot Coffees\r\n
Espresso - A strong, concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.\r\n
Latte - Espresso combined with steamed milk, topped with a layer of foam.\r\n
Cappuccino - Similar to a latte but with a higher proportion of frothed milk to espresso.\r\n
Americano - Espresso diluted with hot water, creating a less intense coffee flavor.\r\n
Cold Brewed Coffees\r\n
Cold Brew - Coffee steeped for 12-24 hours in cold water, resulting in a smooth, less acidic beverage.\r\n
Iced Latte - Iced version of our classic latte, perfect for those warm days.\r\n
Teas\r\n
Black Tea - Our selection includes English Breakfast, Earl Grey, and Darjeeling.\r\n
Green Tea - Choose from Sencha, Matcha, or Jasmine Green.\r\n
Herbal Teas - Relaxing options like Chamomile, Peppermint, and Rooibos.\r\n
Pastries\r\n
Croissants - Flaky, buttery breakfast favorites.\r\n
Muffins - Variety includes Blueberry, Chocolate Chip, and Banana Nut.\r\n
Danishes - Sweet, flaky pastries filled with fruits, nuts, or cream.\r\n
Bagels - Plain, Everything, or Cinnamon Raisin, served with cream cheese.\r\n
Sandwiches & Salads\r\n
Grilled Cheese - Classic comfort food made with fresh bread and melted cheese.\r\n
Tuna Salad - Fresh tuna mixed with celery, onions, and mayo on whole grain bread.\r\n
Chicken Salad Wrap - Grilled chicken, lettuce, tomato, and mayonnaise wrapped in a flour tortilla.\r\n
Caesar Salad - Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.\r\n
Desserts\r\n
Chocolate Cake - Moist chocolate cake layered with rich frosting.\r\n
Cheese Cake - Creamy cheesecake with a graham cracker crust.\r\n
Ice Cream - Choose from Vanilla, Chocolate, or Strawberry.\r\n
Fresh Fruit Tarts - Seasonal fruit tarts with a flaky pastry base.`
    return menu
}