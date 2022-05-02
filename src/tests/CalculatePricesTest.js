export default function CalculatePrice(distance, rate) {
    const pricePerDay = 1000;
    const priceMultiplier = 1.1
    const allowedDistancePerDay = 800;
    const neededDays = () => {
        let overallDistance = distance
        var days = 0
        for (let i = 0; overallDistance > 0; i++) {
            overallDistance = overallDistance - allowedDistancePerDay
            days ++
        }
        return(days)
    }
    return distance * rate * priceMultiplier + neededDays() * pricePerDay
}
/*
ilość km * koszt kilometra
stały mnożnik 110% sumy 
założenie że dziennie można przejechać 800km i cena za dzień to 1000. Jeżeli będziemy mieli 2000 km do przejechania to potrzebujemy 3 dni na to itp.
*/
