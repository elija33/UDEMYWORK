package ForEach;

import java.util.HashSet;
import java.util.Set;

class Adding{
    int number = 5;
    int num = 10;
    int total = num + number;
    
    public void showNumber(){
        System.out.println(total);
    }
}


public class Dome {
    public static void main(String[] args) {
        Set<Integer> number = new HashSet<>();
        number.add(5);
        number.add(4);
        number.add(3);
        number.add(2);
        number.add(5);
        number.forEach(numb -> System.out.println(numb));
    }
}
