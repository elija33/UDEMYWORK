package Arraylist;

import java.util.ArrayList;
import java.util.Collection;

public class Dome {
    public static void main(String[] args) {
        Collection<Integer> number = new ArrayList<Integer>();
        number.size();
        System.out.println(number);
        number.add(7);
        number.add(8);
        number.add(4);
        number.add(5);
        System.out.println(number);
        for(int num : number){
            System.out.println(num);
        }
        number.remove(5);
        System.out.println(number);
    }
}
