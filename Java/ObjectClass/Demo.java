class Laptop {
    String model;
    int price;

    // public String toString(){
    //     return model + " : " + price;
    // }
}

public class Demo {
    public static void main(String[] args) {
        Laptop newlaptop = new Laptop();
        newlaptop.model = "Mac";
        newlaptop.price = 1000;

        System.out.println(newlaptop.model + " : " + newlaptop.price);
    }
}