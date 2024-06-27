import coffeePizza from "@/assets/images/foodPizza.png";
import limeVodka from "@/assets/images/limeVodka.png";
import ginCucumber from "@/assets/images/ginCucumber.png";
import vaniillaCoffee from "@/assets/images/vanillaCoffee.png";
import mtn from "@/assets/images/mtn.png";
import airtel from "@/assets/images/airtel.png";
import cash from "@/assets/images/cash.png";

interface StockDataType {
  image: any;
  titleLocation: string;
  stockContent: string;
}
interface DrinksDataType {
  image: any;
  drink: string;
  place: string;
}
interface PaymentDataType {
  image: any;
  paymentType: string;
}
export const stockData: StockDataType[] = [
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
  {
    image: coffeePizza,
    titleLocation: "Choose Kigali",
    stockContent: "World, African, Pizzeria,Coffee",
  },
];

export const drinksData: DrinksDataType[] = [
  {
    image: limeVodka,
    drink: "Kaffir,Lime Vodka, Lemongrass, Ginger, Citrus",
    place: "Tom Yummy - 12.5",
  },
  {
    image: ginCucumber,
    drink: "Gin,Grenadine, Citrus, Cucumber",
    place: "Singapore sling - 12.5",
  },
  {
    image: vaniillaCoffee,
    drink: "Vanilla,Coffee and Chocolate with hints of Orange",
    place: "White Russian - 12.5",
  },
];

export const paymentData: PaymentDataType[] = [
  {
    image: mtn,
    paymentType: "MTN Mobile Money",
  },
  {
    image: airtel,
    paymentType: "Airtel Money",
  },
  {
    image: cash,
    paymentType: "Cash",
  },
];
