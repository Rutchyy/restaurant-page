export function makeHero() {
    const hero = document.createElement("div")
    const left = document.createElement("div")

    // Hero Text
    const mainText = document.createElement("h1")
    mainText.textContent = "BUGATTI CAFE"
    left.id = "left"
    left.appendChild(mainText)

    // Subtext
    const subText = document.createElement("p")
    subText.textContent = '\"Create the incomparable" Three words form the foundation of Bugatti\'s new corporate identity and corporate design, perfectly encapsulating its raison d\'être.'
    left.appendChild(subText)

    const right = document.createElement("div")
    right.id = "right"

    // Appending both columns
    hero.appendChild(left)
    hero.appendChild(right)

    hero.id = "hero"

    return hero
}

export function makeBody() {
    const body = document.createElement("p")
    body.textContent = "Discover Bugatti Caiffe, a premier destination for coffee enthusiasts nestled in the vibrant heart of Huntington Beach, California. Inspired by the iconic elegance and precision of Bugatti automobiles, Bugatti Caiffe elevates the coffee experience to new heights. Our skilled baristas masterfully craft each drink, utilizing the finest ingredients to deliver flavors that are both sophisticated and captivating. Whether you\'re savoring a traditional espresso or indulging in a creamy latte, every sip at Bugatti Caiffe promises a journey through the rich world of specialty coffee. Join us for a moment of pure delight, where every visit is an invitation to celebrate the art of coffee-making and the joy of discovery."
    body.id = "body"
    return body
}

export function makeOpeningHours() {
    const openingHours = document.createElement("p")
    openingHours.textContent = "Sunday: 8am - 8pm | Monday: 6am - 6pm | Tuesday: 6am - 6pm | Wednesday: 6am - 6pm | Thursday: 6am - 10pm | Friday: 6am - 10pm | Saturday: 8am - 10pm"
    openingHours.id = "opening_hours"
    return openingHours
}