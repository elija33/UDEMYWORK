package Dynamic;

class A {
    public void show(){
        System.out.println("in A Show");
    }
}

class B extends A {

}

// class C extends A {

// }

public class Dome {
    public static void main(String[] args) {
        B newb = new B();
        newb.show();
    }
    
}
