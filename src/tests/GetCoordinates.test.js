import GetCoordinates from "../APIs/GetCoordinates";

describe('Testing GetCoordinates', () => {
    
    const coordinates = GetCoordinates("Zielona Gora Poznanska 10");
    const shouldBe = [51.9632887,15.5284018]
    expect(coordinates.toBe(shouldBe));


});