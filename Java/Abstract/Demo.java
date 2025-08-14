package Abstract;

abstract class Car {
    public abstract void drive();

    public void playMusic() {
        System.out.println("play music......");
    }
}

class WagonR extends Car {
    public void drive() {
        System.out.println("Driving..");
    }
}
public class Demo {
    public static void main(String[] args) {
        Car workingcar = new WagonR();
        workingcar.drive();
        workingcar.playMusic();
    }
}
